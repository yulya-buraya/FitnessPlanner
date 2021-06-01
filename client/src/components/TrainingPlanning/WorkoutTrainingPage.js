import React, { useState, useEffect, useCallback } from "react"
import "../../styles/training.css"
import { useHttp } from '../../hooks/http.hook'
import { Loader } from "../Loader"
import { ButtonBlockWorkout } from "./workoutComponents/ButtonBlockWorkout"
import { ShortInfoWorkout } from "./workoutComponents/ShortInfoWorkout"
import { TrainingCalendar } from "./workoutComponents/TrainingCalendar"
import { useParams } from 'react-router-dom'

export const WorkoutTrainingPage = () => {
    const { request, loading } = useHttp()
    const [form, setForm]=useState(null)
    const [workout, setWorkout] = useState(null)
    const workoutId = useParams().id
    const getWorkout = useCallback(async () => {
        try {
            if(window.location.pathname.includes("/custom_workouts")){
                const data = await request(`/api/userworkout/${workoutId}`, "GET", null)
                setWorkout(data)
            }
            else{
                const data = await request(`/api/workout/${workoutId}`, "GET", null)
                setWorkout(data)
            }
          
        } catch (e) {
            console.log(e)
         }
    }, [workoutId, request])

    useEffect(() => {
        getWorkout()
    }, [])

   if (loading) {
        return <Loader />
    }
    return (
        <div className="training-content">
            {form}
            <div className="workout-submenu">
            {!loading && workout &&  console.log(workout)}
            {!loading && workout &&  <ButtonBlockWorkout workout={workout} setForm={setForm} />}
            {!loading && workout &&  <ShortInfoWorkout  workout={workout} setWorkout={setWorkout}/>}
            </div>
            <div className="header-for-table">ОНЛАЙН КАЛЕНДАРЬ </div>
            <br />
            {!loading && workout &&  <TrainingCalendar workout={workout} setWorkout={setWorkout} />}
        </div>
    );
}