// import React, { useState, useEffect, useRef } from 'react'

// // ── Images — uncomment when you add photos ──
// import nikhilImg   from '../../assets/images/nikhi_Jain.png'
// import utsavImg    from '../../assets/images/utsav_Shetty.png'
// import uttungImg   from '../../assets/images/uttung thakur.png'
// import adityaImg   from '../../assets/images/aditya.jpg'
// import samikshaImg from '../../assets/images/samiksha.jpg'
// import saukhyaImg  from '../../assets/images/Saukhya Patil.png'
// import preethiImg  from '../../assets/images/preethi.png'
// import agnishImg   from '../../assets/images/Agnish_shah.png'
// import suhasImg    from '../../assets/images/suhas.jfif'
// import surajImg    from '../../assets/images/suraj k.jfif'
// import akshayImg   from '../../assets/images/Akshay.jpeg'
// import omkarImg    from '../../assets/images/om.jpg'
// import snehalImg   from '../../assets/images/Snehal.jpeg'
// import abhishImg   from '../../assets/images/Abhish.png'
// import mayuriImg   from '../../assets/images/Mayuri.png'
// import samirImg    from '../../assets/images/Samir.png'
// import tanmayImg   from '../../assets/images/Tanmay.png'
// import nitinImg    from '../../assets/images/Nitin.png'

