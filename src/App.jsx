// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Ticker from './components/layouts/Ticker'
// import Header from './components/layouts/Header'
// import Hero from './components/sections/Hero'
// import About from './components/sections/About'

// const App = () => {
//   return (
//     <>
//       <Ticker />
//       <Header />
//       <div className="relative">
//         <div className="sticky top-0 h-[100vh] z-0">
//           <Hero />
//         </div>
//         <div className="relative z-10 -mt-[100vh]">
//           {/* spacer so about comes after full scroll */}
//         </div>
//         <About />
//       </div>
//     </>
//   )
// }
// const App = () => {
//   return (
//     <div>
//       <Ticker />
//       <Header />

//       {/* Hero: 100vh sticky - scroll होणार नाही */}
//       <div style={{ position: 'relative', height: '200vh' }}>
//         <div style={{
//           position: 'sticky',
//           top: 0,
//           zIndex: 0,
//           height: '100vh',  // ← हे key आहे! Header च्या मागे Hero push करतो
//         }}>
//           <Hero />
//         </div>
//       </div>
//       {/* About: Hero वर येतो */}
//       <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'white' }}>
//         <About />
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <div style={{ position: 'relative', zIndex: 20 }}>
//         <Ticker />
//       </div>
//       <div style={{ position: 'sticky', top: 0, zIndex: 20 }}>
//         <Header />
//       </div>

//       {/* Hero: fixed राहतो, scroll होत नाही */}
//       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
//         <Hero />
//       </div>

//       {/* Spacer: Hero इतकी जागा सोड */}
//       <div style={{ height: '100vh' }} />

//       {/* About: Hero वर slide होऊन येतो */}
//       <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'white' }}>
//         <About />
//       </div>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useRef } from 'react'
// import Ticker from './components/layouts/Ticker'
// import Header from './components/layouts/Header'
// import Hero from './components/sections/Hero'
// import About from './components/sections/About'
// import Programmes from './components/sections/Programmes'
// import Admissions from './components/sections/Admissions'

// const App = () => {
//   return (
//     <div>
//       <Ticker />
//       <Header />

//       {/* Hero - fixed position */}
//       <div style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh',
//         zIndex: 0
//       }}>
//         <Hero />
//       </div>

//       {/* Scroll container */}
//       <div style={{ position: 'relative', zIndex: 10 }}>

//         {/* Hero साठी spacer */}
//         <div style={{ height: '100vh', background: 'transparent' }} />

//         {/* About */}
//         <div style={{
//           position: 'relative',
//           backgroundColor: '#F8FAFC',
//           borderRadius: '24px 24px 0 0',
//           boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
//           minHeight: 'auto',
//           zIndex: 10
//         }}>
//           <About />
//         </div>

//         {/* Programmes */}
//         <div style={{
//           position: 'relative',
//           backgroundColor: '#F8FAFC',
//           zIndex: 10
//         }}>
//           <Programmes />
//         </div>

//         {/* Admissions */}
//         <div style={{
//           position: 'relative',
//           backgroundColor: '#ffffff',
//           zIndex: 10
//         }}>
//           <Admissions />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdmissionsPage from './pages/AdmissionPage'
import ContactPage from './pages/ContactPage'
import ExaminationPage from './pages/ExaminationPage'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admissions" element={<AdmissionsPage />} />
    <Route path='/examination' element={<ExaminationPage />} />
    <Route path='/contact' element={<ContactPage />} />
    
  </Routes>
)

export default App;