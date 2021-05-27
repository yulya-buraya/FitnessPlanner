import React, { useCallback, useContext, useEffect, useState } from "react"
import { ButtonSubmenuMealPlan } from "../components/MealPlanner/mealPlannerComponents/ButtonSubmenuMealPlan"
import { SubmenuContentMealPlans } from "../components/MealPlanner/mealPlannerComponents/SubmenuContentMealPlans"
import { AuthContext } from '../context/AuthContext.js'
import { Loader } from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../hooks/http.hook'
import { ButtonsBlock } from '../components/MealPlanner/mealPlannerComponents/ButtonsBlock'
import { MealItem } from "../components/MealPlanner/mealPlannerComponents/MealItem"
import { constructorActions } from "../store/Constructor/action";

export const MealPlannerPage = () => {
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    const [countMeals, setCountMeals] = useState(3)
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [products, setProducts] = useState("")
    const dispatch = useDispatch()
    const idealBiodata = useSelector((state) => (state.biodata));
    const { meals, biodata } = useSelector((state) => (state.mealConstructor));

    useEffect(() => {
        dispatch(constructorActions.addMeals(countMeals));
    }, [countMeals]);

    useEffect(async () => {
        const fetchFood = async () => {
            try {
                const data = await request('/api/food/', 'GET', null)
                setProducts(data)
            } catch (e) {
                console.log(e.message);
            }
        };
        await fetchFood()
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {
                role == "user" ?
                    <div className="mealplans-content">
                        <div className="mealplans-submenu">
                            <ButtonSubmenuMealPlan/>
                        </div>
                        <div className="header-for-table">Конструктор плана питания</div>
                        <br/>
                        <div className="mealplans-constructor-block">
                            <span className="label-count-meal">Количество приемов пищи:</span>&nbsp;&nbsp;
                            <input
                                className="count-meal"
                                type="number"
                                value={countMeals}
                                min="3"
                                onChange={(e) => {
                                    setCountMeals(+e.target.value)
                                }}
                            />
                            <div className="content-constructor-mealplans">
                                <div className="constructor-mealplan">
                                    <table className="mealplans-table">
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
                                    {countMeals > 0 && meals?.map((meal, i) => {
                                        return (
                                            <div
                                                onClick={() => (dispatch(constructorActions.setActiveMeal(i)))}
                                                key={i}
                                            >
                                                <MealItem meal={meal} index={i}/>
                                            </div>
                                        );
                                    })}
                                    <br/>
                                    <table className="mealplans-results">
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
                                            <th className="proteins-cell">{biodata.proteins.toFixed(2)}</th>
                                            <th className="fats-cell">{biodata.fats.toFixed(2)}</th>
                                            <th className="carbohydrates-cell">{biodata.carbhydrates.toFixed(2)}</th>
                                            <th className="calories-cell">{biodata.calory.toFixed(2)}</th>
                                            <th className="remove-cell"></th>
                                        </tr>
                                        {console.log(!!idealBiodata.value)}
                                        {idealBiodata && <tr>
                                            <th className="mealname-cell">Ваш идеальный рацион должен содержать:</th>
                                            <th className="count-cell"></th>
                                            <th className="amount-cell"></th>
                                            <th className="proteins-cell">{idealBiodata.proteins}</th>
                                            <th className="fats-cell">{idealBiodata.fats}</th>
                                            <th className="carbohydrates-cell">{idealBiodata.carbohydrates}</th>
                                            <th className="calories-cell">{idealBiodata.calories}</th>
                                            <th className="remove-cell"></th>
                                        </tr>}
                                        </tbody>
                                    </table>
                                </div>
                                {!loading && products && <ButtonsBlock products={products}/>}
                            </div>
                        </div>

                    </div> :
                    <div className="mealplans-content">
                        <SubmenuContentMealPlans/>
                        <div className="header-for-table">Планы питания</div>
                        <br/>
                    </div>
            }

        </>

    );
}