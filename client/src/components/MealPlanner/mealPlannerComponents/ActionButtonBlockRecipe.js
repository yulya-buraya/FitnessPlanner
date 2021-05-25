import React, {useState} from "react"
import "../../../styles/training.css"
import { DeleteRecipeForm } from "../../forms/DeleteRecipeForm"


export const ActionButtonBlockRecipe = ({setRecipes, recipe} ) => {
    const [form, setForm] = useState(null)

        const showDeleteForm = (recipe) => {
        setForm(<DeleteRecipeForm  setForm={setForm} setRecipes={setRecipes} recipe={recipe} />)
    }
/*     const showEditForm = (exercise) => {
        setForm(<EditExerciseForm  setActive={setForm} exercise={exercise} setExercises={setExercises} />)
    } */
    return (
        <div className="action-block">
        <table className="table-action">
            <tbody>
                <tr>
                    <td ><img className="icon-exercise-row edit" src='/image/draw.svg' /></td>
                    <td ><img className="icon-exercise-row delete" src="/image/trash-bin.svg" onClick={()=>showDeleteForm(recipe)} /></td>
                </tr>
            </tbody>
        </table>
        {form}
    </div>

    );
}