import '../styles/Home.css'
import React, { useState } from 'react'
import ShowBooks from './ShowBooks'




const Home = ({ books, locations, languages, conditions, genres, searchBook }) => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [language, setLanguage] = useState('')
    const [condition, setCondition] = useState('')
    const [genre, setGenre] = useState('')


    function submit(evt) {
        evt.preventDefault()
        const searchCriteria = {}
        if (author.length > 0) {
            searchCriteria.author = author
        }
        if (title.length > 0) {
            searchCriteria.title = title
        }
        if (location.length > 0 && location !== 'Location') {
            searchCriteria.location = location
        }
        if (language.length > 0 && language !== 'Language') {
            searchCriteria.language = language
        }
        if (condition.length > 0 && condition !== 'Condition') {
            searchCriteria.condition = condition
        }
        if (genre.length > 0 && genre !== 'Genre') {
            searchCriteria.genre = genre
        }
        searchBook(searchCriteria)
    }



    return (
        <>
            <main>
                <div className="Home">
                    <div className="banner text-center">
                        <h1>How To Use</h1>
                    </div>
                    <form className="p-3" role="search" onSubmit={submit}>
                        <input className="title form-control mb-2" type="search" placeholder="Title" aria-label="Search" value={title} onChange={(evt) => setTitle(evt.target.value)}/>
                        <input className="author form-control mb-2" type="search" placeholder="Author" aria-label="Search" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
                        <select className="location form-select mb-2" id="inputGroupSelect01" value={location} onChange={(evt) => setLocation(evt.target.value)}>
                            <option>Location</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location.location}>{location.location}</option>
                            ))}
                        </select>
                        <select className="condition form-select mb-2" id="inputGroupSelect01" value={condition} onChange={(evt) => setCondition(evt.target.value)}>
                            <option>Condition</option>
                            {conditions.map((condition, index) => (
                                <option key={index} value={condition.name}>{condition.name}</option>
                            ))}
                        </select>
                        <select className="language form-select mb-2" id="inputGroupSelect01" value={language} onChange={(evt) => setLanguage(evt.target.value)}>
                            <option>Language</option>
                            {languages.map((language, index) => (
                                <option key={index} value={language.name}>{language.name}</option>
                            ))}
                        </select>
                        <select className="genre form-select mb-2" id="inputGroupSelect01" value={genre} onChange={(evt) => setGenre(evt.target.value)}>
                            <option>Genre</option>
                            {genres.map((genre, index) => (
                                <option key={index} value={genre.name}>{genre.name}</option>
                            ))}
                        </select>
                        <button className="search btn btn-outline-success fs-6" type="submit">Search</button>
                    </form>

                    <div>
                        <div id="address" className="nav">
                        
                            <a className="loc-link" href="https://www.google.com/maps" target="_blank">1 Main St</a>   
                            <a className="loc-link" href="https://www.google.com/maps" target="_blank">12 Main St</a>
                            <a className="loc-link" href="https://www.google.com/maps" target="_blank">123 Main St</a>
                        </div>
                        
                    </div>
                    <div className="feature text-center">
                        <h1 className='Fbooks'>Featured Books</h1>
                        <div className='fourbooks'>
                            {books.length>0 ? <ShowBooks books={books}/> : <h1 className='text-center pt-5 text-danger'>No Books Found!</h1>}
                        </div>
                    </div>
                    <div className="latest text-center">
                        <h1 className='Lbooks'>Latest Book</h1>
                        <div className='fourbooks'>
                            {books.length>0 ? <ShowBooks books={books}/> : <h1 className='text-center pt-5 text-danger'>No Books Found!</h1>}
                        </div>
                    </div>
                        
                    
                </div>
            </main>

        </>
    )
}

export default Home