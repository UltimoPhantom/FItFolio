import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState(0);
    const [reps, setReps] = useState(0);
    const [error, setError] = useState(null);
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user) {
          setError('You must be logged in!')
          return 
        }
        const workout = { title, load, reps };

        try {
            const response = await fetch('/api/workouts', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            }

            if (response.ok) {
                setTitle('');
                setLoad(0);
                setReps(0);
                setError(null);
                console.log("New Workout Added! ", json);
                dispatch({ type: 'CREATE_WORKOUT', payload: json });
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <form
          className="create"
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#1b2720',
            padding: '10px',
            borderRadius: '8px',
            maxHeight: '400px', // Set the maximum height
            overflowY: 'auto', // Enable vertical scrolling if needed
            marginRight: '20px'
          }}
        >
          <h3 style={{ color: '#e1edec' }}>Add a new Workout</h3>
          <label style={{ color: '#e1edec' }}>Exercise Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            style={{ color: '#1b2720' }}
          />
      
          <label style={{ color: '#e1edec' }}>Load (kg)</label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            style={{ color: '#1b2720' }}
          />
      
          <label style={{ color: '#e1edec' }}>Reps</label>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            style={{ color: '#1b2720' }}
          />
      
          <button style={{ backgroundColor: '#ff3d40', color: '#e1edec' }}>Add Workout</button>
          {error && <div className="error" style={{ color: '#ff3d40' }}>{error}</div>}
        </form>
      );
      
};

export default WorkoutForm;
