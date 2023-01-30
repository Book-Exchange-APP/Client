import React from 'react'
import '../styles/Dashboard.css'

const Dashboard = ({ appointments }) => {
    console.log(appointments)

    return    (    
    <main id="Dasboard">
        <h1 className="text-center border-bottom border-secondary border-3 w-100 p-3">Admin Dashboard</h1>
        {appointments.map((appointment, index) => (
            <div key={appointment._id} className="appointment-card">
                    <div>
                        <h3>Incoming Book</h3>
                        <p>{appointment.inc_book.title}</p>
                        <p>{appointment.inc_book.location.location}</p>
                        <p>{appointment._id}</p>
                        <p>{appointment._id}</p>
                    </div>
                    <div>
                        <h3>Outgoing book</h3>
                    </div>
                    <div>
                        <h3>Appointment Details</h3>
                    </div>
            </div>
        ))}
    </main>
    )
}

export default Dashboard