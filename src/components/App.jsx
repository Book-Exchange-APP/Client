import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Books from './Books'
import Confirmation from './Confirmation'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import Footer from './Footer'
import ShowBook from './ShowBook'
import Unauthorised from './Unauthorised'
import Search from './Search'
import { useLogout } from '../auth/useLogout'
import { useAuthContext } from '../auth/useAuthContext'
import { Routes, Route, useNavigate } from 'react-router-dom'

const App = () => {
  const [books, setBooks] = useState(null)
  const [locations, setLocations] = useState([])
  const [languages, setLanguages] = useState([])
  const [conditions, setConditions] = useState([])
  const [genres, setGenres] = useState([])
  const [appointments, setAppointments] = useState([])
  const [bookStatus, setBookStatus] = useState([])
  const [appointmentStatus, setAppointmentStatus] = useState([])
  const [appointment, setAppointment] = useState()
  const [pendingAppointments, setPendingAppointments] = useState(null)

  const nav = useNavigate()
  // set user context on mount
  const { user } = useAuthContext()
  const [error, setError] = useState({ error: false })
  const { logout } = useLogout()

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books`)
        const data = await res.json()
        setBooks(data)
      } catch (err) {
        setError({ error: err.message + ' Books' })
      }
    }
    fetchBooks()
  }, [])

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/locations`)
        const data = await res.json()
        setLocations(data)
      } catch (err) {
        setError({ error: err.message + ' Locations' })
      }
    }
    fetchLocations()
  }, [])

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/languages`)
        const data = await res.json()
        setLanguages(data)
      } catch (err) {
        setError({ error: err.message + ' Languages' })
      }
    }
    fetchLanguages()
  }, [])

  useEffect(() => {
    async function fetchConditions() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/conditions`)
        const data = await res.json()
        setConditions(data)
      } catch (err) {
        setError({ error: err.message + ' Conditions' })
      }
    }
    fetchConditions()
  }, [])

  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/genres`)
        const data = await res.json()
        setGenres(data)
      } catch (err) {
        setError({ error: err.message + ' Genres' })
      }
    }
    fetchGenres()
  }, [])

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments`)
        const data = await res.json()
        setAppointments(data)
      } catch (err) {
        setError({ error: err.message + ' Books' })
      }
    }

    fetchAppointments()
    async function fetchBookStatus() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/status/books`)
        const data = await res.json()
        setBookStatus(data)
      } catch (err) {
        setError({ error: err.message + ' Book Status' })
      }
    }
    fetchBookStatus()

    async function fetchAppointmentStatus() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/status/appointments`)
        const data = await res.json()
        setAppointmentStatus(data)
      } catch (err) {
        setError({ error: err.message + ' Appointment Status' })
      }
    }
    fetchAppointmentStatus()

    async function fetchPendingAppointments() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments/status/pending`)
        const data = await res.json()
        setPendingAppointments(data)
      } catch (err) {
        setError({ error: err.message + ' Pending Appointments' })
      }
    }
    fetchPendingAppointments()
  }, [])

  // Update book state
  const updateBooks = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books`)
    const data = await res.json()
    setBooks(data)
  }


  //Update Appointment state
  const updateAppointments = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments/status/pending`)
    const data = await res.json()
    setPendingAppointments(data)
  }

  const generateApp = (app) => {
    updateBooks()
    updateAppointments()
    setAppointment(app)
    nav('/confirmation')
  }

  return (
    <>
      <Navbar />
      {!error.error ?
        <Routes>
          <Route path='/' element={<Home books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/books' element={<Books books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/books/search' element={<Search books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/book/:id' element={<ShowBook books={books} languages={languages} conditions={conditions} genres={genres} generateApp={generateApp} />} />
          <Route path='/confirmation' element={<Confirmation appointment={appointment} />} />
          <Route path='/contact' element={<Contact locations={locations} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={user ? user.admin ? <Dashboard logout={logout} nav={nav} updateBooks={updateBooks} updateAppointments={updateAppointments} user={user} pendingAppointments={pendingAppointments} bookStatus={bookStatus} appointmentStatus={appointmentStatus} /> : <Unauthorised /> : <main></main>} />
          <Route path='*' element={<main><h1 className="my-5 text-center">Page not found!</h1></main>} />
        </Routes> :
        <main>
          <h1 className='my-5 text-center'>We will get back to you ASAP. <br></br>Sorry for the inconvenience caused!</h1>
        </main>
      }
      <Footer />
    </>
  )
}

export default App
