import React, { useContext } from 'react'
import '../styles/header.css'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.js'

export const Navbar = (props) => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  const navbarRender = () => {
    if (props.role.includes("admin")) {
      return (
        <ul className="navbar">
          <li className="navbar-item ">
            <i className="fa fa-users"></i>
            <NavLink className='navbar-item-name' to="/users">Пользователи</NavLink>
          </li>
          <li className="navbar-item">
            <i className="fa fa-table"></i>
            <NavLink className='navbar-item-name' to="/users">Таблица КБЖУ</NavLink></li>
          <li className="navbar-item">
            <img className="icons-navbar" src="/image/cookbook.svg" />
            <NavLink className='navbar-item-name' to="/users">Рецепты</NavLink></li>
          <li className="navbar-item">
            <img className="icons-navbar" src="/image/dumbbell-solid.svg" />
            <NavLink className='navbar-item-name' to="/exercises">Упражнения</NavLink></li>
          <li className="navbar-item">
            <img className="icons-navbar" src="/image/utensils-solid.svg" />
            <NavLink className='navbar-item-name' to="/mealplanner">Питание</NavLink></li>
          <li className="navbar-item">
            <img className="icons-navbar" src="/image/running-solid.svg" />
            <NavLink className='navbar-item-name' to="/workout">Тренировки</NavLink></li>
          <li className="dropdown">
            <img className="icon-dropbtn" src="/image/user-solid.svg" />
            <NavLink to="#" className="dropbtn">Аккаунт<i className="fa fa-angle-down"></i></NavLink>
            <div className="dropdown-content">
              <a className='dropdown-item-name' href="/" onClick={logoutHandler}>Выход</a>
            </div>
          </li>
        </ul>

      )
    }
    else if (props.role.includes("user")) {
      return (
        <ul className="navbar">
          <li className="navbar-item" >
            <img className="icons-navbar" src="/image/utensils-solid.svg" />
            <NavLink className='navbar-item-name ' to="/mealplanner">Питание</NavLink></li>
          <li className="navbar-item">
            <img className="icons-navbar" src="/image/running-solid.svg" />
            <NavLink className='navbar-item-name' to="/workout">Тренировки</NavLink></li>
          <li className="navbar-item ">
            <i className="fa fa-table"></i>
            <NavLink className='navbar-item-name' to="/users">Таблица КБЖУ</NavLink></li>
          <li className="navbar-item ">
            <img className="icons-navbar" src="/image/cookbook.svg" />
            <NavLink className='navbar-item-name' to="/users">Рецепты</NavLink></li>
          <li className="dropdown ">
            <img className="icon-dropbtn" src="/image/user-solid.svg" />
            <NavLink to="#" className="dropbtn">Аккаунт<i className="fa fa-angle-down"></i></NavLink>
            <div className="dropdown-content">
              <NavLink className='dropdown-item-name' to={`/biodata/${auth.userId}`}>Личный кабинет</NavLink>
              <a className='dropdown-item-name' href="#" >Помощь</a>
              <a className='dropdown-item-name' href="/" onClick={logoutHandler}>Выход</a>
            </div>
          </li>
        </ul>
      )
    }
  }

  return (
    <nav className="nav">
      {(props.role != null) ? navbarRender() : null}
    </nav>
  )
}