// const ALUMNI = [
//     {
//         name: 'Mr. Nikhil Jain',
//         batch: '',
//         role: '',
//         quote: 'I bring over 15 years of experience in building scalable enterprise software products that drive digital transformation. My focus is on improving the overall experience of any product because, ultimately, it\'s the experience that stays with people.',
//         color: '#1D4ED8',
//         tw: { avatar: 'bg-blue-700', badge: 'bg-blue-50 text-blue-700', accent: 'bg-blue-700', border: 'border-blue-200', shadow: 'shadow-blue-100' },
//         initials: 'NJ', img: nikhilImg,
//     },
//     {
//         name: 'Mr. Utsav Shetty',
//         batch: '',
//         role: 'Security Professional, Royal Caribbean International',
//         quote: 'I am deeply honored to share my journey as an alumna of VIVA College. My academic foundation here was instrumental in carving the path toward my professional success. I am immensely proud to be a part of the VIVA College alumni community.',
//         color: '#065F46',
//         tw: { avatar: 'bg-emerald-800', badge: 'bg-emerald-50 text-emerald-800', accent: 'bg-emerald-800', border: 'border-emerald-200', shadow: 'shadow-emerald-100' },
//         initials: 'US', img: utsavImg,
//     },
//     {
//         name: 'Mr. Uttung Thakur',
//         batch: '',
//         role: 'Owner, Film Production "VIVA INEN"',
//         quote: '• Owner of Film Production "VIVA INEN"\n• Won National Award — "Yellow"\n• Life Ok Screen Award — "Balak Palak"',
//         color: '#C8102E',
//         tw: { avatar: 'bg-red-700', badge: 'bg-red-50 text-red-700', accent: 'bg-red-700', border: 'border-red-200', shadow: 'shadow-red-100' },
//         initials: 'UT', img: uttungImg,
//     },
//     {
//         name: 'Mr. Aditya Parab',
//         batch: '2021-22',
//         role: '',
//         quote: 'Joining The Film, TV and New media production was a rollercoaster ride of emotions and experiences. I gained practical experience with camera equipment, lighting, and editing software. This was a valuable step towards achieving my dream of becoming a filmmaker.',
//         color: '#003DA5',
//         tw: { avatar: 'bg-blue-900', badge: 'bg-blue-50 text-blue-900', accent: 'bg-blue-900', border: 'border-blue-200', shadow: 'shadow-blue-100' },
//         initials: 'AP', img: adityaImg,
//     },
//     {
//         name: 'Ms. Samiksha Jadhav',
//         batch: '2022-2023',
//         role: '',
//         quote: 'Studying in The Film, Television and New media production class was amazing. The FTNMP was a transformative experience that prepared me for a career in the film industry.',
//         color: '#6D28D9',
//         tw: { avatar: 'bg-violet-700', badge: 'bg-violet-50 text-violet-700', accent: 'bg-violet-700', border: 'border-violet-200', shadow: 'shadow-violet-100' },
//         initials: 'SJ', img: samikshaImg,
//     },
//     {
//         name: 'Mr. Saukhya Patil',
//         batch: '2022-23',
//         role: '',
//         quote: 'Enrolling in a Film, TV class was one of the best decisions I\'ve ever made. The hands-on experience with professional equipment gave me a real taste of what it\'s like to work in Films.',
//         color: '#0369A1',
//         tw: { avatar: 'bg-sky-700', badge: 'bg-sky-50 text-sky-700', accent: 'bg-sky-700', border: 'border-sky-200', shadow: 'shadow-sky-100' },
//         initials: 'SP', img: saukhyaImg,
//     },
//     {
//         name: 'Ms. Preethi Yadav',
//         batch: '2020-21',
//         role: '',
//         quote: 'FTNMP was a transformative experience that helped me discover my true potential as an actor. It gave me the confidence and skills to pursue my dreams in the competitive world of acting.',
//         color: '#B45309',
//         tw: { avatar: 'bg-amber-700', badge: 'bg-amber-50 text-amber-700', accent: 'bg-amber-700', border: 'border-amber-200', shadow: 'shadow-amber-100' },
//         initials: 'PY', img: preethiImg,
//     },
//     {
//         name: 'Mr. Agnish Shah',
//         batch: '2009-2012',
//         role: 'Restaurant Manager, Oberoi Mumbai',
//         quote: 'VIVA has world class facilities, vast library, huge kitchen, restaurant training setup, good Wi-Fi & fantastic cooperative faculties who\'ll always be there to help you out.',
//         color: '#8B0000',
//         tw: { avatar: 'bg-red-900', badge: 'bg-red-50 text-red-900', accent: 'bg-red-900', border: 'border-red-200', shadow: 'shadow-red-100' },
//         initials: 'AS', img: agnishImg,
//     },
//     {
//         name: 'Mr. Suhas Bondre',
//         batch: '2018-21',
//         role: '',
//         quote: 'BMM/BAMMC department is excellent. It gave me tons of opportunities to grow. I spend three years with my department & those were the best years of my life, and trust me I am not exaggerating a tiny bit.',
//         color: '#065F46',
//         tw: { avatar: 'bg-emerald-800', badge: 'bg-emerald-50 text-emerald-800', accent: 'bg-emerald-800', border: 'border-emerald-200', shadow: 'shadow-emerald-100' },
//         initials: 'SB', img: suhasImg,
//     },
//     {
//         name: 'Mr. Suraj Kokare',
//         batch: '2016-19',
//         role: '',
//         quote: 'True education isn\'t about what the books can teach you, it\'s about what is outside the book in the practical world. The lessons the department of Mass Media has taught me still reside in the back of my mind.',
//         color: '#1D4ED8',
//         tw: { avatar: 'bg-blue-700', badge: 'bg-blue-50 text-blue-700', accent: 'bg-blue-700', border: 'border-blue-200', shadow: 'shadow-blue-100' },
//         initials: 'SK', img: surajImg,
//     },
//     {
//         name: 'Mr. Akshay Shinde',
//         batch: '2007-2012',
//         role: 'Restaurant Manager, JW Marriott Mumbai Sahar',
//         quote: 'An alumnus expresses gratitude for the quality education and the opportunities to form strong relationships with professors, peers, and staff.',
//         color: '#8B0000',
//         tw: { avatar: 'bg-red-900', badge: 'bg-red-50 text-red-900', accent: 'bg-red-900', border: 'border-red-200', shadow: 'shadow-red-100' },
//         initials: 'AS', img: akshayImg,
//     },
//     {
//         name: 'Mr. Omkar Nivenkar',
//         batch: '2016-19',
//         role: '',
//         quote: 'My college life was a great journey, filled with joys and lessons. The opportunities that inspire us to do finer than before and mould us to become a better version of ourselves.',
//         color: '#0070AD',
//         tw: { avatar: 'bg-sky-800', badge: 'bg-sky-50 text-sky-800', accent: 'bg-sky-800', border: 'border-sky-200', shadow: 'shadow-sky-100' },
//         initials: 'ON', img: omkarImg,
//     },
//     {
//         name: 'Ms. Snehal Mhatre',
//         batch: '2017-2020',
//         role: '',
//         quote: 'College was an unforgettable experience that helped me build my personality and secure a career.',
//         color: '#C2410C',
//         tw: { avatar: 'bg-orange-700', badge: 'bg-orange-50 text-orange-700', accent: 'bg-orange-700', border: 'border-orange-200', shadow: 'shadow-orange-100' },
//         initials: 'SM', img: snehalImg,
//     },
//     {
//         name: 'Mr. Abhish Ankush Palav',
//         batch: '',
//         role: 'Campus Technical Head, Whistling Woods International',
//         quote: 'Software and Application Development Networking and Campus Technical Head at Whistling Woods International.',
//         color: '#341C6A',
//         tw: { avatar: 'bg-purple-900', badge: 'bg-purple-50 text-purple-900', accent: 'bg-purple-900', border: 'border-purple-200', shadow: 'shadow-purple-100' },
//         initials: 'AP', img: abhishImg,
//     },
//     {
//         name: 'Mrs. Mayuri Rajani Ruparel',
//         batch: '',
//         role: 'Co-Founder, RoyalPOS',
//         quote: 'Co-Founder at RoyalPOS, Founder and mentor at Reeva Academy, Founder and YouTuber of SaasBahuRasoi — Gujarat, India.',
//         color: '#D4A017',
//         tw: { avatar: 'bg-yellow-600', badge: 'bg-yellow-50 text-yellow-700', accent: 'bg-yellow-500', border: 'border-yellow-200', shadow: 'shadow-yellow-100' },
//         initials: 'MR', img: mayuriImg,
//     },
//     {
//         name: 'Mr. Samir Barkarbhai Lalani',
//         batch: '',
//         role: 'Senior Mobile App Developer, Dynamic Web, Singapore',
//         quote: 'Senior Mobile Application Developer at Dynamic Web, Singapore — building applications that connect people across borders.',
//         color: '#003087',
//         tw: { avatar: 'bg-blue-950', badge: 'bg-blue-50 text-blue-950', accent: 'bg-blue-950', border: 'border-blue-200', shadow: 'shadow-blue-100' },
//         initials: 'SL', img: samirImg,
//     },
//     {
//         name: 'Mr. Tanmay Kadam',
//         batch: '',
//         role: 'Data Architect & Author',
//         quote: '• Engineer and Data Architect\n• Former Director at NM Idea\n• Azure Infrastructure and Data Engineer\n• Author of Neural Network book',
//         color: '#0070AD',
//         tw: { avatar: 'bg-sky-800', badge: 'bg-sky-50 text-sky-800', accent: 'bg-sky-800', border: 'border-sky-200', shadow: 'shadow-sky-100' },
//         initials: 'TK', img: tanmayImg,
//     },
//     {
//         name: 'Mr. Nitin Kushwaha',
//         batch: '',
//         role: 'Manager, Siemens-Atos',
//         quote: '• CISSP Certified Information System Security Professional\n• Manager – Siemens-Atos\n• Cyber-crime Investigator and Forensics Consultant\n• Data carving Analyst under Forensics Investigator Consultant',
//         color: '#341C6A',
//         tw: { avatar: 'bg-purple-900', badge: 'bg-purple-50 text-purple-900', accent: 'bg-purple-900', border: 'border-purple-200', shadow: 'shadow-purple-100' },
//         initials: 'NK', img: nitinImg,
//     },
// ]

