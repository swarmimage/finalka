import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Basket from './pages/Basket'
import About from './pages/About'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
