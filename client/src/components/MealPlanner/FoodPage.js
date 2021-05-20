import React, { useEffect, useState, useCallback } from "react"
import { useHttp } from '../../hooks/http.hook'
import { SubmenuContentFood } from "./mealPlannerComponents/SubmenuContentFood"
import {FoodList} from "./mealPlannerComponents/FoodList"
import "../../styles/page.css"
import {Loader} from "../Loader"


export const FoodPage = () => {
    const [food, setFood] = useState([])
    const { request, loading } = useHttp()

    const fetchFood = useCallback(async () => {
        try {
            const data = await request('/api/food/', 'GET', null)
            setFood(data)
        } catch (e) {

        }
    }, [request])

    useEffect(() => {
        fetchFood()
    }, [])
    if (loading) {
        return <Loader/>
    }

    return (
        <div className="food-content">
        {
     <SubmenuContentFood setFood={setFood} food={food}/>
        }

        <div className="header-for-table">ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ <br/> (НА 100 ГРАММ ПРОДУКТА)</div>
        <br />
        <br/>
         {!loading && food && <FoodList foods={food} setFood={setFood} />} 
    </div>
    );
}