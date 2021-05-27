import React, { useCallback, useContext, useEffect, useState } from "react"
import { ButtonSubmenuMealPlan } from "../components/MealPlanner/mealPlannerComponents/ButtonSubmenuMealPlan"
import { SubmenuContentMealPlans } from "../components/MealPlanner/mealPlannerComponents/SubmenuContentMealPlans"
import { AuthContext } from '../context/AuthContext.js'
import { Loader } from '../components/Loader'
import { useSelector } from 'react-redux';
import { useHttp } from '../hooks/http.hook'
import { ButtonsBlock } from '../components/MealPlanner/mealPlannerComponents/ButtonsBlock'
import { MealItem } from "../components/MealPlanner/mealPlannerComponents/MealItem"

export const MealPlannerPage = () => {
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    const [countMeals, setCountMeals] = useState("3")
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [products, setProducts] = useState("")
    const { biodata } = useSelector((state) => state)
    useEffect(async () => {
        const fetchFood = async () => {
            try {
                const data = await request('/api/food/', 'GET', null)
                setProducts(data)
            } catch (e) {

            }
        };
        await fetchFood()
    }, [])
    if (loading) {
        return <Loader />
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
                            <span className="label-count-meal">Количество приемов пищи:</span>&nbsp;&nbsp;
                            <input className="count-meal" type="number" value={countMeals} min="3" onChange={(e) => { setCountMeals(e.target.value) }} />
                            <div className="content-constructor-mealplans">
                                <div className="constructor-mealplan">
                                    <table className="mealplans-table" >
                                        <thead>
                                            <tr>
                                                <th className="mealname-cell">Приём пищи</th>
                                                <th className="count-cell"></th>
                                                <th className="amount-cell"></th>
                                                <th className="proteins-cell">Б</th>
                                                <th className="fats-cell">Ж</th>
                                                <th className="carbohydrates-cell">У</th>
                                                <th className="calories-cell">Ккал</th>
                                                <th className="remove-cell"></th>
                                            </tr>
                                        </thead>
                                    </table>
                                    {countMeals > 0 ? [...Array(parseInt(countMeals))].map((n, i) => {
                                        return <MealItem key={i}/>
                                    })
                                        : null}
                                        <br/>
                                    <table className="mealplans-results" >
                                        <thead>
                                            <tr>
                                                <th className="mealname-cell"></th>
                                                <th className="count-cell"></th>
                                                <th className="amount-cell"></th>
                                                <th className="proteins-cell">Б</th>
                                                <th className="fats-cell">Ж</th>
                                                <th className="carbohydrates-cell">У</th>
                                                <th className="calories-cell">Ккал</th>
                                                <th className="remove-cell"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="mealname-cell">Итого в таблице</th>
                                                <th className="count-cell"></th>
                                                <th className="amount-cell"></th>
                                                <th className="proteins-cell">0</th>
                                                <th className="fats-cell">0</th>
                                                <th className="carbohydrates-cell">0</th>
                                                <th className="calories-cell">0</th>
                                                <th className="remove-cell"></th>
                                            </tr>
                                                  {biodata.value&& <tr>
                                                <th className="mealname-cell">Ваш идеальный рацион должен содержать:</th>
                                                <th className="count-cell"></th>
                                                <th className="amount-cell"></th>
                                                <th className="proteins-cell">{biodata.value.proteins}</th>
                                                <th className="fats-cell">{biodata.value.fats}</th>
                                                <th className="carbohydrates-cell">{biodata.value.carbohydrates}</th>
                                                <th className="calories-cell">{biodata.value.calories}</th>
                                                <th className="remove-cell"></th>
                                            </tr>}
                                        </tbody>
                                    </table>
                                </div>
                                {!loading && products && <ButtonsBlock products={products} />}
                            </div>
                        </div>

                    </div> :
                    <div className="mealplans-content">
                        <SubmenuContentMealPlans />
                        <div className="header-for-table">Планы питания</div>
                        <br />

                    </div>
            }

        </>

    );
}