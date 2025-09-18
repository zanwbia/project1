import React from 'react'
import Hero from '../components/Hero'
import Offers from '../components/offers'
import Footer from '../components/Footer'
import Card from '../components/card'
import Testimonials from '../components/Testimonials'
import Login from '../components/Login'
import New from '../components/New'


function Home() {
  return (
    <>
  
      <Hero/>
      <Card/>
   <Offers/>
  
    <Testimonials/>
     
   <Footer/>
    </>
  )
}

export default Home

