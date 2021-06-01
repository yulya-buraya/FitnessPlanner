import React, { useRef, useState, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { AuthContext } from '../../context/AuthContext'
import { AddUserWorkoutDaysForm } from "./AddUserWorkoutDaysForm";


export const AddUserWorkoutForm = ({ setModalFormActive }) => {

    const [isClassNameForWorkoutName, setClassNameForWorkoutName] = useState(null)
    const [classNameForPurpose, setClassNameForPurpose] = useState(null)
    const [isClassNameForLevel, setClassNameForLevel] = useState(null)
    const [isClassNameForInventory, setClassNameForInventory] = useState(null)
    const [isClassNameForPlace, setClassNameForPlace] = useState(null)
    const [isClassNameForCount, setClassNameForCount] = useState(null)
    const [isClassNameForDuration, setClassNameForDuration] = useState(null)
    const [isClassNameForGender, setClassNameForGender] = useState(null)
    const auth = useContext(AuthContext)
    const { loading } = useHttp()
    const fileInput = useRef();

    const [form, setForm] = useState({
        name: '',
        purpose: '',
        level: '',
        place: '',
        inventory: '',
        count: '',
        gender: '',
        image: '',
        duration: '',
        user: auth.userId
    })

    const setClassForWorkoutName = () => {
        setClassNameForWorkoutName(isClassNameForWorkoutName == null ? "active-icon" : null)
    }
    const setClassForPurpose = () => {
        setClassNameForPurpose(classNameForPurpose == null ? "active-icon" : null)
    }
    const setClassForLevel = () => {
        setClassNameForLevel(isClassNameForLevel == null ? "active-icon" : null)
    }

    const setClassForInventory = () => {
        setClassNameForInventory(isClassNameForInventory == null ? "active-icon" : null)
    }

    const setClassForPlace = () => {
        setClassNameForPlace(isClassNameForPlace == null ? "active-icon" : null)
    }

    const setClassForCount = () => {
        setClassNameForCount(isClassNameForCount == null ? "active-icon" : null)
    }
    const setClassForDuration = () => {
        setClassNameForDuration(isClassNameForDuration == null ? "active-icon" : null)
    }
    const setClassForGender = () => {
        setClassNameForGender(isClassNameForGender == null ? "active-icon" : null)
    }
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const cancelHandler = () => {
        setModalFormActive(null)
    }

    const setFile = (e) => {
        setForm({ ...form, [e.target.name]: e.target.files[0] });
    }

    const addWorkoutDaysHandler = async () => {
        setModalFormActive(<AddUserWorkoutDaysForm setActive={setModalFormActive} form={form}/>);
    }

    return (
        <div className='background-modal active'onClick={cancelHandler}>
            <div className="container-for-form " onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Добавить новый план тренировки
                    </span>
                    <div className="user-info-form">
                        <div className="wrapper">
                            <div className="wrap-input100">
                                <input ref={fileInput} type="file" name="image" id="file" onChange={setFile}
                                       accept="image/*"/>
                                <label htmlFor="picture" className="background-label">
                                    <i className="material-icons">
                                        add_photo_alternate
                                    </i>&nbsp;
                                    {fileInput.current?.files[0] != null ? fileInput.current?.files[0].name : "Загрузить обложку плана"}
                                </label>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForWorkoutName}`}
                                     src="/image/list.svg"/>
                                <input className="input-info-forms" type="text" name="name"
                                       placeholder="Введите название плана" id="name" value={form.name}
                                       onChange={changeHandler} onFocus={setClassForWorkoutName}
                                       onBlur={setClassForWorkoutName}/>
                            </div>

                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForInventory}`} src="/image/inventary.svg"/>
                                <input className="input-info-forms" type="text" name="inventory"
                                       placeholder="Введите используемый инвентарь" id="inventory"
                                       value={form.inventory}
                                       onChange={changeHandler} onFocus={setClassForInventory}
                                       onBlur={setClassForInventory}/>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForPlace}`} src="/image/cursor.svg"/>
                                <select className="place-list input-info-forms" type="text" name="place"
                                        placeholder="Введите место проведения" id="place" value={form.place}
                                        onChange={changeHandler} onFocus={setClassForPlace} onBlur={setClassForPlace}>
                                    <option value="" disabled selected>Выберите место</option>
                                    <option value="Тренажерный зал">Тренажерный зал</option>
                                    <option value="Дом">Дом</option>
                                </select>
                            </div>

                            <div className="wrap-input100">
                                <img className={`icons ${classNameForPurpose}`} src="image/flag.svg"/>
                                <select className="purpose-list input-into-forms" name="purpose" value={form.purpose}
                                        onChange={changeHandler} onFocus={setClassForPurpose}
                                        onBlur={setClassForPurpose}>
                                    <option value="" disabled selected>Выберите цель</option>
                                    <option value="Похудение">Похудение</option>
                                    <option value="Поддержание формы">Поддержание формы</option>
                                    <option value="Набор мышечной массы">Набор мышечной массы</option>
                                </select>
                            </div>

                        </div>

                        <div className="wrapper">
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
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForCount}`} src="/image/icon-calendar.svg"/>
                                <input className="input-info-forms" type="number" name="count"
                                       placeholder="Введите количество дней в плане" id="count" value={form.count}
                                       onChange={changeHandler} onFocus={setClassForCount} onBlur={setClassForCount}/>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForDuration}`} src="/image/icon-clock.svg"/>
                                <input className="input-info-forms" type="text" name="duration"
                                       placeholder="Введите длительность тренировок, мин" id="duration"
                                       value={form.duration}
                                       onChange={changeHandler} onFocus={setClassForDuration}
                                       onBlur={setClassForDuration}/>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForGender}`} src="image/gender.svg"/>
                                <select className="gender-list input-into-forms" name="gender" value={form.gender}
                                        onChange={changeHandler} onFocus={setClassForGender} onBlur={setClassForGender}>
                                    <option value="" disabled selected>Выберите для кого тренировка</option>
                                    <option value="Для женщин">Для женщин</option>
                                    <option value="Для мужчин">Для мужчин</option>
                                    <option value="Универсальная">Универсальная</option>
                                </select>
                            </div>

                        </div>
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