// const CARDS_VISIBLE = 3

// // ── InView hook ──
// const useInView = () => {
//     const ref = useRef(null)
//     const [inView, setInView] = useState(false)
//     useEffect(() => {
//         const obs = new IntersectionObserver(
//             ([e]) => { if (e.isIntersecting) setInView(true) },
//             { threshold: 0.05 }
//         )
//         if (ref.current) obs.observe(ref.current)
//         return () => obs.disconnect()
//     }, [])
//     return [ref, inView]
// }

// // ── Single Card ──
// const AlumniCard = ({ a, isCenter, onClick }) => {
//     return (
//         <div
//             onClick={onClick}
//             className={`
//                 relative flex flex-col rounded-2xl border overflow-hidden
//                 transition-all duration-500 cursor-pointer select-none
//                 ${isCenter
//                     ? `bg-white ${a.tw.border} shadow-xl ${a.tw.shadow} z-10 opacity-100`
//                     : 'bg-white border-gray-100 scale-95 shadow-sm opacity-60 hover:opacity-80'
//                 }
//             `}
//         >
//             {/* Accent top bar */}
//             <div className={`h-1 w-full ${a.tw.accent} transition-all duration-500`} />

//             <div className="flex flex-col gap-4 p-6 flex-1">

//                 {/* Big quote bg */}
//                 <div className="absolute top-4 right-4 text-7xl font-black opacity-5 font-serif leading-none pointer-events-none select-none"
//                     style={{ color: a.color }}>
//                     "
//                 </div>

//                 {/* Quote */}
//                 <p className="text-sm text-gray-600 italic leading-relaxed flex-1 whitespace-pre-line relative z-10">
//                     "{a.quote}"
//                 </p>

//                 {/* Divider */}
//                 <div className="h-px bg-gray-100 w-full" />

//                 {/* Profile row */}
//                 <div className="flex items-center gap-3">

