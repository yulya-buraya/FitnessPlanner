import React, { useState } from "react"
import "../../../styles/training.css"
import { AddWorkoutForm } from "../../forms/AddWorkoutForm";

export const SubmenuContentUserWorkout = ({setWorkouts}) => {
    return (
        <div className="submenu-exercise">
            <div className="search-input-block">
                <input type="text" placeholder="Искать здесь..."/>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
         </div>
    );
}