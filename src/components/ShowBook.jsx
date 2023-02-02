import React from 'react'
import { useParams } from 'react-router-dom'
import AppointmentForm from './AppointmentForm'
import '../styles/Appointment.css'




const ShowBook = ({ books, generateApp, languages, conditions, genres }) => {
    const { id } = useParams()
    if (!books) {
        return <main><h1 className="my-5 text-center">Loading the book...</h1></main>
    }
    const book = books.find(book => book.book._id === id)
    if (!book) {
        <main><h1 className="my-5 text-center">Book not found!</h1></main>
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

            <div className="submit">
                {book.book.status.name === "Pending" ?
                    <p>This book is pending for an exchange!</p> :
                    <AppointmentForm book={book} generateApp={generateApp} languages={languages} conditions={conditions} genres={genres} />
                }
            </div>


            {/* if user logged in
                redirect to appointment page with book ID passed as params.
                
                if not logged in, redirect to login page. */}
        </main>
    )
}

export default ShowBook