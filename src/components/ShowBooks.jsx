import React from 'react'
import '../styles/Books.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const ShowBooks = ({ books }) => {
  return (
      <div id="showBooks" className="d-grid mt-4 p-3">
        {books.map((book, index) => (
          <div key={index} className="card mb-4" style={{ width: '12rem' }}>
            <div className="position-relative">
              <img src={logo} className="card-img-top" alt="Book image" />
              {book.status.name === 'Pending' ? <p className="position-absolute bottom-0 text-center m-0 w-100 fst-italic bg-light text-dark-emphasis bg-opacity-75">Pending</p> : true}
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="flex-fill">{book.title}</h5>
              <p className="fst-italic mb-1">By {book.author}</p>
              <p>@{book.location.location}</p>
              <Link data-testid={book._id} to={`/book/${book._id}`} className="btn fs-6 text-white w-75 btn-outline-success p-1">View details</Link>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ShowBooks