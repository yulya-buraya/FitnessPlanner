import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const NavbarAdmin = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')

  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Your pranner</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/users">Пользователи</NavLink></li>
          <li><NavLink to="/users">Продукты питания</NavLink></li>
          <li><NavLink to="/users">Рецепты</NavLink></li>
          <li><NavLink to="/users">Упражнения</NavLink></li>
          <li><NavLink to="/mealplanner">Питание</NavLink></li>
          <li><NavLink to="/workout">Тренировки</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выход</a></li>
        </ul>
      </div>
    </nav>
  )
}