import React, { useEffect, useRef } from "react"
import "../../../styles/training.css"

export const FilterWorkoutBlock = ({ workouts, setWorkouts }) => {
    const buffer = useRef({});

    const changeHandler = (e) => {
        const { props } = buffer.current;
        props[e.target.name] = e.target.value;
    };

    const filterWorkout = (e) => {
        const { props, data } = buffer.current;
        props[e.target.name] = e.target.value;
        let _workouts = data;

        if(props.purpose) {
            _workouts = _workouts.filter((workout) => (
                workout.purpose === props.purpose
            ));
        }

        if(props.gender) {
            _workouts = _workouts.filter((workout) => (
                workout.gender === props.gender
            ));
        }

        return setWorkouts(_workouts);
    };

    useEffect(() => {
        console.log('in filter', workouts);
        if (!buffer.current.settled) {
            buffer.current = {
                data: workouts,
                settled: workouts?.length ? true : false,
                props: { purpose: null, gender: null }
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
                                onChange={changeHandler}
                            />
                            <span>Похудение</span>
                        </label>
                        <label>
                            <input
                                name="purpose"
                                value='Набор мышечной массы'
                                type="radio"
                                onChange={changeHandler}
                            />
                            <span>Набрать вес</span>
                        </label>
                        <label>
                            <input
                                name="purpose"
                                value='Поддержание формы'
                                type="radio"
                                onChange={changeHandler}
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
                                onChange={changeHandler}
                            />
                            <span>Для женщин</span>
                        </label>
                        <label>
                            <input
                                name="gender"
                                value="Для мужчин"
                                type="radio"
                                onChange={changeHandler}
                            />
                            <span>Для мужчин</span>
                        </label>
                        <label>
                            <input
                                name="gender"
                                value="Универсальная"
                                type="radio"
                                onChange={changeHandler}
                            />
                            <span>Универсальная</span>
                        </label>
                    </div>
                </div>
            </div>
            <button
                className="filter-btn"
                id="selectTraining"
                onClick={filterWorkout}
            >
                ПОДОБРАТЬ
            </button>
        </div>
    );
}