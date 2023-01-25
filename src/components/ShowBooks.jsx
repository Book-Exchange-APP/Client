import React from 'react'
import '../styles/Books.css'

const ShowBooks = ({books}) => {
  console.log(books)
  return (
    <>
    <div className="books d-flex flex-wrap justify-content-around mt-4 p-3">
    {books.map((book, index) => (
        <div key={index} className="card mb-4" style={{ width: '12rem' }}>
          <div id="bookImg">
            <img src="../src/assets/logo.png" className="card-img-top" alt="Book image" />
            {book.status==='Pending' ? <p className="status text-center fst-italic bg-light text-dark-emphasis bg-opacity-75">Pending</p> : true}
          </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-fill">{book.title}</h5>
                <p className="card-author fst-italic mb-1">By {book.author}</p>
                <p className="card-location">@{book.location.location}</p>
                <a href={`https://localhost:5173/book/${index}`} className="btn details">View details</a>
            </div>
        </div>
    ))}
</div>
    </>
  )
}

export default ShowBooks