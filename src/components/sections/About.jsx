// import React from "react"

// // const About = () => {
// //     return (
// //         <section className="w-full bg-white overflow-hidden">

// //             <div className="max-w-4xl mx-auto text-center">

// //                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
// //                     Empowering Minds. Enriching Futures.
// //                 </h2>

// //                 <p className="mt-6 text-lg text-gray-600 leading-relaxed">
// //                     Established in 1988, Viva College has grown into one of the
// //                     leading institutions in Mumbai’s western region. We are
// //                     committed to academic excellence, innovation, and holistic
// //                     development across Arts, Commerce, and Science disciplines.
// //                 </p>

// //                 <button className="mt-8 px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
// //                     Learn More About Viva
// //                 </button>

// //             </div>

// //         </section>
// //     )
// // }

// const About = () => {
//     return (
//         <section className="w-full bg-white px-6 md:px-16 py-24 min-h-screen">
//             <div className="max-w-4xl mx-auto text-center pt-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//                     Empowering Minds. Enriching Futures.
//                 </h2>
//                 <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//                     Established in 1988, Viva College has grown into one of the
//                     leading institutions in Mumbai's western region. We are
//                     committed to academic excellence, innovation, and holistic
//                     development across Arts, Commerce, and Science disciplines.
//                 </p>
//                 <button className="mt-8 px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
//                     Learn More About Viva
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default About

// import React from "react"

// const About = () => {
//     return (
//         <section className="w-full bg-white">

//             {/* Main About Block */}
//             <div className="px-6 md:px-16 xl:px-24 py-24">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

//                     {/* Left: Text */}
//                     <div>
//                         <span className="text-sm font-bold tracking-widest uppercase text-[var(--viva-red)]">
//                             About Us
//                         </span>
//                         <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-tight">
//                             Empowering Minds.<br />Enriching Futures.
//                         </h2>
//                         <div className="mt-4 w-16 h-1 bg-[var(--viva-red)] rounded-full" />
//                         <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//                             Established in 1988, Viva College has grown into one of the
//                             leading institutions in Mumbai's western region. We are
//                             committed to academic excellence, innovation, and holistic
//                             development across Arts, Commerce, and Science disciplines.
//                         </p>
//                         <p className="mt-4 text-lg text-gray-600 leading-relaxed">
//                             With state-of-the-art facilities, experienced faculty, and a
//                             vibrant campus life, Viva College prepares students to excel
//                             in a rapidly evolving world.
//                         </p>
//                         <button className="mt-8 px-8 py-3 bg-[var(--viva-red)] text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//                             Learn More About Viva →
//                         </button>
//                     </div>

//                     {/* Right: Stats Grid */}
//                     <div className="grid grid-cols-2 gap-6">
//                         {[
//                             { number: "35+", label: "Years of Excellence" },
//                             { number: "15,000+", label: "Students Enrolled" },
//                             { number: "200+", label: "Faculty Members" },
//                             { number: "50+", label: "Courses Offered" },
//                         ].map((stat, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
//                             >
//                                 <div className="text-4xl font-extrabold text-[var(--viva-red)]">
//                                     {stat.number}
//                                 </div>
//                                 <div className="mt-2 text-sm font-medium text-[var(--viva-navy)] tracking-wide">
//                                     {stat.label}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>

//             {/* Bottom Banner */}
//             <div className="bg-[var(--viva-navy)] px-6 md:px-16 xl:px-24 py-16">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//                     <div>
//                         <h3 className="text-2xl md:text-3xl font-bold text-white">
//                             Ready to Join Viva College?
//                         </h3>
//                         <p className="mt-2 text-blue-200">
//                             Admissions open for 2025–26. Apply today and start your journey.
//                         </p>
//                     </div>
//                     <button
//                         className="flex-shrink-0 px-10 py-4 rounded-full font-bold text-[var(--viva-navy)] bg-white hover:bg-[var(--viva-gold)] hover:text-white transition-all duration-300 shadow-lg"
//                     >
//                         Learn More About Viva →
//                     </button>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default About



// import React from "react"

