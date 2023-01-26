import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'

// for testing

if (process.env.NODE_ENV === 'development') {
      worker.start()
    }

// function prepare() {
//   if (process.env.NODE_ENV === 'development') {
//     return worker.start()
//   }
//   return Promise.resolve()
// }
// prepare().then(() => {

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
// })
