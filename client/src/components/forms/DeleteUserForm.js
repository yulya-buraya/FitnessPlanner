import React from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'

export const DeleteUserForm = ({ setForm, user, deleteUser }) => {

    const cancelHandler = () => {
        setForm(null)
    }

    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите удалить пользователя <span
                        className="important-text">{user.email}</span> ?</p>
                </div>
                <div className="container-form-btn">
                    <button className="container-btn"
                            id="cancelButton"
                            onClick={cancelHandler}
                    >
                        Отменить
                    </button>
                    <button className="container-btn"
                            id="deleteButton"
                            onClick={() => deleteUser(user._id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}