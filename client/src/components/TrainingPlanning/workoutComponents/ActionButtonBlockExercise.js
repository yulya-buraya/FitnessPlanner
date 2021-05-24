import React,{useState} from "react"
import "../../../styles/training.css"
import { DeleteExerciseForm } from "../../../components/forms/DeleteExerciseForm"
import { EditExerciseForm } from "../../../components/forms/EditExerciseForm"


export const ActionButtonBlockExercise = ({exercise, setExercises}) => {
    const [form, setForm] = useState(null)

        const showDeleteForm = (exercise) => {
        setForm(<DeleteExerciseForm  setForm={setForm} exercise={exercise} setExercises={setExercises} />)
    }
    const showEditForm = (exercise) => {
        setForm(<EditExerciseForm  setActive={setForm} exercise={exercise} setExercises={setExercises} />)
    }
    return (
        <div className="action-block">
        <table className="table-action">
            <tbody>
                <tr>
                    <td ><img className="icon-exercise-row edit" src='/image/draw.svg' onClick={()=>showEditForm(exercise)} /></td>
                    <td ><img className="icon-exercise-row delete" src="/image/trash-bin.svg" onClick={()=>showDeleteForm(exercise)} /></td>
                </tr>
            </tbody>
        </table>
        {form}
    </div>

    );
}