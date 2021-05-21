import React from "react"
import "../../../styles/mealplanner.css"

export const IngregientsBlock = ({ ingredients, servings }) => {
    return (
        <div className="ingredients-block">
            <div className="flex-horizontal-align">
                <div className="ingredient-header-block" >ИНГРЕДИЕНТЫ</div>
            </div>
            <br />
            <ul class="oglavl">
                {ingredients.map((ingredient, i) => {
                   return ( <li key={ingredient._id}>
                        <span class="text">{ingredient.name}</span>
                        <span class="page">{ingredient.count} {ingredient.metric} </span>
                    </li>
                    )
                })}

            </ul> 
   


        </div>
    );
}