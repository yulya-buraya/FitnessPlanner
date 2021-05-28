import React from "react"
import "../../../styles/mealplanner.css"
import { MealPlanBlockItem } from "./MealPlanBlockItem"

export const MealPlansListBlock = ({ setMealPlans, mealPlans }) => {
    if (!mealPlans.length) {
        return (
            <div className="not-foung-block">
                <img className="not-found-icons" src="/image/not-found.jpg" />
                <p className="text-align-center">У вас ещё нет планов питания!</p>
            </div>
        )
    
    }
    return (
        <div className="list-mealplans">
            {mealPlans.map((mealPlan) => {
                return <MealPlanBlockItem mealPlan={mealPlan} setMealPlans={setMealPlans} />
            })}
        </div>
    );
}