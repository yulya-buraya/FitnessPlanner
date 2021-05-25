import React from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useHttp } from "../../hooks/http.hook"
import { useMessage } from '../../hooks/message.hook'


export const DeleteRecipeForm = ({ setForm, recipe, setRecipes}) => {

    
    const message = useMessage()
    const { request } = useHttp()

    const cancelHandler = () => {
        setForm(null)
    }
    const DeleteRecipe = async (id) => {
         const data = await request('api/recipe/delete', 'DELETE', { id })
        setRecipes(prev => {
            const recipes = [...prev];
            if (recipes.indexOf(recipe) >= 0) {
                recipes.splice(recipes.indexOf(recipe), 1);
            }
            return recipes
        })
  
        message(data.message)
        setForm(null)
    }
    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить рецепт  <span
                        className="important-text">{recipe.food.name}</span> ?</p>
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
                            onClick={() => DeleteRecipe(recipe._id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}