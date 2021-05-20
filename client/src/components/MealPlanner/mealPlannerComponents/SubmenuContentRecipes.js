import React, { useState, useRef } from "react"
import "../../../styles/training.css"
import { AddRecipeForm } from "../../forms/AddRecipeForm";
 
export const SubmenuContentRecipes = ({ setRecipes, recipes }) => {
    const role=JSON.parse(localStorage.getItem("userdata")).role[0]
    const [modalFormActive, setModalFormActive] = useState(null)
    const searchInput = useRef(null);

    function filterRecipes(value, recipes) {
        return recipes.filter(recipe => {
            if (recipe.name.includes(value)) {
                return true;
            }
            return false;
        })
    }
    const searchRecipe = (e) => {
        let value = searchInput.current.value;
        let findRecipe = filterRecipes(value, recipes);

        setRecipes(findRecipe)
    }


    return (
        <div className="submenu-recipe">
            {(role=="admin")?<button className="btn-create"
                id="addRecipe"
                onClick={() => {
                    setModalFormActive(<AddRecipeForm setModalFormActive={setModalFormActive} setRecipes={setRecipes}/>) 
                }}>
                СОЗДАТЬ
            </button>:null}
            <div className="search-input-block">
                <input type="text" placeholder="Искать рецепт здесь..." id="searchInput" ref={searchInput}
                onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            searchRecipe()
                        }
                    }} />
                <button type="submit"  onClick={searchRecipe}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
           
       {
        modalFormActive
            } 
        </div>
    );
}