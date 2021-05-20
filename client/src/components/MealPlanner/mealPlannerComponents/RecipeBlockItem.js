import React from "react"
import "../../../styles/mealplanner.css"
import { ActionButtonBlock } from "../../TrainingPlanning/workoutComponents/ActionButtonBlock"
import { useHistory } from 'react-router-dom'

export const RecipeBlockItem = ({ setRecipes, recipe }) => {
    const history = useHistory()
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    const openRecipe = () => {
        history.push(`/recipes/${recipe._id}`)
    }
    if (role == "user") {
        return (
            <div className="recipe-item"  onClick={() => openRecipe()}>
                <div className="recipe-image">
                    <img src="/image/eda.jpg" />
                </div>
                <div >
                    <p className="text-style-for-name-recipe">{recipe.food.name} </p>
                    <div className="short-info-recipe">
                        <div className="recipe-short-value">
                            <img className="icon-recipe" src='/image/icon-clock.svg' />
                            <span>	&#8195; {recipe.duration}</span>
                        </div>
                        <hr />
                        <div className="recipe-short-value">
                            <img className="icon-recipe" src='/image/serving.svg' />
                            <span>	&#8195; {recipe.servings}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return <div className="recipe-item-for-admin"  onClick={() => openRecipe()}>
            <img className="recipe-image-for-admin" src="/image/eda.jpg" />
            <div className="short-info-recipe-for-admin ">
                <h1 className="header-plan-recipe">{recipe.food.name} </h1>
                <table className="table-info-recipe">
                    <tbody>
                        <tr >
                            <th>Белки,<br />гр:</th>
                            <th>Жиры,<br />гр:</th>
                            <th>Углеводы,<br />гр:</th>
                            <th>калории,<br />ккал:</th>
                        </tr>
                        <tr className="value-recipe">
                            <td>{recipe.food.proteins}</td>
                            <td>{recipe.food.fats}</td>
                            <td>{recipe.food.carbhydrates}</td>
                            <td>{recipe.food.calory}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />  
                <br />

                <div className="info-recipe-block">
                <p className="value-recipe"><span className="text-subtitle-recipe">Время готовки: </span> {recipe.duration} </p>
                <p className="value-recipe"><span className="text-subtitle-recipe">Количество порций: </span>{recipe.servings}</p>
                </div>
             </div>
            <ActionButtonBlock setRecipes={setRecipes} recipe={recipe} />
        </div>
    }
}