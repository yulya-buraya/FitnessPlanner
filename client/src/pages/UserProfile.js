import React, { useContext, useState, useCallback, useEffect } from 'react'
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
            const fetched = await request(`/api/biodata`, "GET", null, {
                Authorization: `Bearer ${auth.token}`
            })
            setBiodata(fetched)
            }
        catch (e) { }
    }, [auth.token, request])
    useEffect(() => {
        getBiodata()
    }, [getBiodata])
    return (
        <div className="profile-block">
            {/* TODO: сделать вывод даннных в юзерпрофиль из бд, для каждого пользователя будет находится один запрос с данными */}
         <ShortInfoBlock biodata={biodata} />
            <FullInfoBlock  />
            <BiodataBlock/>

        </div>
    );
}