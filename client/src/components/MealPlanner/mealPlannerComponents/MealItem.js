import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { caloriesAction } from '../../../store/Calorie/action'
import { constructorActions } from "../../../store/Constructor/action";

export const MealItem = ({ meal, index }) => {
    const dispatch = useDispatch();
    const { current } = useSelector((state) => (state.mealConstructor));

    return <table className={current != index ? 'meals-item' : 'active-meals'}>
        <thead>
        <tr>
            <th className="mealname-cell">
                <input
                    className="mealname-input"
                    type="text"
                    value={meal.name}
                    onChange={(e) => {
                        dispatch(constructorActions.setMealName(e.target.value));
                    }}
                    placeholder="Введите название"
                />
            </th>
            <td className="count-cell"></td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {meal.products.map((product, productId) => {
            const { amount, proteins, fats, carbhydrates, calory } = product;
            const calculate = (value) => ((value * amount / 100).toFixed(2));

            return (
                <tr key={productId}>
                    <td className="mealname-cell" key={index}>
                        {product.name}
                    </td>
                    <td className="count-cell">
                        <input
                            className="count-input"
                            type="number"
                            value={product.amount}
                            onChange={(e) => {
                                console.log(index, productId);
                                dispatch(constructorActions.updateProductAmount(index, productId, e.target.value))
                            }}
                        />
                    </td>
                    <td className="amount-cell">гр</td>
                    <td className="proteins-cell">{calculate(proteins)}</td>
                    <td className="fats-cell">{calculate(fats)}</td>
                    <td className="carbohydrates-cell">{calculate(carbhydrates)}</td>
                    <td className="calories-cell">{calculate(calory)}</td>
                    <td className="remove-cell">
                        <img
                            className="cancel-food-icon"
                            src='/image/cancel.svg'
                            onClick={() => (dispatch(constructorActions.deleteMealProduct(index, productId)))}
                        />
                    </td>
                </tr>
            );
        })}
        </tbody>
    </table>
}
