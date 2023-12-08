import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import BodyBg from './assets/img/body-bg.png'
import Project from './Components/Project/Project'
import Footer from './Components/Footer/Footer'
import HireMe from './Components/HireMe/HireMe'
import Skills from './Components/Skill/skill'
import MyContact from './Components/MyContact/MyContact'


function App() {

  return (
    <>
       <Navbar></Navbar>
       <Banner></Banner>
       <div className="bg-auto bg-no-repeat bg-center "  style={{backgroundImage: `url(${BodyBg})`}}>
        <Project></Project>
        <Skills></Skills>

        <MyContact></MyContact>

        <Footer></Footer>
       </div>
    </>
  )
}

export default App
