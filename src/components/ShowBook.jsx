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
        return <main><h1 className="my-5 text-center">Book not found!</h1></main>
    }

    return (
        <main className="d-flex showBook">
            <div className="d-flex showBook-container">
            <section className="singleBook d-flex">
                <div className="img">
                    <img className="bookImage" src={`data:image/jpeg;base64, ${book.path}`} alt="Book image" />
                </div>
                <div className="outBook">
                    <h1 className="text-wrap bookTitle"><b>Title: {book.book.title}</b></h1>
                    <p aria-label="author"><strong>Author:</strong> {book.book.author}</p>
                    <p aria-label="condition"><strong>Book Condition:</strong> {book.book.condition.name}</p>
                    <p aria-label="language"><strong>Language:</strong> {book.book.language.name}</p>
                    <p aria-label="genre"><strong>Genre:</strong> {book.book.genre.name}</p>
                </div>
            </section>
            <div className="appointmentForm m-5">
                {book.book.status.name === "Pending" ?
                    <div className="pendingBook">
                    <p aria-label="pending"><b>This book is pending for an exchange!</b></p>
                    </div> :
                    <section name="appointmentForm">
                        <h1 className='formTitle pb-2 text-center'>Appointment Form</h1>
                        <AppointmentForm book={book} generateApp={generateApp} languages={languages} conditions={conditions} genres={genres} />
                    </section>
                }
            </div>
            </div>
        </main>
    )
}

export default ShowBook