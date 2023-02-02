import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



const AppointmentForm = ({ book, generateApp, languages, conditions, genres }) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [language, setLanguage] = useState('')
    const [condition, setCondition] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const nav = useNavigate()

    async function submit(evt) {
        evt.preventDefault()

        const img = new FormData()
        img.append('file', image)
        const returnedData = await fetch('http://localhost:4001/upload', {
            method: 'POST',
            body: img
        })
        const incBookImageId = await returnedData.json()

        const incBook = {
            title: title,
            author: author,
            condition: condition,
            language: language,
            img:incBookImageId.id, 
            genre: genre,
            description: description
        }

        const data = {            
            first_name: first_name,
            last_name: last_name,
            date: startDate,
            time: time,
            location: book.book.location._id,
            inc_book: incBook,
            out_book: book.book
        }

        const res = await fetch('http://localhost:4001/appointments', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })
        const json = await res.json()

        generateApp(json)

        nav('/confirmation')
    }

    return (
        <form id="Form" onSubmit={(evt) => submit(evt)} encType="multipart/form-data" className="d-grid">
            <label htmlFor="first_name">First name: </label>
            <input id="inputFirst" className="form-control mb-2" name="first_name" type="text" maxLength={50} placeholder="Please type in ..." value={first_name} onChange={(evt) => setFirstName(evt.target.value)} required/>
            <label htmlFor="last_name">Last name: </label>
            <input id="inputLast" name="last_name" className="form-control mb-2" type="text" maxLength={50} placeholder="Please type in ..." value={last_name} onChange={(evt) => setLastName(evt.target.value)} required/>
            <div>
                <p>Date</p>
                <DatePicker name='date'
                    className="form-control mb-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
            <label htmlFor="time">Time: </label>
            <input id="appt-time" type="time" name="time" min="08:30" max="18:00" onChange={(evt) => setTime(evt.target.value)} required/>
            <label htmlFor="location">Location: </label>
            <input id="location" name="location" className="form-control mb-2" type="text" value={book.book.location.location} disabled={true} required/>
            <section className="incBookInfo">
                <h2>Please provide your book's details:</h2>
                <label htmlFor="title">Title: </label>
                <input id="inputTitle" name="title" className="form-control mb-2" type="text" placeholder="Please type in ..." value={title} onChange={(evt) => setTitle(evt.target.value)} required/>
                <label htmlFor="author">Author: </label>
                <input id="inputAuthor" name="author" className="form-control mb-2" type="text" placeholder="Please type in ..." value={author} onChange={(evt) => setAuthor(evt.target.value)} required/>
                <label htmlFor="language">Language: </label>
                <select id="selectLanguage" name="language" className="form-select mb-2" defaultValue={""} value={language} onChange={(evt) => setLanguage(evt.target.value)} required>
                    <option value="">Select a language</option>
                    {languages.map((language, index) => (
                        <option key={index} value={language._id}>{language.name}</option>
                    ))}
                </select>
                <label htmlFor="genre">Genre: </label>
                <select id="selectGenre" name="genre" className="form-select mb-2" defaultValue={""} value={genre} onChange={(evt) => setGenre(evt.target.value)} required>
                    <option value="">Select a genre</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre._id}>{genre.name}</option>
                    ))}
                </select>
                <label htmlFor="condition">Condition: </label>
                <select id="selectCondition" name="condition" className="form-select mb-2" defaultValue={""} value={condition} onChange={(evt) => setCondition(evt.target.value)} required>
                    <option value="">Select a condition</option>
                    {conditions.map((condition, index) => (
                        <option key={index} value={condition._id}>{condition.name}</option>
                    ))}
                </select>
                <label htmlFor="description">Description: </label>
                <input name="description" className="form-control mb-2" type="text" maxLength={100} placeholder="Please type in ..." value={description} onChange={(evt) => setDescription(evt.target.value)} required/>
                <label htmlFor="file">Upload book's cover: </label>
                <input type="file" name="file" onChange={(e) => { setImage(e.target.files[0]) }} required/>
            </section>
            <button id="submit-btn" className="btn w-100 text-white btn-outline-success fs-6" type="submit">Submit The Appointment</button>
        </form>
    )
}

export default AppointmentForm