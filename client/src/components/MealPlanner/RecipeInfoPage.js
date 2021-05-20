import React, { useState, useEffect, useCallback } from "react"
import "../../styles/training.css"
import { useHttp } from '../../hooks/http.hook'
import { Loader } from "../Loader"
import { useParams } from 'react-router-dom'

export const RecipeInfoPage = () => {
    const { request, loading } = useHttp()
/*     const [workout, setWorkout] = useState(null)
    const workoutId = useParams().id
    const getWorkout = useCallback(async () => {
        try {
            const data = await request(`/api/workout/${workoutId}`, "GET", null)
            setWorkout(data)
        } catch (e) { }
    }, [workoutId, request])

    useEffect(() => {
        getWorkout()
    }, [])
 */
    if (loading) {
        return <Loader />
    }
    return (
        <div className="recipe-content">
         {/*        <div className="workout-submenu">
            {!loading && workout &&  console.log(workout)}
            {!loading && workout &&  <ButtonBlockWorkout />}
            {!loading && workout &&  <ShortInfoWorkout  workout={workout} setWorkout={setWorkout}/>}
            </div>
            <div className="header-for-table">ОНЛАЙН КАЛЕНДАРЬ </div>
            <br />
            {!loading && workout &&  <TrainingCalendar workout={workout} setWorkout={setWorkout} />} */}
        </div>
    );
}