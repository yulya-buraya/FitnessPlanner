import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import '../../styles/modalForm.css'
import '../../styles/login.css'

export const AddExerciseForm = ({ setActive, active, setExercises }) => {

    const [isClassNameForExerciseName, setClassNameForExerciseName] = useState(null)
    const [isClassNameForMuscule, setClassNameForMuscule] = useState(null)
    const [isClassNameForLevel, setClassNameForLevel] = useState(null)
    const [isClassNameForLink, setClassNameForLink] = useState(null)
    const [isClassNameForInventory, setClassNameForInventory] = useState(null)
    const { loading, request } = useHttp()
    const message = useMessage()

    const history = useHistory()

    const [form, setForm] = useState({
        name: '', muscule: '', level: '', link: '', inventory: ''
    })

    const setClassForExerciseName = () => {
        setClassNameForExerciseName(isClassNameForExerciseName == null ? "active-icon" : null)
    }
    const setClassForMuscule = () => {
        setClassNameForMuscule(isClassNameForMuscule == null ? "active-icon" : null)
    }
    const setClassForLevel = () => {
        setClassNameForLevel(isClassNameForLevel == null ? "active-icon" : null)
    }
    const setClassForLink = () => {
        setClassNameForLink(isClassNameForLink == null ? "active-icon" : null)
    }
    const setClassForInventory = () => {
        setClassNameForInventory(isClassNameForInventory == null ? "active-icon" : null)
    }


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const cancelHandler = () => {
        setActive(false)
    }

    const addExerciseHandler = async () => {
        try {
            const data = await request('/api/exercise/create', 'POST', { ...form })
            message(data.message)
            console.log(data);
            setExercises(prev => {
                const exercises = [...prev];
                exercises.push(data.exercise);
                return exercises
            })
            setActive(false)
            history.push('/exercises')
        } catch (e) {
        }
    }

    return (
        <div className={active ? 'background-modal active' : 'background-modal'} onClick={() => setActive(false)}>
            <div className="wrap-login100" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Добавить новое упражнение
                                </span>
                    <div className="wrap-input100">
                        <img className={`icons-exercise-form ${isClassNameForExerciseName}`}
                             src="/image/exercises.svg"/>
                        <input className="input-info-forms" type="text" name="name"
                               placeholder="Введите название упражнения" id="exercise" value={form.name}
                               onChange={changeHandler} onFocus={setClassForExerciseName}
                               onBlur={setClassForExerciseName}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForMuscule}`} src="/image/muscules.svg"/>
                        <input className="input-info-forms" type="text" name="muscule"
                               placeholder="Введите группу активных мышц" id="muscule" value={form.muscule}
                               onChange={changeHandler} onFocus={setClassForMuscule} onBlur={setClassForMuscule}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForLink}`} src="/image/link.svg"/>
                        <input className="input-info-forms" type="text" name="link"
                               placeholder="Введите ссылку на видео технику" id="link" value={form.link}
                               onChange={changeHandler} onFocus={setClassForLink} onBlur={setClassForLink}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForInventory}`} src="/image/inventary.svg"/>
                        <input className="input-info-forms" type="text" name="inventory"
                               placeholder="Введите используемый инвентарь" id="inventory" value={form.inventory}
                               onChange={changeHandler} onFocus={setClassForInventory} onBlur={setClassForInventory}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForLevel}`} src="image/level.svg"/>
                        <select className="level-list input-into-forms" name="level" value={form.level}
                                onChange={changeHandler} onFocus={setClassForLevel} onBlur={setClassForLevel}>
                            <option defaultValue="">Выберите уровень сложности</option>
                            <option value="Лёгкий">Лёгкий</option>
                            <option value="Средний">Средний</option>
                            <option value="Сложный">Сложный</option>
                        </select>
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
                                onClick={addExerciseHandler}
                                disabled={loading}>
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}
