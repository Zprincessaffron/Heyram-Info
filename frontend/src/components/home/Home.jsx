import React from 'react'
import MainSection from './MainSection'
import MainServices from './MainServices'
import MenuButton from '../navbar/MenuButton'

function Home() {
  return (
    <div>
        <MainSection/>
        <MainServices/>
        <MenuButton/>

    </div>
  )
}

export default Home