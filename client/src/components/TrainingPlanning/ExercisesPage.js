import React, {useEffect, useState, useCallback} from "react"
import "../../styles/training.css"
import {useHttp} from '../../hooks/http.hook'
import { ExerciseListBlock } from "./workoutComponents/ExerciseListBlock"
import { SubmenuContent } from "./workoutComponents/SubmenuContent"
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

useEffect(()=>{
    fetchExercises()
},[])
if(loading){
    return <Loader/>
}
    return (
        <div className="submenu-content">
         <SubmenuContent/>
         <div className="header-for-table">Упражнения</div>
         <br/> 
         {!loading&& exercises&&   <ExerciseListBlock exercises={exercises} setExercises={setExercises}/>}
       
        </div>


    );
}