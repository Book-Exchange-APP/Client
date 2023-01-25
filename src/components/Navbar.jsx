import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand bg-gradient sticky-top">
                <div id='logo'>
                    <a className="nav-link" href="/">
                        <img src="../src/assets/logo.png" alt="Logo" width="80" />
                    </a>
                </div>
                <div id="navbarNav" className="nav container-fluid">
                    <a className="nav-link text-center" href="/books">All Books</a>
                    <a className="nav-link text-center" href="/login">Admin Login</a>
                    <a className="nav-link text-center" href="/contact">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar