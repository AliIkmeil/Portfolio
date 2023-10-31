import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import "./Main.css"
const Main = () => {
  return (
    <div>
    <header className='navBarContainer'>      
      <NavBar/>
  </header>
  <main>
    <Outlet/>
  </main>
    </div>
  )
}

export default Main