import React, { useContext, useEffect, useState } from "react"
import "../../../styles/page.css"
import { Loader } from "../../Loader";
import { useHttp } from "../../../hooks/http.hook";
import { WorkoutItemBlock } from "./WorkoutItemBlock";
import { AuthContext } from "../../../context/AuthContext";

export const UserWorkoutsPage = () => {
    const { request, loading } = useHttp()
    const [workouts, setWorkouts] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(async () => {
        try {
            const data = await request(`/api/userworkout/workouts/${userId}`, 'GET', null)
            setWorkouts(data)
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="content">
            <div className="text-like-header">Мои программы тренировок</div>
            <hr className="hr-for-table"/>
            {!loading && workouts ? (
                <div className="list-workout">
                    {workouts.map((workout) => {
                        return <WorkoutItemBlock type={'userworkouts'} workout={workout} setWorkouts={setWorkouts}/>
                    })}
                </div>
            ) : (
                <>
                    <img className="not-found-icons" src="/image/not-found.jpg"/>
                    <p className="text-align-center">В базе данных нет упражнений!</p>
                </>
            )}
        </div>
    );
}