import React, { useEffect, useState, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext.js'
import { NavLink, useHistory } from 'react-router-dom'
import '../../styles/login.css'


export const LoginPage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const [classNameForEmail, setClassNameForEmail] = useState(null)
    const [classNameForPassword, setClassNameForPassword] = useState(null)


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
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            const fetched = await request(`/api/biodata/`, "GET", null, {
                Authorization: `Bearer ${data.token}`
            })
            auth.login(data.token, data.userId, data.role)
            if (data.role == "admin") {
                history.push("/")
            }
            else {

                if (fetched.length == 0) {
                    history.push("/form")
                }
                else {
                    history.push("/")
                }
            }

        }

        catch (e) { }
    }
    const setClassForEmail = () => {
        setClassNameForEmail(classNameForEmail == null ? "active" : null)
    }
    const setClassForPassword = () => {
        setClassNameForPassword(classNameForPassword == null ? "active" : null)
    }

    return (
        <div className="background">
            <div className="wrap-login100">
                <div className="login100-form validate-form">
                    <span className="login100-form-title">
                        Авторизация
                                </span>
                    <div className="wrap-input100">
                        <i className={`fa fa-user ${classNameForEmail}`}></i>
                        <input className="input100" type="text" name="email" placeholder="Введите email" id="email" value={form.email} onChange={changeHandler} onFocus={setClassForEmail} onBlur={setClassForEmail} />
                    </div>

                    <div className="wrap-input100 ">
                        <i className={`fa fa-lock ${classNameForPassword}`}></i>
                        <input className="input100" type="password" name="password" placeholder="Введите пароль" id="password" value={form.password} onChange={changeHandler} onFocus={setClassForPassword} onBlur={setClassForPassword} />
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn"
                            id="loginButton"
                            disabled={loading}
                            onClick={loginHandler}>
                            Войти
                </button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">
                            У вас нет аккаунта?
                </span>

                        <NavLink className="txt2" to="/register">Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
