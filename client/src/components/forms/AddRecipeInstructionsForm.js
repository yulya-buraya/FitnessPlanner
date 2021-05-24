import React, { useRef, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import '../../styles/mealplanner.css'

export const AddRecipeInstructionsForm = ({ food,recipe, setModalActive, countInstructions, setRecipes }) => {
    const instructions = useRef([]);
    const { loading, request } = useHttp()
    const message = useMessage()


    const cancelHandler = () => {
        setModalActive(null)
    }

    const addRecipeInstructionsHandler = async () => {
        try {
            const data = await request('/api/recipe/create', 'POST', { ...recipe, instructions: instructions.current} )
            message(data.message) 
        
    }
        catch (e) {
            console.log(e)
        } 
 
        setModalActive(null)
    }

    return (
        <div className='background-modal active'>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Этапы приготовления блюда
                                </span>

                    <div className="instructions-form">
                        {[...Array(parseInt(countInstructions))].map((n, i) => {
                            instructions.current.push({ step: i + 1, description: "" });
                            return (
                                <div className="instructions-content" key={i}>
                                    <p className="step-text">Шаг {i + 1}</p>
                                    <textarea className="instructions-input"
                                        placeholder="Писать здесь..."
                                        type="text"
                                        onChange={(e) => {
                                            instructions.current[i].description = e.target.value;
                                        }} />
                                </div>
                            );
                        })}
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
                            onClick={addRecipeInstructionsHandler}
                            disabled={loading}>
                            Сохранить
                        </button>
                    </div>
                </div>
          </div>
        </div>
    )

}