// const stats = [
//     {
//         number: "35+",
//         label: "Years of Excellence",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--viva-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
//             </svg>
//         )
//     },
//     {
//         number: "15,000+",
//         label: "Students Enrolled",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--viva-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//         )
//     },
//     {
//         number: "200+",
//         label: "Expert Faculty",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--viva-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /><path d="M2 12l4-4 4 4" />
//             </svg>
//         )
//     },
//     {
//         number: "50+",
//         label: "Courses Offered",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--viva-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//             </svg>
//         )
//     },
// ]

// const About = () => {
//     return (
//         <section className="w-full min-h-[85vh] flex items-center bg-white">
//             <div className="w-full px-8 md:px-16 xl:px-24">
//                 <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">

//                     {/* Left */}
//                     <div>
//                         <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                             Who We Are
//                         </span>
//                         <h2 className="mt-4 text-5xl font-extrabold text-[var(--viva-navy)] leading-tight">
//                             Empowering Minds.<br />
//                             <span className="text-[var(--viva-red)]">Enriching Futures.</span>
//                         </h2>
//                         <div className="mt-4 w-16 h-1 bg-[var(--viva-gold)] rounded-full" />
//                         <p className="mt-6 text-lg text-gray-500 leading-8">
//                             Established in 1988, Viva College has grown into one of the leading
//                             institutions in Mumbai's western region — committed to academic excellence,
//                             innovation, and holistic development across Arts, Commerce, and Science.
//                         </p>
//                         <div className="mt-20 flex gap-6">
//                             <button className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-base shadow-md">
//                                 Learn More →
//                             </button>
//                             <button className="px-8 py-3.5 border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300 text-base">
//                                 Virtual Tour
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right: Stats */}
//                     <div className="grid grid-cols-2 gap-5">
//                         {stats.map((stat, i) => (
//                             <div key={i} className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-7 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[var(--viva-red)] transition-all duration-300 group">
//                                 <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
//                                     {stat.svg}
//                                 </div>
//                                 <div className="text-4xl font-extrabold text-[var(--viva-red)]">{stat.number}</div>
//                                 <div className="mt-2 text-sm font-semibold text-[var(--viva-navy)] tracking-wide">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About




// import React from "react"

// const stats = [
//     {
//         number: "35+",
//         label: "Years of Excellence",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
//             </svg>
//         )
//     },
//     {
//         number: "15,000+",
//         label: "Students Enrolled",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//         )
//     },
//     {
//         number: "200+",
//         label: "Expert Faculty",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
//             </svg>
//         )
//     },
//     {
//         number: "50+",
//         label: "Courses Offered",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//             </svg>
//         )
//     },
// ]

// const About = () => {
//     return (
//         <section className="w-full py-40 bg-white min-h-[85vh]">
//             <div className="w-full px-8 md:px-16 xl:px-24">
//                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

//                     {/* Left */}
//                     <div className="flex flex-col">

//                         {/* Badge */}
//                         <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                             <span className="w-6 h-px bg-[var(--viva-red)]" />
//                             Who We Are
//                         </span>

//                         {/* Heading */}
//                         <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-[1.2]">
//                             Empowering Minds.<br />
//                             <span className="text-[var(--viva-red)]">Enriching Futures.</span>
//                         </h2>

//                         {/* Gold underline */}
//                         <div className="mt-5 w-14 h-1 bg-[var(--viva-gold)] rounded-full" />

//                         {/* Para */}
//                         <p className="mt-7 text-base md:text-lg text-gray-500 leading-[1.9] max-w-lg">
//                             Established in 1988, Viva College has grown into one of the leading
//                             institutions in Mumbai's western region — committed to academic excellence,
//                             innovation, and holistic development across Arts, Commerce, and Science.
//                         </p>

//                         {/* Buttons */}
//                         <div className="mt-20 flex flex-wrap gap-4">
//                             <button className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105">
//                                 Learn More →
//                             </button>
//                             <button className="px-8 py-3.5 border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300 text-sm">
//                                 Virtual Tour
//                             </button>
//                         </div>

//                     </div>

//                     {/* Right: Stats */}
//                     <div className="grid grid-cols-2 gap-5 max-w-3xl ml-auto">
//                         {stats.map((stat, i) => (
//                             <div
//                                 key={i}
//                                 className="relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-xl hover:border-[var(--viva-red)] transition-all duration-300 group overflow-hidden"
//                             >
//                                 {/* Background accent */}
//                                 <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFF5F5] rounded-bl-[60px] transition-all duration-300 group-hover:bg-[#FFE8E8]" />

