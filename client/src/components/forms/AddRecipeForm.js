import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router-dom'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { AddRecipeInfoForm } from './AddRecipeInfoForm'

export const AddRecipeForm = ({ setModalFormActive, setRecipes }) => {

    const [isClassNameForFoodName, setClassNameForFoodName] = useState(null)
    const [isClassNameForCategory, setClassNameForCategory] = useState(null)
    const [isClassNameForProteins, setClassNameForProteins] = useState(null)
    const [isClassNameForFats, setClassNameForFats] = useState(null)
    const [isClassNameForCarbhydrates, setClassNameForCarbhydrates] = useState(null)
    const [isClassNameForCalory, setClassNameForCalory] = useState(null)
    const { loading, request } = useHttp()

    const history = useHistory()

    const [recipe, setRecipe] = useState(null)
    const [form, setForm] = useState({
        name: '', category: '', proteins: '', fats: '', carbhydrates: '', calory: ''
    })

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
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const cancelHandler = () => {
        setModalFormActive(null)
    }

    const addFoodHandler = async () => {
        try {
            const data = await request('/api/food/create', 'POST', { ...form })

            setRecipe(data.food)
         } catch (e) { }
            
    }

    return (
        <div className='background-modal active'>
            <div className="wrap-login100-food" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Добавить новый рецепт
                                </span>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForFoodName}`} src="/image/recipe.svg" />
                        <input className="input-info-forms" type="text" name="name"
                            placeholder="Введите название блюда" id="name" value={form.name}
                            onChange={changeHandler} onFocus={setClassForFoodName}
                            onBlur={setClassForFoodName} />
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForCategory}`} src="image/category.svg" />
                        <select className="level-list input-info-forms" name="category" value={form.category}
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
                        <img className={`icons ${isClassNameForProteins}`} src="/image/protein.svg" />
                        <input className="input-info-forms" type="number" name="proteins"
                            placeholder="Количество белков, грамм" id="proteins" value={form.proteins}
                            onChange={changeHandler} onFocus={setClassForProteins} onBlur={setClassForProteins} />

                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForFats}`} src="/image/fats.svg" />
                        <input className="input-info-forms" type="number" name="fats"
                            placeholder="Количество жиров, грамм" id="fats" value={form.fats}
                            onChange={changeHandler} onFocus={setClassForFats} onBlur={setClassForFats} />
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForCarbhydrates}`} src="/image/carbohydrates.svg" />
                        <input className="input-info-forms" type="number" name="carbhydrates"
                            placeholder="Количество углеводов, грамм" id="carbhydrates" value={form.carbhydrates}
                            onChange={changeHandler} onFocus={setClassForCarbhydrates} onBlur={setClassForCarbhydrates} />
                    </div>
                    <div className="wrap-input100">
                        <img className={`icons ${isClassNameForCalory}`} src="/image/calories.svg" />
                        <input className="input-info-forms" type="number" name="calory"
                            placeholder="Введите количество калорий" id="calory" value={form.calory}
                            onChange={changeHandler} onFocus={setClassForCalory} onBlur={setClassForCalory} />
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
                            onClick={addFoodHandler}
                            disabled={loading}>
                            Добавить
                        </button>
                    </div>
                    {  recipe && setModalFormActive(<AddRecipeInfoForm recipe={recipe} setActive={setModalFormActive} setRecipes={setRecipes}  />)}
                </div>
            </div>
        </div>

    )

}
