import React from "react"
import "../../../styles/mealplanner.css"

export const InstructionsBlock = ({ instructions, servings }) => {
    return (
        <div className="instructions-block">
        <div className="instructions-block-header" >Инструкция по приготовлению блюда</div>
        <div className="instruction-list">
        {instructions.map((instruction, i) => {
                   return ( <div key={instruction._id}>
                        
                        <p class="description"><span class="step">{instruction.step}&ensp;</span>&ensp;{instruction.description}</p>
                    </div>
                    )
                })}
        </div>
        </div>
    );
}