//                                 {/* Icon */}
//                                 <div className="relative z-10 p-2.5 bg-[#FFF5F5] rounded-xl group-hover:scale-110 transition-transform duration-300">
//                                     {stat.svg}
//                                 </div>

//                                 {/* Number */}
//                                 <div className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--viva-navy)]">
//                                     {stat.number}
//                                 </div>

//                                 {/* Label */}
//                                 <div className="mt-1.5 text-sm font-medium text-gray-500 leading-snug">
//                                     {stat.label}
//                                 </div>

//                                 {/* Bottom red line on hover */}
//                                 <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-[var(--viva-red)] transition-all duration-500 rounded-b-2xl" />
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About



// import React from "react"

// const stats = [
//     {
//         number: "35+",
//         label: "Years of Excellence",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
//             </svg>
//         )
//     },
//     {
//         number: "15,000+",
//         label: "Students Enrolled",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//         )
//     },
//     {
//         number: "200+",
//         label: "Expert Faculty",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
//             </svg>
//         )
//     },
//     {
//         number: "50+",
//         label: "Courses Offered",
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--viva-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//             </svg>
//         )
//     },
// ]

// const About = () => {
//     return (
//         <section className="w-full pt-16 pb-24 bg-[#F8FAFC]">
//             <div className="w-full px-8 md:px-16 xl:px-24">
//                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

//                     {/* Left */}
//                     <div className="flex flex-col">

//                         {/* Badge */}
//                         <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                             <span className="w-6 h-px bg-[var(--viva-red)]" />
//                             Who We Are
//                         </span>

//                         {/* Heading */}
//                         <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-[1.2]">
//                             Empowering Minds.<br />
//                             <span className="text-[var(--viva-red)]">Enriching Futures.</span>
//                         </h2>

//                         {/* Gold underline */}
//                         <div className="mt-5 w-14 h-1 bg-[var(--viva-gold)] rounded-full" />

//                         {/* Para */}
//                         <p className="mt-8 text-base md:text-lg text-gray-500 leading-[1.9] max-w-lg">
//                             Established in 1988, Viva College has grown into one of the leading
//                             institutions in Mumbai's western region — committed to academic excellence,
//                             innovation, and holistic development across Arts, Commerce, and Science.
//                         </p>

//                         {/* Highlight points */}
//                         <ul className="mt-6 flex flex-col gap-3">
//                             {['NAAC Accredited Institution', 'Affiliated to University of Mumbai', 'Arts, Commerce & Science streams'].map((point, i) => (
//                                 <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
//                                     <span className="w-2 h-2 rounded-full bg-[var(--viva-red)] flex-shrink-0" />
//                                     {point}
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* Buttons */}
//                         <div className="mt-10 flex flex-wrap gap-4">
//                             <button className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105">
//                                 Learn More →
//                             </button>
//                             <button className="px-8 py-3.5 border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300 text-sm">
//                                 Virtual Tour
//                             </button>
//                         </div>

//                     </div>

//                     {/* Right: Stats */}
//                     <div className="grid grid-cols-2 gap-4">
//                         {stats.map((stat, i) => (
//                             <div
//                                 key={i}
//                                 className="relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-xl hover:border-[var(--viva-red)] transition-all duration-300 group overflow-hidden"
//                             >
//                                 {/* Background accent */}
//                                 <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFF5F5] rounded-bl-[60px] transition-all duration-300 group-hover:bg-[#FFE8E8]" />

//                                 {/* Icon */}
//                                 <div className="relative z-10 p-2.5 bg-[#FFF5F5] rounded-xl group-hover:scale-110 transition-transform duration-300">
//                                     {stat.svg}
//                                 </div>

//                                 {/* Number */}
//                                 <div className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--viva-navy)]">
//                                     {stat.number}
//                                 </div>

//                                 {/* Label */}
//                                 <div className="mt-1.5 text-sm font-medium text-gray-500 leading-snug">
//                                     {stat.label}
//                                 </div>

//                                 {/* Bottom red line on hover */}
//                                 <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-[var(--viva-red)] transition-all duration-500 rounded-b-2xl" />
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About


// import React from "react"

