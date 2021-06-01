import React from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useHttp } from "../../hooks/http.hook"
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router'


export const DeleteUserWorkoutForm = ({ setForm, workout }) => {

    const message = useMessage()
    const { request } = useHttp()
    const history = useHistory()

    const cancelHandler = () => {
        setForm(null)
    }
    const DeleteWorkout = async (id) => {
        try {
            console.log(id)
            const data = await request('/api/userworkout/delete', 'DELETE', { id })
            message(data.message)
            history.push("/custom_workouts")
            setForm(null)
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить программу тренировок <span
                        className="important-text">{workout.name}</span> ?</p>
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