import React, { useRef } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { DaysExercise } from '../TrainingPlanning/DaysExercise'

export const AddWorkoutDaysForm = ({ setActive, form }) => {

    const { loading, request } = useHttp()
    const days = useRef([]);
    const message = useMessage()

    const cancelHandler = () => {
        setActive(null)
    }

    const addWorkoutDaysHandler = async () => {
        try {
            const data = await request('/api/workout/create', 'POST', { ...form, days: days.current })
            message(data.message)
            console.log("добавлено")
        } catch (e) {
            console.log(e)
        }
     
        setActive(null)
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
                            days.current.push({number:i+1, params: "", exercises: [] });
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
