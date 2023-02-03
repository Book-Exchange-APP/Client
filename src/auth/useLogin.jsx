import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const   { dispatch } = useAuthContext()
    // Login function handling
    // Take input of email and password 
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const newUser = {
            email: email,
            password: password
          }
        // make post request to server
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify(newUser)
         })

        const json = await response.json()
        //  response handling
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // Save user to sessionStorage
            sessionStorage.setItem('user', JSON.stringify(json))
            // Update Auth Context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return {login, isLoading, error}
}