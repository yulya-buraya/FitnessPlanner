import React, { useCallback, useEffect, useState } from "react"
import "../../styles/training.css"
import { useHttp } from '../../hooks/http.hook'
import { ExerciseListBlock } from "./workoutComponents/ExerciseListBlock"
import { SubmenuContentExercise } from "./workoutComponents/SubmenuContentExercise"
 import { Loader } from "../Loader"


export const ExercisesPage = () => {
    const [exercises, setExercises] = useState([])
    const { request, loading } = useHttp()
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

if (loading) {
        return <Loader />
    }

    return (
        <div className="submenu-content">
            <SubmenuContentExercise setExercises={setExercises} exercises={exercises} />
            <div className="header-for-table">Упражнения</div>
            <br />
            {!loading && exercises && <ExerciseListBlock exercises={exercises} setExercises={setExercises} />}

        </div>


    );
}