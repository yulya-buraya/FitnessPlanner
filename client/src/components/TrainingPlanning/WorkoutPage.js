import React, { useState, useEffect, useCallback } from "react"
import "../../styles/training.css"
import { ButtonSubmenuBlock } from "./workoutComponents/ButtonSubmenuBlock"
import { FilterWorkoutBlock } from "./workoutComponents/FilterWorkoutBlock"
import { SubmenuContentWorkout } from "./workoutComponents/SubmenuContentWorkout"
import { WorkoutListBlock } from "./workoutComponents/WorkoutListBlock"
import { useHttp } from '../../hooks/http.hook'
import { Loader } from "../Loader";

export const WorkoutPage = () => {
    const role = JSON.parse(localStorage.getItem("userdata")).role[0]
    const [modalForm, setModalForm] = useState(null)
    const [workouts, setWorkouts] = useState([])
    const { request, loading } = useHttp()

    useEffect(async () => {
        const fetchWorkouts = async () => {
            try {
                const data = await request('/api/workout/workouts', 'GET', null)
                setWorkouts(data)
            } catch (e) {
            }
        };

        await fetchWorkouts()
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="training-content">
            {
                role == "user" ?
                    <div className="training-submenu">
                        <ButtonSubmenuBlock setModalForm={setModalForm}/>
                        <FilterWorkoutBlock workouts={workouts} setWorkouts={setWorkouts}/>
                    </div> :
                    <SubmenuContentWorkout setWorkouts={setWorkouts}/>
            }

            <div className="header-for-table">ПРОГРАММЫ ТРЕНИРОВОК</div>
            <br/>
            {!loading && workouts && <WorkoutListBlock workouts={workouts} setWorkouts={setWorkouts}/>}
            {modalForm}
        </div>
    );
}