import React from 'react'
import '../styles/Search.css'
import ShowBooks from './ShowBooks'
import SearchForm from './SearchForm'
import { useSearchParams } from 'react-router-dom'

const Search = ({ books, locations, languages, conditions, genres }) => {
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries([...searchParams])
    let strings = []
    let sortedBooks = null
    if (books) {
        let validQuery = {}
        for (const [key, value] of Object.entries(query)) {
            if (value.length > 0) {
                validQuery[key] = value
                strings.push(value)
            }
        }
        for (const [key, value] of Object.entries(validQuery)) {
            if (key === 'location') {
                books = books.filter(book => book.book.location.location.toLowerCase().includes(value.toLowerCase()))
            } else if (['language', 'condition', 'genre'].includes(key)) {
                books = books.filter(book => book.book[key].name.toLowerCase().includes(value.toLowerCase()))
            }
            else if (['title', 'author'].includes(key)) {
                console.log(key)
                books = books.filter(book => book.book[key].toLowerCase().includes(value.toLowerCase()))
            }
        }
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
    <main id="search">
        <div >
        <h1 className="text-center pt-3">Books</h1>
        {strings.length > 0 ? <p className="text-center p-3">Searched for '{strings.join(" + ")}'</p> : <p></p>}
        </div>
        <SearchForm locations={locations} languages={languages} conditions={conditions} genres={genres} />
        {!sortedBooks ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : sortedBooks.length > 0 ? <ShowBooks books={sortedBooks} /> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
    </main>
)
}

export default Search