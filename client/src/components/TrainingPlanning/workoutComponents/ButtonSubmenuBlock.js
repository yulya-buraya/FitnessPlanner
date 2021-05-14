import React from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/training.css"


export const ButtonSubmenuBlock = () => {
    return (
        <div className="btn-submenu-training">
            <NavLink className="submenu-btn"
                to={`/userWorkouts/${123}`} >
                <button className="submenu-btn"
                    id="getTrainings">
                    МОИ ПРОГРАММЫ ТРЕНИРОВОК
                        </button>
            </NavLink>
            <NavLink className="submenu-btn"
                to={`#`} >
                <button className="submenu-btn"
                    id="addTraining">
                    СОЗДАТЬ ПЛАН ТРЕНИРОВОК
                </button>
            </NavLink>
        </div>

    );
}