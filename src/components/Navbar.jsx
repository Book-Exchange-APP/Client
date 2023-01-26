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
                <div id='logo'>
                    <Link className="nav-link" to="/">
                        <img src={logo} alt="Logo" width="80" />
                    </Link>
                </div>
                <div id="navbarNav" className="nav container-fluid">
                    <Link to="/books" className="nav-link text-center">Books</Link>
                    <Link to="/contact" className="nav-link text-center">Contact</Link>
                {!user && (
                // <div>
                    <Link to="/login" className="nav-link text-center">Login</Link>         
                // </div>
                )}
                {user && (
                // <div>
                    <button onClick={handleClick}>LogOut</button>
                // </div>
                )}
                </div>
            </nav>
        </>
    )
}

export default Navbar