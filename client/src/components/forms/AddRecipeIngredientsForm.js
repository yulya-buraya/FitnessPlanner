import React, { useRef, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import '../../styles/mealplanner.css'
import { AddRecipeInstructionsForm } from './AddRecipeInstructionsForm'

export const AddRecipeIngredientsForm = ({ recipe, setModalActive, countIngredients, countInstructions, setRecipes }) => {
    const ingredients = useRef([]);
    const { loading } = useHttp()

    const cancelHandler = () => {
        setModalActive(null)
    }

    const addRecipeIngredientsHandler =  () => {
             setModalActive(<AddRecipeInstructionsForm setRecipes={setRecipes} setModalActive={setModalActive} countInstructions={countInstructions} recipe={ {...recipe, ingredients: ingredients.current}}/>) 
    }
    return (
        <div className='background-modal active'>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Ингредиенты блюда
                                </span>

                    <div className="ingredients-form">
                        {[...Array(parseInt(countIngredients))].map((n, i) => {
                            ingredients.current.push({ name: "", count: "", metric: '' });
                            return (
                                <div className="ingredients-content" key={i}>
                               <img className='icon-ingredient'
                                        src="/image/ingredients.svg" /> 
                                    <input className="ingredient-input ingredient-name"
                                        placeholder="Название ингредиента"
                                        type="text"
                                        onChange={(e) => {
                                            ingredients.current[i].name = e.target.value;
                                        }} />

                                    <input
                                        placeholder="Количество"
                                        className="ingredient-input"
                                        type="number"
                                        onChange={(e) => {
                                            ingredients.current[i].count = e.target.value;
                                        }} />
                                    <select
                                        placeholder="Единицы измерения"
                                        className="ingredient-input"
                                        type="text"
                                        onChange={(e) => {
                                            ingredients.current[i].metric = e.target.value;
                                        }}>
                                        <option value=""></option>
                                        <option value="шт">шт</option>
                                        <option value="гр">гр</option>
                                        <option value="мл">мл</option>
                                        <option value="ч. л">ч. л</option>
                                        <option value="ст. л">ст. л</option>
                                    </select>
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
                            onClick={addRecipeIngredientsHandler}
                            disabled={loading}>
                            Продолжить
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )

}
