import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-details" style={{ color: '#f4f9f9', backgroundColor: '#0e1a18', border: '2px solid #59a7a4', padding: '10px', borderRadius: '8px' }}>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails