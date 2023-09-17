import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './bootstrap.min.css'
import LoginScreen from './screens/loginScreen/loginScreen'
import RegisterScreen from './screens/registerScreen/registerScreen'
import Header from './components/Header/header'
import Home from './screens/home/home'
import About from './screens/about/about'
import HandT from './screens/handt/handt'
import { useState } from 'react'
function App () {

  return (
    <Router>
      <Header />

      <main className='App'>
        <Routes>
          <Route path='/' element={<RegisterScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/HandT' element={<HandT />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
