import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../auth/useAuthContext'
import { useLogout } from '../auth/useLogout'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {

    const { logout } = useLogout()

    const handleClick = () => { 
        logout()
    }

    const { user } = useAuthContext()


    return (
        <>
            <nav className="navbar navbar-expand bg-gradient sticky-top">
                <div  className="m-1">
                    <Link className="nav-brand" to="/">
                        <img id='logo' src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div id="navbarNav" className="nav container-fluid">                    
                    <Link to="/books" className="nav-link fs-4 text-center">Books</Link>
                    <Link to="/contact" className="nav-link fs-4 text-center">Contact</Link>
                {!user && (
                    <Link to="/login" className="nav-link fs-4 text-center">Login</Link>         
                )}
                {user && (
                    <button onClick={handleClick}>LogOut</button>
                )}
                </div>
            </nav>
        </>
    )
}

export default Navbar