import React, { useState } from "react"
import "../../../styles/training.css"
export const SubmenuContentMealPlans = ({}) => {

    return (
        <div className="submenu-food">
            <button className="btn-create"
                    id="addMealPlan"
                >
                СОЗДАТЬ
            </button>
            <div className="search-input-block">
                <input type="text" placeholder="Искать здесь..."/>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
      
        </div>
    );
}