import React, { useRef } from 'react'
import { useHttp } from '../../hooks/http.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { DaysExercise } from '../TrainingPlanning/DaysExercise'

export const AddWorkoutDaysForm = ({ setActive, form }) => {

    const { loading, request } = useHttp()
    const days = useRef([]);

    const cancelHandler = () => {
        setActive(null)
    }

    const addWorkoutDaysHandler = async () => {
        console.log({ ...form, days: days.current });
        /*const data = await request('/api/exercise/create', 'POST', { ...form, days: days.current })
        message(data.message)
        setActive(false)*/
    }

    return (
        <div className='background-modal active'>
            <div className="container-for-day-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Дни плана
                                </span>
                    <div className="days-form">
                        {[...Array(parseInt(form.count))].map((n, i) => {
                            days.current.push({ params: "", exercises: [] });
                            return (
                                <div className="day-content">
                                    <DaysExercise i={i} days={days}/>
                                </div>
                            );
                        })}
                    </div>
                    <div className="container-form-btn">
                        <button className="container-btn"
                                id="cancelButton"
                                onClick={cancelHandler}
                                disabled={loading}>
                            Отменить
                        </button>
                        <button className="container-btn"
                                id="sendButton"
                                onClick={addWorkoutDaysHandler}
                                disabled={loading}>
                            Добавить
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )

}
