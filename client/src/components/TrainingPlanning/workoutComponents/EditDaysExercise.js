import React, { useEffect, useState } from "react"
import { useHttp } from "../../../hooks/http.hook";

function resizeArray(arr, count, creator) {
    const { length } = arr;
    if (count > length) {
        for (let i = length; i < count; i++) {
            arr.push(creator(i + 1));
        }
    }

    if (count < length) arr = arr.slice(0, count);

    return arr;
}

export const EditDaysExercise = ({ i, day, setDays }) => {

    const [count, setCount] = useState();
    const [exercises, setExercises] = useState([])
    const { request } = useHttp();


    const onChange = (e) => setCount(Math.max(0, e.target.value | 0));

    const setParamsHandler = (e) => {
        const { value } = e.target;
        setDays((prev) => {
            prev[i].params = value;
            return [...prev];
        })
    };

    useEffect(() => {
        if(count) {
            setDays((prev) => {
                prev[i].exercises = resizeArray(prev[i].exercises, count, () => (null));
                return [...prev];
            });
        }
    }, [count]);

    useEffect(async () => {
        const fetchExercises = async () => {
            try {
                const data = await request('/api/exercise/exercises', 'GET', null)
                setExercises(data)
            } catch (e) {

            }
        };

        await fetchExercises()
        setCount(day.exercises.length);
    }, [])

    return (
        <div>
            <h2 type="text" name={`day ${i + 1}`} id={`day ${i + 1}`}>{`День ${i + 1}`}</h2>
            <div className="exercises-count-day">
                <span>Параметры тренировки:</span>
                <input className="parameters-exercise"
                       placeholder="под/пов/вес /длит"
                       type="text"
                       value={day.params}
                       onChange={setParamsHandler}
                />
            </div>
            <div className="exercises-count-day">
                <span>Количество упражнений:</span>
                <input className="count-exercise" type="number" value={count} onChange={onChange}/>
            </div>
            <div>
                {[...Array(count)].map((n, index) => {
                    return (
                        <div className="exercises-list" key={index}>
                            <select
                                placeholder="Выберите упражнение"
                                className="exercises-list-input"
                                id="exercisesList"
                                value={day.exercises[index]}
                                onChange={(e) => {
                                    setDays((prev) => {
                                        prev[i].exercises[index] = e.target.value;
                                        return [...prev];
                                    })
                                }}
                            >
                                {exercises.map((exercise, _index) => {
                                    return <option index={_index} value={exercise._id}>{exercise.name}</option>
                                })}
                            </select>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}