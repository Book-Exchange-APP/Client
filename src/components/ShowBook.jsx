import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../auth/useLogout'
import { useNavigate } from 'react-router-dom'



const ShowBook = ({ book }) => {
    const nav = useNavigate()
    const handleClick = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        sessionStorage.setItem('book', JSON.stringify(book))
        
        if (user) {
            nav('/appointment')
        } else {
            nav('/login')
        }
    }

    return (
        <main>
            <h5>{book.title}</h5>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <div>
                <button onClick={handleClick}>Book Appointment</button>
            </div>
            {/* if user logged in
                redirect to appointment page with book ID passed as params.
                
                if not logged in, redirect to login page.*/}
        </main>
    ) 
}

export default ShowBook