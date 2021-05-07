import React from "react"
import '../styles/profile.css'

export const ShortInfoBlock = ({biodata}) => {
    return (
            <div className="profile-image-and-short-description default-shadow">
            <div className="avatar-profile"> <img id="avatar-profile" src="/image/default_user.png" />
            </div>
            <div className="short-description">
                <span className="text-style-for-name" id="user-name">Бурая Юлия</span>
                <br />
                <span className="text-for-gender" id="gender">{biodata!=null?biodata[0].gender:null}</span>
                <br />
                <div className="block-btn-short-description">
                    <span className="button-short-description default-shadow" id="id-number">
                        <img src="/image/flag.svg" />
                            Похудение</span>
                </div>
            </div>
            <div className="edit-btn">
                <button className="edit-content-btn default-shadow"
                    id="editButton" >
                    Редактировать
                    </button>
            </div>
        {/*     {console.log(biodata[0].gender)} */}
        </div>
    );
}