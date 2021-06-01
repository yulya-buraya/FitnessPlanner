import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'

import '../../styles/modalForm.css'
import '../../styles/login.css'

import { AddRecipeIngredientsForm } from './AddRecipeIngredientsForm'
import { EditRecipeIngredientsForm } from "./EditRecipeIngredientsForm";

export const EditRecipeInfoForm = ({ _recipe, setActive, setRecipes }) => {

    const [isClassNameForDuration, setClassNameForDuration] = useState(null)
    const [isClassNameForServings, setClassNameForServings] = useState(null)
    const [isClassNameForIngredients, setClassNameForIngredients] = useState(null)
    const [isClassNameForInstructions, setClassNameForInstructions] = useState(null)
    const [instructions, setCountInstructions] = useState(0)
    const [ingredients, setCountIngredients] = useState(0)
    const [recipe, setRecipe] = useState({});

    const { loading } = useHttp()

    const changeHandler = event => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value })
    }

    const setImage = (event) => {
        setRecipe({ ...recipe, image: event.target.files[0] });
    };

    const setClassForDuration = () => {
        setClassNameForDuration(isClassNameForDuration == null ? "active-icon" : null)
    }
    const setClassForServings = () => {
        setClassNameForServings(isClassNameForServings == null ? "active-icon" : null)
    }
    const setClassForIngredients = () => {
        setClassNameForIngredients(isClassNameForIngredients == null ? "active-icon" : null)
    }
    const setClassForInstructions = () => {
        setClassNameForInstructions(isClassNameForInstructions == null ? "active-icon" : null)
    }

    const cancelHandler = () => {
        setActive(null)
    }

    const addRecipeInfoHandler = () => {
        setActive(
            <EditRecipeIngredientsForm
                setRecipes={setRecipes}
                setModalActive={setActive}
                countIngredients={ingredients}
                countInstructions={instructions}
                _recipe={recipe}
            />
        )
    };

    useEffect(() => {
        setCountInstructions(_recipe.instructions.length);
        setCountIngredients(_recipe.ingredients.length);
        setRecipe(_recipe);
    }, []);

    return (
        <div className='background-modal active'>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                       Краткая информация о рецепте
                                </span>
                    <div className="user-info-form">
                        <div className="wrapper">
                            <div className="wrap-input100">
                                <input type="file" name="picture" id="file" onChange={(e) => setImage(e)} accept="image/*"/>
                                <label htmlFor="picture" className="background-label">
                                    <i className="material-icons">
                                        add_photo_alternate
                                    </i>&nbsp;
                                    {document.getElementById("file") != null ? document.getElementById("file").value : "Загрузить фото рецепта"}
                                </label>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForDuration}`}
                                     src="/image/icon-clock.svg"/>
                                <input className="input-info-forms" type="text" name="duration"
                                       placeholder="Введите время приготовления" id="duration" value={recipe?.duration}
                                       onChange={changeHandler} onFocus={setClassForDuration}
                                       onBlur={setClassForDuration}/>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForServings}`}
                                     src="/image/serving1.svg"/>
                                <input className="input-info-forms" type="text" name="servings"
                                       placeholder="Введите количество порций" id="servings" value={recipe?.servings}
                                       onChange={changeHandler} onFocus={setClassForServings}
                                       onBlur={setClassForServings}/>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForIngredients}`}
                                     src="/image/ingredients.svg"/>
                                <input className="input-info-forms" type="text" name="ingredients"
                                       placeholder="Введите количество ингредиентов" id="ingredients"
                                       value={ingredients}
                                       onChange={(e) => {
                                           setCountIngredients(e.target.value)
                                       }}
                                       onFocus={setClassForIngredients}
                                       onBlur={setClassForIngredients}/>
                            </div>
                            <div className="wrap-input100">
                                <img className={`icons ${isClassNameForInstructions}`}
                                     src="/image/instructions.svg"/>
                                <input className="input-info-forms" type="text" name="instructions"
                                       placeholder="Введите количество шагов в инструкции" id="instructions"
                                       value={instructions}
                                       onChange={(e) => {
                                           setCountInstructions(e.target.value)
                                       }} onFocus={setClassForInstructions}
                                       onBlur={setClassForInstructions}/>
                            </div>
                        </div>
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
                                onClick={addRecipeInfoHandler}
                                disabled={loading}>
                            Далее
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )

}
