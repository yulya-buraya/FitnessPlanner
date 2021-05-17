import React from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useHttp } from "../../hooks/http.hook"
import { useMessage } from '../../hooks/message.hook'


export const DeleteExerciseForm = ({ setForm, exercise, setExercises }) => {

    const message = useMessage()


    const { request } = useHttp()

    const cancelHandler = () => {
        setForm(null)
    }
    const deleteExercise = async (id) => {
        const data = await request('api/exercise/delete', 'DELETE', { id })
        setExercises(prev => {
            const exercises = [...prev];
            if (exercises.indexOf(exercise) >= 0) {
                exercises.splice(exercises.indexOf(exercise), 1);
            }
            return exercises
        })

        message(data.message)

        setForm(null)
    }
    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить упражнение <span
                        className="important-text">{exercise.name}</span> ?</p>
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
                        onClick={() => deleteExercise(exercise._id)}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}