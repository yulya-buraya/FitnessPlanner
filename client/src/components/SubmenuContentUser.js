import React, { useState, useRef } from "react"
import "../styles/page.css"

export const SubmenuContentUser = ({ setUsers, users }) => {
    const [isModalFormActive, setModalFormActive] = useState(false)
    const searchInput = useRef(null);

    const searchUser = (e) => {
        let value = searchInput.current.value;
        let findUsers = filterUsers(value, users);

        setUsers(findUsers)
    }

    function filterUsers(value, users) {
        return users.filter(user => {
         if ((user.user[0].email.includes(value))||(user.lastname.includes(value))||(user.firstname.includes(value))) {
                return true;
            } 
        return false;
        })
    }


    return (
        <div className="submenu-user">
            <div className="search-input-block-user">

                <input type="text" placeholder="Введите название продукта" id="searchInput" ref={searchInput}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            searchUser()
                        }
                    }} />
                <button type="submit" onClick={searchUser}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
}