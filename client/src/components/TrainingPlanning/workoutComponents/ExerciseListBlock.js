import React from "react"
import "../../../styles/training.css"
import { ExerciseItemBlock } from "./ExerciseItemBlock"

export const ExerciseListBlock = ({exercises,setExercises}) => {
    if (!exercises.length) {
        return (
            <div className="not-foung-block">
            <img className="not-found-icons" src="/image/not-found.jpg" />
            <p className="text-align-center">В базе данных нет упражнений!</p> 
            </div>
        )
    }
    return (
        <div className="list-exercise">
                {exercises.map((exercise)=>{
                    return   <ExerciseItemBlock exercise={exercise} />
                })}
   

        </div>


    );
}