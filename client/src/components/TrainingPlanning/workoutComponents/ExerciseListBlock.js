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
    const role=JSON.parse(localStorage.getItem("userdata")).role[0]

    return (
        <div className="list-exercise">
                {exercises.map((exercise, index)=>{
                    return   <ExerciseItemBlock exercise={exercise}  setExercises={setExercises} role={role}/>
                })}
   

        </div>


    );
}