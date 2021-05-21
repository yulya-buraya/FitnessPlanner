import React from "react"
import { NavLink } from "react-router-dom"
import "../../../styles/mealplanner.css"


export const ButtonSubmenuMealPlan = () => {
    return (
     /*    <div className="btn-submenu-mealplanning">  */
            <NavLink className="my-mealplans-btn"
                to={`/mealplanner/${123}`} >
                <button /* className="my-mealplans-btn" */
                    id="geMealplans">
                    МОИ ПЛАНЫ
                        </button>
            </NavLink>
      /*       <NavLink className="submenu-btn"
                to={`#`} >
                <button className="submenu-btn"
                    id="addMealPlanner">
                   ГОТОВЫЕ ПЛАНЫ
                </button>
            </NavLink> */
      /*   </div>  */

    );
}