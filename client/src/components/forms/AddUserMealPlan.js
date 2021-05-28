import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import '../../styles/modalForm.css'
import '../../styles/login.css'

export const AddUserMealPlan = ({ setActive, active, mealplan }) => {

    const [isClassNameForMealPlan, setClassNameForMealPlanName] = useState(null)
    const { loading, request } = useHttp()
    const message = useMessage()

    const history = useHistory()

    const [name, setName] = useState("")


    const setClassForMealPlan = () => {
        setClassNameForMealPlanName(isClassNameForMealPlan == null ? "active-icon" : null)
    }

    const cancelHandler = () => {
        setActive(null)
    }

    const addMealPlanHandler = async () => {
        try {
            console.log({ ...mealplan, name })
              const data = await request('/api/mealplan/create', 'POST', { ...mealplan, name })
              message(data.message) 
            setActive(null)
            history.push(`/mealplanner/${mealplan.userId}`)
        } catch (e) { }
    }

    return (
        <div className='background-modal active'>
            <div className="wrap-login100-food" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Сохранить план питания
                                </span>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForMealPlan}`} src="/image/food.svg" />
                        <input className="input-info-forms" type="text" name="name"
                            placeholder="Введите название плана питания" id="name" value={name}
                            onChange={(e) => setName(e.target.value)} onFocus={setClassForMealPlan}
                            onBlur={setClassForMealPlan} />
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
                            onClick={addMealPlanHandler}
                            disabled={loading}>
                            Сохранить
                        </button>
                        {console.log("dfkdfkdlfkdl")}
                    </div>
                </div>
            </div>
        </div>

    )

}
