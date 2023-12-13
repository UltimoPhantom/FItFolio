const express = require("express");
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')

const router = express.Router();

//Get all workouts
router.get('/', getWorkouts)

//Get single workout
router.get('/:id', getWorkout)

//Post a new workout 
router.post('/', createWorkout)

//Delete a new workout 
router.delete('/:id', deleteWorkout)

//Post a new workout 
router.patch('/:id', updateWorkout)


module.exports = router