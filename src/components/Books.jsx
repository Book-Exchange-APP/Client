import React from 'react'
import '../styles/Showbooks.css'
import ShowBooks from './ShowBooks'
import Search from './Search'



const Books = ({ books, locations, languages, conditions, genres, searchBook }) => {
    console.log('Books called')    
    return (
            <main id="books">
                <h1 className="text-center p-3">Books</h1>
                <Search locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook}/>
                {!books ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : books.length>0 ? <ShowBooks books={books}/> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
            </main>
    )

}

export default Books