import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../auth/useLogout'
import { useAuthContext } from '../auth/useAuthContext'
import '../styles/Navbar.css'

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
                    <Link to="/" className="nav-link" >
                        <img src="../src/assets/logo.png" alt="Logo" width="80" />
                    </Link>
                </div>
                <div id="navbarNav" className="nav container-fluid">
                    <Link to="/books" className="nav-link text-center">All Books</Link>
                    <Link to="/contact" className="nav-link text-center">Contact</Link>
                </div>
                {!user && (
                    <div>
                        <Link to="/login" className="nav-link text-center">Login</Link> 
                    </div>
                )}
                {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>LogOut</button>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar