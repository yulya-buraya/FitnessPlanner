import React, { useCallback, useEffect, useState } from "react"
import "../../styles/mealplanner.css"
import { useHttp } from '../../hooks/http.hook'
import { RecipesListBlock } from "./mealPlannerComponents/RecipeslListBlock"
import { SubmenuContentRecipes } from "./mealPlannerComponents/SubmenuContentRecipes"
import { Loader } from "../Loader"


export const RecipesPage = () => {
    const [recipes, setRecipes] = useState([])
    const { request, loading } = useHttp()
    const fetchRecipes = useCallback(async () => {
         try {
             const data = await request('/api/recipe/', 'GET', null)
             setRecipes(data)
         } catch (e) {
 
         }
     }, [request])
 
     useEffect(async () => {
         await fetchRecipes()
     }, []) 

    if (loading) {
        return <Loader />
    }

    return (
        <div className="recipes-content">
            <SubmenuContentRecipes setRecipes={setRecipes} recipes={recipes} /> 
            <div className="header-for-table">Рецепты</div>
            <br />
      {!loading && recipes && <RecipesListBlock recipes={recipes} setRecipes={setRecipes} />} 
        </div>


    );
}