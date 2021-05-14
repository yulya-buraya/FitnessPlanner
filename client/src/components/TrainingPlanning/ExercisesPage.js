import React from "react"
import "../../styles/training.css"
import { ExerciseListBlock } from "./workoutComponents/ExerciseListBlock"
import { SubmenuContent } from "./workoutComponents/SubmenuContent"


export const ExercisesPage = () => {
    return (
        <div className="submenu-content">
         <SubmenuContent/>
         <div className="header-for-table">Упражнения</div>
         <br/> 
         <ExerciseListBlock/>
        </div>


    );
}