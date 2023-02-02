import React, { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



const AppointmentForm = ({generateApp, locations, languages, conditions, genres }) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [location, setLocation] = useState('')
    const [language, setLanguage] = useState('')
    const [condition, setCondition] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState(null)


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
        setTitle('')
        setAuthor('')
        setLocation('')
        setLanguage('')
        setCondition('')
        setGenre('')
        // nav({ pathname: '/confirmation', search: `?${createSearchParams(submitForm)}` })
    }

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomTimeInput = ({ date, value, onChange }) => (
        <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ border: "solid 1px black" }}
        />
    );

    return (
        <form id="Form" onSubmit={(evt) => submit(evt)}>
            <input id="inputFirst" className="form-control mb-2" name="first_name" type="text" placeholder="First name" value={first_name } onChange={(evt) => setFirstName(evt.target.value)} />
            <input id="inputLast" name="last_name" className="form-control mb-2" type="text" placeholder="Last name" value={last_name} onChange={(evt) => setLastName(evt.target.value)} />
            <input id="inputEmail" name="email" className="form-control mb-2" type="text" placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
            <input id="inputPhone" name="phone" className="form-control mb-2" type="text" placeholder="Phone" value={phone} onChange={(evt) => setPhone(evt.target.value)} />

            <div>
                <p>Date for Exchange</p>
                <DatePicker
                    className="form-control mb-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}

                />
            </div>
            <input id="inputTime" name="time" className="form-control mb-2" type="text" placeholder="Time" value={time} onChange={(evt) => setTime(evt.target.value)} />


            <input id="inputTitle" name="title" className="form-control mb-2" type="text" placeholder="Title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            <input id="inputAuthor" name="author" className="form-control mb-2" type="text" placeholder="Author" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
            <input id="inputLocat" name="location" className="form-control mb-2" type="text" placeholder="Location" value={location} onChange={(evt) => setLocation(evt.target.value)} />
            {/* <input id="inputCond" name="condition" className="form-control mb-2" type="text" placeholder="Condition" value={condition} onChange={(evt) => setCondition(evt.target.value)} />
            <input id="inputLang" name="language" className="form-control mb-2" type="text" placeholder="Language" value={language} onChange={(evt) => setLanguage(evt.target.value)} />
            <input id="inputGenre" name="Genre" className="form-control mb-2" type="text" placeholder="Genre" value={genre} onChange={(evt) => setGenre(evt.target.value)} /> */}

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
            <input type="file" name="file" onChange={(e) => { setImage(e.target.files[0]) }} />
            {/* <button id="submit-btn" className="btn w-100 text-white btn-outline-success fs-6" type="submit">Submit The Appointment</button> */}
        </form>
    )
}

export default AppointmentForm