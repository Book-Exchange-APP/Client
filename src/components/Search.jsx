import React, { useState } from 'react'
import '../styles/Search.css'

const Search = ({ locations, languages, conditions, genres, searchBook }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [location, setLocation] = useState('')
    const [language, setLanguage] = useState('')
    const [condition, setCondition] = useState('')
    const [genre, setGenre] = useState('')

    function submit(evt) {
        evt.preventDefault()
        
        try {
            const author = evt.target.author.value
            const title = evt.target.title.value
            const location = evt.target.location.value
            const language = evt.target.language.value
            const condition = evt.target.condition.value
            const genre = evt.target.genre.value

            const searchCriteria = {}

            if (author) {
                searchCriteria.author = author
            }
            if (title) {
                searchCriteria.title = title
            }
            if (location && location !== 'Location') {
                searchCriteria.location = location
            }
            if (language && language !== 'Language') {
                searchCriteria.language = language
            }
            if (condition && condition !== 'Condition') {
                searchCriteria.condition = condition
            }
            if (genre && genre !== 'Genre') {
                searchCriteria.genre = genre
            }
            searchBook(searchCriteria)
        }
        catch (err) {
            console.error(err)
        }

        setTitle('')
        setAuthor('')
        setLocation('Location')
        setLanguage('Language')
        setCondition('Condition')
        setGenre('Genre')
    }

    return (
        <form id="search-form" className="p-3" role="search" onSubmit={(evt) => submit(evt)}>
            <input id="input-title" name="title" className="form-control mb-2" type="search" placeholder="Title" aria-label="Search" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            <input id="input-author" name="author" className="form-control mb-2" type="search" placeholder="Author" aria-label="Search" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
            <div className="options">
                <select id="select-location" name="location" className="form-select mb-2" value={location} onChange={(evt) => setLocation(evt.target.value)}>
                    <option>Location</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location.location}>{location.location}</option>
                    ))}
                </select>
                <select id="select-condition" name="condition" className="form-select mb-2" value={condition} onChange={(evt) => setCondition(evt.target.value)}>
                    <option>Condition</option>
                    {conditions.map((condition, index) => (
                        <option key={index} value={condition.name}>{condition.name}</option>
                    ))}
                </select>
            </div>
            <div className="options">
                <select id="select-language" name="language" className="form-select mb-2" value={language} onChange={(evt) => setLanguage(evt.target.value)}>
                    <option>Language</option>
                    {languages.map((language, index) => (
                        <option key={index} value={language.name}>{language.name}</option>
                    ))}
                </select>
                <select id="select-genre" name="genre" className="form-select mb-2" value={genre} onChange={(evt) => setGenre(evt.target.value)}>
                    <option>Genre</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre.name}>{genre.name}</option>
                    ))}
                </select>
            </div>
            <button id="search-btn" className="btn w-100 text-white btn-outline-success fs-6" type="submit">Search</button>
        </form>
    )
}

export default Search