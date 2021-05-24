import React from "react"
import "../../../styles/training.css"
import { DayBlockComponent } from "./DayBlockComponent"


export const TrainingCalendar = ({ workout, setWorkout }) => {
    return (
        <div className="training-calendar-block">
            <div className="dayline">
                <div className="dayline-body">

                    {workout.days.map((day) => {
                        return <DayBlockComponent  day={day} />
                    })}

                </div>

            </div>
        </div>
    );
}