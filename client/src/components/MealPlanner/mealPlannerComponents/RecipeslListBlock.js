import React from "react"
import "../../../styles/mealplanner.css"
import { RecipeBlockItem } from "./RecipeBlockItem" 

export const RecipesListBlock = ({setRecipes, recipes}) => {
    if (!recipes.length) {
        return (
            <div className="not-foung-block">
            <img className="not-found-icons" src="/image/not-found.jpg" />
            <p className="text-align-center">В базе данных нет ни одного рецепта!</p> 
            </div>
        )
    }
    return (
        <div className="list-recipes">
            {recipes.map((recipe) => {
                return <RecipeBlockItem  key={recipe._id} recipe={recipe} setRecipes={setRecipes} />
            })}
        </div>
    );
}