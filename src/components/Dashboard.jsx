import React, { useState } from 'react'
import '../styles/Dashboard.css'

const Dashboard = ({ logout, nav, updateBooks, updateAppointments, user, pendingAppointments, bookStatus, appointmentStatus }) => {

    const approveExchange = async (appointment) => {
        // If user context is present
      if (user) {
        // Update Incoming book status to 'Available'
        const updatedIncBook = {
          title: appointment.inc_book.title,
          author: appointment.inc_book.author,
          condition: appointment.inc_book.condition,
          location: appointment.inc_book.location,
          language: appointment.inc_book.language,
          img: appointment.inc_book.img,
          genre: appointment.inc_book.genre,
          description: appointment.inc_book.description,
          status: bookStatus[0]._id
        }
        // Update incoming book document in DB
        const returnedIncBook = await fetch(`http://localhost:4001/books/${appointment.inc_book._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedIncBook)
        })
        // If Token has expired redirect user to login
        if (returnedIncBook.status === 401 ){
          console.log('Error: Token Expired')
          logout()
          nav('/login')

          return
        }
        
        // Update Outgoing book status to 'Unavailable'
        const updatedOutBook = {
          title: appointment.out_book.title,
          author: appointment.out_book.author,
          condition: appointment.out_book.condition,
          location: appointment.out_book.location,
          language: appointment.out_book.language,
          img: appointment.out_book.img,
          genre: appointment.out_book.genre,
          description: appointment.out_book.description,
          status: bookStatus[1]._id
        }

        // Update Outgoing book document in DB
        const returnedOutBook = await fetch(`http://localhost:4001/books/${appointment.out_book._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(updatedOutBook)
        })
        // Update Appointment Status to 'Approved'
        const updatedAppointment = {
          first_name: appointment.first_name,
          last_name: appointment.last_name,
          inc_book: appointment.inc_book,
          out_book: appointment.out_book,
          time: appointment.time,
          date: appointment.date,
          status: appointmentStatus[1],
          location: appointment.location
        }
        // Update appointment status in DB
        const returnedAppointment = await fetch(`http://localhost:4001/appointments/${appointment._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedAppointment)
        })

        // Update state of Books and Appointment
        updateBooks()
        updateAppointments()
    }
    }

    const denyExchange = async (appointment) => {
        // Check if user is present in Auth Context
    if (user) {
        //Update Incoming book status to 'Unavailable'
        const updatedIncBook = {
          title: appointment.inc_book.title,
          author: appointment.inc_book.author,
          condition: appointment.inc_book.condition,
          location: appointment.inc_book.location,
          language: appointment.inc_book.language,
          img: appointment.inc_book.img,
          genre: appointment.inc_book.genre,
          description: appointment.inc_book.description,
          status: bookStatus[1]._id
        }
        //  Update incoming book document in DB
        const returnedIncBook = await fetch(`http://localhost:4001/books/${appointment.inc_book._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedIncBook)
        })
        // IF token is invalid redirect user to login page
        if (returnedIncBook.status === 401 ){
          console.log('Error: Token Expired')
          logout()
          nav('/login')
    
          return
        }
        // Update Outgoing book status to 'Available'
        const updatedOutBook = {
          title: appointment.out_book.title,
          author: appointment.out_book.author,
          condition: appointment.out_book.condition,
          location: appointment.out_book.location,
          language: appointment.out_book.language,
          img: appointment.out_book.img,
          genre: appointment.out_book.genre,
          description: appointment.out_book.description,
          status: bookStatus[0]._id
        }
        // Update document in Database
        const returnedOutBook = await fetch(`http://localhost:4001/books/${appointment.out_book._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedOutBook)
        })
    
        // Update Apointment status to 'Denied'
        const updatedAppointment = {
          first_name: appointment.first_name,
          last_name: appointment.last_name,
          inc_book: appointment.inc_book,
          out_book: appointment.out_book,
          time: appointment.time,
          date: appointment.date,
          status: appointmentStatus[2],
          location: appointment.location
        }
        // Update appointment document in database
        const returnedAppointment = await fetch(`http://localhost:4001/appointments/${appointment._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedAppointment)
        })
    
        updateBooks()
        updateAppointments()
    
      }
    }

    if (!pendingAppointments) {
        return (
            <main>
                <h2 className='text-center px-3 pt-5'>Loading appointments...</h2>
            </main>
        )
    }

    return (
        <main id="main">
            <div id="dashboard-container">
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
                            <p>Author: {appointment.appointment.out_book.author}</p>

                        </div>
                        <div className="appointment-card">
                            <h3>Appointment Details</h3>
                            <p>{appointment.appointment.date.slice(0, 10)}</p>
                            <p>{appointment.appointment.time}</p>
                            <p>Name: {appointment.appointment.first_name} {appointment.appointment.last_name}</p>
                            <p>Location: {appointment.appointment.location.location}</p>

                        </div>
                        <div className="button-container">
                            <button onClick={() => { approveExchange(appointment.appointment) }}>Approve</button>
                            <button onClick={() => { denyExchange(appointment.appointment) }}>Deny</button>
                        </div>
                    </div>
                )) : <h2 className='text-center px-3 pt-5 text-danger'>No Pending Appointments Found!</h2>}

            </div>
        </main>
    )
}



export default Dashboard