import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Card from './components/card'
import Testimonials from './components/Testimonials'
import Newpage from './components/Newpage'
import Login from './components/Login'




function App() {
  return (
    <>
   <Navbar/>

   <div className='mx-auto py-30'>
<Routes>
  
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<Testimonials/>}/>
<Route path='/card' element={<Card/>}/>
<Route path='/contact' element={<Card/>}/>
<Route path='/newpage' element={<Newpage/>}/>

</Routes>
   </div>
    </>
  )
}

export default App

