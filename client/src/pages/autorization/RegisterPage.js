import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { NavLink, useHistory } from 'react-router-dom'

import '../../styles/login.css'

export const RegisterPage = () => {
    const history = useHistory()
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const [classNameForEmail, setClassNameForEmail] = useState(null)
    const [classNameForPassword, setClassNameForPassword] = useState(null)
    const [classNameForConfirmPassword, setClassNameForConfirmPassword] = useState(null)


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
            history.push('/')
        } catch (e) { }
    }

    const setClassForEmail = () => {
        setClassNameForEmail(classNameForEmail == null ? "active" : null)
    }
    const setClassForPassword = () => {
        setClassNameForPassword(classNameForPassword == null ? "active" : null)
    }
    const setClassForConfirmPassword = () => {
        setClassNameForConfirmPassword(classNameForConfirmPassword == null ? "active" : null)
    }

    return (
        <div className="background">
            <div className="wrap-login100">
                <div className="login100-form validate-form">
                    <span className="login100-form-title">
                        Регистрация
                    </span>
                    <div className="wrap-input100">
                        <i className={`fa fa-user ${classNameForEmail}`}></i>
                        <input className="input100" type="text" name="email" placeholder="Введите email" id="email" value={form.email} onChange={changeHandler} onFocus={setClassForEmail} onBlur={setClassForEmail} />
                    </div>

                    <div className="wrap-input100 ">
                        <i className={`fa fa-lock ${classNameForPassword}`}></i>
                        <input className="input100" type="password" name="password" placeholder="Введите пароль" id="password" value={form.password} onChange={changeHandler} onFocus={setClassForPassword} onBlur={setClassForPassword} />
                    </div>
                    <div className="wrap-input100">
                        <i className={`fa fa-lock ${classNameForConfirmPassword}`}></i>
                        <input className="input100" type="password" name="confirmPassword" placeholder="Введите пароль повторно" id="confirmPasswordInput" value={form.password2} onChange={changeHandler} onFocus={setClassForConfirmPassword} onBlur={setClassForConfirmPassword} />
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn"
                            id="registerButton"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                </button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">
                            Хотите войти в аккаунт?
                </span>

                        <NavLink className="txt2" to="/">Войти</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
