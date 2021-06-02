import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { AddRecipeInfoForm } from './AddRecipeInfoForm'
import { EditRecipeInfoForm } from "./EditRecipeInfoForm";

export const EditRecipeForm = ({ _recipe, setRecipes, setModalFormActive }) => {
    const [isClassNameForFoodName, setClassNameForFoodName] = useState(null)
    const [isClassNameForCategory, setClassNameForCategory] = useState(null)
    const [isClassNameForProteins, setClassNameForProteins] = useState(null)
    const [isClassNameForFats, setClassNameForFats] = useState(null)
    const [isClassNameForCarbhydrates, setClassNameForCarbhydrates] = useState(null)
    const [isClassNameForCalory, setClassNameForCalory] = useState(null)
    const [active, setActive] = useState(false);
    const [recipe, setRecipe] = useState(null)

    const setClassForFoodName = () => {
        setClassNameForFoodName(isClassNameForFoodName == null ? "active-icon" : null)
    }
    const setClassForCategory = () => {
        setClassNameForCategory(isClassNameForCategory == null ? "active-icon" : null)
    }
    const setClassForProteins = () => {
        setClassNameForProteins(isClassNameForProteins == null ? "active-icon" : null)
    }
    const setClassForFats = () => {
        setClassNameForFats(isClassNameForFats == null ? "active-icon" : null)
    }
    const setClassForCarbhydrates = () => {
        setClassNameForCarbhydrates(isClassNameForCarbhydrates == null ? "active-icon" : null)
    }
    const setClassForCalory = () => {
        setClassNameForCalory(isClassNameForCalory == null ? "active-icon" : null)
    }

    const changeHandler = event => {
        setRecipe({
            ...recipe,
            food: {
                ...recipe.food,
                [event.target.name]: event.target.value
            }
        })
    };

    const cancelHandler = () => {
        setModalFormActive(null)
    };

    const addFoodHandler = async () => {
        setActive(true);
    };

    useEffect(() => {
        console.log(_recipe);
        setRecipe(_recipe);
    }, []);

    return (
        <div className='background-modal active'>
            <div className="wrap-login100-food" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Редактирование рецепта
                    </span>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForFoodName}`} src="/image/recipe.svg"/>
                        <input className="input-info-forms" type="text" name="name"
                               placeholder="Введите название блюда" id="name" value={recipe?.food?.name}
                               onChange={changeHandler} onFocus={setClassForFoodName}
                               onBlur={setClassForFoodName}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForCategory}`} src="image/category.svg"/>
                        <select className="level-list input-info-forms" name="category" value={recipe?.food?.category}
                                onChange={changeHandler} onFocus={setClassForCategory} onBlur={setClassForCategory}>
                            <option defaultValue="">Выберите категорию пищи</option>
                            <option value="Выпечка и десерты">Выпечка и десерты</option>
                            <option value="Основные блюда">Основные блюда</option>
                            <option value="Завтраки">Завтраки</option>
                            <option value="Супы">Супы</option>
                            <option value="Салаты">Салаты</option>
                            <option value="Гарниры">Гарниры</option>
                            <option value="Закуски">Закуски</option>
                            <option value="Горячие блюда">Горячие блюда</option>
                            <option value="Холодные блюда">Холодные блюда</option>
                            <option value="Напитки">Напитки</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </div>

                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForProteins}`} src="/image/protein.svg"/>
                        <input className="input-info-forms" type="number" name="proteins"
                               placeholder="Количество белков, грамм" id="proteins" value={recipe?.food?.proteins}
                               onChange={changeHandler} onFocus={setClassForProteins} onBlur={setClassForProteins}/>

                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForFats}`} src="/image/fats.svg"/>
                        <input className="input-info-forms" type="number" name="fats"
                               placeholder="Количество жиров, грамм" id="fats" value={recipe?.food?.fats}
                               onChange={changeHandler} onFocus={setClassForFats} onBlur={setClassForFats}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForCarbhydrates}`} src="/image/carbohydrates.svg"/>
                        <input className="input-info-forms" type="number" name="carbhydrates"
                               placeholder="Количество углеводов, грамм" id="carbhydrates" value={recipe?.food?.carbhydrates}
                               onChange={changeHandler} onFocus={setClassForCarbhydrates}
                               onBlur={setClassForCarbhydrates}/>
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForCalory}`} src="/image/calories.svg"/>
                        <input className="input-info-forms" type="number" name="calory"
                               placeholder="Введите количество калорий" id="calory" value={recipe?.food?.calory}
                               onChange={changeHandler} onFocus={setClassForCalory} onBlur={setClassForCalory}/>
                    </div>

                    <div className="container-form-btn">
                        <button className="container-btn"
                                id="cancelButton"
                                onClick={cancelHandler}>
                            Отменить
                        </button>
                        <button className="container-btn"
                                id="sendButton"
                                onClick={addFoodHandler}>
                            Далее
                        </button>
                    </div>
                    {active && setModalFormActive(
                        <EditRecipeInfoForm _recipe={recipe}
                                            setActive={setModalFormActive}
                                            setRecipes={setRecipes}
                        />
                    )}
                </div>
            </div>
        </div>

    )

}
