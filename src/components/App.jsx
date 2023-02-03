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
import { useAuthContext } from '../auth/useAuthContext'
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom'
import '../styles/App.css'

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
  const { user } = useAuthContext()
  const [error, setError] = useState({ error: false })

  useEffect(() => {
    async function fetchBooks() {
      try {
        // const res = await fetch('https://server-production-f312.up.railway.app/books')
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
        // const res = await fetch('https://server-production-f312.up.railway.app/locations')
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
        // const res = await fetch('https://server-production-f312.up.railway.app/languages')
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
        // const res = await fetch('https://server-production-f312.up.railway.app/conditions')
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
        // const res = await fetch('https://server-production-f312.up.railway.app/genres')
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
        // const res = await fetch('https://server-production-f312.up.railway.app/appointments')
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


  // useEffect(() => {
  //   async function fetchAppointments() {
  //     try {
  //       // const res = await fetch('https://server-production-f312.up.railway.app/appointments')
  //       const res = await fetch('http://localhost:4001/appointments')
  //       const data = await res.json()
  //       setAppointments(data)
  //     } catch (err) {
  //       setError({ error: err.message + ' Books' })
  //     }
  //   }

  //   fetchAppointments()
  //   async function fetchBookStatus() {
  //     try {
  //       const res = await fetch('http://localhost:4001/status/books')
  //       const data = await res.json()
  //       setBookStatus(data)
  //     } catch (err) {
  //       setError({ error: err.message + ' Book Status' })
  //     }
  //   }
  //   fetchBookStatus()

  //   async function fetchAppointmentStatus() {
  //         try {
  //           const res = await fetch('http://localhost:4001/status/appointments')
  //           const data = await res.json()
  //           setAppointmentStatus(data)
  //         } catch (err) {
  //           setError({ error: err.message + ' Appointment Status' })
  //         }
  //       }
  //   fetchAppointmentStatus()

  //   async function fetchPendingAppointments() {
  //     try {
  //       const res = await fetch('http://localhost:4001/appointments/status/pending')
  //       const data = await res.json()
  //       setPendingAppointments(data)
  //     } catch (err) {
  //       setError({ error: err.message + ' Pending Appointments' })
  //     }
  //   }
  //   fetchPendingAppointments()
  //   }, [])  


  // useEffect(() => {
  //   async function fetchAppointmentStatus() {
  //     try {
  //       const res = await fetch('http://localhost:4001/status/appointments')
  //       const data = await res.json()
  //       setAppointmentStatus(data)
  //     } catch (err) {
  //       setError({ error: err.message + ' Appointment Status' })
  //     }
  //   }
  //   fetchAppointmentStatus()
  // }, [])


  // const ShowBookWrapper = ({languages, conditions, genres}) => {
  //   console.log(languages)
  //   const { id } = useParams()
  //   if (!books) {
  //     return <main><h1 className="my-5 text-center">Loading the book...</h1></main>
  //   }
  //   const selectedBook = books?.find(book => book.book._id === id)
  //   return selectedBook ? <ShowBook book={selectedBook} generateApp={generateApp} languages={languages} conditions={conditions} genres={genres}/> : <main><h1 className="my-5 text-center">Book not found!</h1></main>
  // }

  const updateBooks = async () => {
    // const res = await fetch('https://server-production-f312.up.railway.app/books')
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books`)
    const data = await res.json()
    setBooks(data)
  }

  const updateAppointments = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments/status/pending`)
    const data = await res.json()
    setPendingAppointments(data)
  }


  const swapBooks = async (appointment) => {

    let inc_book = books.find(book => book.book._id === appointment.inc_book._id)
    let out_book = books.find(book => book.book._id === appointment.out_book._id)
    let thisAppointment = appointments.find(appointment => appointment._id === appointment._id)
    // const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(appointment)
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

    if (user) {
      const returnedIncBook = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${appointment.inc_book._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(updatedIncBook)
      })}

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

    const returnedOutBook = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${appointment.out_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedOutBook)
    })

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

    const returnedAppointment = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments/${appointment._id}`, {
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

  const denyBooks = async (appointment) => {

    // let inc_book = books.find(book => book._id === appointment.inc_book._id)
    // let out_book = books.find(book => book._id === appointment.out_book._id)
    // let thisAppointment = appointments.find(appointment => appointment._id === appointment._id)
    // const user = JSON.parse(sessionStorage.getItem('user'))

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

    const returnedIncBook = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${appointment.inc_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(updatedIncBook)
    })


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

    const returnedOutBook = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${appointment.out_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(updatedOutBook)
    })


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

    const returnedAppointment = await fetch(`${import.meta.env.VITE_BASE_URL}/appointments/${appointment._id}`, {
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
          <Route path='/book/:id' element={<ShowBook books={books} languages={languages} conditions={conditions} genres={genres} generateApp={generateApp}/>} />
          <Route path='/confirmation' element={<Confirmation appointment={appointment} />} />
          <Route path='/contact' element={<Contact locations={locations} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login nav={nav} />} />
          <Route path='/dashboard' element={user ? user.admin ? <Dashboard denyBooks={denyBooks} swapBooks={swapBooks} pendingAppointments={pendingAppointments} /> : <Unauthorised /> : <main></main>} />
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
