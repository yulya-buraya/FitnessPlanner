import React from "react"
import "../../../styles/training.css"
import { ActionButtonBlock } from "./ActionButtonBlock";
import { useHistory } from 'react-router-dom'


export const WorkoutItemBlock = ({ workout, setWorkouts, type = 'workouts' }) => {
    const history = useHistory()
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]

    const openWorkout = () => {
        history.push(`/workouts/${workout._id}`)
    }

    if (role == "user") {
        return (
            <div className="workout-item" onClick={() => openWorkout()}>
                <div className="workout-image">
                    <img src={workout.image}/>
                </div>
                <div className="short-info-workout">
                    <p className="text-style-for-name-training">{workout.name}</p>
                    <table className="table-short-info-workout">
                        <tbody>
                        <tr>
                            <td><img className="icon-table-workout" src='/image/icon-clock.svg'/></td>
                            <td><img className="icon-table-workout" src='/image/icon-calendar.svg'/></td>
                        </tr>
                        <tr className="value-workout-tr">
                            <td>{workout.duration}</td>
                            <td>{workout.count}-дневная</td>
                        </tr>
                        <tr>
                            <td>в день</td>
                            <td>программа</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="text-workout"><span
                        className="text-subtitle-workout">Инвентарь: </span> {workout.inventory} </p>
                    <p className="text-workout"><span className="text-subtitle-workout">Тип: </span>{workout.purpose}
                    </p>
                </div>
            </div>

        );
    } else {
        return <div className="workout-item-for-admin" >
            <img className="workout-image-for-admin" src={workout.image ? workout.image : '/image/loseWeight.jpg'}/>
            <div className="short-info-workout-for-admin" onClick={() => openWorkout()}>
                <h1 className="header-plan-workout">{workout.name}</h1>
                <hr className=".hr-exercise"/>
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
                        <td> {workout.inventory}</td>
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
            <ActionButtonBlock setWorkouts={setWorkouts} workout={workout}/>
        </div>
    }

}
