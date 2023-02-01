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
// import Appointment from './Appointment'
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
  const [pendingAppointments, setPendingAppointments] = useState([])


  const nav = useNavigate()
  const { user } = useAuthContext()
  const [error, setError] = useState({ error: false })


  useEffect(() => {
    async function fetchBooks() {
      try {
        // const res = await fetch('https://server-production-f312.up.railway.app/books')
        const res = await fetch('http://localhost:4001/books')
        const data = await res.json()
        const ableToDisplay = data.filter( book => book.book.status.name === 'Available' || book.book.status.name === 'Pending') 
        let sortedBooks = ableToDisplay.sort((a, b) => {
            if (a.book.title > b.book.title) {
              return 1
            }
            if (a.book.title < b.book.title) {
              return -1
            }
            return 0
      })
        sortedBooks = sortedBooks.
          sort((a, b) => {
            if (a.book.status.name > b.book.status.name && a.book.title.name > b.book.title.name) {
              return 1
            }
            if (a.book.status.name < b.book.status.name) {
              return -1
            }
            return 0
          })
        setBooks(sortedBooks)
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
        const res = await fetch('http://localhost:4001/locations')
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
        const res = await fetch('http://localhost:4001/languages')
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
        const res = await fetch('http://localhost:4001/conditions')
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
        const res = await fetch('http://localhost:4001/genres')
        const data = await res.json()
        setGenres(data)
      } catch (err) {
        setError({ error: err.message + ' Genres' })
      }
    }
    fetchGenres()
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


  const ShowBookWrapper = () => {
    const { id } = useParams()
    if (!books) {
      return <main><h1 className="my-5 text-center">Loading the book...</h1></main>
    }
    const selectedBook = books?.find(book => book.book._id === id)
    return selectedBook ? <ShowBook book={selectedBook} generateApp={generateApp} /> : <main><h1 className="my-5 text-center">Book not found!</h1></main>
  }

  const updateBooks = async () => {
        // const res = await fetch('https://server-production-f312.up.railway.app/books')
        const res = await fetch('http://localhost:4001/books')
        const data = await res.json()
        setBooks(data)
    }

  const updateAppointments = async () => {
    const res = await fetch('http://localhost:4001/appointments/status/pending')
    const data = await res.json()
    setPendingAppointments(data)
  }


  const swapBooks = async (appointment) => {

    let inc_book = books.find(book => book.book._id === appointment.inc_book._id)
    let out_book = books.find(book => book.book._id === appointment.out_book._id)
    let thisAppointment = appointments.find(appointment => appointment._id === appointment._id)
    // const user = JSON.parse(sessionStorage.getItem('user'))

    const updatedIncBook = {
      title: inc_book.title,
      author: inc_book.author,
      condition: inc_book.condition,
      location: inc_book.location,
      language: inc_book.language,
      img: inc_book.img,
      genre: inc_book.genre,
      description: inc_book.description,
      status: bookStatus[0]._id
    }

    if (user) {
    const returnedIncBook = await fetch(`http://localhost:4001/books/${inc_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(updatedIncBook)
    })}

    const updatedOutBook = {
      title: out_book.title,
      author: out_book.author,
      condition: out_book.condition,
      location: out_book.location,
      language: out_book.language,
      img: out_book.img,
      genre: out_book.genre,
      description: out_book.description,
      status: bookStatus[1]._id
    }

    const returnedOutBook = await fetch(`http://localhost:4001/books/${out_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedOutBook)
    })

    const updatedAppointment = {
      first_name: thisAppointment.first_name,
      last_name: thisAppointment.last_name,
      inc_book: thisAppointment.inc_book,
      out_book: thisAppointment.out_book,
      time: thisAppointment.time,
      date: thisAppointment.date,
      status: appointmentStatus[1], 
      location: thisAppointment.location
    }

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

    const denyBooks = async (appointment) => {
    
    let inc_book = books.find(book => book._id === appointment.inc_book._id)
    let out_book = books.find(book => book._id === appointment.out_book._id)
    let thisAppointment = appointments.find(appointment => appointment._id === appointment._id)
    // const user = JSON.parse(sessionStorage.getItem('user'))
    
    const updatedIncBook = {
      title: inc_book.title,
      author: inc_book.author,
      condition: inc_book.condition,
      location: inc_book.location,
      language: inc_book.language,
      img: inc_book.img,
      genre: inc_book.genre,
      description: inc_book.description,
      status: bookStatus[1]._id
    }

    const returnedIncBook = await fetch(`http://localhost:4001/books/${inc_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(updatedIncBook)
    })
    

    const updatedOutBook = {
      title: out_book.title,
      author: out_book.author,
      condition: out_book.condition,
      location: out_book.location,
      language: out_book.language,
      img: out_book.img,
      genre: out_book.genre,
      description: out_book.description,
      status: bookStatus[0]._id
    }

    const returnedOutBook = await fetch(`http://localhost:4001/books/${out_book._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(updatedOutBook)
    })
  

    const updatedAppointment = {
      first_name: thisAppointment.first_name,
      last_name: thisAppointment.last_name,
      inc_book: thisAppointment.inc_book,
      out_book: thisAppointment.out_book,
      time: thisAppointment.time,
      date: thisAppointment.date,
      status: appointmentStatus[2], 
      location: thisAppointment.location
    }

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

    const generateApp = (app) => {
      setAppointment(app)
      nav('/confirmation')
  }

  // const AppointmentWrapper = () =>{
  //   const { id } = useParams()
  //   if
  // }

  return (
    <>
      <Navbar />
      {!error.error ?
        <Routes>
          <Route path='/' element={<Home books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/books' element={<Books books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/books/search' element={<Search books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/book/:id' element={<ShowBookWrapper />} />
          {/* <Route path='/appointment' element={<Appointment />} /> */}
          <Route path='/confirmation' element={<Confirmation appointment={appointment} />} />
          <Route path='/contact' element={<Contact locations={locations} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login nav={nav} />} />
          <Route path='/dashboard' element={ user ? <Dashboard appointments={appointments} appointmentStatus={appointmentStatus} swapBooks={swapBooks} denyBooks={denyBooks} pendingAppointments={pendingAppointments}/> : <Navigate to='/login'/>} />
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
