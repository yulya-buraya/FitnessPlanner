import React, { useState } from "react"
import '../styles/profile.css'
import { EditUserInfoForm } from "./forms/EditUserInfoForm"

export const ShortInfoBlock = ({ biodata }) => {
    const [isModalEditUserFormActive, setModalEditUserFormActive] = useState(false)
    return (
        <div className="profile-image-and-short-description default-shadow">
            <div className="avatar-profile"><img id="avatar-profile" src="/image/default_user.png"/>
            </div>
            <div className="short-description">
                <span className="text-style-for-name" id="user-name">{biodata[0].lastname} {biodata[0].firstname}</span>
                <br/>
                <span className="text-for-gender" id="gender">{biodata[0].gender}</span>
                <br/>
                <div className="block-btn-short-description">
                    <span className="button-short-description default-shadow" id="id-number">
                        <img src="/image/flag.svg"/>
                        {biodata[0].purpose}</span>
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
            {isModalEditUserFormActive && <EditUserInfoForm active={isModalEditUserFormActive} setActive={setModalEditUserFormActive} biodata={biodata[0]}/>}
        </div>
    );
}