import React from "react"
import "../../styles/training.css"
import { ButtonSubmenuBlock } from "./workoutComponents/ButtonSubmenuBlock"
import { FilterWorkoutBlock } from "./workoutComponents/FilterWorkoutBlock"
import { WorkoutListBlock } from "./workoutComponents/WorkoutListBlock"

export const WorkoutPage = () => {
    return (
        <div className="training-content">
            <div className="training-submenu">
                <ButtonSubmenuBlock />
                <FilterWorkoutBlock />
            </div>
            <div className="header-for-table">ПРОГРАММЫ ТРЕНИРОВОК</div>
            <br />
                 
               <WorkoutListBlock/>        
         
        </div>
    );
}