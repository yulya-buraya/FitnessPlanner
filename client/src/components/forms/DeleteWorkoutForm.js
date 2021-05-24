import React from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useHttp } from "../../hooks/http.hook"
import { useMessage } from '../../hooks/message.hook'


export const DeleteWorkoutForm = ({ setForm, workout, setWorkouts }) => {

    const message = useMessage()


    const { request } = useHttp()

    const cancelHandler = () => {
        setForm(null)
    }
    const DeleteWorkout = async (id) => {
        const data = await request('api/workout/delete', 'DELETE', { id })
        setWorkouts(prev => {
            const workouts = [...prev];
            if (workouts.indexOf(workout) >= 0) {
                workouts.splice(workouts.indexOf(workout), 1);
            }
            return workouts
        })

        message(data.message)

        setForm(null)
    }
    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить программу тренировок <span
                        className="important-text">{ workout.name}</span> ?</p>
                        {console.log(workout)}
                </div>
                <div className="container-form-btn">
                    <button className="container-btn"
                        id="cancelButton"
                        onClick={cancelHandler}
                    >
                        Отменить
                    </button>
                    <button className="container-btn"
                        id="deleteButton"
                        onClick={() => DeleteWorkout(workout._id)}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}