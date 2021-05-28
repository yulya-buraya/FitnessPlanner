import React from "react"
import "../../../styles/mealplanner.css"

export const MealplanEnergyBlock = ({mealplan}) => {
    return (
        <div className="mealplan-short-info-block">
        <p className="calorie-energy">ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ РАЦИОНА:</p>
        <div className="biodata-block">
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>Калории</span>
            </div>
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>Жиры</span>
            </div>
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>Белки</span>
            </div>
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>Углеводы</span>
            </div>
        </div>
        <div className="biodata-block">
            <div className="biodata-block-item">
                <div className="energy-background"><div className='energy-value'>{mealplan.calories}</div></div>
            </div>
            <div className="biodata-block-item">
                <div className="energy-background"> <div className='energy-value'>{mealplan.fats}</div></div>
            </div>
            <div className="biodata-block-item">
                <div className="energy-background">  <div className='energy-value'>{mealplan.proteins}</div></div>
            </div>
            <div className="biodata-block-item">
                <div className="energy-background"> <div className='energy-value'>{mealplan.carbhydrates}</div></div>
            </div>
        </div>

        <div className="biodata-block">
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>ккал</span>
            </div>
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>грамм</span>
            </div>
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>грамм</span>
            </div>
            <div className="biodata-block-item">
                <span className='text-style-for-energy'>грамм</span>
            </div>
        </div>
    </div>


    );
}