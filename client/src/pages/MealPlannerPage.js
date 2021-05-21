import React,{ useCallback, useContext, useEffect, useState } from "react"
import { ButtonSubmenuMealPlan } from "../components/MealPlanner/mealPlannerComponents/ButtonSubmenuMealPlan"
import { SubmenuContentMealPlans } from "../components/MealPlanner/mealPlannerComponents/SubmenuContentMealPlans"
import { AuthContext } from '../context/AuthContext.js'
import {Loader} from '../components/Loader'
import { BiodataBlock } from "../components/BiodataBlock"
import { useHttp } from '../hooks/http.hook'


export const MealPlannerPage = () => {
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    const [biodata, setBiodata] = useState(null)
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()

if (loading) {
    return <Loader/>
}
    return (
        <>

            {
                role == "user" ?
                    <div className="mealplans-content">
                        <div className="mealplans-submenu">
                            <ButtonSubmenuMealPlan />
                        </div>
                        <div className="header-for-table">Конструктор плана питания</div>
                         <br />  
                         <div className="mealplans-constructor-block">
                       {/*     <span>Количество приемов пищи:   </span>
                             <input className="count-meal"/> 
                              <div className="constructor-mealplan"></div>
                             <div className="products-list"></div>  */}
                         </div>

                    </div> :
                       <div className="mealplans-content">
                             <SubmenuContentMealPlans/>
                             <div className="header-for-table">Планы питания</div>
                         <br />  
                  
                   </div>
            }

        </>

    );
}