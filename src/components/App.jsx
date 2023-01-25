import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Books from './Books'
import Confirmation from './Confirmation'
import Contact from './Contact'
import Login from './Login'
import Dashboard from './Dashboard'
import Footer from './Footer'
import ShowBook from './ShowBook'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import '../styles/App.css'

const App = () => {
  const [books, setBooks] = useState([])
  const [displayedBooks, setDisBooks] = useState([])
  const nav = useNavigate()
  const [locations, setLocations] = useState([])
  const [languages, setLanguages] = useState([])
  const [conditions, setConditions] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch('https://server-production-f312.up.railway.app/books')
      const data = await res.json()
      setBooks(data)
      setDisBooks(data)
    }
    fetchBooks()
  }, [])

  useEffect(() => {
    async function fetchLocations() {
      const res = await fetch('https://server-production-f312.up.railway.app/locations')
      const data = await res.json()
      setLocations(data)
    }
    fetchLocations()
  }, [])

  useEffect(() => {
    async function fetchLanguages() {
      const res = await fetch('https:/server-production-f312.up.railway.app/languages')
      const data = await res.json()
      setLanguages(data)
    }
    fetchLanguages()
  }, [])

  useEffect(() => {
    async function fetchConditions() {
      const res = await fetch('https://server-production-f312.up.railway.app/conditions')
      const data = await res.json()
      setConditions(data)
    }
    fetchConditions()
  }, [])

  useEffect(() => {
    async function fetchGenres() {
      const res = await fetch('https://server-production-f312.up.railway.app/genres')
      const data = await res.json()
      setGenres(data)
    }
    fetchGenres()
  }, [])

  const searchBook = (searchCriteria) => {
    console.log(searchCriteria)
    let result = []
    if (Object.keys(searchCriteria).length !== 0) {
      let match = false
      for (const book of books) {
        for (const con of Object.keys(searchCriteria)) {
          if (!book[con].includes(searchCriteria[con])) {
            match = false
            break;
          } else {
            match = true
          }
        }
        if (match) {
          result.push(book)
        }
      }
    } else {
      result = books
    }

      setDisBooks(result)
    

  }

  const ShowBookWrapper = () => {
    const { id } = useParams()
    const book = books[id]
    return book ? <ShowBook book={book} /> : <h4>Book not found!</h4>
  }

console.log(displayedBooks)
  return (
    <>
      {/* <body> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} />} />
          <Route path='/books' element={<Books books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} />} />
          <Route path='/book/:id' element={<ShowBookWrapper />} />
          <Route path='/appointment/:id/confirmation' element={<Confirmation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<h4>Page not found!</h4>} />
        </Routes>
        <Footer />
      {/* </body> */}
    </>
  )
}

export default App
