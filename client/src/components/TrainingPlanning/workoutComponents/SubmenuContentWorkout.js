import React, { useEffect, useRef, useState } from "react"
import "../../../styles/training.css"
import { AddWorkoutForm } from "../../forms/AddWorkoutForm";

function filterWorkouts(value, workouts) {
    return workouts.filter(workout => workout.name.includes(value));
}

export const SubmenuContentWorkout = ({ workouts, setWorkouts }) => {
    const [isModalFormActive, setModalFormActive] = useState(null)
    const buffer = useRef({ settled: false, data: null });
    const searchInput = useRef(null);

    const searchWorkout = (e) => {
        let value = searchInput.current.value;

        if (value == '') {
            return setWorkouts(buffer.current.data);
        }

        let findExercises = filterWorkouts(value, workouts);
        setWorkouts(findExercises)
    };

    useEffect(() => {
        if (!buffer.current.settled) {
            buffer.current = {
                data: workouts,
                settled: workouts.length ? true : false
            };
        }
    }, [workouts]);

    return (
        <div className="submenu-exercise">
            <button className="btn-create"
                    id="addExercise"
                    onClick={() => {
                        setModalFormActive(
                            <AddWorkoutForm
                                setModalFormActive={setModalFormActive}
                                setWorkouts={setWorkouts}
                            />
                        )
                    }}>
                СОЗДАТЬ
            </button>
            <div className="search-input-block">
                <input
                    ref={searchInput}
                    type="text"
                    placeholder="Искать здесь..."
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) searchWorkout();
                    }}
                />
                <button
                    type="submit"
                    onClick={() => searchWorkout()}
                >
                    <i className="fa fa-search"></i>
                </button>
            </div>
            {isModalFormActive}

        </div>
    );
}