//                     {/* Avatar */}
//                     <div className={`
//                         w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden
//                         border-2 transition-all duration-300
//                         ${a.tw.avatar}
//                     `} style={{ borderColor: `${a.color}30` }}>
//                         {a.img
//                             ? <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
//                             : <span className="text-lg font-black text-white">{a.initials}</span>
//                         }
//                     </div>

//                     {/* Name + course */}
//                     <div className="flex-1 min-w-0">
//                         <p className="font-extrabold text-sm text-slate-800 truncate">{a.name}</p>
//                         {a.batch && (
//                             <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.tw.badge}`}>
//                                 Batch {a.batch}
//                             </span>
//                         )}
//                         {a.role && !a.batch && (
//                             <p className="text-xs text-gray-400 truncate mt-0.5">{a.role}</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const Alumni = () => {
//     const [sectionRef, inView] = useInView()
//     const [active, setActive] = useState(0)
//     const [animDir, setAnimDir] = useState(null)
//     const total = ALUMNI.length

//     const goTo = (idx, dir) => {
//         if (idx === active) return
//         setAnimDir(dir)
//         setTimeout(() => {
//             setActive(idx)
//             setAnimDir(null)
//         }, 300)
//     }

//     const prev = () => goTo((active - 1 + total) % total, 'prev')
//     const next = () => goTo((active + 1) % total, 'next')

//     // Auto advance
//     useEffect(() => {
//         if (!inView) return
//         const t = setInterval(() => {
//             setAnimDir('next')
//             setTimeout(() => {
//                 setActive(p => (p + 1) % total)
//                 setAnimDir(null)
//             }, 300)
//         }, 5000)
//         return () => clearInterval(t)
//     }, [inView, total])

//     // Visible 3 cards: prev, active, next
//     const indices = [
//         (active - 1 + total) % total,
//         active,
//         (active + 1) % total,
//     ]

//     // Dots — max 7
//     const getDots = () => {
//         if (total <= 7) return ALUMNI.map((_, i) => i)
//         let start = Math.max(0, active - 3)
//         let end = Math.min(total - 1, start + 6)
//         if (end - start < 6) start = Math.max(0, end - 6)
//         return Array.from({ length: end - start + 1 }, (_, i) => start + i)
//     }

//     return (
//         <section ref={sectionRef} className="bg-slate-50 py-20 px-12 w-full box-border overflow-hidden font-sans">

//             {/* ── Section Header ── */}
//             <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
//                 <p className="text-xs font-extrabold tracking-widest uppercase text-[#C8102E] mb-2.5 flex items-center gap-2">
//                     <span className="w-6 h-0.5 bg-red-700 inline-block" />
//                     Alumni Network
//                 </p>
//                 <div className="flex items-end justify-between flex-wrap gap-4">
//                     <h2 className="text-5xl font-black text-slate-900 leading-tight">
//                         Viva Alumni<br />
//                         <span className="text-transparent" style={{ WebkitTextStroke: '2px #C8102E' }}>
//                             Network.
//                         </span>
//                     </h2>
//                     <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
//                         A thriving community of 7,000+ graduates across 20+ countries — staying connected, giving back, and growing together.
//                     </p>
//                 </div>
//             </div>

//             {/* ── Cards Row ── */}
//             <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

//                 <div className={`
//                     py-10 grid grid-cols-3 gap-5 mb-8
//                     transition-all duration-300
//                     ${animDir === 'next' ? 'alumni-slide-next' : ''}
//                     ${animDir === 'prev' ? 'alumni-slide-prev' : ''}
//                 `}>
//                     {indices.map((idx, i) => (
//                         <AlumniCard
//                             key={idx}
//                             a={ALUMNI[idx]}
//                             isCenter={i === 1}
//                             onClick={i === 0 ? prev : i === 2 ? next : undefined}
//                         />
//                     ))}
//                 </div>

//                 {/* ── Controls ── */}
//                 <div className="flex items-center justify-between px-2">

//                     {/* Dots */}
//                     <div className="flex items-center gap-1.5">
//                         {getDots().map(i => (
//                             <button
//                                 key={i}
//                                 onClick={() => goTo(i, i > active ? 'next' : 'prev')}
//                                 className={`
//                                     h-1.5 rounded-full border-none cursor-pointer p-0
//                                     transition-all duration-300
//                                     ${i === active ? 'w-6' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}
//                                 `}
//                                 style={i === active ? { background: ALUMNI[active].color, width: '24px' } : {}}
//                             />
//                         ))}
//                     </div>

