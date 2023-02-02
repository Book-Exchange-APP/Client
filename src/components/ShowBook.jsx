import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../auth/useLogout'
import { useNavigate } from 'react-router-dom'
import Confirmation from './Confirmation'
// import Appointment from './Appointment'
import AppointmentForm from './AppointmentForm'
import '../styles/Appointment.css'




const ShowBook = ({ book, generateApp}) => {
    const nav = useNavigate()
    const [image, setImage] = useState(null)


    const handleClick = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        sessionStorage.setItem('book', JSON.stringify(book))

        if (user) {
            nav(`/appointment`)
        } else {
            nav('/login')
        }
    }

    async function submit(evt) {
        evt.preventDefault()
        const formData = new FormData()
        formData.append('file', image)
        const returnedData = await fetch('http://localhost:4001/upload', {
            method: 'POST',
            body: formData
        })
        const test = await returnedData.json()
        console.log(test)
        const data = {
            first_name: AppointmentForm.first_name,
            last_name: AppointmentForm.last_name,
            email: AppointmentForm.email,
            phone: AppointmentForm.phone,
            inc_book: {
                _id: "",
                title: AppointmentForm.title,
                author: AppointmentForm.author
            },
            out_book: {
                _id: book.book._id,
                title: book.book.title,
                author: book.book.author
            },
            time: AppointmentForm.time,
            date: AppointmentForm.date,
            status: AppointmentForm.status,
            location: {
                _id: "63d65d8a6939a735511d0158",
                location: AppointmentForm.location
            },
            _id: "63d719962a43e1e5f472c335",
            __v: 0
        }
        generateApp(data)

        nav('/confirmation')
    }

    return (
        <main>
            <div className="out_book">
                <h5><b>Title: {book.book.title}</b></h5>
                <p>Author: {book.book.author}</p>
                <p>Exchange Location: {book.book.location.location}</p>
                <p>Book Condition: {book.book.condition.name}</p>
                <p>Language: {book.book.language.name}</p>
                <p>Genre: {book.book.genre.name}</p>
                <p>Status: {book.book.status.name}</p>
                <img src={`data:image/jpeg;base64, ${book.path}`} alt="Book image" />
            </div>

            <div className='form'>
            <AppointmentForm />


            <div className="submit">
            {book.book.status.name === "Pending" ?
                <p>This book is pending for an exchange!</p> :
                <form onSubmit={(evt) => submit(evt)} encType="multipart/form-data">
                    {/* <input type="file" name="file" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                    <button id="submit-btn" className="btn w-100 text-white btn-outline-success fs-6" type="submit">Submit The Appointment</button>
                </form>
            }
            </div>
            </div>


            {/* if user logged in
                redirect to appointment page with book ID passed as params.
                
                if not logged in, redirect to login page. */}
        </main>
    )
}

export default ShowBook