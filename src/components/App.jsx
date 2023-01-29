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
import Appointment from './Appointment'
import Search from './Search'
import { Routes, Route, useNavigate, useParams, useSearchParams, createSearchParams } from 'react-router-dom'
import '../styles/App.css'



const App = () => {
  const [books, setBooks] = useState(null)
  const [displayedBooks, setDisBooks] = useState(null)
  const [locations, setLocations] = useState([])
  const [languages, setLanguages] = useState([])
  const [conditions, setConditions] = useState([])
  const [genres, setGenres] = useState([])

  const nav = useNavigate()
  
  const [error, setError] = useState({ error: false })


  useEffect(() => {
    async function fetchBooks() {
      try {
        // const res = await fetch('https://server-production-f312.up.railway.app/books')
        const res = await fetch('http://localhost:4001/books')
        const data = await res.json()
        setBooks(data)
        setDisBooks(data)
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


  const ShowBookWrapper = () => {
    const { id } = useParams()
    if (!books) {
      return <main><h1 className="my-5 text-center">Loading the book...</h1></main>
    }
    const selectedBook = books?.find(book => book._id === id)
    return selectedBook ? <ShowBook book={selectedBook} /> : <main><h1 className="my-5 text-center">Book not found!</h1></main>
  }

  return (
    <>
      <Navbar />
      {!error.error ?
        <Routes>
          <Route path='/' element={<Home books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/books' element={<Books books={books} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/books/search' element={<Search books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres} />} />
          <Route path='/book/:id' element={<ShowBookWrapper />} />
          <Route path='/appointment/:bookid' element={<Appointment />} />
          <Route path='/appointment/:id/confirmation' element={<Confirmation />} />
          <Route path='/contact' element={<Contact locations={locations} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login nav={nav} />} />
          <Route path='/dashboard' element={<Dashboard />} />
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
