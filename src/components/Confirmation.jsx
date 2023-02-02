import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/Confirmation.css'


const Confirmation = ( {appointment} ) => {
    console.log(appointment)
    if (!appointment) {
        const nav = useNavigate()
        nav('/')
        return <main><h1 className="my-5 text-center">You are being redirected to the home page...</h1></main>
    }
    return (
        <main>
            <h1 className="text-center border-bottom border-secondary border-3 w-100 p-3">Appointment Confirmation</h1>
            <table id="confirmation" className="table mx-auto my-5 table-striped">
                <tbody>
                    <tr>
                        <th scope="row" className="">Appointment No.</th>
                        <td className="text-break">{appointment._id}</td>
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
                        <td>{appointment.out_book.title} <br></br>By {appointment.out_book.author}</td>
                    </tr>
                    <tr>
                        <th scope="row">Book to bring along</th>
                        <td>{appointment.inc_book.title} <br></br>By {appointment.inc_book.author}</td>
                    </tr>
                </tbody>
            </table>
            <Link id="backToHome" to='/' className="btn d-block text-white btn-outline-success fs-6 mx-auto mb-3">Return to Home</Link>
        </main>
    )
}

export default Confirmation