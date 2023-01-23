// import { useState } from 'react'
import React from "react"
import Footer from "./components/Footer"
import Books from "./components/Books"
import Contact from "./components/Contact"
import Login from "./components/Login"
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      {/* <Router>
        <Route path="/books" component={Books}>
          <Books />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
      </Router> */}
      <Footer />
    </div>


  )
}

export default App
