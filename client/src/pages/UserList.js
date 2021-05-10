import React, { useCallback } from "react"
import { useHttp } from '../hooks/http.hook'

export const UserList = ({ users, setUsers }) => {

    const { request, error } = useHttp();

    const deleteUser = async (id) => {
        try {
            await request('/api/user/delete', 'DELETE', { id })
            let index = users.findIndex((u) => u.user[0]._id === id)
            setUsers((prevUsers) => prevUsers.filter((u, i) => i != index))
        } catch (e) {
            console.log(e.message)
        }
    }

    if (users.lenght == 0) {
        return (
            <>
                <img className="not-found-icons" src="image/not-found.jpg"/>
                <p className="text-align-center">Данные не найдены!</p>
            </>
        )

    }
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
                                    onClick={() => deleteUser(user.user[0]._id)}
                                />
                            </td>
                            {console.log(user.user[0].email)}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}