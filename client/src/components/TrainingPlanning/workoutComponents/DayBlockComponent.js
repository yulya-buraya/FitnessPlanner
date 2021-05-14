import React from "react"
import "../../../styles/training.css"
import {TrainingBlockComponent} from "./TrainingBlockComponent"

export const DayBlockComponent = () => {
    return (
        <div className="dayline-item">
            <div className="short-description-day">
                <p className="day">ДЕНЬ 1</p>
                <p className="day"> 5 видео | 45 минут</p>
            </div>
            <hr className="hr-workout" />
            <div className="trainings">
                    <TrainingBlockComponent/>
                    <TrainingBlockComponent/>
                    <TrainingBlockComponent/>
            </div>
        </div>

    );
}
