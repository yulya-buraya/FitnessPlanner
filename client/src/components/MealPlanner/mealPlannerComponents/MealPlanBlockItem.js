import React, { useEffect } from "react"
import "../../../styles/mealplanner.css"
import { ActionButtonBlockMealplan } from "./ActionButtonBlockMealplan"
import { useHistory } from 'react-router-dom'

export const MealPlanBlockItem = ({ setMealPlans, mealPlan }) => {
    const history = useHistory()

    const openMealPlan = () => {
        history.push(`/mealplan/${mealPlan._id}`)
    };

    return (
        <div className="mealplan-item">
            <div className="mealplans-image">
                <img src="/image/food1.svg"/>
            </div>
            <div className="short-info-recipe-for-admin " onClick={() => openMealPlan()}>
                <h1 className="header-plan-recipe">{mealPlan.name} </h1>
                <br/>
                <table className="table-info-recipe">
                    <tbody>
                    <tr>
                        <th>Белки,<br/>гр:</th>
                        <th>Жиры,<br/>гр:</th>
                        <th>Углеводы,<br/>гр:</th>
                        <th>калории,<br/>ккал:</th>
                    </tr>
                    <tr className="value-recipe">
                        <td>{mealPlan.proteins}</td>
                        <td>{mealPlan.fats}</td>
                        <td>{mealPlan.carbhydrates}</td>
                        <td>{mealPlan.calories}</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
                <div className="info-recipe-block">
                    <p className="value-count-meals"><span
                        className="text-subtitle-meals">Количество приёмов пищи: </span>{mealPlan.meals.length}</p>
                </div>
            </div>
            {mealPlan && <ActionButtonBlockMealplan setMealPlans={setMealPlans} mealplan={mealPlan}/>}
        </div>
    );
}
