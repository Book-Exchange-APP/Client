import { useState } from "react"
import { useLogin } from "../auth/useLogin"
import { Link } from "react-router-dom"

const Login = ( {nav} ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        // prevent refresh of page
        e.preventDefault()

        await login(email, password)

        const book = JSON.parse(sessionStorage.getItem('book'))
        const user = JSON.parse(sessionStorage.getItem('user'))

        if (book && user) {
            nav('/appointment')
        } else {
            nav('/')
        }
    }

    return (
        <form className="login" onSubmit= {handleSubmit}>
            <h3>Login</h3>
            <p>Not Signed up?</p>
            <Link to='/register'>Register Here</Link>
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

export default Login