import React from "react"
import "../../../styles/training.css"

export const ShortInfoWorkout = () => {
    return (
                  <div className="short-info-program">
                              <div className="header-short-workout-form">28-дневная программа для похудения</div>
                     <br />
                    <hr className="hr-short-workout-block"/>
                    <table className="table-info-about-workout">
                    <tbody>
                    <tr >
                            <th>Цель:</th>
                            <th>Место проведения:</th>
                        </tr>
                        <tr className="value-workout-tr">
                            <td>Похудение</td>
                            <td>Дом</td>
                        </tr>
                        <tr >
                            <th>Уровень подготовки:</th>
                            <th>Инвентарь:</th>
                        </tr>
                        <tr className="value-workout-tr">
                            <td>Любитель</td>
                            <td>Коврик для фитнеса</td>
                        </tr>
                        <tr>
                            <th >Время тренировки:</th>
                            <th >Длительность цикла</th>
                        </tr>
                        <tr className="value-workout-tr">
                            <td>30 - 40 мин</td>
                            <td>28 дней</td>
                        </tr>
                 </tbody>
                </table>
                </div>
    );
}