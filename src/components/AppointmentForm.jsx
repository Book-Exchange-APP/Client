import React, { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
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

    // const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    //     <input
    //         value={value}
    //         onChange={(e) => onChange(e.target.value)}
    //         style={{ border: "solid 1px black" }}
    //     />
    // );

    return (
        <form id="Form" onSubmit={(evt) => submit(evt)} encType="multipart/form-data">
            <input id="inputFirst" className="form-control mb-2" name="first_name" type="text" placeholder="First name" value={first_name} onChange={(evt) => setFirstName(evt.target.value)} />
            <input id="inputLast" name="last_name" className="form-control mb-2" type="text" placeholder="Last name" value={last_name} onChange={(evt) => setLastName(evt.target.value)} />
            <div>
                <p>Date for Exchange</p>
                <DatePicker name='date'
                    className="form-control mb-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
            <input id="inputTime" name="time" className="form-control mb-2" type="text" placeholder="Time" value={time} onChange={(evt) => setTime(evt.target.value)} />
            <input id="location" name="location" className="form-control mb-2" type="text" placeholder="Location" value={book.book.location.location} disabled={true} />
            <section className="incBookInfo">
                <input id="inputTitle" name="title" className="form-control mb-2" type="text" placeholder="Title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
                <input id="inputAuthor" name="author" className="form-control mb-2" type="text" placeholder="Author" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
                <select id="selectLanguage" name="language" className="form-select mb-2" value={language} onChange={(evt) => setLanguage(evt.target.value)}>
                    <option>Language</option>
                    {languages.map((language, index) => (
                        <option key={index} value={language._id}>{language.name}</option>
                    ))}
                </select>
                <select id="selectGenre" name="genre" className="form-select mb-2" value={genre} onChange={(evt) => setGenre(evt.target.value)}>
                    <option>Genre</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre._id}>{genre.name}</option>
                    ))}
                </select>
                <select id="selectCondition" name="condition" className="form-select mb-2" value={condition} onChange={(evt) => setCondition(evt.target.value)}>
                    <option>Condition</option>
                    {conditions.map((condition, index) => (
                        <option key={index} value={condition._id}>{condition.name}</option>
                    ))}
                </select>
                <input name="description" className="form-control mb-2" type="text" placeholder="Description" value={description} onChange={(evt) => setDescription(evt.target.value)} />
                <input type="file" name="file" onChange={(e) => { setImage(e.target.files[0]) }} />
            </section>
            <button id="submit-btn" className="btn w-100 text-white btn-outline-success fs-6" type="submit">Submit The Appointment</button>
        </form>
    )
}

export default AppointmentForm