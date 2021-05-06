import React from "react"
import { BiodataBlock } from "../components/BiodataBlock"
import { FullInfoBlock } from "../components/FullInfoBlock"
import { ShortInfoBlock } from "../components/ShortInfoBlock"
import '../styles/profile.css'

export const UserProfile = () => {
    return (
        <div className="profile-block">
            <ShortInfoBlock/>
            <FullInfoBlock/>
            <BiodataBlock/>

        </div>
    );
}