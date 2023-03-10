import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const   { dispatch } = useAuthContext()
    // register handling function
    // accept input of name, email password
    const register = async (name, email, password) => {
        setIsLoading(true)
        setError(null)

        const newUser = {
            name: name,
            email: email,
            password: password
          }
        // Post request to server
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify(newUser)
         })

        const json = await response.json()
        //  Response handling
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

    return {register, isLoading, error}
}
