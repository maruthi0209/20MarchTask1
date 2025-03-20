import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Main } from './Components/Main'
import { Body } from './Components/Body'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Main />
      <Body />
      <Footer />
    </>
  )
}

export default App
