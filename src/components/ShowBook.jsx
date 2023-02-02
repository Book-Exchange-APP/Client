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
            <div className="img">
                <img src={`data:image/jpeg;base64, ${book.path}`} alt="Book image" />
            </div>
            <div className="out_book">
                <h5><b>Title: {book.book.title}</b></h5>
                <p><strong>Author:</strong> {book.book.author}</p>
                
                <p><strong>Book Condition:</strong> {book.book.condition.name}</p>
                <p><strong>Language:</strong> {book.book.language.name}</p>
                <p><strong>Genre:</strong> {book.book.genre.name}</p>
                <p><strong>Status:</strong> {book.book.status.name}</p>
            </div>

            <div className="title text-center">
                <h5><b>Appointment Form</b></h5>
            </div>
            <div className="submit">
                {book.book.status.name === "Pending" ?
                    <p>This book is pending for an exchange!</p> :
                    <section name="appointmentForm">
                        <h1>Appointment Form</h1>
                        <AppointmentForm book={book} generateApp={generateApp} languages={languages} conditions={conditions} genres={genres} />
                    </section>
                }
            </div>


            {/* if user logged in
                redirect to appointment page with book ID passed as params.
                
                if not logged in, redirect to login page. */}
        </main>
    )
}

export default ShowBook