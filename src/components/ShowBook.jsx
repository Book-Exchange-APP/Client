import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../auth/useLogout'
import { useNavigate } from 'react-router-dom'
import Confirmation from './Confirmation'
import Appointment from './Appointment'



const ShowBook = ({ book, generateApp }) => {
    const nav = useNavigate()


    const handleClick = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        sessionStorage.setItem('book', JSON.stringify(book))

        if (user) {
            nav(`/appointment`)
        } else {
            nav('/login')
        }
    }

    function submit(evt) {
        evt.preventDefault()
        const data = {
            first_name: "Tom",
            last_name: "Cruise",
            inc_book: {
                _id: "63d65d8a6939a735511d015d",
                title: "Winnie the Pooh",
                author: "A. A. Milne"
            },
            out_book: {
                _id: "63d65d8a6939a735511d015f",
                title: "BFG",
                author: "Roald Dahl"
            },
            time: "13:00",
            date: "2023-12-01T14:00:00.000Z",
            status: "63d65d8a6939a735511d0154",
            location: {
                _id: "63d65d8a6939a735511d0158",
                location: "South Brisbane"
            },
            _id: "63d719962a43e1e5f472c335",
            __v: 0
        }
        generateApp(data)               
    }

    return (
        <main>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.location.location}</p>
            <p>{book.condition.name}</p>
            <p>{book.language.name}</p>
            <p>{book.genre.name}</p>
            <p>{book.status.name}</p>
            { book.status.name === "Pending" ? 
            <p>This book is pending for an exchange!</p> :                
            <form onSubmit={(evt) => submit(evt)}>
                <button type="submit">Book Appointment</button>
            </form>
            }
            {/* if user logged in
                redirect to appointment page with book ID passed as params.
                
                if not logged in, redirect to login page.*/}
        </main>
    ) 
}

export default ShowBook