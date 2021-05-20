import React, { useState, useRef } from "react"
import "../../../styles/training.css"
import { AddExerciseForm } from "../../forms/AddExerciseForm";

export const SubmenuContentExercise = ({ setExercises, exercises }) => {
    const role=JSON.parse(localStorage.getItem("userdata")).role[0]
    const [isModalFormActive, setModalFormActive] = useState(false)
    const searchInput = useRef(null);

    function filterExercises(value, exercises) {
        return exercises.filter(exercise => {
            if (exercise.name.includes(value)) {
                return true;
            }
            return false;
        })
    }
    const searchExercise = (e) => {
        let value = searchInput.current.value;
        let findExercises = filterExercises(value, exercises);

        setExercises(findExercises)
    }


    return (
        <div className="submenu-exercise">
            {(role=="admin")?<button className="btn-create"
                id="addExercise"
                onClick={() => {
                    setModalFormActive(true)
                }}>
                СОЗДАТЬ
            </button>:null}
            <div className="search-input-block">
                <input type="text" placeholder="Искать здесь..." id="searchInput" ref={searchInput}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            searchExercise()
                        }
                    }} />
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
                    setExercises={setExercises} />
            }
        </div>
    );
}