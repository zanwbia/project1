import React, { } from 'react';

function Offers() {
     
     const [stopScroll, setStopScroll] =React.useState (false);
    const cardData = [
        {
            title: "Nail Technician 💅",
            image: "https://cdn.rekaz.io/tenants/3a177771-13dd-9e02-a992-47f5e338998f/3a199f3d-72fd-78a4-eb1a-45f508171fb6.webp",
        },
        {
            title: "Makeup Artist 💄",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7r1_sdSvZQ9H8kbHwxGK-yugIkqgMqUE5j4C6ieoxRof1lkbxKZj_f6nBN8gZXvEuvmU&usqp=CAU",
        },
        {
            title: "Hairstylist ✂️",
            image: "https://salon-ksa.com/wp-content/uploads/2021/11/%D8%A3%D9%81%D8%B6%D9%84-%D8%B5%D8%A7%D9%84%D9%88%D9%86-%D9%86%D8%B3%D8%A7%D8%A6%D9%8A-%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg",
        },
        {
            title: "Think Big, Code Smart",
            image: "https://ar-entrepreneur.com/wp-content/uploads/2021/05/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%B5%D8%A7%D9%84%D9%88%D9%86-%D9%86%D8%B3%D8%A7%D8%A6%D9%8A.jpg",
        },
    ];

  return (
    <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-6xl mx-auto py-25" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <h1 className='text-center text-5xl py-7 text-pink-400 font-bold  md:text-5xl 
                '>OFFERS</h1>

                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
  )
}

export default Offers



   