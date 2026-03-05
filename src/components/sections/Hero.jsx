// import React from 'react'

// const Hero = () => {
//   return (
//     <section className='relative -mt-10'>
//         {/* <div className='bg-gray-500 p-[50px]'>hello</div> */}

//     </section>
//   )
// }

// export default Hero


import React from "react"
import campus from "../../assets/images/campus2.png"

const Hero = () => {
    return (
        <section className="relative h-[100vh] w-full overflow-hidden">

            {/* Background Image */}
            <img
                src={campus}
                alt="Viva Campus"
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

                <h1 className="text-7xl md:text-9xl font-serif font-light tracking-wide drop-shadow-lg">
                    VIVA
                </h1>

                <p className="mt-4 tracking-widest uppercase text-sm">
                    College, Mumbai
                </p>

                {/* Scroll Indicator - NOT absolute bottom */}
                <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm tracking-widest uppercase animate-bounce">
                    Explore Viva ↓
                </p>

            </div>

        </section>
    )
}

export default Hero