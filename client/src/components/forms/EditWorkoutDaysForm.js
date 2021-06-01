import React, { useEffect, useRef, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { DaysExercise } from '../TrainingPlanning/DaysExercise'
import { EditDaysExercise } from "../TrainingPlanning/workoutComponents/EditDaysExercise";

function resizeArray(arr, count, creator) {
    const { length } = arr;
    if (count > length) {
        for (let i = length; i < count; i++) {
            arr.push(creator(i + 1));
        }
    }

    if (count < length) arr = arr.slice(0, count);

    return arr;
}

const dayCreator = (i) => ({ number: i + 1, params: "", exercises: [] });

export const EditWorkoutDaysForm = ({ setActive, form, setWorkouts }) => {

    const { loading, request } = useHttp()
    const [days, setDays] = useState([]);
    const message = useMessage()

    const cancelHandler = () => {
        setActive(null)
    }

    const addWorkoutDaysHandler = async () => {
        try {
            const body = { ...form, days };
            const formData = new FormData();

            for (let key in body) {
                if (key === 'image' && (typeof body[key] === 'string')) continue;

                if (Array.isArray(body[key])) {
                    formData.append(key, JSON.stringify(body[key]));
                    continue;
                }

                formData.append(key, body[key]);
            }

            const xhr = new XMLHttpRequest();
            xhr.open('PUT', `/api/workout/${body._id}`, false);
            xhr.send(formData);

            if (xhr.status <= 299) {
                const response = JSON.parse(xhr.responseText);
                setWorkouts((prev) => {
                    const index = prev.findIndex((item) => item._id === form._id);
                    prev[index] = { ...form, days };
                    return [...prev];
                });
                message(response.message);
            }
        } catch (e) {
            console.log(e)
        }


        setActive(null)
    }

    useEffect(() => {
        const days = resizeArray(form.days, form.count, dayCreator);
        setDays(days);
    }, []);

    return (
        <div className='background-modal active'>
            <div className="container-for-day-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Дни плана
                    </span>
                    <div className="days-form">
                        {days.map((day, i) => {
                            return (
                                <div className="day-content">
                                    <EditDaysExercise i={i} day={day} setDays={setDays}/>
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
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
