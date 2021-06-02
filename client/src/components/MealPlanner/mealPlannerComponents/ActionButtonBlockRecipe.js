import React, { useState } from "react"
import "../../../styles/training.css"
import { DeleteRecipeForm } from "../../forms/DeleteRecipeForm"
import { EditRecipeForm } from "../../forms/EditRecipeForm";


export const ActionButtonBlockRecipe = ({ setRecipes, recipe }) => {
    const [form, setForm] = useState(null)

    const showDeleteForm = () => {
        setForm(<DeleteRecipeForm setForm={setForm} setRecipes={setRecipes} recipe={recipe}/>)
    };

    const showEditForm = () => {
        setForm(<EditRecipeForm setModalFormActive={setForm} _recipe={recipe} setRecipes={setRecipes}/>)
    };

    return (
        <div className="action-block">
            <table className="table-action">
                <tbody>
                <tr>
                    <td>
                        <img
                            className="icon-exercise-row edit"
                            src='/image/draw.svg'
                            onClick={() => showEditForm()}
                        />
                    </td>
                    <td>
                        <img
                            className="icon-exercise-row delete"
                            src="/image/trash-bin.svg"
                            onClick={() => showDeleteForm()}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            {form}
        </div>

    );
}