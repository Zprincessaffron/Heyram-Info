import React from 'react'
import Home from './components/home/Home'
import { UserProvider } from './components/context/UserContext'

function App() {
  return (
    <UserProvider>
      <Home/>
    </UserProvider>
  )
}

export default App