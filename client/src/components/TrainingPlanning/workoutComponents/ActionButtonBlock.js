import React from "react"
import "../../../styles/training.css"


export const ActionButtonBlock = (exercises) => {
    return (
        <div className="action-block">
        <table className="table-action">
            <tbody>
                <tr>
                    <td ><img className="icon-exercise-row edit" src='/image/draw.svg' /></td>
                    <td ><img className="icon-exercise-row delete" src="/image/trash-bin.svg" /></td>
                </tr>
            </tbody>
        </table>
    </div>

    );
}