import React, { useEffect, useRef } from "react"
import "../../../styles/training.css"

export const FilterWorkoutBlock = ({ workouts, setWorkouts }) => {
    const buffer = useRef({});

    const filterWorkout = (e) => {
        const { props, data } = buffer.current;
        props[e.target.name] = e.target.value;
        console.log(buffer.current);

        let _workouts = data.filter((workout) => (
            workout.purpose === props.purpose
            && workout.gender === props.gender
        ));

        return setWorkouts(_workouts);
    };

    useEffect(() => {
        console.log('in filter', workouts);
        if (!buffer.current.settled) {
            buffer.current = {
                data: workouts,
                settled: workouts?.length ? true : false,
                props: { purpose: 'Похудение', gender: 'Универсальная' }
            };
        }
    }, [workouts]);

    return (
        <div className="filter-form-training">
            <div className="header-select-form">ПОДОБРАТЬ ПЛАН ТРЕНИРОВОК:</div>
            <div className="filter-form-training-container">
                <div className="purpose-block">
                    <p className='text-for-form'>Какова ваша цель?</p>
                    <div className="radio-purpose-button">
                        <label>
                            <input
                                name="purpose"
                                value='Похудение'
                                type="radio"
                                onChange={filterWorkout}
                            />
                            <span>Похудение</span>
                        </label>
                        <label>
                            <input
                                name="purpose"
                                value='Набор мышечной массы'
                                type="radio"
                                onChange={filterWorkout}
                            />
                            <span>Набрать вес</span>
                        </label>
                        <label>
                            <input
                                name="purpose"
                                value='Поддержание формы'
                                type="radio"
                                onChange={filterWorkout}
                            />
                            <span>Выглядеть спортивно</span>
                        </label>
                    </div>
                </div>
                <div className="equipment-block">
                    <p className='text-for-form'>Для кого тренировка?</p>
                    <div className="radio-equipment-button">
                        <label>
                            <input
                                name="gender"
                                value="Для женщин"
                                type="radio"
                                onChange={filterWorkout}
                            />
                            <span>Для женщин</span>
                        </label>
                        <label>
                            <input
                                name="gender"
                                value="Для мужчин"
                                type="radio"
                                onChange={filterWorkout}
                            />
                            <span>Для мужчин</span>
                        </label>
                        <label>
                            <input
                                name="gender"
                                value="Универсальная"
                                type="radio"
                                onChange={filterWorkout}
                            />
                            <span>Универсальная</span>
                        </label>
                    </div>
                </div>
            </div>
            <button
                className="filter-btn"
                id="selectTraining"
            >
                ПОДОБРАТЬ
            </button>
        </div>
    );
}