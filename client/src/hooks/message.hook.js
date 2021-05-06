import {useCallback} from 'react'
import '../styles/toast.css'

export const useMessage =() =>{
return useCallback(text =>{
    if(window.M&&text){
        window.M.toast({html:text})
    }
},[])
}