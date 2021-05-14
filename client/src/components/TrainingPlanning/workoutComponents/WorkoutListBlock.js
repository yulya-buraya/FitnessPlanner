import React from "react"
import "../../../styles/training.css"
import { WorkoutItemBlock } from "./WorkoutItemBlock"

export const WorkoutListBlock = () => {
    return (
        <div className="list-workout">
            <WorkoutItemBlock />
            <WorkoutItemBlock />
            <WorkoutItemBlock />
            <WorkoutItemBlock />
        </div>


    );
}