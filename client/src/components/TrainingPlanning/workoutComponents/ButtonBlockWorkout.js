import React from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/training.css"
import { DeleteUserWorkoutForm } from "../../forms/DeleteUserWorkoutForm"
import { ConfirmForAddWorkout } from "../../forms/ConfirmForAddWorkout"



export const ButtonBlockWorkout = ({workout, setForm}) => {

   
    const showDeleteForm = (workout) => {
        setForm(<DeleteUserWorkoutForm  setForm={setForm} workout={workout}  />)
    }
    const showConfirmAddForm = (workout) => {
        setForm(<ConfirmForAddWorkout  setForm={setForm} workout={workout}  />)
    }
    
    if(window.location.pathname.includes("/custom_workouts")){
        return (
            <div className="btn-submenu-workout">
                <NavLink className="submenu-workout-btn"
                    to={`/custom_workouts`} >
                    <button className="submenu-workout-btn"
                        id="backBtn">
                      Вернуться назад
                            </button>
                </NavLink>
                <NavLink className="submenu-workout-btn"
                    to={`#`} >
                    <button className="submenu-workout-delete-btn"
                        id="deleteMyTraining"
                        onClick={()=>{showDeleteForm(workout)}}>
                         Удалить из моих тренировок
                    </button>
                </NavLink>
             </div>
    
        );
    }
    
    else if(window.location.pathname.includes("/workouts")){
        return (
            <div className="btn-submenu-workout">
                <NavLink className="submenu-workout-btn"
                    to={`/workouts`} >
                    <button className="submenu-workout-btn"
                        id="backBtn">
                      Вернуться назад
                            </button>
                </NavLink>
                <NavLink className="submenu-workout-btn"
                    to={`#`} >
                    <button className="submenu-workout-btn"
                        id="addMyTraining"
                        onClick={()=>{showConfirmAddForm(workout)}}>
                         Добавить в мои тренировки
                    </button>
                </NavLink>
                
            </div>
    
        );
    }

}