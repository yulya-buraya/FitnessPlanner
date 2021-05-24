import React, {useState} from "react"
import "../../../styles/training.css"
import { DeleteWorkoutForm } from "../../forms/DeleteWorkoutForm"


export const ActionButtonBlock = ({workout, setWorkouts}) => {
    const [form, setForm] = useState(null)

        const showDeleteForm = (workout) => {
        setForm(<DeleteWorkoutForm  setForm={setForm} workout={workout} setWorkouts={setWorkouts} />)
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
                    <td ><img className="icon-exercise-row delete" src="/image/trash-bin.svg" onClick={()=>showDeleteForm(workout)} /></td>
                </tr>
            </tbody>
        </table>
        {form}
    </div>

    );
}