//                     {/* Counter + Arrows */}
//                     <div className="flex items-center gap-3">
//                         <span className="text-xs text-gray-400 font-semibold">
//                             {active + 1} / {total}
//                         </span>
//                         <div className="flex gap-2">
//                             {[
//                                 { label: '←', action: prev },
//                                 { label: '→', action: next },
//                             ].map(({ label, action }, i) => (
//                                 <button
//                                     key={i}
//                                     onClick={action}
//                                     className="w-10 h-10 rounded-full border flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:text-white hover:scale-105 font-sans"
//                                     style={{
//                                         borderColor: `${ALUMNI[active].color}50`,
//                                         color: ALUMNI[active].color,
//                                     }}
//                                     onMouseEnter={e => e.currentTarget.style.background = ALUMNI[active].color}
//                                     onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                                 >
//                                     {label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Alumni



import React, { useState, useEffect, useRef } from 'react'

import nikhilImg from '../../assets/images/nikhi_Jain.png'
import utsavImg from '../../assets/images/utsav_Shetty.png'
import uttungImg from '../../assets/images/uttung thakur.png'
import adityaImg from '../../assets/images/aditya.jpg'
import samikshaImg from '../../assets/images/samiksha.jpg'
import saukhyaImg from '../../assets/images/Saukhya Patil.png'
import preethiImg from '../../assets/images/preethi.png'
import agnishImg from '../../assets/images/Agnish_shah.png'
import suhasImg from '../../assets/images/suhas.jfif'
import surajImg from '../../assets/images/suraj k.jfif'
import akshayImg from '../../assets/images/Akshay.jpeg'
import omkarImg from '../../assets/images/om.jpg'
import snehalImg from '../../assets/images/Snehal.jpeg'
import abhishImg from '../../assets/images/Abhish.png'
import mayuriImg from '../../assets/images/Mayuri.png'
import samirImg from '../../assets/images/Samir.png'
import tanmayImg from '../../assets/images/Tanmay.png'
import nitinImg from '../../assets/images/Nitin.png'

