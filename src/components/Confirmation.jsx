import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Confirmation = () => {
    const { id } = useParams()
    const [appointment, setAppointment] = useState(null)

    useEffect(() => {
        async function fetchAppointment() {
            try {
                const res = await fetch(`http://localhost:4001/appointments/${id}`)
                const data = await res.json()
                setAppointment(data)
            } catch (err) {
                setError({ error: err.message + ' Appointment' })
            }
        }
        fetchAppointment()
    }, [])

    if (!appointment) {
        return <main><h1 className="my-5 text-center">Loading the confirmation...</h1></main>
    }
 console.log(appointment)
    return (
        <main>
            <h1>Appointment Confirmation</h1>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">Appointment No.</th>
                        <td>{appointment._id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{appointment.first_name} {appointment.last_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Date</th>
                        <td>{appointment.date.slice(0, 10)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Time</th>
                        <td>{appointment.time}</td>
                    </tr>
                    <tr>
                        <th scope="row">Location</th>
                        <td>{appointment.location.location}</td>
                    </tr>
                    <tr>
                        <th scope="row">Book selected</th>
                        <td colspan="2">{appointment.out_book.title} <br></br>By {appointment.out_book.author}</td>
                    </tr>
                    <tr>
                        <th scope="row">Book to bring along</th>
                        <td colspan="2">{appointment.inc_book.title} <br></br>By {appointment.inc_book.author}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn w-25 text-white btn-outline-success fs-6"><Link to='/'>Return to Home</Link></button>
        </main>
    )
}

export default Confirmation