const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details" style={{ color: '#f4f9f9', backgroundColor: '#0e1a18', border: '2px solid #59a7a4', padding: '10px', borderRadius: '8px' }}>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails