import React, {useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { caloriesAction } from '../../../store/Calorie/action'
export const MealItem = ({key}) => {
    {
        const [amount, setAmount] = useState("100")
        const [calories, setCalories]=useState(400)
        const [fats, setFats]=useState(10)
        const [proteins, setProteins]=useState(20)
        const[carbohydrates, setCarbohydrates]=useState(56)
        
           useEffect(()=>{
            setProteins((20*amount/100).toFixed(2))
            setCalories((400*amount/100).toFixed(2))
            setCarbohydrates((56*amount/100).toFixed(2))
            setFats((10*amount/100).toFixed(2))
   

        },[amount])

        return <table className="meals-item" >
            <thead>
                <tr>
                    <th className="mealname-cell">
                        <input className="mealname-input" type="text" placeholder="Введите названия приема пищи" />
                    </th>
                    <td className="count-cell"></td>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="mealname-cell" key={key}>
                        Сырники с шоколадом
                    </td>
                    <td className="count-cell"> <input className="count-input" type="number" value={amount} onChange={(e) => {setAmount(e.target.value) }} /></td>
                    <td className="amount-cell">гр</td>
                    <td className="proteins-cell">{proteins}</td>
                    <td className="fats-cell">{fats}</td>
                    <td className="carbohydrates-cell">{carbohydrates}</td>
                    <td className="calories-cell">{calories}</td>
                    <td className="remove-cell"><img className="cancel-food-icon" src='/image/cancel.svg'/></td>
                 </tr>

            </tbody>
        </table>
    }
}
