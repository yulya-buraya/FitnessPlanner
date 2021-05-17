import React from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/training.css"
import { DayBlockComponent } from "./DayBlockComponent"


export const TrainingCalendar = () => {
    return (
        <div className="training-calendar-block">
            <div className="dayline">
                <div className="dayline-body">

                    <DayBlockComponent />
                    <DayBlockComponent />

                </div>

            </div>
        </div>
    );
}