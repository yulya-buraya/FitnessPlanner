import React from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useHttp } from "../../hooks/http.hook"
import { useMessage } from '../../hooks/message.hook'



export const DeleteMealPlanForm = ({ setForm, mealplan, setMealPlans}) => {

    
    const message = useMessage()
    const { request } = useHttp()

    const cancelHandler = () => {
        setForm(null)
    }
    const DeleteMealPlan = async (id) => {
         const data = await request('/api/mealplan/delete', 'DELETE', { id })
        setMealPlans(prev => {
            const mealplans = [...prev];
            if (mealplans.indexOf(mealplan) >= 0) {
                mealplans.splice(mealplans.indexOf(mealplan), 1);
            }
            return mealplans
        })
          message(data.message)
        setForm(null)
    }
    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить план питания  <span
                        className="important-text">{mealplan.name}</span> ?</p>
                </div>
                <div className="container-form-btn">
                    <button className="container-btn"
                            id="cancelButton"
                            onClick={cancelHandler}
                    >
                        Отменить
                    </button>
                    <button className="container-btn"
                            id="deleteButton"
                            onClick={() => DeleteMealPlan(mealplan._id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}