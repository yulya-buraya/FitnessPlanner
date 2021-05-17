import React, { useState } from "react"
import "../../../styles/training.css"
import { AddWorkoutDaysForm } from "../../forms/AddWorkoutDaysForm";
import { AddWorkoutForm } from "../../forms/AddWorkoutForm";

export const SubmenuContentWorkout = ({setWorkouts}) => {
    const [isModalFormActive, setModalFormActive] = useState(null)

    return (
        <div className="submenu-exercise">
            <button className="btn-create"
                    id="addExercise"
                    onClick={() => {
                        setModalFormActive(<AddWorkoutForm setModalFormActive={setModalFormActive}  setWorkouts={setWorkouts}/>)
                    }}>
                СОЗДАТЬ
            </button>
            <div className="search-input-block">
                <input type="text" placeholder="Искать здесь..."/>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            {isModalFormActive}
 
        </div>
    );
}