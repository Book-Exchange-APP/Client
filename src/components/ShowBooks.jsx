import React from 'react'
import '../styles/Books.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const ShowBooks = ({books}) => {
  console.log(books)
  return (
    <>
    {/* <div className="books d-flex flex-wrap justify-content-around mt-4 p-3"> */}
    <div className="books mt-4 p-3">
    {books.map((book, index) => (
      console.log(book.location.location),
        <div key={index} className="card mb-4" style={{ width: '12rem' }}>
          <div id="bookImg">
            <img src={logo} className="card-img-top" alt="Book image" />
            {book.status==='Pending' ? <p className="status text-center fst-italic bg-light text-dark-emphasis bg-opacity-75">Pending</p> : true}
          </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-fill">{book.title}</h5>
                <p className="card-author fst-italic mb-1">By {book.author}</p>
                <p className="card-location">@{book.location.location}</p>
                <Link data-testid={book._id} to={`/book/${book._id}`} className="btn details">View details</Link>
            </div>
        </div>
    ))}
</div>
    </>
  )
}

export default ShowBooks