import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <div>

    <header>      
      <NavBar/>
  </header>
  <main>
    <Outlet/>
  </main>
    </div>
  )
}

export default Main