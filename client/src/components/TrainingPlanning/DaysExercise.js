import React, { useState, useEffect, useCallback } from "react"
import { useHttp } from "../../hooks/http.hook"

export const DaysExercise = (i) => {
    const [count, setCount] = useState();
    const [parameters, setParameters] = useState();
    const onChange = e => setCount(Math.max(0, e.target.value | 0));
    const [exercises, setExercises] = useState([])
    const { loading, request } = useHttp()
    const fetchExercises = useCallback(async () => {
        try {
            const data = await request('/api/exercise/exercises', 'GET', null)
            setExercises(data)
        } catch (e) {

        }
    }, [request])

    useEffect(async () => {
        await fetchExercises()
    }, [])
    return (
        <div>
            <h2 type="text" name={`day ${i.i}`} id={`day ${i.i}`} >{`День ${i.i}`}</h2>
            <div className="exercises-count-day">
                <span>Параметры тренировки:</span>
                <input className="parameters-exercise" placeholder="под/пов/вес /длит" type="text" value={parameters} onChange={(e)=>{setParameters(e.target.value)}} />
            </div>
            <div className="exercises-count-day">
                <span>Количество упражнений:</span>
                <input className="count-exercise" type="number" value={count} onChange={onChange} />
            </div>
            <div >
                {[...Array(count)].map((n, i) => <div className="exercises-list-input" key={i.i + 1}>
                    <input type="text" name="exercises" id="exercises" placeholder="Выберите упражнение" list="exercisesList" />
                    <datalist id="exercisesList" className="exercises-list"  >
                        {exercises.map((exercise, index) => {
                            return <option index={index} value={exercise.id}>{exercise.name}</option>

                        })}
                    </datalist>

                </div>)}
            </div>
        </div>
    );
}