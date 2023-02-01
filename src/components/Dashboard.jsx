import React, { useState } from 'react'
import '../styles/Dashboard.css'

const Dashboard = ({ swapBooks, denyBooks, pendingAppointments }) => {

    const approveExchange = (appointment) => {
        swapBooks(appointment)
    }

    const denyExchange = (appointment) => {
        denyBooks(appointment)
    }

    return    (    
    <main id="main">
        <div id ="dashboard-container">
            <h1 className="text-center border-bottom border-secondary border-3 w-100 p-3">Admin Dashboard</h1>

            {pendingAppointments.length > 0 ? pendingAppointments.map((appointment, index) => (
                <div key={appointment._id} id="appointment-container">
                        <div className="appointment-card">
                            <h3>Incoming Book</h3>
                            <p>{appointment.inc_book.img}</p>
                            <p><b>Title:</b> {appointment.inc_book.title}</p>
                            <p><b>Author:</b> {appointment.inc_book.author}</p>
                            
                        </div>
                        <div className="appointment-card">
                            <h3>Outgoing book</h3>
                            <p>{appointment.out_book.img}</p>
                            <p><b>Title:</b> {appointment.out_book.title}</p>
                            <p><b>Author:</b> {appointment.inc_book.author}</p>

                        </div>
                        <div className="appointment-card">
                            <h3>Appointment Details</h3>
                            <p><b>Date:</b> {appointment.date.slice(0, 10)}</p>
                            <p><b>Time:</b> {appointment.time}</p>
                            <p><b>Name:</b> {appointment.first_name} {appointment.last_name}</p>
                            <p><b>Location:</b> {appointment.inc_book.location}</p>

                        </div>
                        <div className="button-container">
                            <button className="dash-btn" onClick ={() => {approveExchange(appointment)} }>Approve</button>
                            <button className="dash-btn" onClick ={() => {denyExchange(appointment)} }>Deny</button>
                        </div>
                </div>
                )): <h2 className='text-center px-3 pt-5 text-danger'>No Pending Appointments Found!</h2>}
        </div>
    </main>
    )
    }



export default Dashboard