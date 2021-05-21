import React, { useState, useEffect, useCallback } from "react"
import "../../styles/training.css"
import { useHttp } from '../../hooks/http.hook'
import { Loader } from "../Loader"
import { useParams } from 'react-router-dom'
import {RecipeEnergyBlock} from "./mealPlannerComponents/RecipeEnergyBlock"
import { IngregientsBlock } from "./mealPlannerComponents/IngredientsBlock"

export const RecipeInfoPage = () => {
    const { request, loading } = useHttp()
    const [recipe, setRecipe] = useState(null)
    const recipeId = useParams().id

    const getRecipe = useCallback(async () => {
        try {
            const data = await request(`/api/recipe/${recipeId}`, "GET", null)
            setRecipe(data)
        } catch (e) { }
    }, [recipeId, request])

    useEffect(() => {
        getRecipe()
    }, [])

    if (loading) {
        return <Loader />
    }
    return (
        <div className="recipe-content">
            <div className="recipe-name">
                {!loading && recipe && recipe.food.name}
            </div>
            <div className="image-and-ingredients">
                <div>
                <div className="recipe-image-block">
                    <img src="/image/eda.jpg" />
                </div>
                {!loading && recipe && <RecipeEnergyBlock recipe={recipe}/>}
                </div>
                {!loading && recipe && <IngregientsBlock servings={recipe.servings} ingredients={recipe.ingredients}/>}
            </div>
            <div className="instructions-block">
            <div className="instructions-block-header" >Инструкция по приготовлению блюда:</div>
            </div>
        </div>
    );
}