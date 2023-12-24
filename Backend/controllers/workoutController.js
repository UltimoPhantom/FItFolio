const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//Get All
const getWorkouts = async (req, res) => {

    const user_id = req.user._id

    const workouts = await Workout.find({ user_id }).sort({createdAt: -1}) 

    res.status(200).json(workouts)
}

//Get one
const getWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }   const workout = await Workout.findById(id)
    
    if(!workout) {
        return res.status(404).json({error: "No such workout!"})
    }

    res.status(200).json(workout)
 }


//Post one
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    //adding doc to db
    try {
        const user_id = req.user._id
        const workout = await Workout.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } 
    catch (error){
        res.status(400).json({error: error.message})
        // console.log(err);
    }
}

//Update one
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!workout) {
        res.status(404).json({error:"No such workout exist!"})
    }

    res.status(200).json(workout)
}


//Delete one
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        res.status(404).json({error:"No such workout exist!"})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}