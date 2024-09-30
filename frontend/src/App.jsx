import React from 'react'
import Home from './components/home/Home'
import { UserProvider } from './components/context/UserContext'
import WebDevelopment from './components/services/WebDevelopment'
import AboutUs from './components/About/AboutUs'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/web-development' element={<WebDevelopment/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App