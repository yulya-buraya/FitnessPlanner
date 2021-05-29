import React, { useEffect, useRef, useState } from "react"
import "../../../styles/training.css"

function filterMealPlans(value, mealPlans) {
    return mealPlans.filter(exercise => {
        if (exercise.name.includes(value)) {
            return true;
        }
        return false;
    })
}

export const SubmenuContentMealPlans = ({ mealPlans, setMealPlans }) => {
    const buffer = useRef({ settled: false, data: null });
    const searchInput = useRef(null);

    const searchMealPlans = () => {
        let value = searchInput.current.value;

        if (value == '') {
            return setMealPlans(buffer.current.data);
        }

        let findExercises = filterMealPlans(value, buffer.current.data);
        setMealPlans(findExercises)
    };

    useEffect(() => {
        if (!buffer.current.settled) {
            buffer.current = {
                data: mealPlans,
                settled: mealPlans?.length ? true : false
            };
        }
    }, [mealPlans]);

    return (
        <div className="submenu-food">
            <div className="search-input-block">
                <input
                    type="text"
                    placeholder="Искать здесь..."
                    ref={searchInput}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) searchMealPlans();
                    }}/>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>

        </div>
    );
}