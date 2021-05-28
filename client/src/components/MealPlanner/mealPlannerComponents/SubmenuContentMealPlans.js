import React, { useState } from "react"
import "../../../styles/training.css"
export const SubmenuContentMealPlans = ({setMealPlans}) => {

    return (
        <div className="submenu-food">
            <div className="search-input-block">
                <input type="text" placeholder="Искать здесь..."/>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
      
        </div>
    );
}