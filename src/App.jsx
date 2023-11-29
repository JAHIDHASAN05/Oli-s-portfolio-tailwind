import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import BodyBg from './assets/img/body-bg.png'
import Project from './Components/Project/Project'

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Banner></Banner>
       <div className="bg-auto bg-no-repeat bg-center h-screen w-screen" style={{ backgroundImage: `url(${BodyBg})` }}>
        <Project></Project>
       </div>
    </>
  )
}

export default App
