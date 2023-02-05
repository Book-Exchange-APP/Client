import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import '../styles/AppointmentForm.css'

const AppointmentForm = ({ book, generateApp, languages, conditions, genres }) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [language, setLanguage] = useState({ initial: '' })
    const [condition, setCondition] = useState({ initial: '' })
    const [genre, setGenre] = useState({ initial: '' })
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const nav = useNavigate()

    async function submit(evt) {
        evt.preventDefault()

        const img = new FormData()
        img.append('file', image)
        const returnedData = await fetch(`${import.meta.env.VITE_BASE_URL}/upload`, {
            method: 'POST',
            body: img
        })
        const incBookImageId = await returnedData.json()

        const incBook = {
            title: title,
            author: author,
            condition: condition.value,
            language: language.value,
            img: incBookImageId.id,
            genre: genre.value,
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

        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments`, {
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
        <form id="Form" role="form" onSubmit={(evt) => submit(evt)} encType="multipart/form-data" className="container mt-3">
            <div className="row">
                <label className="col-4" htmlFor="first_name" aria-label="label">First name: </label>
                <input id="inputFirst" className="form-control mb-2 col appointmentInputs" name="first_name" type="text" maxLength={50} placeholder="Please type in ..." value={first_name} onChange={(evt) => setFirstName(evt.target.value)} required />
            </div>
            <div className="row">
                <label className="col-4" htmlFor="last_name" aria-label="label">Last name: </label>
                <input id="inputLast" name="last_name" className="form-control mb-2 col appointmentInputs" type="text" maxLength={50} placeholder="Please type in ..." value={last_name} onChange={(evt) => setLastName(evt.target.value)} required />
            </div>
            <div className="row">
                <label className="col-4" htmlFor="date" aria-label="label">Date: </label>
                <div className="col date appointmentInputs">
                <DatePicker name='date'
                    className="form-control mb-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                </div>
            </div>
            <div className="row">
                <label className="col-4" htmlFor="time" aria-label="label">Time: </label>
                <input className="col mb-2 form-control appointmentInputs" id="appt-time" type="time" aria-label="time" name="time" min="08:30" max="18:00" onChange={(evt) => setTime(evt.target.value)} required />
            </div>
            <div className="row">
                <label className="col-4" htmlFor="location" aria-label="label">Location: </label>
                <input id="location" name="location" className="form-control mb-2 col appointmentInputs" type="text" value={book.book.location.location} disabled={true} required />
            </div>
            <section className="incBookInfo">
                <h2 className="fs-4">Please provide your book's details:</h2>
                <div className="row">
                    <label className="col-4" htmlFor="title" aria-label="label">Title: </label>
                    <input id="inputTitle" name="title" className="form-control mb-2 col appointmentInputs" type="text" placeholder="Please type in ..." value={title} onChange={(evt) => setTitle(evt.target.value)} required />
                </div>
                <div className="row">
                    <label className="col-4" htmlFor="author" aria-label="label">Author: </label>
                    <input id="inputAuthor" name="author" className="form-control mb-2 col appointmentInputs" type="text" placeholder="Please type in ..." value={author} onChange={(evt) => setAuthor(evt.target.value)} required />
                </div>
                <div className="row">
                    <label className="col-4" htmlFor="language" aria-label="label">Language: </label>
                    <select id="selectLanguage" name="language" className="form-select mb-2 col appointmentInputs" defaultValue={language.initial} value={language.value} onChange={(evt) => setLanguage({ intial: "", value: evt.target.value })} required>
                        <option value="">Select a language</option>
                        {languages.map((language, index) => (
                            <option key={index} value={language._id}>{language.name}</option>
                        ))}
                    </select>
                </div>
                <div className="row">
                    <label className="col-4" htmlFor="genre" aria-label="label">Genre: </label>
                    <select id="selectGenre" name="genre" className="form-select mb-2 col appointmentInputs" defaultValue={genre.initial} value={genre.value} onChange={(evt) => setGenre({ intial: "", value: evt.target.value })} required>
                        <option value="">Select a genre</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre._id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
                <div className="row">
                    <label className="col-4" htmlFor="condition" aria-label="label">Condition: </label>
                    <select id="selectCondition" name="condition" className="form-select mb-2 col appointmentInputs" defaultValue={condition.initial} value={condition.value} onChange={(evt) => setCondition({ intial: "", value: evt.target.value })} required>
                        <option value="">Select a condition</option>
                        {conditions.map((condition, index) => (
                            <option key={index} value={condition._id}>{condition.name}</option>
                        ))}
                    </select>
                </div>
                <div className="row">
                    <label className="col-4" htmlFor="description" aria-label="label">Description: </label>
                    <input name="description" className="form-control mb-2 col appointmentInputs" type="text" maxLength={100} placeholder="Please type in ..." value={description} onChange={(evt) => setDescription(evt.target.value)} required />
                </div>
                <div className="row">
                    <label className="fileLabel col-4" htmlFor="file" aria-label="label">Upload book's cover: </label>
                    <input className="fileInput col appointmentInputs" type="file" name="file" aria-label="File" onChange={(e) => { setImage(e.target.files[0]) }} required />
                </div>
            </section>
            <button id="submit-btn" className="btn w-100 text-white btn-outline-success fs-6 my-3" type="submit">Submit The Appointment</button>
        </form >
    )
}

export default AppointmentForm