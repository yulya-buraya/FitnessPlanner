import React from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/training.css"


export const ButtonBlockWorkout = () => {
    return (
        <div className="btn-submenu-workout">
            <NavLink className="submenu-workout-btn"
                to={`/workout`} >
                <button className="submenu-workout-btn"
                    id="backBtn">
                  Вернуться назад
                        </button>
            </NavLink>
            <NavLink className="submenu-workout-btn"
                to={`/userWorkouts/${123}`} >
                <button className="submenu-workout-btn"
                    id="addMyTraining">
                     Добавить в мои тренировки
                </button>
            </NavLink>
        </div>

    );
}