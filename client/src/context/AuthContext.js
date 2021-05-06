import { createContext } from 'react'

function empty() { }
export const AuthContext = createContext({
    token: null,
    userId: null,
    login: empty,
    logout: empty,
    isAuthenticated: false, 
    role:null
})