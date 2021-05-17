import React from "react"
import "../../../styles/training.css"
import { ActionButtonBlock } from "./ActionButtonBlockExercise"
export const ExerciseItemBlock = ({exercise, setExercises, role}) => {
    return (
        <div className="exercise-item" key={exercise._id}>
               <iframe className="exercise-video" src={exercise.link}
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
                title="YouTube video player">
            </iframe>
       
            <div className="info-exercise">
                <p className="title-exercise">{exercise.name}</p>
                <hr className="hr-exercise"/>
                <p className="exercise-description"><span className="important-text-exercise"> Инвентарь: </span><span className="value-exercise-field">{exercise.inventory}</span></p>
                <p className="exercise-description"><span className="important-text-exercise"> Основные мышцы: </span> <span className="value-exercise-field">{exercise.muscule} </span> </p>
                <p className="exercise-description"><span className="important-text-exercise"> Сложность выполнения: </span><span className="value-exercise-field">{exercise.level}</span></p>
                </div>
                {role=="admin"?
                      <ActionButtonBlock exercise={exercise} setExercises={setExercises}/>:null}
     
        </div>
    );
}