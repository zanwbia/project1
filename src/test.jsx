
import {  } from 'react'

function Test() {
  
  return (
    <>
      <nav class='container  mx-auto p-6'>
        <div className="flex  item-center justify-between bg-fuchsia-100  drop-shadow-lg">
          <div class='px-3'>
            <img src='./src/image/z.png' alt='tailwind logo' width='70px' ></img>
          </div>
          <div class='hidden md:flex space-x-6 py-3 px-6'>
            <a href='#' class=' text-pink-600 hover:text-pink-300 '>Portfolio</a>
            <a href='#' class=' text-pink-600 hover:text-pink-300' >About</a>
            <a href='#' class=' text-pink-600 hover:text-pink-300'>Contact</a>
            <a href='#' class=' text-pink-600 hover:text-pink-300'>Social</a>
            <a href='#' class=' py-1 px-4 text-white bg-pink-600  hover:bg-pink-300 rounded-full drop-shadow-lg'>Call Me</a>
          </div>

          <button id='mobile1' class='md:hidden ' >
            <img src='./src/image/a.png' width='70px' /></button>
        </div>


        <div class='md:hidden'>
          <div id='mobile2' class="absolute  hidden  flex-col items-center space-y-4 bg-fuchsia-100 py-7 left-6 right-6  drop-shadow-lg ">
            <a href='#'  >Portfolio</a>
            <a href='#' >About</a>
            <a href='#'>Contact</a>
            <a href='#' >Social</a>
            <a href='#' class=' py-1 px-4 text-white bg-pink-600  hover:bg-pink-300 rounded-full '>Call Me</a>
          </div>
        </div>


      </nav>

      <div class=' container mx-auto  px-6 space-x-7 flex flex-col-reverse md:flex-row  '>
        <div class='md:w-1/2 flex flex-col justify-center space-y-6 py-3 text-center md:text-center text-slate-900 '>
          <h1 class='font-bold text-3xl md:text-5xl text-pink-600'> All your beauty needs in one place </h1>
          <p> the ultimate destination designed to connect women with the best salons, beauty centers, and wellness services. We bring together everything a woman needs in one place.</p>
          <a href='#' class='py-3 px-8 text-white bg-pink-600  hover:bg-pink-300 rounded-full self-center drop-shadow-lg'>Call Me</a>
        </div>


        <div class='md:w-1/2'>
          <img src='./src/image/hero.png' alt='tailwindlogo' ></img>
        </div>
      </div>



      <div class='container mx-auto my-23 text-center mt-50
      '>
        <h class='font-bold text-4xl text-pink-600'>Meet Our Beauty Experts</h>

        <p class='mt-7 max-w-5xl mx-auto'>.</p>
        Our team is made up of passionate professionals dedicated to bringing out the best version of you. From hairstylists and makeup artists to skincare specialists, every member of our team is here to make your beauty journey effortless and enjoyable
        <div class='mt-10 flex flex-col  space-x-0 space-y-5 md:space-y-0 md:flex-row  
         md:space-x-5'>



          <div class="mt-7 md:w-1/3 flex flex-col items-center-safe p-6 mx-4 space-y-2 rounded-lg drop-shadow-lg bg-pink-100 hover:bg-pink-300">
            <img src='./src/image/1.png' alt='sara' class='w-16 rounded-full -mt-12 drop-shadow-lg' ></img>
            <h5 class=' font-bold text-lg text-pink-600 '>Hairstylist ✂️</h5>
            <p class='leading-5 text-sm'>Specializes in haircuts, styling, coloring, and treatments to give you the perfect look.</p>
          </div>


          <div class="mt-7 md:w-1/3 flex flex-col items-center-safe p-6 mx-4 space-y-2 rounded-lg drop-shadow-lg bg-pink-100 hover:bg-pink-300 ">
            <img src='./src/image/2.png' alt='sara' class='w-16 rounded-full -mt-12 drop-shadow-lg' ></img>
            <h5 class=' font-bold text-lg text-pink-600'>Makeup Artist 💄</h5>
            <p class='leading-5 text-sm'>Creates stunning makeup looks for any occasion – from natural beauty to glamorous styles.</p>
          </div>

ZAINAB, [9/9/2025 3:16 PM]
<div class="mt-7 md:w-1/3 flex flex-col items-center-safe p-6 mx-4 space-y-2 rounded-lg bg-pink-100 hover:bg-pink-300  drop-shadow-lg">
            <img src='./src/image/3.png' alt='sara' class='w-16 rounded-full -mt-12 drop-shadow-lg' ></img>
            <h5 class=' font-bold text-lg text-pink-600'>Nail Technician 💅</h5>
            <p class='leading-5 text-sm'>Tailwind CSS works by scanning Expert in manicures, pedicures, and nail art to add the perfect finishing touch.</p>
          </div>

        </div>
      </div>



      <footer class='bg-pink-600'>
        <div class='container mx-auto flex flex-col md:flex-row text-white px-5 py-10 justify-between space-y-8 md:space-y-0'>

          <div class="flex flex-col items-center justify-between space-y-4 md:space-y-2 md:items-start">

            <div><img src='./src/image/z.png' alt='tailwind logo' class='h-30' ></img></div>

            <div class='flex space-x-4'>
              <a href='#'>
                <img src='./src/image/f.png' class='w-12' />
              </a>
              <a href='#'>
                <img src='./src/image/s.png' class='w-12' />
              </a>
              <a href='#'>
                <img src='./src/image/w.png' class='w-12' />
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



    </>
  )
}

export default Test
import React from 'react'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
//import id from '../assets/home3.png'
function card() {
    const card=[

        {title: "Nail Technician 💅",
            ritaing:2.4,
            price:"jhj",
            image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Nail Technician 💅",
            ritaing:2.4,
            price:"jhj",
            image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Nail Technician 💅",
            price:"jhj",
            ritaing:2.4,
            image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
        },
        {   
            title: "Nail Technician 💅",
            ritaing:2.4,
            price:"jhj",
            image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
        },

    ];
  return (
  <section className='py-12 px-6'>
    <h1 className='text-3xl font-bold text-center mb-10' > offers</h1>

    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

    {card.map((c,index)=>(
<div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300' key={index}>


<img className='h-48 w-full object-cover ' src={c.image}/>
<div className='p-4'>
<div className='flex justify-between items-center'>
    <h3 className='text-lg text-black'>{c.title}</h3>
    <div className='flex items-center text-yellow-500 text-sm' >
<span className='mr-1'>{c.ritaing}</span>
<FaStarar/>
    </div>
</div>

<div className='flex items-center text-gray-500 text-sm' ><FaMapMarkerAlt className='mr-2' /><span className='mr-1'>{c.ritaing}</span></div>

<div className='flex justify-between items-center pt-2'>
    <p className='font-bold text-black'>{c.price}</p>
    <button className=' mt-4'> call me</button>
</div>

</div>

    <div/>
    ))}

    </div>
</div>
  </section>

  )
}

export default card