// const stats = [
//     {
//         number: "24+",
//         label: "Years of Excellence",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
//             </svg>
//         )
//     },
//     {
//         number: "7,000+",
//         label: "Students Enrolled",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//         )
//     },
//     {
//         number: "150+",
//         label: "Expert Faculty",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
//             </svg>
//         )
//     },
//     {
//         number: "35+",
//         label: "Courses Offered",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//             </svg>
//         )
//     },
//     {
//         number: "3",
//         label: "Academic Streams",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//             </svg>
//         )
//     },
//     {
//         number: "B",
//         label: "Grade Awarded",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//         )
//     },
// ]

// const milestones = [
//     { year: "1991", text: "Utkarsha Junior College Founded" },
//     { year: "2001", text: "VIVA College Established" },
//     { year: "2009", text: "VIVA Institute of Technology" },
//     { year: "2024", text: "Present Day" },
// ]

// const About = () => {
//     return (
//         <div className="bg-white">

//             {/* SECTION 1 — Intro */}
//             <section id="about" className="w-full pt-24 pb-18 bg-white">
//                 <div className="px-8 md:px-16 xl:px-24">
//                     <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-center">

//                         {/* Left */}
//                         <div className="xl:col-span-2">
//                             <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                                 <span className="w-6 h-px bg-[var(--viva-red)]" />
//                                 Who We Are
//                             </span>

//                             <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-[1.2]">
//                                 Shaping Leaders<br />
//                                 <span className="text-[var(--viva-red)]">Since 1988.</span>
//                             </h2>

//                             <div className="mt-5 w-14 h-1 bg-[var(--viva-gold)] rounded-full" />

//                             <p className="mt-7 text-base md:text-lg text-gray-500 leading-[1.9]">
//                                 Viva College, Mumbai — a premier institution under Vishnu Waman Thakur Charitable Trust,
//                                 offering Arts, Commerce, and Science programs. Affiliated to University of Mumbai and
//                                 NAAC Accredited, we nurture 7,000+ students every year.
//                             </p>

//                             {/* Feature list */}
//                             <div className="mt-8 grid grid-cols-1 gap-4">
//                                 {[
//                                     { icon: "🏛️", title: "NAAC Accredited", desc: "Recognized for academic quality & excellence" },
//                                     { icon: "🎓", title: "University of Mumbai", desc: "Affiliated & recognized institution since 1988" },
//                                     // { icon: "🔬", title: "Research Driven", desc: "25+ active research centers & labs" },
//                                 ].map((item, i) => (
//                                     <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
//                                         <span className="text-2xl">{item.icon}</span>
//                                         <div>
//                                             <div className="font-bold text-[var(--viva-navy)] text-sm">{item.title}</div>
//                                             <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="mt-8 flex flex-wrap gap-4">
//                                 <button className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105">
//                                     Learn More →
//                                 </button>
//                                 <button className="px-8 py-3.5 border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300 text-sm">
//                                     Virtual Tour
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="flex flex-col gap-6 xl:col-span-3">
//                             {/* Right - Stats Grid */}
//                             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                                 {stats.map((stat, i) => (
//                                     <div key={i}
//                                         className="relative bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-start shadow-sm hover:shadow-xl hover:border-[var(--viva-red)] transition-all duration-300 group overflow-hidden"
//                                     >
//                                         <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFF5F5] rounded-bl-[50px] group-hover:bg-[#FFE8E8] transition-all duration-300" />
//                                         <div className="relative z-10 p-2 bg-[#FFF5F5] rounded-xl text-[var(--viva-red)] group-hover:scale-110 transition-transform duration-300">
//                                             {stat.icon}
//                                         </div>
//                                         <div className="mt-6 text-2xl md:text-3xl font-extrabold text-[var(--viva-navy)]">{stat.number}</div>
//                                         <div className="mt-1 text-xs font-medium text-gray-500 leading-snug">{stat.label}</div>
//                                         <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-[var(--viva-red)] transition-all duration-500 rounded-b-2xl" />
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="col-span-2 md:col-span-3 mt-2 bg-[var(--viva-navy)] rounded-2xl p-10">
//                                 <div className="flex items-center gap-2 mb-6">
//                                     <span className="w-6 h-px bg-[var(--viva-gold)]" />
//                                     <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-gold)]">Our Journey</span>
//                                 </div>

//                                 <div className="relative top-3 flex items-center justify-between">
//                                     {/* Horizontal line */}
//                                     <div className="absolute left-10 right-10 top-7 h-[2px] bg-white/20" />

