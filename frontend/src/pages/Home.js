import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {
    // const [workouts, setWorkouts] = useState(null)
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkout = async() => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok) {
                    // setWorkouts(json)
                    dispatch({type:'SET_WORKOUTS',payload: json})
            }
            
        }
        fetchWorkout();
    }, [])

    return(
        <div className="home">
            {/* <h2>Home</h2> */}
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails workout={workout} key={workout._id}  />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}
export default Home;