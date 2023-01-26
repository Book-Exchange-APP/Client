import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './auth/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
  
)
