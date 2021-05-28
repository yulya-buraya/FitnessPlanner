import React, { useCallback, useEffect, useState } from "react"
import "../../styles/mealplanner.css"
import { useHttp } from '../../hooks/http.hook'
import { Loader } from "../Loader"
import { useParams } from "react-router"
import { MealplanEnergyBlock } from "./mealPlannerComponents/MealplanEnergyBlock"


export const MealPlanPage = () => {
    const { request, loading } = useHttp()
    const [mealplan, setMealplan] = useState(null)
    const mealPlanId = useParams().id

    const getMealPlan = useCallback(async () => {
        try {
            const data = await request(`/api/mealplan/${mealPlanId}`, "GET", null)
            setMealplan(data)
        } catch (e) { }
    }, [mealPlanId, request])

    useEffect(() => {
        getMealPlan()
    }, [])
    if (loading) {
        return <Loader />
    }

    return (
        <div className="mealplans-content">
            <div className="mealplan-submenu">
                {!loading && mealplan && <p className="title-mealplan">{mealplan.name}</p>}
                {!loading && mealplan && <MealplanEnergyBlock mealplan={mealplan} />}
            </div>
            <div className="mealplan-block">
                <fieldset className="mealplan-fieldset">
                    <legend className="text-header-mealplan" align="center">ПЛАН ПИТАНИЯ</legend>
                    <div className="mealplan-products">
                        {
                            mealplan && (mealplan.meals).map((meal) => {
                                return <div key={meal._id}>
                                    <p className="meal-name-title">{meal.name}</p>
                                    <ul class="oglavl">
                                        {
                                            meal && (meal.products).map((product) => {
                                                {console.log(product.name)}
                                               return <li key={product._id}>
                                                <span class="text">{product.name}</span>
                                                <span class="page">{product.amount} гр. </span>
                                            </li>
                                            })}
                                    </ul>
                                </div>
                            })}
                    </div>
                </fieldset>
            </div>
        </div>


    );
}