import React from "react"

export const UserList = ({ users }) => {
   /*  if (!users.lenght) {
        return (
            <>
                <img className="not-found-icons" src="image/not-found.jpg" />
                <p className="text-align-center">Данные не найдены!</p>
            </>
        )

    } */

    return (
        <div className='users-content-block'>
            <table id="users">
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
                        
                        <tr key ={user._id}>
                            <td>{index + 1}</td>
                            <td>hjhjkhjk</td>
                            <td>{user.firstname} {user.lastname}</td>
                            <td>21</td>
                            <td>183</td>
                            <td>75</td>
                            <td>Тренировку 1-3 раза в неделю, небольшая нагрузка</td>
                            <td>Набор мышечной массы</td>
                            <td>
                                <img className="delete-icons" src="image/trash-bin.svg" onClick={() => { console.log("vfffsfsf") }} />
                            </td>
                        
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}