const ALUMNI = [
    { name: 'Mr. Nikhil Jain', batch: '', role: '', quote: 'I bring over 15 years of experience in building scalable enterprise software products that drive digital transformation. My focus is on improving the overall experience of any product because, ultimately, it\'s the experience that stays with people.', color: '#1D4ED8', tw: { avatar: 'bg-blue-700', badge: 'bg-blue-50 text-blue-700', accent: 'bg-blue-700', border: 'border-blue-200', shadow: 'shadow-blue-100' }, initials: 'NJ', img: nikhilImg },
    { name: 'Mr. Utsav Shetty', batch: '', role: 'Security Professional, Royal Caribbean International', quote: 'I am deeply honored to share my journey as an alumna of VIVA College. My academic foundation here was instrumental in carving the path toward my professional success. I am immensely proud to be a part of the VIVA College alumni community.', color: '#065F46', tw: { avatar: 'bg-emerald-800', badge: 'bg-emerald-50 text-emerald-800', accent: 'bg-emerald-800', border: 'border-emerald-200', shadow: 'shadow-emerald-100' }, initials: 'US', img: utsavImg },
    { name: 'Mr. Uttung Thakur', batch: '', role: 'Owner, Film Production "VIVA INEN"', quote: '• Owner of Film Production "VIVA INEN"\n• Won National Award — "Yellow"\n• Life Ok Screen Award — "Balak Palak"', color: '#C8102E', tw: { avatar: 'bg-red-700', badge: 'bg-red-50 text-red-700', accent: 'bg-red-700', border: 'border-red-200', shadow: 'shadow-red-100' }, initials: 'UT', img: uttungImg },
    { name: 'Mr. Aditya Parab', batch: '2021-22', role: '', quote: 'Joining The Film, TV and New media production was a rollercoaster ride of emotions and experiences. I gained practical experience with camera equipment, lighting, and editing software. This was a valuable step towards achieving my dream of becoming a filmmaker.', color: '#003DA5', tw: { avatar: 'bg-blue-900', badge: 'bg-blue-50 text-blue-900', accent: 'bg-blue-900', border: 'border-blue-200', shadow: 'shadow-blue-100' }, initials: 'AP', img: adityaImg },
    { name: 'Ms. Samiksha Jadhav', batch: '2022-2023', role: '', quote: 'Studying in The Film, Television and New media production class was amazing. The FTNMP was a transformative experience that prepared me for a career in the film industry.', color: '#6D28D9', tw: { avatar: 'bg-violet-700', badge: 'bg-violet-50 text-violet-700', accent: 'bg-violet-700', border: 'border-violet-200', shadow: 'shadow-violet-100' }, initials: 'SJ', img: samikshaImg },
    { name: 'Mr. Saukhya Patil', batch: '2022-23', role: '', quote: 'Enrolling in a Film, TV class was one of the best decisions I\'ve ever made. The hands-on experience with professional equipment gave me a real taste of what it\'s like to work in Films.', color: '#0369A1', tw: { avatar: 'bg-sky-700', badge: 'bg-sky-50 text-sky-700', accent: 'bg-sky-700', border: 'border-sky-200', shadow: 'shadow-sky-100' }, initials: 'SP', img: saukhyaImg },
    { name: 'Ms. Preethi Yadav', batch: '2020-21', role: '', quote: 'FTNMP was a transformative experience that helped me discover my true potential as an actor. It gave me the confidence and skills to pursue my dreams in the competitive world of acting.', color: '#B45309', tw: { avatar: 'bg-amber-700', badge: 'bg-amber-50 text-amber-700', accent: 'bg-amber-700', border: 'border-amber-200', shadow: 'shadow-amber-100' }, initials: 'PY', img: preethiImg },
    { name: 'Mr. Agnish Shah', batch: '2009-2012', role: 'Restaurant Manager, Oberoi Mumbai', quote: 'VIVA has world class facilities, vast library, huge kitchen, restaurant training setup, good Wi-Fi & fantastic cooperative faculties who\'ll always be there to help you out.', color: '#8B0000', tw: { avatar: 'bg-red-900', badge: 'bg-red-50 text-red-900', accent: 'bg-red-900', border: 'border-red-200', shadow: 'shadow-red-100' }, initials: 'AS', img: agnishImg },
    { name: 'Mr. Suhas Bondre', batch: '2018-21', role: '', quote: 'BMM/BAMMC department is excellent. It gave me tons of opportunities to grow. I spend three years with my department & those were the best years of my life, and trust me I am not exaggerating a tiny bit.', color: '#065F46', tw: { avatar: 'bg-emerald-800', badge: 'bg-emerald-50 text-emerald-800', accent: 'bg-emerald-800', border: 'border-emerald-200', shadow: 'shadow-emerald-100' }, initials: 'SB', img: suhasImg },
    { name: 'Mr. Suraj Kokare', batch: '2016-19', role: '', quote: 'True education isn\'t about what the books can teach you, it\'s about what is outside the book in the practical world. The lessons the department of Mass Media has taught me still reside in the back of my mind.', color: '#1D4ED8', tw: { avatar: 'bg-blue-700', badge: 'bg-blue-50 text-blue-700', accent: 'bg-blue-700', border: 'border-blue-200', shadow: 'shadow-blue-100' }, initials: 'SK', img: surajImg },
    { name: 'Mr. Akshay Shinde', batch: '2007-2012', role: 'Restaurant Manager, JW Marriott Mumbai Sahar', quote: 'An alumnus expresses gratitude for the quality education and the opportunities to form strong relationships with professors, peers, and staff.', color: '#8B0000', tw: { avatar: 'bg-red-900', badge: 'bg-red-50 text-red-900', accent: 'bg-red-900', border: 'border-red-200', shadow: 'shadow-red-100' }, initials: 'AS', img: akshayImg },
    { name: 'Mr. Omkar Nivenkar', batch: '2016-19', role: '', quote: 'My college life was a great journey, filled with joys and lessons. The opportunities that inspire us to do finer than before and mould us to become a better version of ourselves.', color: '#0070AD', tw: { avatar: 'bg-sky-800', badge: 'bg-sky-50 text-sky-800', accent: 'bg-sky-800', border: 'border-sky-200', shadow: 'shadow-sky-100' }, initials: 'ON', img: omkarImg },
    { name: 'Ms. Snehal Mhatre', batch: '2017-2020', role: '', quote: 'College was an unforgettable experience that helped me build my personality and secure a career.', color: '#C2410C', tw: { avatar: 'bg-orange-700', badge: 'bg-orange-50 text-orange-700', accent: 'bg-orange-700', border: 'border-orange-200', shadow: 'shadow-orange-100' }, initials: 'SM', img: snehalImg },
    { name: 'Mr. Abhish Ankush Palav', batch: '', role: 'Campus Technical Head, Whistling Woods International', quote: 'Software and Application Development Networking and Campus Technical Head at Whistling Woods International.', color: '#341C6A', tw: { avatar: 'bg-purple-900', badge: 'bg-purple-50 text-purple-900', accent: 'bg-purple-900', border: 'border-purple-200', shadow: 'shadow-purple-100' }, initials: 'AP', img: abhishImg },
    { name: 'Mrs. Mayuri Rajani Ruparel', batch: '', role: 'Co-Founder, RoyalPOS', quote: 'Co-Founder at RoyalPOS, Founder and mentor at Reeva Academy, Founder and YouTuber of SaasBahuRasoi — Gujarat, India.', color: '#D4A017', tw: { avatar: 'bg-yellow-600', badge: 'bg-yellow-50 text-yellow-700', accent: 'bg-yellow-500', border: 'border-yellow-200', shadow: 'shadow-yellow-100' }, initials: 'MR', img: mayuriImg },
    { name: 'Mr. Samir Barkarbhai Lalani', batch: '', role: 'Senior Mobile App Developer, Dynamic Web, Singapore', quote: 'Senior Mobile Application Developer at Dynamic Web, Singapore — building applications that connect people across borders.', color: '#003087', tw: { avatar: 'bg-blue-950', badge: 'bg-blue-50 text-blue-950', accent: 'bg-blue-950', border: 'border-blue-200', shadow: 'shadow-blue-100' }, initials: 'SL', img: samirImg },
    { name: 'Mr. Tanmay Kadam', batch: '', role: 'Data Architect & Author', quote: '• Engineer and Data Architect\n• Former Director at NM Idea\n• Azure Infrastructure and Data Engineer\n• Author of Neural Network book', color: '#0070AD', tw: { avatar: 'bg-sky-800', badge: 'bg-sky-50 text-sky-800', accent: 'bg-sky-800', border: 'border-sky-200', shadow: 'shadow-sky-100' }, initials: 'TK', img: tanmayImg },
    { name: 'Mr. Nitin Kushwaha', batch: '', role: 'Manager, Siemens-Atos', quote: '• CISSP Certified Information System Security Professional\n• Manager – Siemens-Atos\n• Cyber-crime Investigator and Forensics Consultant\n• Data carving Analyst under Forensics Investigator Consultant', color: '#341C6A', tw: { avatar: 'bg-purple-900', badge: 'bg-purple-50 text-purple-900', accent: 'bg-purple-900', border: 'border-purple-200', shadow: 'shadow-purple-100' }, initials: 'NK', img: nitinImg },
]

