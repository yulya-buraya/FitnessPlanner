import React from 'react'
import { useHttp } from '../../hooks/http.hook'
import '../../styles/modalForm.css'
import '../../styles/login.css'

export const DeleteUserForm = ({ setActive, user }) => {
    const { loading } = useHttp()
    const cancelHandler = () => {
        setActive(false)
    }
    /*    const { request, error } = useHttp();
    
        const deleteUserInfoHandler = async (id) => {
            try {
                await request('/api/user/delete', 'DELETE', { id })
                let index = users.findIndex((u) => u.user[0]._id === id)
                setUsers((prevUsers) => prevUsers.filter((u, i) => i != index))
            } catch (e) {
                console.log(e.message)
            }
        }  */
    return (
        <div className='background-modal active' onClick={() => setActive(false)}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить пользователя <span className="important-text">{user.email}</span> ?</p>
                </div>
                <div className="container-form-btn">
                    <button className="container-btn"
                        id="cancelButton"
                        onClick={cancelHandler}
                        disabled={loading}>
                        Отменить
                    </button>
                    <button className="container-btn"
                        id="deleteButton"
                        onClick={/* deleteUserInfoHandler */ () => { console.log("delete") }}
                        disabled={loading}>
                        Удалить
                    </button>
                </div>
                {console.log("form",user.email)}
            </div>
        </div>
    )
}