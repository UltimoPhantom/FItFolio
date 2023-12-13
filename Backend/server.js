require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workout')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// routes
// app.get('/', (req,res) => {
//     res.json({mssg: "Welcome to the app"})
// })
app.use('/api/workouts',workoutRoutes);

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to db!");
        })
    })
    .catch((err) => {
        console.log(err);
    })

