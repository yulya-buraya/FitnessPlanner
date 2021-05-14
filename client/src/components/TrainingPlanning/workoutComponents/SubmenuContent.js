import React, { useState } from "react"
import "../../../styles/training.css"
import { AddExerciseForm } from "../../forms/AddExerciseForm";

export const SubmenuContent = ({setExercises}) => {
    const [isModalFormActive, setModalFormActive] = useState(false)

    return (
        <div className="submenu-exercise">
            <button className="btn-create"
                    id="addExercise"
                    onClick={() => {
                        setModalFormActive(true)
                    }}>
                СОЗДАТЬ
            </button>
            <div className="search-input-block">
                <input type="text" placeholder="Искать здесь..."/>
                <button type="submit">
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