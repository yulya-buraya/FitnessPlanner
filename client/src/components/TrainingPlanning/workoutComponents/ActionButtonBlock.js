import React, { useState } from "react"
import "../../../styles/training.css"
import { DeleteWorkoutForm } from "../../forms/DeleteWorkoutForm"
import { EditWorkoutForm } from "../../forms/EditWorkoutForm";


export const ActionButtonBlock = ({ workout, setWorkouts }) => {
    const [form, setForm] = useState(null)

    const showDeleteForm = () => {
        setForm(<DeleteWorkoutForm setForm={setForm} workout={workout} setWorkouts={setWorkouts}/>)
    }

    const showEditForm = () => {
        setForm(<EditWorkoutForm setModalFormActive={setForm} workout={workout} setWorkouts={setWorkouts}/>)
    }
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
                            onClick={() => showDeleteForm(workout)}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            {form}
        </div>

    );
}