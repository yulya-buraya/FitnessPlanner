import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../../src/hooks/http.hook'
import { AuthContext } from '../../src/context/AuthContext.js'

import { BiodataBlock } from "../components/BiodataBlock"
import { FullInfoBlock } from "../components/FullInfoBlock"
import { ShortInfoBlock } from "../components/ShortInfoBlock"
import '../styles/profile.css'

export const UserProfile = () => {

    const [biodata, setBiodata] = useState(null)
    const auth = useContext(AuthContext)
    const { request } = useHttp()

    const getBiodata = useCallback(async () => {
        try {
            const data = await request(`/api/biodata/`, "GET", null, {
                Authorization: `Bearer ${auth.token}`
            })
            setBiodata(data[0])
        } catch (e) {
        }
    }, [auth.token, request])

    useEffect(() => {
        getBiodata()
    }, [])

    return (
        <div className="profile-block">
            {biodata && <ShortInfoBlock biodata={biodata} setBiodata={setBiodata}/>}
            {biodata && <FullInfoBlock biodata={biodata}/>}
            {biodata && <BiodataBlock biodata={biodata}/>}
        </div>
    );
}