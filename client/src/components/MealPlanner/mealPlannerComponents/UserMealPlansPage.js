import React from "react"
import "../../../styles/page.css"

export const UserMealPlansPage = () => {
    return (
        <div className="content">
            <div className="text-like-header">Мои планы питания</div>
            <hr className="hr-for-table" />
            <br />
            <br />
            <img className="not-found-icons" src="/image/not-found.jpg" />
            <p className="text-align-center">У вас ещё нет планлв питания!</p>
        </div>
    );
}