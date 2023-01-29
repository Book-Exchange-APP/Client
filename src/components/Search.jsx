import React from 'react'
import '../styles/Search.css'
import ShowBooks from './ShowBooks'
import SearchForm from './SearchForm'
import { useSearchParams } from 'react-router-dom'

const Search = ({ books, locations, languages, conditions, genres }) => {
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries([...searchParams])
    let strings = []
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
                books = books.filter(book => book.location.location.toLowerCase().includes(value.toLowerCase()))
            }
            else {
                books = books.filter(book => book[key].toLowerCase().includes(value.toLowerCase()))
            }
        }
    }

return (
    <main id="search">
        <div >
        <h1 className="text-center pt-3">Books</h1>
        {strings.length > 0 ? <p className="text-center">Searched for '{strings.join(" + ")}'</p> : <p></p>}
        </div>
        <SearchForm locations={locations} languages={languages} conditions={conditions} genres={genres} />
        {!books ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : books.length > 0 ? <ShowBooks books={books} /> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
    </main>
)

}

export default Search