import React, { useEffect, useState } from "react"
import { useHttp } from "../../hooks/http.hook"

export const DaysExercise = ({ i, days }) => {

    const [count, setCount] = useState(1);
    const [exercises, setExercises] = useState([])
    const [params, setParams] = useState("");
    const { request } = useHttp()


    const onChange = (e) => setCount(Math.max(0, e.target.value | 0));

    const setParamsHandler = (e) => {
        const value = e.target.value;
        days.current[i].params = value;
        setParams(value);
        console.log(days.current);
    };

    useEffect(async () => {
        const fetchExercises = async () => {
            try {
                const data = await request('/api/exercise/exercises', 'GET', null)
                setExercises(data)
            } catch (e) {

            }
        };

        await fetchExercises()
    }, [])

    return (
        <div>
            <h2 type="text" name={`day ${i + 1}`} id={`day ${i + 1}`}>{`День ${i + 1}`}</h2>
            <div className="exercises-count-day">
                <span>Параметры тренировки:</span>
                <input className="parameters-exercise"
                    placeholder="под/пов/вес /длит"
                    type="text"
                    value={days.current[i].params}
                    onChange={setParamsHandler}
                />
            </div>
            <div className="exercises-count-day">
                <span>Количество упражнений:</span>
                <input className="count-exercise" type="number" value={count} onChange={onChange} />
            </div>
            <div>
                {[...Array(count)].map((n, index) => {
                    return (
                        <div className="exercises-list" key={index}>
          
                            <select placeholder="Выберите упражнение" className="exercises-list-input" id="exercisesList" onChange={(e)=>{days.current[i].exercises[index] = e.target.value;}} >
                                {exercises.map((exercise, _index) => {
                                    return <option  index={_index} value={exercise._id}>{exercise.name}</option>
                                })}
                            </select>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}