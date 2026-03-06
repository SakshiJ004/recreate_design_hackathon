// import React from 'react'

// const Hero = () => {
//   return (
//     <section className='relative -mt-10'>
//         {/* <div className='bg-gray-500 p-[50px]'>hello</div> */}

//     </section>
//   )
// }

// export default Hero


// import React from "react"
// import campus from "../../assets/images/campus2.png"

// const Hero = () => {
//     return (
//         <section className="relative h-[100vh] w-full overflow-hidden">

//             {/* Background Image */}
//             <img
//                 src={campus}
//                 alt="Viva Campus"
//                 className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
//             />

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

//             {/* Center Content */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

//                 <h1 className="text-7xl md:text-9xl font-serif font-light tracking-wide drop-shadow-lg">
//                     VIVA
//                 </h1>

//                 <p className="mt-4 tracking-widest uppercase text-sm">
//                     College, Mumbai
//                 </p>

//                 {/* Scroll Indicator - NOT absolute bottom */}
//                 <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm tracking-widest uppercase animate-bounce">
//                     Explore Viva ↓
//                 </p>

//             </div>

//         </section>
//     )
// }

// export default Hero


// import React from "react"
// import campus from "../../assets/images/campus2.png"

// const Hero = () => {
//     return (
//         <section className="relative h-[100vh] w-full overflow-hidden">

//             {/* Background Image */}
//             <img
//                 src={campus}
//                 alt="Viva Campus"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//             />

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

//             {/* Center Content */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

//                 <h1 className="
//                     font-serif font-light tracking-wide drop-shadow-lg
//                     text-6xl
//                     sm:text-7xl
//                     md:text-8xl
//                     xl:text-9xl
//                     3xl:text-[180px]
//                 ">
//                     VIVA
//                 </h1>

//                 <p className="
//                     tracking-widest uppercase drop-shadow-md
//                     mt-2 text-[10px]
//                     sm:mt-3 sm:text-xs
//                     md:mt-4 md:text-sm
//                     3xl:mt-6 3xl:text-lg
//                 ">
//                     College, Mumbai
//                 </p>

//                 <p className="
//                     absolute left-1/2 -translate-x-1/2
//                     tracking-widest uppercase animate-bounce drop-shadow-md whitespace-nowrap
//                     bottom-6 text-[10px]
//                     sm:bottom-7 sm:text-xs
//                     md:bottom-8 md:text-sm
//                     3xl:bottom-12 3xl:text-base
//                 ">
//                     Explore Viva ↓
//                 </p>
//             </div>
//         </section>
//     )
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
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    objectPosition: 'center center',
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

                <h1 className="
                    font-serif font-light tracking-wide drop-shadow-lg
                    text-5xl
                    sm:text-7xl
                    md:text-8xl
                    xl:text-9xl
                    3xl:text-[180px]
                ">
                    VIVA
                </h1>

                <p className="
                    tracking-widest uppercase drop-shadow-md
                    mt-2 text-[10px]
                    sm:mt-3 sm:text-xs
                    md:mt-4 md:text-sm
                    3xl:mt-6 3xl:text-lg
                ">
                    College, Mumbai
                </p>

                <p className="
                    absolute left-1/2 -translate-x-1/2
                    tracking-widest uppercase animate-bounce drop-shadow-md whitespace-nowrap
                    bottom-6 text-[10px]
                    sm:bottom-7 sm:text-xs
                    md:bottom-8 md:text-sm
                    2xl:bottom-20
                ">
                    Explore Viva ↓
                </p>
            </div>
        </section>
    )
}

export default Hero