import React, { useState } from 'react'
import '../styles/Search.css'

const Search = ({locations, languages, conditions, genres, searchBook}) => {
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
        return searchCriteria
    }
    return (
        <form id="search-form" className=" p-3" role="search" onSubmit={submit}>
            <input id="input-title" className="title form-control mb-2" type="search" placeholder="Title" aria-label="Search" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            <input id="input-author" className="author form-control mb-2" type="search" placeholder="Author" aria-label="Search" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
            <select id="select-location" className="location form-select mb-2" value={location} onChange={(evt) => setLocation(evt.target.value)}>
                <option>Location</option>
                {locations.map((location, index) => (
                    <option key={index} value={location.location}>{location.location}</option>
                ))}
            </select>
            <select id="select-condition" className="condition form-select mb-2" value={condition} onChange={(evt) => setCondition(evt.target.value)}>
                <option>Condition</option>
                {conditions.map((condition, index) => (
                    <option key={index} value={condition.name}>{condition.name}</option>
                ))}
            </select>
            <select id="select-language" className="language form-select mb-2" value={language} onChange={(evt) => setLanguage(evt.target.value)}>
                <option>Language</option>
                {languages.map((language, index) => (
                    <option key={index} value={language.name}>{language.name}</option>
                ))}
            </select>
            <select id="select-genre" className="genre form-select mb-2" value={genre} onChange={(evt) => setGenre(evt.target.value)}>
                <option>Genre</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre.name}>{genre.name}</option>
                ))}
            </select>
            <button id="search-btn" className="btn btn-outline-success fs-6" type="submit">Search</button>
        </form>
    )
}

export default Search