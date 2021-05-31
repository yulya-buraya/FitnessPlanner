import React, { useState } from "react"
import "../../../styles/training.css"
import { DeleteMealPlanForm } from "../../forms/DeleteMealPlanForm"
import { useDispatch } from "react-redux";
import { constructorActions } from "../../../store/Constructor/action";
import { useHistory } from "react-router-dom";


export const ActionButtonBlockMealplan = ({ setMealPlans, mealplan }) => {
    const [form, setForm] = useState(null)
    const dispatch = useDispatch();
    const history = useHistory();

    const showDeleteForm = (mealplan) => {
        setForm(<DeleteMealPlanForm setForm={setForm} setMealPlans={setMealPlans} mealplan={mealplan}/>)
    }

    console.log(mealplan);

    const editMealPlan = () => {
        dispatch(constructorActions.editMealPlan(mealplan));
        history.push('/mealplanner');
    };

    return (
        <div className="action-block">
            <table className="table-action">
                <tbody>
                <tr>
                    {mealplan && (
                        <td>
                            <img
                                className="icon-exercise-row edit"
                                src='/image/draw.svg'
                                onClick={editMealPlan}
                            />
                        </td>
                    )}
                    {mealplan && (
                        <td>
                            <img className="icon-exercise-row delete"
                                 src="/image/trash-bin.svg"
                                 onClick={() => showDeleteForm(mealplan)}/>
                        </td>
                    )}
                </tr>
                </tbody>
            </table>
            {form}
        </div>

    );
}