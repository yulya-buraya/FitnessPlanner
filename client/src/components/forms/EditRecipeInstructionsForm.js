import React, { useEffect, useRef, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import '../../styles/mealplanner.css'

export const EditRecipeInstructionsForm = ({ _recipe, setModalActive, setRecipes }) => {
    const [recipe, setRecipe] = useState({});
    const { loading, request } = useHttp()
    const message = useMessage()

    const changeHandler = (e, index) => {
        const { value, name } = e.target;
        setRecipe((prev) => {
            prev.instructions[index][name] = value;
            return { ...prev };
        });
    };

    const cancelHandler = () => {
        setModalActive(null)
    }

    const addRecipeInstructionsHandler = async () => {
        try {
            console.log(recipe);
            const formData = new FormData();
            formData.append('id', recipe._id);
            formData.append('duration', recipe.duration);
            formData.append('food', JSON.stringify(recipe.food));
            formData.append('ingredients', JSON.stringify(recipe.ingredients));
            formData.append('instructions', JSON.stringify(recipe.instructions));
            formData.append('image', recipe.image);
            formData.append('servings', recipe.servings);


            const xhr = new XMLHttpRequest();
            xhr.open('PUT', '/api/recipe/edit', false);
            xhr.send(formData);

            if (xhr.status <= 299) {
                const response = JSON.parse(xhr.responseText);
                setRecipes((prev) => {
                    const index = prev.findIndex((recipe) => recipe._id == recipe._id);
                    prev[index] = recipe;
                    return [...prev];
                });
                message(response.message);
            }
        } catch (e) {
            console.log(e)
        }

        setModalActive(null)
    }

    useEffect(() => {
        console.log('inst', _recipe);
        setRecipe(_recipe);
    }, []);

    return (
        <div className='background-modal active'>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <div className="login100-form">
                    <span className="login100-form-title">
                        Этапы приготовления блюда
                                </span>

                    <div className="instructions-form">
                        {recipe?.instructions?.map((instruction, i) => {
                            return (
                                <div className="instructions-content" key={i}>
                                    <p className="step-text">Шаг {instruction.step}</p>
                                    <textarea className="instructions-input"
                                              placeholder="Писать здесь..."
                                              name="description"
                                              type="text"
                                              value={instruction.description}
                                              onChange={(e) => (changeHandler(e, i))}
                                    />
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
