import React, { useState, useRef, useEffect } from "react"
import "../../../styles/training.css"
import { AddExerciseForm } from "../../forms/AddExerciseForm";

export const SubmenuContentExercise = ({ setExercises, exercises }) => {
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    const [isModalFormActive, setModalFormActive] = useState(false)
    const buffer = useRef({ settled: false, data: null });
    const searchInput = useRef(null);

    function filterExercises(value, exercises) {
        return exercises.filter(exercise => {
            if (exercise.name.includes(value)) {
                return true;
            }
            return false;
        })
    }

    const searchExercise = () => {
        let value = searchInput.current.value;

        if (value == '') {
            return setExercises(buffer.current.data);
        }

        let findExercises = filterExercises(value, exercises);
        setExercises(findExercises)
    }

    useEffect(() => {
        if (!buffer.current.settled) {
            buffer.current = {
                data: exercises,
                settled: exercises.length ? true : false
            };
        }
    }, [exercises]);

    return (
        <div className="submenu-exercise">
            {(role == "admin") ? <button className="btn-create"
                                         id="addExercise"
                                         onClick={() => {
                                             setModalFormActive(true)
                                         }}>
                СОЗДАТЬ
            </button> : null}
            <div className="search-input-block">
                <input
                    type="text"
                    placeholder="Искать здесь..."
                    ref={searchInput}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            searchExercise()
                        }
                    }}/>
                <button type="submit" onClick={searchExercise}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            {}
            {
                isModalFormActive
                && <AddExerciseForm
                    active={isModalFormActive}
                    setActive={setModalFormActive}
                    setExercises={setExercises}/>
            }
        </div>
    );
}