import React, { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



const AppointmentForm = ({ first_name, last_name, email, phone, inc_book, out_book, time, date, locations, languages, conditions, genres }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [location, setLocation] = useState('')
    const [language, setLanguage] = useState('')
    const [condition, setCondition] = useState('')
    const [genre, setGenre] = useState('')

    const nav = useNavigate()

    function submit(evt) {
        evt.preventDefault()

        const submitForm = {}

        if (first_name) {
            submitForm.first_name = first_name
        }
        if (last_name) {
            submitForm.last_name = last_name
        }
        if (email) {
            submitForm.email = email
        }
        if (phone) {
            submitForm.phone = phone
        }
        if (time) {
            submitForm.time = time
        }
        if (date) {
            submitForm.date = date
        }
        if (author) {
            submitForm.author = author
        }
        if (title) {
            submitForm.title = title
        }
        if (location !== 'Location') {
            submitForm.location = location
        }
        if (language !== 'Language') {
            submitForm.language = language
        }
        if (condition !== 'Condition') {
            submitForm.condition = condition
        }
        if (genre !== 'Genre') {
            submitForm.genre = genre
        }
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setTime('')
        setDate('')
        set('')
        setTitle('')
        setAuthor('')
        setLocation('')
        setLanguage('')
        setCondition('')
        setGenre('')

        nav({ pathname: '/confirmation', search: `?${createSearchParams(submitForm)}` })
        console.log(location)
    }

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomTimeInput = ({ date, value, onChange }) => (
        <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ border: "solid 1px pink" }}
        />
    );

    return (
        <form id="Form" onSubmit={(evt) => submit(evt)}>
            <input id="inputTitle" name="first_name" className="form-control mb-2"  placeholder="First name" value={first_name} onChange={(evt) => setFirstName(evt.target.value)} />
            <input id="inputTitle" name="last_name" className="form-control mb-2"  placeholder="Last name" value={last_name} onChange={(evt) => setLastName(evt.target.value)} />
            <input id="inputTitle" name="email" className="form-control mb-2"  placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
            <input id="inputTitle" name="phone" className="form-control mb-2"  placeholder="Phone" value={phone} onChange={(evt) => setPhone(evt.target.value)} />
            <div>
                <p>Date and Time for Exchange</p>
                <label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeInput
                    customTimeInput={<ExampleCustomTimeInput />}
                />
                </label>        
            </div>
            <input id="inputTitle" name="title" className="form-control mb-2"  placeholder="Title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            <input id="inputAuthor" name="author" className="form-control mb-2"  placeholder="Author" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
            {/* <div className="options">
                <select id="selectLocation" name="location" className="form-select mb-2" value={location} onChange={(evt) => setLocation(evt.target.value)}>
                    <option>Location</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location.location}>{location.location}</option>
                    ))}
                </select>
                <select id="selectCondition" name="condition" className="form-select mb-2" value={condition} onChange={(evt) => setCondition(evt.target.value)}>
                    <option>Condition</option>
                    {conditions.map((condition, index) => (
                        <option key={index} value={condition.name}>{condition.name}</option>
                    ))}
                </select>
            </div>
            <div className="options">
                <select id="selectLanguage" name="language" className="form-select mb-2" value={language} onChange={(evt) => setLanguage(evt.target.value)}>
                    <option>Language</option>
                    {languages.map((language, index) => (
                        <option key={index} value={language.name}>{language.name}</option>
                    ))}
                </select>
                <select id="selectGenre" name="genre" className="form-select mb-2" value={genre} onChange={(evt) => setGenre(evt.target.value)}>
                    <option>Genre</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre.name}>{genre.name}</option>
                    ))}
                </select>
            </div> */}
            <button id="submit-btn" className="btn w-100 text-white btn-outline-success fs-6" type="submit">Submit The Appointment</button>
        </form>
    )
}

export default AppointmentForm

