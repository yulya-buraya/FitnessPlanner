import React, { useState, useCallback, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { DaysExercise } from '../TrainingPlanning/DaysExercise'

export const AddWorkoutDaysForm = ({ setActive, workout }) => {

    const [isClassNameForWorkoutName, setClassNameForWorkoutName] = useState(null)
    const [classNameForPurpose, setClassNameForPurpose] = useState(null)
    const [isClassNameForLevel, setClassNameForLevel] = useState(null)
    const [isClassNameForInventory, setClassNameForInventory] = useState(null)
    const [isClassNameForPlace, setClassNameForPlace] = useState(null)
    const [isClassNameForCount, setClassNameForCount] = useState(null)
    const [isClassNameForDuration, setClassNameForDuration] = useState(null)
    const [isClassNameForGender, setClassNameForGender] = useState(null)
    const [isClassNameForPicture, setClassNameForPicture] = useState(null)


  


    const { loading, request } = useHttp()
    const message = useMessage()
    

    const history = useHistory()

    const [form, setForm] = useState({
        name: '', purpose: '', level: '', place: '', inventory: '', count: '', gender: '', picture: '', background: '', duration: '', day: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const cancelHandler = () => {
        setActive(null)
    }

    const addWorkoutDaysHandler = async () => {
    }
    return (
        <div className='background-modal active' >
            <div className="container-for-day-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Дни плана
                                </span>
                    <div className="days-form">
                        {[...Array(parseInt(workout.count))].map((n, i) => 
                      
                        <div className="day-content">
                            <DaysExercise i={i + 1}  />
                        </div>
                        )}
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
