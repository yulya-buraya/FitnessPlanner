import React, { useEffect, useState, useCallback, useContext } from "react"
import { useHttp } from '../../src/hooks/http.hook'
import "../styles/page.css"
import { UserList } from "./UserList"
import { Loader } from "../components/Loader"

export const UserPage = () => {
    const [users, setUsers] = useState([])
    const { request, loading } = useHttp()
    const getUsers = useCallback(async () => {
        try {
            console.log('вызов гет юзерс')
            const data = await request('/api/biodata/users', 'GET', null)
            setUsers(data)
        } catch (e) {

        }
    }, [])

    useEffect(() => {
        getUsers()
        console.log('useEffect')
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className="content">
            <div className="text-like-header">Пользователи</div>
            {!loading && users && <UserList users={users} setUsers={setUsers}/>}
        </div>
    );
}