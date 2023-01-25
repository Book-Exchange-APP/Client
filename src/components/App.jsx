import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Books from './Books'
import Confirmation from './Confirmation'
import Contact from './Contact'
import Login from './Login'
import Dashboard from './Dashboard'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
// import App from '../App.css'


const App = () =>{
  const ShowBookWrapper = () => {

  }

return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
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
