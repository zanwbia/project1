import React from 'react'
import { FaStar } from 'react-icons/fa';
import p from '../assets/person.png'
import p1 from '../assets/person2.png'
function Testimonials() {

    const testimonials=[
        {
            id:1,
            name:"zainab",
            address:"Publish Date : 2024-06-17",
            image:p1,
            rating:5,
            review:"It would be better if your customers could provide the full description of their visit to your barbershop. For example, they can write on Google reviews which booking process they used (walked in or booked an appointment). How much did they wait to get the services? What was the price they paid? When questions like these are answered in the reviews, new customers can get more information about your shop."
        },
        {
            id:2,
            name:"noor",
            address:"Publish Date : 2024-06-17",
            image:p,
            rating:2,
            review:"It would be better if your customers could provide the full description of their visit to your barbershop. For example, they can write on Google reviews which booking process they used (walked in or booked an appointment). How much did they wait to get the services? What was the price they paid? When questions like these are answered in the reviews, new customers can get more information about your shop."
        },
        {
            id:3,
            name:"maryam",
            address:"Publish Date : 2024-06-17",
            image:p1,
            rating:4,
            review:"It would be better if your customers could provide the full description of their visit to your barbershop. For example, they can write on Google reviews which booking process they used (walked in or booked an appointment). How much did they wait to get the services? What was the price they paid? When questions like these are answered in the reviews, new customers can get more information about your shop."
        }
    ];

  return (
   <section className='py-16 bg-gray-50 '>
<div className='max-w-6xl mx-auto px-20 text-center'>
     <h2 className='text-3xl text-black font-bold'> what our gests say</h2>
     <p className='text-gray-600 mb-10 max-w-2xl mx-auto'> Description: You can write a description </p>

<div className='grid md:grid-cols-3 gap-6'>
    {testimonials.map((t,index)=>(
        <div className='bg-pink-50 rounded-xl shadow-md p-text-left hover:shadow-lg transition px-6 py-4' 
        key={index}>

<div className=' flex items-center gap-4 mb-4'>

    <img className='w-14 h-14 rounded-full object-cover' src={t.image} />

    <div>
        <h4 className='text-md text-pink-600'>{t.name}</h4>
        <p className='text-gray-600'>{t.address}</p>
    </div>
    </div>


    <div className=' flex items-center text-yellow-300 mb-2'> 
        {Array.from({length:t.rating}).map(()=>(
            <FaStar/>
        ))}
    </div>

<p className='text-gray-600 text-sm '>"{t.review}"</p>
            </div>
    ))}


</div>


</div>

   </section>
  )
}

export default Testimonials
