import React, { useState } from "react"
import { DeleteUserForm } from "../components/forms/DeleteUserForm"
/* import { useHttp } from '../hooks/http.hook'
 */
export const UserList = ({ users, setUsers }) => {

    const [isDeleteUserFormActive, setDeleteUserFormActive] = useState(false)
    const deleteUserInfoHandler = (id) => {
            let index = users.findIndex((u) => u.user[0]._id === id)
            setUsers((prevUsers) => prevUsers.filter((u, i) => i != index))
    }  
    if (!users.lenght == 0) {
        return (
            <>
                <img className="not-found-icons" src="image/not-found.jpg" />
                <p className="text-align-center">Данные не найдены!</p>
            </>
        )

    }
    else {
        return (
            <div className='users-content-block'>
                <table id="users">
                    <tbody>
                        <tr>
                            <th>№</th>
                            <th>Email</th>
                            <th>Имя и Фамилия</th>
                            <th>Возраст, лет</th>
                            <th>Рост, см</th>
                            <th>Вес, кг</th>
                            <th>Активность</th>
                            <th>Цель</th>
                            <th>Удалить</th>

                        </tr>
                        {users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.user[0].email}</td>
                                    <td>{user.firstname} {user.lastname}</td>
                                    <td>{user.age}</td>
                                    <td>{user.height}</td>
                                    <td>{user.weight}</td>
                                    <td>{user.activity}</td>
                                    <td>{user.purpose}</td>
                                    <td>
                                        <img
                                            className="delete-icons"
                                            src="image/trash-bin.svg"
                                            onClick={() => setDeleteUserFormActive(true)}
                                        />
                                    </td>
                                    {isDeleteUserFormActive
                                            && <DeleteUserForm
                                            active={isDeleteUserFormActive}
                                            setActive={setDeleteUserFormActive}
                                            user={user.user[0]}
                                        />
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {console.log("userlist", isDeleteUserFormActive)}

            </div>
        )
    }
}