import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/training.css"
import { AddUserWorkoutForm } from "../../forms/AddUserWorkoutForm";


export const ButtonSubmenuBlock = ({ setModalForm }) => {

    return (
        <div className="btn-submenu-training">
            <NavLink className="submenu-btn"
                     to={`/custom_workouts`}>
                <button className="submenu-btn"
                        id="getTrainings">
                    МОИ ПРОГРАММЫ ТРЕНИРОВОК
                </button>
            </NavLink>
            <button className="submenu-btn"
                    id="addTraining"
                    onClick={() => {
                        setModalForm(<AddUserWorkoutForm setModalFormActive={setModalForm}/>)
                    }}>
                СОЗДАТЬ ПЛАН ТРЕНИРОВОК
            </button>
        </div>

    );
}