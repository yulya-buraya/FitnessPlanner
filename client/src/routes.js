import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './pages/autorization/LoginPage'
import { MealPlannerPage } from './pages/MealPlannerPage'
import { MainPage } from './pages/MainPage'
import { WorkoutPage } from './pages/WorkoutPage'
import { RegisterPage } from './pages/autorization/RegisterPage'
import { UserInfoForm } from './pages/autorization/UserInfoForm'
import { UserProfile } from './pages/UserProfile'
export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/mealplanner' exact>
                    <MealPlannerPage />
                </Route>
                <Route path='/index' exact>
                    <MainPage />
                </Route>
                <Route path='/workout'>
                    <WorkoutPage />
                </Route>
                <Route path='/userProfile'>
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