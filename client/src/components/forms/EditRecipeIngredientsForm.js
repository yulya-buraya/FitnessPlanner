import React, { useEffect, useRef, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import '../../styles/mealplanner.css'
import { EditRecipeInstructionsForm } from "./EditRecipeInstructionsForm";

function resizeArray(arr, count, creator) {
    const { length } = arr;
    if (count > length) {
        for (let i = length; i < count; i++) {
            arr.push(creator(i + 1));
        }
    }

    if (count < length) arr = arr.slice(0, count);

    return arr;
}

const instructionCreator = (step) => ({ step, description: '' });
const ingredientCreator = () => ({ name: "", count: "", metric: '' });

export const EditRecipeIngredientsForm = ({
                                              _recipe,
                                              setModalActive,
                                              countIngredients,
                                              countInstructions,
                                              setRecipes
                                          }) => {
    const [recipe, setRecipe] = useState({});
    const { loading } = useHttp()

    const changeHandler = (e, index) => {
        const { value, name } = e.target;
        setRecipe((prev) => {
            prev.ingredients[index][name] = value;
            return { ...prev };
        });
    };

    const cancelHandler = () => {
        setModalActive(null)
    }

    const addRecipeIngredientsHandler = () => {
        setModalActive(
            <EditRecipeInstructionsForm
                setRecipes={setRecipes}
                setModalActive={setModalActive}
                _recipe={recipe}
            />
        );
    };

    useEffect(() => {
        console.log('ingredientform', _recipe);
        const _ingredients = resizeArray(
            [..._recipe.ingredients],
            countIngredients,
            ingredientCreator
        );

        const _instructions = resizeArray(
            [..._recipe.instructions],
            countInstructions,
            instructionCreator
        );

        setRecipe({ ..._recipe, ingredients: _ingredients, instructions: _instructions });
    }, []);

    return (
        <div className='background-modal active'>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Ингредиенты блюда
                    </span>
                    <div className="ingredients-form">
                        {recipe?.ingredients?.map((ingredient, i) => {
                            return (
                                <div className="ingredients-content" key={i}>
                                    <img className='icon-ingredient'
                                         src="/image/ingredients.svg"/>
                                    <input className="ingredient-input ingredient-name"
                                           placeholder="Название ингредиента"
                                           type="text"
                                           name="name"
                                           value={ingredient.name}
                                           onChange={(e) => (changeHandler(e, i))}
                                    />
                                    <input
                                        placeholder="Количество"
                                        className="ingredient-input"
                                        type="number"
                                        name="count"
                                        value={ingredient.count}
                                        onChange={(e) => (changeHandler(e, i))}
                                    />
                                    <select
                                        placeholder="Единицы измерения"
                                        className="ingredient-input"
                                        type="text"
                                        name="metric"
                                        value={ingredient.metric}
                                        onChange={(e) => (changeHandler(e, i))}
                                    >
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
