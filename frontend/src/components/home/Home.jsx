import React from 'react'
import MainSection from './MainSection'
import MainServices from './MainServices'
import MenuButton from '../navbar/MenuButton'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div>
        <MainSection/>
        <MainServices/>
        <MenuButton/>
        <Footer/>
        

    </div>
  )
}

export default Home