//                                     {milestones.map((m, i) => (
//                                         <div key={i} className="relative flex flex-col items-center gap-2 group flex-1">
//                                             <div className="w-14 h-14 rounded-full bg-[var(--viva-red)] flex items-center justify-center text-white font-extrabold text-[14px] z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
//                                                 {m.year}
//                                             </div>
//                                             <div className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-200 text-center">
//                                                 {m.text}
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     )
// }

// export default About



import React from "react"

const stats = [
    {
        number: "24+", label: "Years of Excellence",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
    },
    {
        number: "7,000+", label: "Students Enrolled",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    },
    {
        number: "150+", label: "Expert Faculty",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
    },
    {
        number: "35+", label: "Courses Offered",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
    },
    {
        number: "3", label: "Academic Streams",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    },
    {
        number: "B", label: "Grade Awarded",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    },
]

const milestones = [
    { year: "1991", text: "Utkarsha Junior College Founded" },
    { year: "2001", text: "VIVA College Established" },
    { year: "2009", text: "VIVA Institute of Technology" },
    { year: "2024", text: "Present Day" },
]

const About = () => {
    return (
        <div className="bg-white">
            <section id="about" className="
                w-full bg-white
                pt-10 pb-10
                sm:pt-12 sm:pb-12
                md:pt-16 md:pb-16
                xl:pt-20 xl:pb-20
                2xl:pt-24 2xl:pb-24
            ">
                <div className="
                    px-4
                    sm:px-6
                    md:px-10
                    lg:px-16
                    xl:px-20
                    2xl:px-24
                ">
                    <div className="grid grid-cols-1 xl:grid-cols-5
                        gap-8
                        sm:gap-10
                        md:gap-12
                        xl:gap-16
                        items-center
                    ">

                        {/* ── Left ── */}
                        <div className="xl:col-span-2">

                            {/* Tag */}
                            <span className="inline-flex items-center gap-2 font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]
                                text-[10px] sm:text-xs
                            ">
                                <span className="w-5 sm:w-6 h-px bg-[var(--viva-red)]" />
                                Who We Are
                            </span>

                            {/* Heading */}
                            <h2 className="
                                font-extrabold text-[var(--viva-navy)] leading-[1.2]
                                mt-3 text-2xl
                                sm:mt-4 sm:text-3xl
                                md:text-2xl
                                lg:text-3xl
                                xl:text-3xl
                                2xl:text-4xl
                            ">
                                Shaping Leaders<br />
                                <span className="text-[var(--viva-red)]">Since 1988.</span>
                            </h2>

                            {/* Gold bar */}
                            <div className="w-12 h-1 bg-[var(--viva-gold)] rounded-full
                                mt-3 sm:mt-4 xl:mt-5
                            " />

                            {/* Paragraph */}
                            <p className="
                                text-gray-500 leading-[1.9]
                                mt-4 text-xs
                                sm:mt-5 sm:text-sm
                                md:text-sm
                                xl:text-base
                                2xl:text-md
                            ">
                                Viva College, Mumbai — a premier institution under Vishnu Waman Thakur Charitable Trust,
                                offering Arts, Commerce, and Science programs. Affiliated to University of Mumbai and
                                NAAC Accredited, we nurture 7,000+ students every year.
                            </p>

                            {/* Feature list */}
                            <div className="grid grid-cols-1 gap-2 sm:gap-3 xl:gap-4
                                mt-5 sm:mt-6 xl:mt-8
                            ">
                                {[
                                    { icon: "🏛️", title: "NAAC Accredited", desc: "Recognized for academic quality & excellence" },
                                    { icon: "🎓", title: "University of Mumbai", desc: "Affiliated & recognized institution since 1988" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 xl:gap-4 p-3 xl:p-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
                                        <span className="text-lg xl:text-2xl">{item.icon}</span>
                                        <div>
                                            <div className="font-bold text-[var(--viva-navy)]
                                                text-xs sm:text-xs xl:text-sm
                                            ">{item.title}</div>
                                            <div className="text-gray-500 mt-0.5
                                                text-xs sm:text-xs xl:text-sm
                                            ">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-3 xl:gap-4
                                mt-5 sm:mt-6 xl:mt-8
                            ">
                                <button className="
                                    bg-[var(--viva-red)] text-white font-bold rounded-full
                                    shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-105
                                    transition-all duration-300
                                    px-5 py-2.5 text-xs
                                    sm:px-6 sm:py-3 sm:text-xs
                                    xl:px-8 xl:py-3.5 xl:text-sm
                                ">
                                    Learn More →
                                </button>
                                <button className="
                                    border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full
                                    hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300
                                    px-5 py-2.5 text-xs
                                    sm:px-6 sm:py-3 sm:text-xs
                                    xl:px-8 xl:py-3.5 xl:text-sm
                                ">
                                    Virtual Tour
                                </button>
                            </div>
                        </div>

                        {/* ── Right ── */}
                        <div className="flex flex-col gap-4 xl:gap-6 xl:col-span-3">

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3
                                gap-2 sm:gap-3 xl:gap-4
                            ">
                                {stats.map((stat, i) => (
                                    <div key={i}
                                        className="relative bg-white border border-gray-100 rounded-2xl flex flex-col items-start shadow-sm hover:shadow-xl hover:border-[var(--viva-red)] transition-all duration-300 group overflow-hidden
                                            p-3 sm:p-4 xl:p-5
                                        "
                                    >
                                        <div className="absolute top-0 right-0 rounded-bl-[50px] bg-[#FFF5F5] group-hover:bg-[#FFE8E8] transition-all duration-300
                                            w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16
                                        " />
                                        <div className="relative z-10 bg-[#FFF5F5] rounded-xl text-[var(--viva-red)] group-hover:scale-110 transition-transform duration-300
                                            p-1.5 xl:p-2
                                        ">
                                            {stat.icon}
                                        </div>
                                        <div className="font-extrabold text-[var(--viva-navy)]
                                            mt-3 text-xl
                                            sm:mt-4 sm:text-2xl
                                            xl:mt-6 xl:text-3xl
                                        ">{stat.number}</div>
                                        <div className="font-medium text-gray-500 leading-snug
                                            mt-0.5 text-[10px] sm:text-xs
                                        ">{stat.label}</div>
                                        <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-[var(--viva-red)] transition-all duration-500 rounded-b-2xl" />
                                    </div>
                                ))}
                            </div>

                            {/* Journey */}
                            <div className="bg-[var(--viva-navy)] rounded-2xl
                                p-5 sm:p-6 md:p-8 xl:p-10
                            ">
                                <div className="flex items-center gap-2
                                    mb-4 xl:mb-6
                                ">
                                    <span className="w-5 xl:w-6 h-px bg-[var(--viva-gold)]" />
                                    <span className="font-bold tracking-[0.3em] uppercase text-[var(--viva-gold)]
                                        text-[10px] xl:text-xs
                                    ">Our Journey</span>
                                </div>

                                {/* Desktop/Tablet — horizontal */}
                                <div className="hidden sm:flex relative items-center justify-between top-3">
                                    <div className="absolute left-8 right-8 top-6 h-[2px] bg-white/20
                                        md:left-10 md:right-10 md:top-7
                                    " />
                                    {milestones.map((m, i) => (
                                        <div key={i} className="relative flex flex-col items-center gap-2 group flex-1">
                                            <div className="rounded-full bg-[var(--viva-red)] flex items-center justify-center text-white font-extrabold z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20
                                                w-10 h-10 text-[10px]
                                                md:w-12 md:h-12 md:text-[12px]
                                                xl:w-14 xl:h-14 xl:text-[14px]
                                            ">
                                                {m.year}
                                            </div>
                                            <div className="font-semibold text-white/70 group-hover:text-white transition-colors duration-200 text-center
                                                text-[9px] sm:text-[10px] md:text-xs xl:text-sm
                                            ">
                                                {m.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile — vertical */}
                                <div className="flex sm:hidden flex-col gap-4 relative">
                                    <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/20" />
                                    {milestones.map((m, i) => (
                                        <div key={i} className="flex items-start gap-4 relative">
                                            <div className="w-10 h-10 rounded-full bg-[var(--viva-red)] flex items-center justify-center text-white font-extrabold text-[10px] z-10 flex-shrink-0 shadow-lg border-2 border-white/20">
                                                {m.year}
                                            </div>
                                            <div className="text-xs font-semibold text-white/70 mt-2.5">{m.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About