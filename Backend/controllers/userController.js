//Login
const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'})
}


//Signup
const signupUser = async (req, res) => {
    res.json({mssg: 'Signup user'})
}

module.exports = { loginUser, signupUser }