import React from "react"
import "../../../styles/training.css"
import { WorkoutItemBlock } from "./WorkoutItemBlock"

export const WorkoutListBlock = ({setWorkouts, workouts}) => {
    if (!workouts.length) {
        return (
            <div className="not-foung-block">
            <img className="not-found-icons" src="/image/not-found.jpg" />
            <p className="text-align-center">Программ тренировок не найдено!</p> 
            </div>
        )
    }
    return (
        <div className="list-workout">
            {workouts.map((workout) => {
                return <WorkoutItemBlock workout={workout} setWorkouts={setWorkouts} />
            })}
        </div>
    );
}