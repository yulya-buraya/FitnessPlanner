import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './pages/autorization/LoginPage'
import { MealPlannerPage } from './pages/MealPlannerPage'
import { MainPage } from './pages/MainPage'
import { WorkoutPage } from './components/TrainingPlanning/WorkoutPage'
import { RegisterPage } from './pages/autorization/RegisterPage'
import { UserInfoForm } from './pages/autorization/UserInfoForm'
import { UserProfile } from './pages/UserProfile'
import {UserPage} from './pages/UserPage'
import { UserWorkoutsPage } from './components/TrainingPlanning/workoutComponents/UserWorkoutsPage'
import { WorkoutTrainingPage } from './components/TrainingPlanning/WorkoutTrainingPage'
import { ExercisesPage } from './components/TrainingPlanning/ExercisesPage'
export const useRoutes = (isAuthenticated, role) => {
    if (isAuthenticated&&role) {
        if(role.includes("admin")){
            return (
                <Switch>
                   <Route path='/mealplanner' exact>
                        <MealPlannerPage />
                    </Route>
                    <Route path='/index' exact>
                    <UserPage />
                    </Route>
                    <Route path='/users' >
                        <UserPage />
                    </Route>
                    <Route path='/workout'>
                        <WorkoutPage />
                    </Route>
                    <Route path='/exercises'>
                     <ExercisesPage/>
                    </Route>
                    <Redirect to="/index" />
                </Switch>
            )  
        }
        else if(role.includes("user")){
            return (
                <Switch>
                   <Route path='/mealplanner' exact>
              {/*           <MealPlannerPage /> */}
              <WorkoutTrainingPage/>
                    </Route>
                    <Route path='/index' exact>
                        <MainPage />
                    </Route>
                    <Route path='/workout'>
                        <WorkoutPage />
                    </Route>
                    <Route path='/biodata/:id'>
                        <UserProfile />
                    </Route>
                    <Route path='/userWorkouts/:id'>
                        <UserWorkoutsPage/>
                    </Route>
                    <Route path='/exercises'>
                     <ExercisesPage/>
                    </Route>
      {/*               <Route path='/program'>
  
                    </Route> */}
                    <Route path='/form'>
                        <UserInfoForm />
                    </Route>
                    <Redirect to="/index" />
                </Switch>
            ) 
        }
             return (
            <Switch>
               <Route path='/mealplanner' exact>
                    <MealPlannerPage />
                </Route>
                <Route path='/index' exact>
                    <MainPage />
                </Route>
                <Route path='/users' >
                    <UserPage />
                </Route>
                <Route path='/workout'>
                    <WorkoutPage />
                </Route>
                <Route path='/biodata/:id'>
                    <UserProfile />
                </Route>
                <Route path='/form'>
                    <UserInfoForm />
                </Route>
                <Redirect to="/index" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <LoginPage />
            </Route>

            <Route path="/register" exact>
                <RegisterPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}