import React from "react"
import "../../../styles/training.css"
import { ExerciseItemBlock } from "./ExerciseItemBlock"
export const ExerciseListBlock = () => {
    return (
        <div className="list-exercise">
            <ExerciseItemBlock/>
{/*             <div className="not-foung-block">
            <img className="not-found-icons" src="/image/not-found.jpg" />
            <p className="text-align-center">В базе данных нет упражнений!</p> 
            </div> */}
        </div>


    );
}