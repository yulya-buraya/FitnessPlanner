import React from "react"
import "../../styles/training.css"
import { ButtonBlockWorkout } from "./workoutComponents/ButtonBlockWorkout"
import { ShortInfoWorkout } from "./workoutComponents/ShortInfoWorkout"
import { TrainingCalendar } from "./workoutComponents/TrainingCalendar"

export const WorkoutTrainingPage = () => {
    return (
        <div className="training-content">
            <div className="workout-submenu">
            <ButtonBlockWorkout/>
            <ShortInfoWorkout/>    
           </div>
            <div className="header-for-table">ОНЛАЙН КАЛЕНДАРЬ</div>
            <br />
           <TrainingCalendar/>
            </div>
    );
}