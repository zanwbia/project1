import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import img from   "../assets/z.png"
function Footer() {
  return (
    <div>
      <footer class='bg-pink-600 '>
        <div class='container mx-auto flex flex-col md:flex-row text-white px-5 py-10 justify-between space-y-8 md:space-y-0 '>

          <div class="flex flex-col items-center justify-between space-y-4 md:space-y-2 md:items-start">

            <div><img src={img} alt='tailwind logo' class='h-30' ></img></div>

            <div class='flex space-x-7'>
              <a href='#'><BsInstagram  class='w-12'/>
                @zainabi
              </a>
              <a href='#'><BsTelephoneOutbound class='w-12'/>
                07703457
              </a>
              <a href='#'><BsGeoAlt  class='w-12'/>
               klknlkjllkllkjlkj
              </a>
            </div>

          </div>


          <div class="flex justify-around space-x-32 text-xl">
            <div className="flex flex-col space-y-2">
              <a href="#" class="hover:text-slate-300">Home</a>
              <a href="#" class="hover:text-slate-300">About</a>
              <a href="#" class="hover:text-slate-300">Contact</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" class="hover:text-slate-300">Imprint</a>
              <a href="#" class="hover:text-slate-300">Privacy</a>
              <a href="#" class="hover:text-slate-300">Credits</a>
            </div>
          </div>



          <div class="flex flex-col">
            <form action='#' class='flex space-x-3'>
              <input type='text' placeholder='Subscribe to Newlatter' class=' bg-amber-50 flex-1 text-black py-2 px-6 rounded-full drop-shadow-lg' />
              <button class='bg-pink-300 hover:bg-pink-200 rounded-full px-6 py-2 drop-shadow-lg '>Go

              </button>
            </form>
            <div class="hidden md:block  my-13">

              Copyright &copy; 2023, All Rights Reserved

            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