// ── InView hook ──
const useInView = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.05 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return [ref, inView]
}

// ── Single Card ──
const AlumniCard = ({ a, isCenter, isSide, onClick }) => (
    <div
        onClick={onClick}
        className={`
            relative flex flex-col rounded-2xl border overflow-hidden
            transition-all duration-500 cursor-pointer select-none
            ${isCenter
                ? `bg-white ${a.tw.border} shadow-xl ${a.tw.shadow} z-10 opacity-100`
                : 'bg-white border-gray-100 scale-95 shadow-sm opacity-60 hover:opacity-80'
            }
        `}
    >
        <div className={`h-1 w-full ${a.tw.accent} transition-all duration-500`} />
        <div className="flex flex-col gap-3 flex-1 p-4 sm:p-5 xl:p-6">
            <div className="absolute top-4 right-4 font-black opacity-5 font-serif leading-none pointer-events-none select-none
                text-5xl sm:text-6xl xl:text-7xl"
                style={{ color: a.color }}>"
            </div>
            <p className="text-gray-600 italic leading-relaxed flex-1 whitespace-pre-line relative z-10
                text-xs sm:text-xs md:text-xs lg:text-sm
            ">
                "{a.quote}"
            </p>
            <div className="h-px bg-gray-100 w-full" />
            <div className="flex items-center gap-2 sm:gap-3">
                <div className={`
                    rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden
                    border-2 transition-all duration-300
                    w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14
                    ${a.tw.avatar}
                `} style={{ borderColor: `${a.color}30` }}>
                    {a.img
                        ? <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                        : <span className="font-black text-white text-sm">{a.initials}</span>
                    }
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-extrabold text-slate-800 truncate text-xs sm:text-sm">{a.name}</p>
                    {a.batch && (
                        <span className={`font-bold px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${a.tw.badge}`}>
                            Batch {a.batch}
                        </span>
                    )}
                    {a.role && !a.batch && (
                        <p className="text-gray-400 truncate mt-0.5 text-[10px] sm:text-xs">{a.role}</p>
                    )}
                </div>
            </div>
        </div>
    </div>
)

