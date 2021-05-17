import React from "react"
import "../../styles/training.css"
import { ButtonSubmenuBlock } from "./workoutComponents/ButtonSubmenuBlock"
import { FilterWorkoutBlock } from "./workoutComponents/FilterWorkoutBlock"
import { SubmenuContentWorkout } from "./workoutComponents/SubmenuContentWorkout"
import { WorkoutListBlock } from "./workoutComponents/WorkoutListBlock"

export const WorkoutPage = () => {
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    return (
        <div className="training-content">
            {
                role == "user" ?
                    <div className="training-submenu">
                        <ButtonSubmenuBlock />
                        <FilterWorkoutBlock />
                    </div> :
                    <SubmenuContentWorkout />
            }

            <div className="header-for-table">ПРОГРАММЫ ТРЕНИРОВОК</div>
            <br />
            <WorkoutListBlock />
        </div>
    );
}