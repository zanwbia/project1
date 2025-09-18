import React from 'react'
import image from '../assets/home2.png'
import { useClerk,  UserButton  } from '@clerk/clerk-react';

function Hero() {
   const {openSignIn}=useClerk()

  return (
    <div class='pt-14 container mx-auto  px-6 space-x-7 flex flex-col-reverse md:flex-row '>
    
        <div class=' md:w-1/2 flex flex-col justify-center space-y-15 py-9 text-center md:text-center text-slate-900 '>



        

          <h1 class='pt-4 font-bold text-3xl md:text-5xl text-pink-400'> All your beauty needs in one place </h1>
          <p> the ultimate destination designed to connect women with the best salons, beauty centers, and wellness services. We bring together everything a woman needs in one place.</p>
          <a href='#' onClick={openSignIn} class=' py-3 px-8 text-white bg-pink-400  hover:bg-pink-200 rounded-full self-center drop-shadow-lg'>LOGIN</a>
        </div>


        <div class='md:w-1/2'>
          <img src={image} alt='' ></img>
        </div>

      </div>


  )
}

export default Hero

