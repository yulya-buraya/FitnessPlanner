import React from "react"
import "../../../styles/training.css"
import { ActionButtonBlock } from "./ActionButtonBlock"
export const ExerciseItemBlock = () => {
    return (
        <div className="exercise-item">
               <iframe className="exercise-video" src="https://www.youtube.com/embed/-p0PA9Zt8zk"
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
                title="YouTube video player">
            </iframe>
       
            <div className="info-exercise">
                <p className="title-exercise">Гиперэкстензия (наклоны через козла)</p>
                <hr className="hr-exercise"/>
                <p className="exercise-description"><span className="important-text-exercise"> Инвентарь: </span><span className="value-exercise-field">козёл спортивный</span></p>
                <p className="exercise-description"><span className="important-text-exercise"> Основные мышцы: </span> <span className="value-exercise-field">разгибатели спины  </span> </p>
                <p className="exercise-description"><span className="important-text-exercise"> Сложность выполнения: </span><span className="value-exercise-field">средняя</span></p>
                </div>
           <ActionButtonBlock/>
        </div>
    );
}