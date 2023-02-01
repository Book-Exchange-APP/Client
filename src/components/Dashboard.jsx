import React, { useState } from 'react'
import '../styles/Dashboard.css'

const Dashboard = ({ appointments, appointmentStatus, swapBooks, denyBooks, pendingAppointments }) => {

    // const fetchPendingAppointments = async () => {
    //     return await appointments.filter(appointment => appointment.status._id === appointmentStatus[0]._id)
    // }
    
    // const pendingAppointments = appointments.filter(appointment => appointment.status._id === appointmentStatus[0]._id)

    console.log(pendingAppointments)

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
                <div key={appointment.appointment._id} id="appointment-container">
                        <div className="appointment-card">
                            <h3>Incoming Book</h3>
                            <img src={`data:image/jpeg;base64, ${appointment.incPath}`} alt="Book image" />
                            <p>Title: {appointment.appointment.inc_book.title}</p>
                            <p>Author: {appointment.appointment.inc_book.author}</p>
                            
                        </div>
                        <div className="appointment-card">
                            <h3>Outgoing book</h3>
                            <img src={`data:image/jpeg;base64, ${appointment.outPath}`} alt="Book image" />
                            <p>Title: {appointment.appointment.out_book.title}</p>
                            <p>Author: {appointment.appointment.inc_book.author}</p>

                        </div>
                        <div className="appointment-card">
                            <h3>Appointment Details</h3>
                            <p>{appointment.appointment.date.slice(0, 10)}</p>
                            <p>{appointment.appointment.time}</p>
                            <p>Name: {appointment.appointment.first_name} {appointment.appointment.last_name}</p>
                            <p>Location: {appointment.appointment.location.location}</p>

                        </div>
                        <div className="button-container">
                            <button onClick ={() => {approveExchange(appointment.appointment)} }>Approve</button>
                            <button onClick ={() => {denyExchange(appointment.appointment)} }>Deny</button>
                        </div>
                </div>
                )): <h2 className='text-center px-3 pt-5 text-danger'>No Pending Appointments Found!</h2>}
        </div>
    </main>
    )
    }



export default Dashboard