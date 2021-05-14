import React from "react"
import "../../../styles/training.css"

export const WorkoutItemBlock = () => {
    return (
        <div className="workout-item">
            <div className="workout-image">
                <img src="/image/loseWeight.jpg" />
            </div>
            <div className="short-info-workout">
                <p className="text-style-for-name-training">План занятий для похудения</p>
                <table className="table-short-info-workout">
                    <tbody>
                        <tr>
                            <td ><img className="icon-table-workout" src='/image/icon-clock.svg'/></td>
                            <td ><img className="icon-table-workout" src='/image/icon-calendar.svg'/></td>
                        </tr>
                        <tr className="value-workout-tr">
                            <td>30 - 40 мин</td>
                            <td>28 дневная</td>
                        </tr>
                        <tr>
                            <td>в день</td>
                            <td>программа</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-workout"><span className="text-subtitle-workout">Инвентарь: </span> Коврик для фитнеса </p>
                <p className="text-workout"><span className="text-subtitle-workout">Тип: </span>Похудение </p>
            </div>
        </div>
    );
}