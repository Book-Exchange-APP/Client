import { useState } from "react"
import { useRegister } from "../auth/useRegister.jsx"
import { Link } from "react-router-dom"
import { useNavigate} from 'react-router-dom'
import '../styles/Login.css'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register, error, isLoading} = useRegister()

    const nav = useNavigate()

    const handleSubmit = async (e) => {
        // prevent refresh of page
        e.preventDefault()
        
        await register(name, email, password)

        const book = JSON.parse(sessionStorage.getItem('book'))

        if (book) {
            // nav('/appointment')
            nav(`/book/${book._id}`)
        } else {
            nav('/')
        }
    }

    return (
        <main id="main">        
            <form className="login" onSubmit= {handleSubmit}>
                <h3 className="login-title">Register</h3>
                <p aria-label="register">Already registered?</p>
                <Link to='/login'>Login Here</Link>
                <label aria-label="label">Name:</label>
                <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value= { name }
                />
                <label aria-label="label">Email:</label>
                <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value= { email }
                />
                <label aria-label="label">Password:</label>
                <input 
                type="password"
                aria-label="password"
                onChange={(e) => setPassword(e.target.value)}
                value= { password }
                />
                <button className="submit-button" disabled={isLoading}>Submit</button>
                {error && <div className="error">{error}</div>}
            </form> 
        </main>
    )
}

export default Register