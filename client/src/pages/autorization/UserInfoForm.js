import React, { useState } from 'react'
import '../../styles/login.css'

export const UserInfoForm = () => {

    const [classNameForName, setClassNameForName] = useState(null)
    const [classNameForSurname, setClassNameForSurname] = useState(null)
    const [classNameForBirthDay, setClassNameForBirthDay] = useState(null)
    const [classNameForHeight, setClassNameForHeight] = useState(null)
    const [classNameForWeight, setClassNameForWeight] = useState(null)
    const [classNameForPurpose, setClassNameForPurpose] = useState(null)
    const [form, setForm] = useState({
        name: '', surname: '', bday: '', gender: '', height: '', weight: '', purpose: ''
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
    
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className="background">
            <div className="container-for-form">
                <span className="login100-form-title"> Ваши учётные данные</span>
                <div className="user-info-form">
                    <div className="wrapper">
                        <div className="wrap-input100">
                            <img className={`icons ${classNameForName}`} src="image/user-solid.svg" />
                            <input className="input-info-forms" type="text" name="name" placeholder="Введите имя" id="name" value={form.name} onChange={changeHandler} onFocus={setClassForName} onBlur={setClassForName} />
                        </div>
                        <div className="wrap-input100 ">
                            <img className={`icons ${classNameForSurname}`} src="image/user-solid.svg" />
                            <input className="input-info-forms" type="text" name="surname" placeholder="Введите фамилию" id="surname" value={form.surname} onChange={changeHandler} onFocus={setClassForSurname} onBlur={setClassForSurname} />
                        </div>
                        <div className="wrap-input100">
                            <img className={`icons ${classNameForBirthDay}`} src="image/age.svg" />
                            <input className="input-info-forms" type="number" min="0" name="bday" placeholder="Введите количество полных лет" id="bday" value={form.bday} onChange={changeHandler} onFocus={setClassForBirthDay} onBlur={setClassForBirthDay} />
                        </div>

                    </div>
                    <div className="wrapper">
                        <div className="gender-block">
                            <p className='gender-txt'>Выберите пол:</p>
                            <div className="radio-gender-button">
                                <label>
                                    <input name="gender" onChange={changeHandler} value="man" type="radio" />
                                    <span>Мужской</span>
                                </label>
                                <label>
                                    <input name="gender" onChange={changeHandler} value="woman" type="radio"    />
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
                    <select className="purpose-list input-into-forms" name="purpose" onChange={changeHandler} onFocus={setClassForPurpose} onBlur={setClassForPurpose}>
                        <option value="" disabled selected>Выберите цель</option>
                        <option value="1">Похудение</option>
                        <option value="2">Поддержание формы</option>
                        <option value="3">Набор мышечной массы</option>
                    </select>
                </div>
                <div className="container-form-btn">
                    <button className="container-btn"
                        id="sendButton" >
                        Отправить
                    </button>
                </div>

            </div>
        </div>
    )
}
