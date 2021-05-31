import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/training.css"
import { AddUserWorkoutForm } from "../../forms/AddUserWorkoutForm";



export const ButtonSubmenuBlock = () => {
    const [isModalFormActive, setModalFormActive] = useState(null)

    return (
        <div className="btn-submenu-training">
            <NavLink className="submenu-btn"
                to={`/userWorkouts/${123}`} >
                <button className="submenu-btn"
                    id="getTrainings" >
                    МОИ ПРОГРАММЫ ТРЕНИРОВОК
                        </button>
            </NavLink>
                     <button className="submenu-btn"
                    id="addTraining"
                    onClick={() => {
                        setModalFormActive(<AddUserWorkoutForm setModalFormActive={setModalFormActive}/>)
                    }}>
                    СОЗДАТЬ ПЛАН ТРЕНИРОВОК
                </button>
        
            {isModalFormActive}

        </div>

    );
}