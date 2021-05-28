import React, {useState} from "react"
import "../../../styles/training.css"
 import { DeleteMealPlanForm } from "../../forms/DeleteMealPlanForm" 


export const ActionButtonBlockMealplan = ({setMealPlans, mealplan} ) => {
    const [form, setForm] = useState(null)

        const showDeleteForm = (mealplan) => {
  setForm(<DeleteMealPlanForm  setForm={setForm} setMealPlans={setMealPlans} mealplan={mealplan} />) 
    }
/*     const showEditForm = (exercise) => {
        setForm(<EditExerciseForm  setActive={setForm} exercise={exercise} setExercises={setExercises} />)
    } */
    return (
        <div className="action-block">
        <table className="table-action">
            <tbody>
                <tr>
                   { mealplan&&<td ><img className="icon-exercise-row edit" src='/image/draw.svg' /></td>}
                   {mealplan&&<td ><img className="icon-exercise-row delete" src="/image/trash-bin.svg" onClick={()=>showDeleteForm(mealplan)}  /></td>} 
                </tr>
            </tbody>
        </table>
        {form}
    </div>

    );
}