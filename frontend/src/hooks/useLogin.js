import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error2, setError2] = useState('')
    const [isLoading2, setIsLoading2] = useState('')
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading2(true)
        setError2(null)

        const response = await fetch ('/api/user/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading2(false)
            setError2(json.error)
        }

        if(response.ok) {
            //saving the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //updating the auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading2(false)
        }
    }
    return { login, isLoading2, error2 }
}