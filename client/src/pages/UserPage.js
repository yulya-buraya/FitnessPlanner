import React, {useEffect, useState, useCallback, useContext } from "react"
import { useHttp } from '../../src/hooks/http.hook'
import "../styles/page.css"
import { UserList } from "./UserList"

export const UserPage=()=>{
    const [users, setUsers]= useState([])
    const {request} = useHttp()
    const fetchUsers = useCallback(async () => {
        try {
            const data = await request('/api/biodata/users', 'GET', null)
            setUsers(data)
        } catch (e) {
            
        }
    }, [ request])

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
<div className="content">
<div className="text-like-header">ПОЛЬЗОВАТЕЛИ</div>
{users&&<UserList users={users}/>}
    {console.log(users)}
 </div>
    );
}