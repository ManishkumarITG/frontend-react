import React , { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Signup from './Components/Signup'

function App() {
 
  return (
    <>
       <Header/>
       <Signup/>
       <Footer/>
    </>
  )
}

export default App