const Alumni = () => {
    const [sectionRef, inView] = useInView()
    const [active, setActive] = useState(0)
    const [animDir, setAnimDir] = useState(null)
    const total = ALUMNI.length

    // Responsive: how many cards to show
    const [cardsVisible, setCardsVisible] = useState(3)
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setCardsVisible(1)
            else if (window.innerWidth < 1024) setCardsVisible(2)
            else setCardsVisible(3)
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    const goTo = (idx, dir) => {
        if (idx === active) return
        setAnimDir(dir)
        setTimeout(() => { setActive(idx); setAnimDir(null) }, 300)
    }
    const prev = () => goTo((active - 1 + total) % total, 'prev')
    const next = () => goTo((active + 1) % total, 'next')

    useEffect(() => {
        if (!inView) return
        const t = setInterval(() => {
            setAnimDir('next')
            setTimeout(() => { setActive(p => (p + 1) % total); setAnimDir(null) }, 300)
        }, 5000)
        return () => clearInterval(t)
    }, [inView, total])

    // Build visible indices based on cardsVisible
    const indices = cardsVisible === 1
        ? [active]
        : cardsVisible === 2
            ? [active, (active + 1) % total]
            : [(active - 1 + total) % total, active, (active + 1) % total]

    const getDots = () => {
        if (total <= 7) return ALUMNI.map((_, i) => i)
        let start = Math.max(0, active - 3)
        let end = Math.min(total - 1, start + 6)
        if (end - start < 6) start = Math.max(0, end - 6)
        return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    }

    return (
        <section ref={sectionRef} className="bg-slate-50 w-full box-border overflow-hidden font-sans
            py-10  px-4
            sm:py-12 sm:px-6
            md:py-14 md:px-10
            lg:py-16 lg:px-12
            xl:py-18 xl:px-14
            2xl:py-20 2xl:px-16
        ">
            {/* ── Section Header ── */}
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                mb-8 sm:mb-10 xl:mb-12
            `}>
                <p className="font-extrabold tracking-widest uppercase text-[#C8102E] flex items-center gap-2
                    text-[10px] sm:text-xs
                    mb-2 sm:mb-2.5
                ">
                    <span className="w-5 sm:w-6 h-0.5 bg-red-700 inline-block" />
                    Alumni Network
                </p>
                <div className="flex items-end justify-between flex-wrap gap-3 sm:gap-4">
                    <h2 className="font-black text-slate-900 leading-tight
                        text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl
                    ">
                        Viva Alumni<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #C8102E' }}>
                            Network.
                        </span>
                    </h2>
                    <p className="text-gray-500 leading-relaxed
                        text-xs sm:text-xs md:text-sm
                        max-w-[200px] sm:max-w-xs md:max-w-sm
                    ">
                        A thriving community of 7,000+ graduates across 20+ countries — staying connected, giving back, and growing together.
                    </p>
                </div>
            </div>

            {/* ── Cards ── */}
            <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                {/* Grid — 1 col sm, 2 col md, 3 col lg+ */}
                <div className={`
                    py-6 sm:py-8 xl:py-10 mb-6 sm:mb-8
                    grid gap-3 sm:gap-4 xl:gap-5
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    transition-all duration-300
                    ${animDir === 'next' ? 'opacity-0 -translate-x-2' : ''}
                    ${animDir === 'prev' ? 'opacity-0 translate-x-2' : ''}
                `}>
                    {indices.map((idx, i) => {
                        // center logic per cardsVisible
                        const isCenter = cardsVisible === 1 ? true
                            : cardsVisible === 2 ? i === 0
                                : i === 1
                        return (
                            <AlumniCard
                                key={idx}
                                a={ALUMNI[idx]}
                                isCenter={isCenter}
                                onClick={
                                    cardsVisible === 3
                                        ? (i === 0 ? prev : i === 2 ? next : undefined)
                                        : cardsVisible === 2
                                            ? (i === 1 ? next : undefined)
                                            : undefined
                                }
                            />
                        )
                    })}
                </div>

                {/* ── Controls ── */}
                <div className="flex items-center justify-between px-1 sm:px-2">

                    {/* Dots */}
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        {getDots().map(i => (
                            <button
                                key={i}
                                onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                                className={`
                                    h-1.5 rounded-full border-none cursor-pointer p-0
                                    transition-all duration-300
                                    ${i === active ? 'w-6' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}
                                `}
                                style={i === active ? { background: ALUMNI[active].color, width: '24px' } : {}}
                            />
                        ))}
                    </div>

                    {/* Counter + Arrows */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-gray-400 font-semibold text-[10px] sm:text-xs">
                            {active + 1} / {total}
                        </span>
                        <div className="flex gap-1.5 sm:gap-2">
                            {[{ label: '←', action: prev }, { label: '→', action: next }].map(({ label, action }, i) => (
                                <button
                                    key={i}
                                    onClick={action}
                                    className="rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:text-white hover:scale-105
                                        w-8 h-8 text-sm
                                        sm:w-9 sm:h-9 sm:text-base
                                        xl:w-10 xl:h-10
                                    "
                                    style={{ borderColor: `${ALUMNI[active].color}50`, color: ALUMNI[active].color }}
                                    onMouseEnter={e => e.currentTarget.style.background = ALUMNI[active].color}
                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alumni