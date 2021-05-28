import React from "react"
import "../../../styles/training.css"

export const ShortInfoWorkout = ({ workout, setWorkout }) => {
    return (
        <div className="short-info-program">
            <div className="header-short-workout-form">{workout.name}</div>
            <br/>
            <hr className="hr-short-workout-block"/>
            <table className="table-info-about-workout">
                <tbody>
                <tr>
                    <th>Цель:</th>
                    <th>Место проведения:</th>
                </tr>
                <tr className="value-workout-tr">
                    <td>{workout.purpose}</td>
                    <td>{workout.place}</td>
                </tr>
                <tr>
                    <th>Уровень подготовки:</th>
                    <th>Инвентарь:</th>
                </tr>
                <tr className="value-workout-tr">
                    <td>{workout.level}</td>
                    <td>{workout.inventory}</td>
                </tr>
                <tr>
                    <th>Время тренировки:</th>
                    <th>Длительность цикла</th>
                </tr>
                <tr className="value-workout-tr">
                    <td>{workout.duration}</td>
                    <td>{workout.count} дней</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}