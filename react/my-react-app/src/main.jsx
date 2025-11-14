import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name = "Jaseena"
const num = 8

createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hi {name}</h1>
    <p>Your lucky number is {num}</p>
    <p>your lucky number is {5+7}</p>
    <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
  </div>
)
