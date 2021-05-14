import React, { useEffect, useState, useCallback } from "react"
import { useHttp } from '../../src/hooks/http.hook'
import "../styles/page.css"
import { UserList } from "./UserList"
import { Loader } from "../components/Loader"

export const UserPage = () => {
    const [users, setUsers] = useState([])
    const { request, loading } = useHttp()
    const fetchUsers = useCallback(async () => {
        try {
            const data = await request('/api/biodata/users', 'GET', null)
            setUsers(data)
        } catch (e) {

        }
    }, [request])

    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <Loader />
    }
    return (
        <div className="content">
            <div className="text-like-header">Пользователи</div>
            <hr className="hr-for-table" />
            <br />
            <br />
            {!loading && users && <UserList users={users} setUsers={setUsers} />}
        </div>
    );
}