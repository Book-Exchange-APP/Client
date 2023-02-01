import React from 'react'
import '../styles/Showbooks.css'
import ShowBooks from './ShowBooks'
import SearchForm from './SearchForm'



const Books = ({ books, locations, languages, conditions, genres }) => {
    let sortedBooks = null
    if (books) {
        const ableToDisplay = books.filter(book => book.book.status.name === 'Available' || book.book.status.name === 'Pending')
        sortedBooks = ableToDisplay.sort((a, b) => {
            if (a.book.title > b.book.title) {
                return 1
            }
            if (a.book.title < b.book.title) {
                return -1
            }
            return 0
        })
        sortedBooks = sortedBooks.
            sort((a, b) => {
                if (a.book.status.name > b.book.status.name && a.book.title.name > b.book.title.name) {
                    return 1
                }
                if (a.book.status.name < b.book.status.name) {
                    return -1
                }
                return 0
            })
    }
    return (
        <main id="books">
            <h1 className="text-center p-3">Books</h1>
            <SearchForm locations={locations} languages={languages} conditions={conditions} genres={genres} />
            {!sortedBooks ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : sortedBooks.length > 0 ? <ShowBooks books={sortedBooks} /> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
        </main>
    )

}

export default Books