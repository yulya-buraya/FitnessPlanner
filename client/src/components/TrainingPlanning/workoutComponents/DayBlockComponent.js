import React from "react"
import "../../../styles/training.css"
import {TrainingBlockComponent} from "./TrainingBlockComponent"


export const DayBlockComponent = ({day}) => {
    
    return (
        <div className="dayline-item">
            <div className="short-description-day">
                <p className="day">ДЕНЬ {day.number}</p>
                <p className="day"> {day.params}</p>
            </div>
            <hr className="hr-workout" />
            <div className="trainings">
            {day.exercises.length==0?<div className="training-item-relax">
                <img src="/image/relax3.jpg"/>
             </div>:day.exercises.map((exercise) => {
                        return <TrainingBlockComponent exercise={exercise}/>
                    })}
            </div>
        </div>

    );
}
