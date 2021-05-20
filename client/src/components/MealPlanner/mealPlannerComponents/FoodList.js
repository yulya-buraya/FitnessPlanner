import React, { useState } from "react"
/* import { DeleteUserForm } from "../components/forms/DeleteUserForm"
 */
import { useHttp } from "../../../hooks/http.hook";
import { DeleteFoodForm } from "../../forms/DeleteFoodForm";
import { EditFoodForm } from "../../forms/EditFoodForm";


export const FoodList = ({ foods, setFood }) => {

    const { request } = useHttp()
    const [form, setForm] = useState(null)

        const deleteFood = async (id) => {
        await request('api/food/delete', 'DELETE', { id })
        let index = foods.findIndex((u) => u._id === id)
        setFood((prevFood) => prevFood.filter((u, i) => i != index))
        setForm(null)
    } 

    const showDeleteForm = (food) => {
        setForm(<DeleteFoodForm deleteFood={deleteFood} food={food} setForm={setForm}/>) 
    } 
    const showEditForm = (food) => {
        setForm(<EditFoodForm food={food} setEditForm={setForm} setFood={setFood}/>) 
    } 

    if (!foods.length) {
        return (
            <div className="not-foung-block">
                <img className="not-found-icons" src="image/not-found.jpg"/>
                <p className="text-align-center">Данные не найдены!</p>
            </div>
        )
    }
    return (
        <div className='food-content-block'>
            <table id="food">
                <tbody>
                <tr>
                    <th>№</th>
                    <th>Название продукта или блюда</th>
                    <th>Категория</th>
                    <th>Белки,<br/> грамм</th>
                    <th>Жиры,<br/>  грамм</th>
                    <th>Углеводы,<br/>  грамм</th>
                    <th>Калорийность,<br/>  ккал</th>
                    <th>Изменить<br/></th>
                    <th>Удалить<br/></th>
                </tr>
                {foods.map((food, index) => {
                    return (
                        <tr key={food._id}>
                            <td>{index + 1}</td>
                            <td>{food.name}</td>
                            <td>{food.category}</td>
                            <td>{food.proteins}</td>
                            <td>{food.fats}</td>
                            <td>{food.carbhydrates}</td>
                            <td>{food.calory}</td>
                            <td>
                                <img
                                    className="edit-icons"
                                    src="image/draw.svg"
                                    onClick={() => showEditForm(food)}
                                />
                            </td>
                            <td>
                                <img
                                    className="delete-icons"
                                    src="image/trash-bin.svg"
                                    onClick={() => showDeleteForm(food)}
                                />
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {form}
        </div>
    )
}