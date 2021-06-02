import React, { useContext, useEffect, useRef, useState } from "react"
import '../styles/profile.css'
import { EditUserInfoForm } from "./forms/EditUserInfoForm"
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useMessage } from "../hooks/message.hook";

export const ShortInfoBlock = ({ biodata, setBiodata }) => {
    const [isModalEditUserFormActive, setModalEditUserFormActive] = useState(false);
    const imageInput = useRef({});
    const { request } = useHttp();
    const { userId } = useContext(AuthContext);
    const message = useMessage();

    useEffect(() => {
        const input = document.createElement('input');
        input.onchange = async (e) => {
            try {
                const formData = new FormData();
                formData.append('image', e.target.files[0]);
                formData.append('id', userId);

                const xhr = new XMLHttpRequest();
                xhr.open('PUT', '/api/user/editphoto', false);
                xhr.send(formData);

                if (xhr.status <= 299) {
                    const response = JSON.parse(xhr.responseText);
                    message(response.message);

                    const fileReader = new FileReader();
                    fileReader.onload = () => (setBiodata((prev) => ({ ...prev, image: fileReader.result })));
                    fileReader.readAsDataURL(e.target.files[0]);
                }
            } catch (e) {
                console.log(e.message);
            }
        };
        input.type = 'file';
        input.accept = 'image/*';
        imageInput.current = input;
    }, []);

    return (
        <div className="profile-image-and-short-description default-shadow">
            <div className="avatar-profile">
                <img
                    id="avatar-profile"
                    src={biodata.image || '/image/flag.svg'}
                    onClick={() => imageInput.current.click()}
                />
            </div>
            <div className="short-description">
                <span className="text-style-for-name" id="user-name">{biodata.lastname} {biodata.firstname}</span>
                <br/>
                <span className="text-for-gender" id="gender">{biodata.gender}</span>
                <br/>
                <div className="block-btn-short-description">
                    <span className="button-short-description default-shadow" id="id-number">
                        <img src="/image/flag.svg"/>
                        {biodata.purpose}</span>
                </div>
            </div>
            <div className="edit-btn">
                <button className="edit-content-btn default-shadow"
                        id="editButton"
                        onClick={() => {
                            setModalEditUserFormActive(true)
                        }}>
                    Редактировать
                </button>
            </div>
            {
                isModalEditUserFormActive
                && <EditUserInfoForm
                    active={isModalEditUserFormActive}
                    setActive={setModalEditUserFormActive}
                    setBiodata={setBiodata}
                    biodata={biodata}
                />
            }
        </div>
    );
}