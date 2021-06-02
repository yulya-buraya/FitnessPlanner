import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'

export const EditUserInfoForm = ({ active, setActive, biodata, setBiodata }) => {

    const [classNameForName, setClassNameForName] = useState(null)
    const [classNameForSurname, setClassNameForSurname] = useState(null)
    const [classNameForBirthDay, setClassNameForBirthDay] = useState(null)
    const [classNameForHeight, setClassNameForHeight] = useState(null)
    const [classNameForWeight, setClassNameForWeight] = useState(null)
    const [classNameForPurpose, setClassNameForPurpose] = useState(null)
    const [classNameForActivity, setClassNameForActivity] = useState(null)
    const { loading, request } = useHttp()


    const [form, setForm] = useState({
        firstname: biodata.firstname,
        lastname: biodata.lastname,
        age: biodata.age,
        gender: biodata.gender,
        height: biodata.height,
        weight: biodata.weight,
        purpose: biodata.purpose,
        activity: biodata.activity
    })

    const setClassForName = () => {
        setClassNameForName(classNameForName == null ? "active-icon" : null)
    }

    const setClassForSurname = () => {
        setClassNameForSurname(classNameForSurname == null ? "active-icon" : null)
    }

    const setClassForBirthDay = () => {
        setClassNameForBirthDay(classNameForBirthDay == null ? "active-icon" : null)
    }

    const setClassForHeight = () => {
        setClassNameForHeight(classNameForHeight == null ? "active-icon" : null)
    }

    const setClassForWeight = () => {
        setClassNameForWeight(classNameForWeight == null ? "active-icon" : null)
    }

    const setClassForPurpose = () => {
        setClassNameForPurpose(classNameForPurpose == null ? "active-icon" : null)
    }
    const setClassForActivity = () => {
        setClassNameForActivity(classNameForActivity == null ? "active-icon" : null)
    }
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const cancelHandler = () => {
        setActive(false)
    }
    const editUserInfoHandler = async () => {
        try {
             const data = await request(`/api/biodata/${biodata._id}`, 'PUT', { ...form }) 
          
        } catch (e) {
            console.log(e)
        }
        setBiodata({ ...biodata, ...form })
        setActive(false)
    }

    return (
        <div className={active ? 'background-modal active' : 'background-modal'} onClick={() => setActive(false)}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Изменить учётные данные</span>
                <div className="user-info-form">
                    <div className="wrapper">
                        <div className="wrap-input100">
                            <img className={`icons ${classNameForName}`} src="/image/user-solid.svg"/>
                            <input className="input-info-forms" type="text" name="firstname" id="firstname"
                                   value={form.firstname} onChange={changeHandler} onFocus={setClassForName}
                                   onBlur={setClassForName}/>
                        </div>
                        <div className="wrap-input100 ">
                            <img className={`icons ${classNameForSurname}`} src="/image/user-solid.svg"/>
                            <input className="input-info-forms" type="text" name="lastname" id="lastname"
                                   value={form.lastname} onChange={changeHandler} onFocus={setClassForSurname}
                                   onBlur={setClassForSurname}/>
                        </div>
                        <div className="wrap-input100">
                            <img className={`icons ${classNameForBirthDay}`} src="/image/age.svg"/>
                            <input className="input-info-forms" type="number" min="14" name="age" id="age"
                                   value={form.age} onChange={changeHandler} onFocus={setClassForBirthDay}
                                   onBlur={setClassForBirthDay}/>
                        </div>

                    </div>
                    <div className="wrapper">
                        <div className="gender-block">
                            <p className='gender-txt'>Выберите пол:</p>
                            <div className="radio-gender-button">
                                <label>
                                    <input name="gender" onChange={changeHandler} value='мужской' type="radio"
                                           checked={form.gender == 'мужской' ? true : false}/>
                                    <span>Мужской</span>
                                </label>
                                <label>
                                    <input name="gender" onChange={changeHandler} value='женский' type="radio"
                                           checked={form.gender == 'женский' ? true : false}/>
                                    <span>Женский</span>
                                </label>
                            </div>
                        </div>

                        <div className="wrap-input100">
                            <img className={`icons ${classNameForHeight}`} src="/image/height.svg"/>
                            <input className="input-info-forms" type="text" name="height" placeholder="Введите ваш рост"
                                   id="height" value={form.height} onChange={changeHandler} onFocus={setClassForHeight}
                                   onBlur={setClassForHeight}/>
                        </div>
                        <div className="wrap-input100 ">
                            <img className={`icons ${classNameForWeight}`} src="/image/weight-solid.svg"/>
                            <input className="input-info-forms" type="text" name="weight"
                                   placeholder="Введите текущий вес" id="weight" value={form.weight}
                                   onChange={changeHandler} onFocus={setClassForWeight} onBlur={setClassForWeight}/>
                        </div>
                    </div>

                </div>
                <div className="wrap-input100">
                    <img className={`icons ${classNameForPurpose}`} src="/image/flag.svg"/>
                    <select className="purpose-list input-into-forms" name="purpose" value={form.purpose}
                            onChange={changeHandler} onFocus={setClassForPurpose} onBlur={setClassForPurpose}>
                        <option value="">Выберите цель</option>
                        <option value="Похудение">Похудение</option>
                        <option value="Поддержание формы">Поддержание формы</option>
                        <option value="Набор мышечной массы">Набор мышечной массы</option>
                    </select>
                </div>
                <div className="wrap-input100">
                    <img className={`icons ${classNameForActivity}`} src="/image/activity.svg"/>
                    <select className="purpose-list input-into-forms" name="activity" value={form.activity}
                            onChange={changeHandler} onFocus={setClassForActivity} onBlur={setClassForActivity}>
                        <option value="">Выберите уровень активности</option>
                        <option value="Нет физической нагрузки, сидячий образ жизни">Нет физической нагрузки, сидячий
                            образ жизни
                        </option>
                        <option value="Небольшие пробежки, пробежка 1-3 раза в неделю, низкая нагрузка">Небольшие
                            пробежки, пробежка 1-3 раза в неделю, низкая нагрузка
                        </option>
                        <option value="Занятия спортом 4-5 раз в неделю, средняя нагрузка">Занятия спортом 4-5 раз в
                            неделю, средняя нагрузка
                        </option>
                        <option value="Занятия спортом 6-7 раз в неделю, высокая нагрузка">Занятия спортом 6-7 раз в
                            неделю, высокая нагрузка
                        </option>
                        <option value="Занятия спортом 2 раза в день+силовые нагрузки, очень высокая нагрузка">Занятия
                            спортом 2 раза в день+силовые нагрузки, очень высокая нагрузка
                        </option>
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
                            onClick={editUserInfoHandler}
                            disabled={loading}>
                        Изменить
                    </button>
                </div>
            </div>
        </div>
    )
}