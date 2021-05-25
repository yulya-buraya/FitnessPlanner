import React, { useRef } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { DaysExercise } from '../TrainingPlanning/DaysExercise'

export const AddWorkoutDaysForm = ({ setActive, form, setWorkouts }) => {

    const { loading, request } = useHttp()
    const days = useRef([]);
    const message = useMessage()

    const cancelHandler = () => {
        setActive(null)
    }

    const addWorkoutDaysHandler = async () => {
        try {
            const body = { ...form, days: days.current };
            const formData = new FormData();

            for (let key in body) {
                if (Array.isArray(body[key])) {
                    formData.append(key, JSON.stringify(body[key]));
                    continue;
                }

                formData.append(key, body[key]);
            }

            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/workout/create', false);
            xhr.send(formData);

            if (xhr.status <= 299) {
                const response = JSON.parse(xhr.responseText);
                console.log('response', response);
                setWorkouts((prev) => {
                    console.log('setWorkouts', prev);
                    prev.push(response.workout)
                    return [...prev];
                });
                message(response.message);
            }
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
                            days.current.push({ number: i + 1, params: "", exercises: [] });
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
