import React, { useContext } from 'react'
import '../../styles/modalForm.css'
import '../../styles/login.css'
import { useMessage } from '../../hooks/message.hook'
import { useHistory } from 'react-router'
import { AuthContext } from "../../context/AuthContext"

function getFile(url, filename) {
    const arr = url.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}


export const ConfirmForAddWorkout = ({ setForm, workout }) => {

    const message = useMessage()
    /*     const { request } = useHttp() */
    const { userId } = useContext(AuthContext);

    const history = useHistory()

    const cancelHandler = () => {
        setForm(null)
    }
    const AddWorkout = async (workout) => {
        try {
            const body = { ...workout, user: userId };
            body.image = getFile(body.image, Math.floor(Math.random() * (10 ** 15)));
            const formData = new FormData();

            for (let key in body) {
                if (Array.isArray(body[key])) {
                    formData.append(key, JSON.stringify(body[key]));
                    continue;
                }

                formData.append(key, body[key]);
            }

            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/userworkout/create', false);
            xhr.send(formData);

            if (xhr.status <= 299) {
                message(JSON.parse(xhr.responseText));
                history.push('/custom_workouts')
            }
        } catch (e) {
            console.log(e)
        }


    }
    return (
        <div className='background-modal active' onClick={cancelHandler}>
            <div className="container-for-form" onClick={e => e.stopPropagation()}>
                <span className="login100-form-title"> Окно подтверждения</span>
                <div className="user-info-form">
                    <p className="text-delete-form">Вы действительно хотите добавить программу тренировок <span
                        className="important-text">{workout.name}</span> в свои тренировки ?</p>
                    {console.log(workout)}
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
                            onClick={() => AddWorkout(workout)}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}