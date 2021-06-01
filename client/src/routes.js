import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './pages/autorization/LoginPage'
import { MealPlannerPage } from './pages/MealPlannerPage'
import { MainPage } from './pages/MainPage'
import { WorkoutPage } from './components/TrainingPlanning/WorkoutPage'
import { RegisterPage } from './pages/autorization/RegisterPage'
import { UserInfoForm } from './pages/autorization/UserInfoForm'
import { UserProfile } from './pages/UserProfile'
import { UserPage } from './pages/UserPage'
import { FoodPage } from './components/MealPlanner/FoodPage'
import { UserWorkoutsPage } from './components/TrainingPlanning/workoutComponents/UserWorkoutsPage'
import { ExercisesPage } from './components/TrainingPlanning/ExercisesPage'
import { WorkoutTrainingPage } from './components/TrainingPlanning/WorkoutTrainingPage'
import { RecipesPage } from './components/MealPlanner/RecipesPage'
import { RecipeInfoPage } from './components/MealPlanner/RecipeInfoPage'
import { UserMealPlansPage } from './components/MealPlanner/mealPlannerComponents/UserMealPlansPage'
import { MealPlanPage } from './components/MealPlanner/MealPlanPage'

export const useRoutes = (isAuthenticated, role) => {

    if (isAuthenticated && role) {
        if (role.includes("admin")) {
            return (
                <Switch>
                    <Route path='/mealplanner' exact>
                        <MealPlannerPage />
                    </Route>
                    <Route path='/index' exact>
                        <UserPage />
                    </Route>
                    <Route path='/food' exact>
                        <FoodPage />
                    </Route>
                    <Route path='/users' exact>
                        <UserPage />
                    </Route>
                    <Route path='/workouts' exact>
                        <WorkoutPage />
                    </Route>
                    <Route path='/recipes' exact>
                        <RecipesPage />
                    </Route>
                    <Route path='/recipes/:id' exact>
                        <RecipeInfoPage />
                    </Route>
                    <Route path='/workouts/:id' >
                        <WorkoutTrainingPage />
                    </Route>
                    <Route path='/exercises' exact>
                        <ExercisesPage />
                    </Route>
                    <Redirect to="/index" />
                </Switch>
            )
        }
        else if (role.includes("user")) {
            return (
                <Switch>
                    <Route path='/mealplanner' exact>
                        <MealPlannerPage />
                    </Route>
                    <Route path='/index' exact>
                        <MainPage />
                    </Route>
                    <Route path='/food' exact>
                        <FoodPage />
                    </Route>
                    <Route path='/recipes' exact>
                        <RecipesPage />
                    </Route>
                    <Route path='/workouts' exact>
                        <WorkoutPage />
                    </Route>
                    <Route path='/custom_workouts' exact>
                        <UserWorkoutsPage />
                    </Route>
                    <Route path='/recipes/:id' exact>
                        <RecipeInfoPage />
                    </Route>
                    <Route path='/custom_workouts/:id' >
                        <WorkoutTrainingPage />
                    </Route>
                    <Route path='/workouts/:id'>
                        <WorkoutTrainingPage />
                    </Route>
                    <Route path='/biodata/:id'>
                        <UserProfile />
                    </Route>
       
                    <Route path='/mealplanner/:id' >
                        <UserMealPlansPage />
                    </Route>
                    <Route path='/mealplan/:id'>
                        <MealPlanPage/>
                    </Route>
                    <Route path='/exercises' exact>
                        <ExercisesPage />
                    </Route>
                    <Route path='/form' exact>
                        <UserInfoForm />
                    </Route>
                    <Redirect to="/index" />
                </Switch>
            )
        }
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