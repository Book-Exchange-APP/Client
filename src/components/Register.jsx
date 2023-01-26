import { useState } from "react"
import { useRegister } from "../auth/useRegister.jsx"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register, error, isLoading} = useRegister()

    const handleSubmit = async (e) => {
        // prevent refresh of page
        e.preventDefault()

        await register(name, email, password)
    }

    return (
        <form className="register" onSubmit= {handleSubmit}>
            <h3>Register</h3>
            <label>Name:</label>
            <input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            value= { name }
            />
            <label>Email:</label>
            <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value= { email }
            />
            <label>Password:</label>
            <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value= { password }
            />

            <button disabled={isLoading}>Submit</button>
            {error && <div className="error">{error}</div>}
        </form> 
    )
}

export default Register