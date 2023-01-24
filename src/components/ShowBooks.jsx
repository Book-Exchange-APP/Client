import React from 'react'
import '../styles/Books.css'

const ShowBooks = ({books}) => {
  return (
    <>
    <div className="books d-flex flex-wrap justify-content-around mt-4 p-3">
    {books.map((book, index) => (
        <div key={index} className="card mb-4" style={{ width: '12rem' }}>
            <img src="../src/assets/logo.png" className="card-img-top" alt="Book image" />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-author fst-italic mb-0">By {book.author}</p>
                <p className="card-location">@{book.location}</p>
                <a href={`http://localhost:5173/book/${index}`} className="btn">View details</a>
            </div>
        </div>
    ))}
</div>
    </>
  )
}

export default ShowBooks