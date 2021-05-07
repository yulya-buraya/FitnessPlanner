import React, { useContext, useState, useCallback } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'


import '../../styles/login.css'

export const UserInfoForm = () => {

    const [classNameForName, setClassNameForName] = useState(null)
    const [classNameForSurname, setClassNameForSurname] = useState(null)
    const [classNameForBirthDay, setClassNameForBirthDay] = useState(null)
    const [classNameForHeight, setClassNameForHeight] = useState(null)
    const [classNameForWeight, setClassNameForWeight] = useState(null)
    const [classNameForPurpose, setClassNameForPurpose] = useState(null)
    const [classNameForActivity, setClassNameForActivity] = useState(null)
    const { loading, request } = useHttp()
    const message = useMessage()
    const history = useHistory()
    const auth = useContext(AuthContext)


    const [form, setForm] = useState({
        firstname: '', lastname: '', age: '', gender: '', height: '', weight: '', purpose: '', activity: ''
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

    const userInfoHandler = async () => {
        try {
            console.log(form);
            const data = await request('/api/biodata/createBiodata', 'POST', { ...form },
                {
                    Authorization: `Bearer ${auth.token}`
                })
           
            message(data.message)
/*             history.push(`/biodata/${auth.userId}`)
 */        }
        catch (e) { }
    }

    return (
        <div className="background">
            <div className="container-for-form">
                <span className="login100-form-title"> Ваши учётные данные</span>
                <div className="user-info-form">
                    <div className="wrapper">
                        <div className="wrap-input100">
                            <img className={`icons ${classNameForName}`} src="image/user-solid.svg" />
                            <input className="input-info-forms" type="text" name="firstname" placeholder="Введите имя" id="firstname" value={form.firstname} onChange={changeHandler} onFocus={setClassForName} onBlur={setClassForName} />
                        </div>
                        <div className="wrap-input100 ">
                            <img className={`icons ${classNameForSurname}`} src="image/user-solid.svg" />
                            <input className="input-info-forms" type="text" name="lastname" placeholder="Введите фамилию" id="lastname" value={form.lastname} onChange={changeHandler} onFocus={setClassForSurname} onBlur={setClassForSurname} />
                        </div>
                        <div className="wrap-input100">
                            <img className={`icons ${classNameForBirthDay}`} src="image/age.svg" />
                            <input className="input-info-forms" type="number" min="14" name="age" placeholder="Введите количество полных лет" id="age" value={form.age} onChange={changeHandler} onFocus={setClassForBirthDay} onBlur={setClassForBirthDay} />
                        </div>

                    </div>
                    <div className="wrapper">
                        <div className="gender-block">
                            <p className='gender-txt'>Выберите пол:</p>
                            <div className="radio-gender-button">
                                <label>
                                    <input name="gender" onChange={changeHandler} value='мужской' type="radio" onChecked={()=>{form.gender='мужской'}} />
                                    <span>Мужской</span>
                                </label>
                                <label>
                                    <input name="gender" onChange={changeHandler} value='женский' type="radio" onChecked={()=>{form.gender='женский'}} />
                                    <span>Женский</span>
                                </label>
                            </div>
                        </div>

                        <div className="wrap-input100">
                            <img className={`icons ${classNameForHeight}`} src="image/height.svg" />
                            <input className="input-info-forms" type="text" name="height" placeholder="Введите ваш рост" id="height" value={form.height} onChange={changeHandler} onFocus={setClassForHeight} onBlur={setClassForHeight} />
                        </div>
                        <div className="wrap-input100 ">
                            <img className={`icons ${classNameForWeight}`} src="image/weight-solid.svg" />
                            <input className="input-info-forms" type="text" name="weight" placeholder="Введите текущий вес" id="weight" value={form.weight} onChange={changeHandler} onFocus={setClassForWeight} onBlur={setClassForWeight} />
                        </div>
                    </div>

                </div>
                <div className="wrap-input100">
                    <img className={`icons ${classNameForPurpose}`} src="image/flag.svg" />
                    <select className="purpose-list input-into-forms" name="purpose" value={form.purpose} onChange={changeHandler} onFocus={setClassForPurpose} onBlur={setClassForPurpose}>
                        <option value="" disabled selected>Выберите цель</option>
                        <option value="Похудение">Похудение</option>
                        <option value="Поддержание формы">Поддержание формы</option>
                        <option value="Набор мышечной массы">Набор мышечной массы</option>
                    </select>
                </div>
                <div className="wrap-input100">
                    <img className={`icons ${classNameForActivity}`} src="image/activity.svg" />
                    <select className="purpose-list input-into-forms" name="activity" value={form.activity} onChange={changeHandler} onFocus={setClassForActivity} onBlur={setClassForActivity}>
                        <option value="" disabled selected>Выберите уровень активности</option>
                        <option value="Нет физической нагрузки, сидячий образ жизни">Нет физической нагрузки, сидячий образ жизни</option>
                        <option value="Небольшие пробежки, пробежка 1-3 раза в неделю, низкая нагрузка">Небольшие пробежки, пробежка 1-3 раза в неделю, низкая нагрузка</option>
                        <option value="Занятия спортом 4-5 раз в неделю, средняя нагрузка">Занятия спортом 4-5 раз в неделю, средняя нагрузка</option>
                        <option value="Занятия спортом 6-7 раз в неделю, высокая нагрузка">Занятия спортом 6-7 раз в неделю, высокая нагрузка</option>
                        <option value="Занятия спортом 2 раза в день+силовые нагрузки, очень высокая нагрузка">Занятия спортом 2 раза в день+силовые нагрузки, очень высокая нагрузка</option>
                    </select>
                </div>
                <div className="container-form-btn">
                    <button className="container-btn"
                        id="sendButton"
                        onClick={userInfoHandler}
                        disabled={loading} >
                        Отправить
                    </button>
                </div>

            </div>
        </div>
    )
}
