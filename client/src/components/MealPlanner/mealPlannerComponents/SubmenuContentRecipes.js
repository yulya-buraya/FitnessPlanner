import React, { useState, useRef, useEffect } from "react"
import "../../../styles/training.css"
import { AddRecipeForm } from "../../forms/AddRecipeForm";
 
export const SubmenuContentRecipes = ({ setRecipes, recipes }) => {
    const role=JSON.parse(localStorage.getItem("userdata")).role[0]
    const [modalFormActive, setModalFormActive] = useState(null)
    const buffer = useRef({settled: false, data: null});
    const searchInput = useRef(null);

    function filterRecipes(value, recipes) {
        return recipes.filter(recipe => {
            if (recipe.food.name.includes(value)) {
                return true;
            }
            return false;
        })
    }
    const searchRecipe = (e) => {
        let value = searchInput.current.value;
        console.log(recipes);
        let findRecipe = filterRecipes(value, recipes);

        if(value == '') {
            return setRecipes(buffer.current.data);
        }

        setRecipes(findRecipe)
    }

    useEffect(() => {
        if(!buffer.current.settled) {
            buffer.current = {
                data: recipes,
                settled: recipes.length ? true: false
            };
        }
    }, [recipes]);

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