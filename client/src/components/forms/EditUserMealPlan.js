import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useDispatch, useSelector } from "react-redux";
import { constructorActions } from "../../store/Constructor/action";

export const EditUserMealPlan = ({ setActive, active, mealPlan }) => {
    const [isClassNameForMealPlan, setClassNameForMealPlanName] = useState(null)
    const { loading, request } = useHttp()
    const message = useMessage()
    const history = useHistory()
    const dispatch = useDispatch();
    const { name, id } = useSelector((state) => (state.mealConstructor));

    const setClassForMealPlan = () => {
        setClassNameForMealPlanName(isClassNameForMealPlan == null ? "active-icon" : null)
    }

    const cancelHandler = () => {
        setActive(null)
    }

    const editMealPlanHandler = async () => {
        try {
            console.log({ ...mealPlan, name })
            const data = await request(`/api/mealplan/${id}`, 'PUT', { ...mealPlan, name })
            message(data.message)
            setActive(null)
            history.push(`/mealplanner/${mealPlan.userId}`)
        } catch (e) {
        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className='background-modal active'>
            <div className="wrap-login100-food" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Изменить план питания
                    </span>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForMealPlan}`} src="/image/food.svg"/>
                        <input
                            className="input-info-forms"
                            type="text"
                            name="name"
                            placeholder="Введите название плана питания"
                            id="name"
                            value={name}
                            onChange={(e) => (dispatch(constructorActions.setName(e.target.value)))}
                            onFocus={setClassForMealPlan}
                            onBlur={setClassForMealPlan}/>
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
                                onClick={editMealPlanHandler}
                                disabled={loading}>
                            Изменить
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}
