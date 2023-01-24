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

const seedBooks = [
  {
    title: 'test 1',
    author: 'a1',
    location: 'l1',
    condition: 'poor',
    genre: 'education',
    language: 'en'
  },
  {
    title: 'test 2',
    author: 'a2',
    location: 'l2',
    condition: 'good',
    genre: 'geo',
    language: 'ch'
  },
  {
    title: 'test 3',
    author: 'a3',
    location: 'l3',
    condition: 'like new',
    genre: 'art',
    language: 'fr'
  },
  {
    title: 'test 4',
    author: 'a4',
    location: 'l4',
    condition: 'good',
    genre: 'gardening',
    language: 'en'
  }
]

const seedLocations = [
  {
    location: 'l1',
    address: '1 Main St',
    phone: '07123',
    email: 'l1@test.com'
  },
  {
    location: 'l2',
    address: '12 Main St',
    phone: '07123123',
    email: 'l2@test.com'
  },
  {
    location: 'l3',
    address: '123 Main St',
    phone: '07123123123',
    email: 'l3@test.com'
  }
]

const seedLanguages = ['fr', 'en', 'ch']
const seedConditions = ['good', 'poor', 'like new']
const seedGenres = ['art', 'gardening', 'geo', 'education']


const App = () => {
  const [books, setBooks] = useState([])
  const [displayedBooks, setDisBooks] = useState([])
  const nav = useNavigate()
  const [locations, setLocations] = useState([])
  const [languages, setLanguages] = useState([])
  const [conditions, setConditions] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    // async function fetchBooks() {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setBooks(data)
    // }
    // fetchBooks()
    setBooks(seedBooks)
    setDisBooks(seedBooks)
  }, [])

  useEffect(() => {
    // async function fetchLocations() {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setLocations(data)
    // }
    // fetchLocations()
    setLocations(seedLocations)
  }, [])

  useEffect(() => {
    // async function fetchLanguages() {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setLanguages(data)
    // }
    // fetchLanguages()
    setLanguages(seedLanguages)
  }, [])

  useEffect(() => {
    // async function fetchConditions() {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setConditions(data)
    // }
    // fetchConditions()
    setConditions(seedConditions)
  }, [])

  useEffect(() => {
    // async function fetchGenres() {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setGenres(data)
    // }
    // fetchGenres()
    setGenres(seedGenres)
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


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} />} />
        <Route path='/book/:id' element={<ShowBookWrapper />} />
        <Route path='/appointment/:id/confirmation' element={<Confirmation />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<h4>Page not found!</h4>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
