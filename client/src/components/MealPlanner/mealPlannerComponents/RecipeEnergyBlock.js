import React from "react"
import "../../../styles/mealplanner.css"

export const RecipeEnergyBlock = ({recipe}) => {
    return (
        <div className="recipe-short-info-block">
            <p className="calorie-energy">ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ НА 100 ГРАММ:</p>
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
                    <div className="style-for-energy-background"><div className='style-for-energy-value'>{recipe.food.calory}</div></div>
                </div>
                <div className="biodata-block-item">
                    <div className="style-for-energy-background"> <div className='style-for-energy-value'>{ recipe.food.fats}</div></div>
                </div>
                <div className="biodata-block-item">
                    <div className="style-for-energy-background">  <div className='style-for-energy-value'>{ recipe.food.proteins}</div></div>
                </div>
                <div className="biodata-block-item">
                    <div className="style-for-energy-background"> <div className='style-for-energy-value'>{ recipe.food.carbhydrates}</div></div>
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