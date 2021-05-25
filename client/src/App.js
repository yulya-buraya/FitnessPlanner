import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext.js';
import { Navbar } from './components/Navbar';
import {Loader} from "./components/Loader"

function App() {
  const { token, userId, role, login, logout, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated, role)
  
 if (!ready) {
   return <Loader />
 } 
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>

      <Router>
        {isAuthenticated && <Navbar role={role} />}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
