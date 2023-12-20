const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

//Static signup methods
userSchema.statics.signup = async (email, password) => {

    const exist = await this.findOne({ email })

    if(exist) {
        throw Error('Email already in use!!')
    }

    const salt = await bcrypt.genSalt(10)
    console.log("Salt value: ",salt)
    
    const hash = await bcrypt.hash(password, salt)
    console.log("Hash value: ",hash)

    const user = await this.create({ email, password: hash })    
    return user
}

module.exports = mongoose.model('User', userSchema)