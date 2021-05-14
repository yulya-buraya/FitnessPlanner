import React from "react"
import "../../../styles/page.css"

export const UserWorkoutsPage = () => {
    return (
        <div className="content">
            <div className="text-like-header">Мои программы тренировок</div>
            <hr className="hr-for-table" />
            <br />
            <br />
            <img className="not-found-icons" src="/image/not-found.jpg" />
            <p className="text-align-center">В базе данных нет упражнений!</p>
        </div>
    );
}