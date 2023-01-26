import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand bg-gradient sticky-top">
                <div id='logo'>
                    <Link className="nav-link" to="/">
                        <img src={logo} alt="Logo" width="80" />
                    </Link>
                </div>
                <div id="navbarNav" className="nav container-fluid">
                    <Link className="nav-link text-center" to="/books">All Books</Link>
                    <Link className="nav-link text-center" to="/login">Admin Login</Link>
                    <Link className="nav-link text-center" to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar