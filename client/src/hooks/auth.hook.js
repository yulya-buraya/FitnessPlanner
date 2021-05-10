import { useState, useCallback, useEffect } from 'react'

const storageName= 'userdata'
export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady]= useState(false)
    const [userId, setUserId] = useState(null)
    const [role, setRole] = useState(null)

    const login = useCallback((jwtToken, id, roles) => {
        setToken(jwtToken)
        setUserId(id)
        setRole(roles)
        
        localStorage.setItem(storageName, JSON.stringify({
          userId:id, token:jwtToken, role:roles   
        }))
   
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRole(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(()=>{
        const data= JSON.parse(localStorage.getItem(storageName))
        if(data&& data.token&& data.role){
            login(data.token, data.userId, data.role)
            setReady(true)
        }
    },[login])

    return { login, logout, token, userId, role,ready }
}