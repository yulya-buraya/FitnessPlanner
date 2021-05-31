import React, { useContext,useState, useEffect, useCallback } from "react"
import { useHttp } from '../../../hooks/http.hook'
import { Loader } from "../../Loader";
import "../../../styles/page.css"
import "../../../styles/mealplanner.css"
import { AuthContext } from '../../../context/AuthContext'
import {MealPlansListBlock} from '../mealPlannerComponents/MealPlansListBlock'
import { SubmenuContentMealPlans } from "./SubmenuContentMealPlans";


export const UserMealPlansPage = () => {
    const auth = useContext(AuthContext)
    const [mealPlans, setMealPlans] = useState([])
    const { request, loading } = useHttp()

    const fetchMealPlans = useCallback(async () => {
        try {
            const data = await request(`/api/mealplan/mealplans/${auth.userId}`, 'GET', null)
            setMealPlans(data)
        } catch (e) {

        }
    }, [request])

    useEffect(() => {
        fetchMealPlans()
    }, [])

    if (loading) {
        return <Loader/>
    }
    return (
        
        <div className="mealplans-content">
            <SubmenuContentMealPlans mealPlans={mealPlans} setMealPlans={setMealPlans}/>
            <div className="text-like-header">Мои планы питания</div>
            {!loading && mealPlans && <MealPlansListBlock mealPlans={mealPlans} setMealPlans={setMealPlans}/>}
         </div>
    );
}
