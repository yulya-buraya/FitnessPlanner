import React, { useState } from "react"
import '../styles/profile.css'
import { EditUserInfoForm } from "./forms/EditUserInfoForm"

export const ShortInfoBlock = ({ biodata, setBiodata }) => {

    const [isModalEditUserFormActive, setModalEditUserFormActive] = useState(false)

    return (
        <div className="profile-image-and-short-description default-shadow">
            <div className="avatar-profile"><img id="avatar-profile" src="/image/default_user.png"/>
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