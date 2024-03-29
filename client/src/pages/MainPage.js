import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext.js'
import { BiodataBlock } from "../components/BiodataBlock"
import { FullInfoBlock } from "../components/FullInfoBlock"
import { ShortInfoBlock } from "../components/ShortInfoBlock"
import '../styles/profile.css'

export const MainPage = () => {

    const [biodata, setBiodata] = useState(null)
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()

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
            {!loading && biodata && <ShortInfoBlock biodata={biodata} setBiodata={setBiodata}/>}
            {!loading && biodata && <FullInfoBlock biodata={biodata}/>}
            {!loading && biodata && <BiodataBlock biodata={biodata}/>}
        </div>
    );
}