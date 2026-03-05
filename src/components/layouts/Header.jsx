// import React, { useState } from 'react'
// import logo from '../../assets/images/viva-logo.png'

// const Header = () => {

//     const [searchOpen, setSearchOpen] = useState(false)
//     const [searchQuery, setSearchQuery] = useState('')

//     return (
//         <header className="bg-white border-b border-gray-200">

//             {/* Centered container */}
//             <div className="px-8 py-6">
//                 <div className='flex items-center justify-between'>
//                     <div className="flex items-center gap-8">

//                         <img
//                             src={logo}
//                             alt="viva-logo"
//                             className="h-30 w-auto object-contain"
//                         />

//                         <h1 className="text-4xl font-extrabold tracking-wide leading-none">
//                             <span className='block text-[var(--viva-navy)]'>VIVA</span>
//                             <span className='block text-[var(--viva-red)]'>COLLEGE</span>
//                         </h1>

//                     </div>
//                 </div>


//                 {/* Right side: Search */}
//                 <div className="flex items-center gap-3">

//                     {/* Expandable search input */}
//                     <div
//                         className={`flex items-center border rounded-full overflow-hidden transition-all duration-300 ${searchOpen
//                             ? 'w-64 border-[var(--viva-navy)] px-3 py-1.5'
//                             : 'w-0 border-transparent'
//                             }`}
//                     >
//                         <input
//                             type="text"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             placeholder="Search..."
//                             className={`flex-1 outline-none text-sm text-gray-700 bg-transparent transition-opacity duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                                 }`}
//                         />

//                         {/* X (Close) SVG Icon */}
//                         {searchOpen && (
//                             <button
//                                 onClick={() => {
//                                     setSearchOpen(false)
//                                     setSearchQuery('')
//                                 }}
//                                 className="ml-1 text-gray-400 hover:text-[var(--viva-red)] transition-colors"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                     <line x1="18" y1="6" x2="6" y2="18" />
//                                     <line x1="6" y1="6" x2="18" y2="18" />
//                                 </svg>
//                             </button>
//                         )}
//                     </div>

//                     {/* Search SVG Icon Button */}
//                     {!searchOpen && (
//                         <button
//                             onClick={() => setSearchOpen(true)}
//                             className="p-2 rounded-full hover:bg-gray-100 text-[var(--viva-navy)] hover:text-[var(--viva-red)] transition-colors"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <circle cx="11" cy="11" r="8" />
//                                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//                             </svg>
//                         </button>
//                     )}

//                 </div>

//             </div>

//         </header>
//     )
// }

// export default Header


import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/viva-logo.png'
import Navbar from './Navbar'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [navVisible, setNavVisible] = useState(true)

    const manualToggle = React.useRef(false)
    const lastScrollY = React.useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollingDown = currentScrollY > lastScrollY.current
            lastScrollY.current = currentScrollY

            if (currentScrollY > 50) {
                setScrolled(true)
                // फक्त खाली scroll होत असताना navbar hide कर
                // manual toggle झाला असेल तर touch करू नकोस
                if (scrollingDown && !manualToggle.current) {
                    setNavVisible(false)
                }
            } else {
                setScrolled(false)
                setNavVisible(true)
                manualToggle.current = false
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header className={`sticky top-0 z-[100] bg-[#F8FAFC] border-b border-gray-200 transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}>
            <div className='px-3 md:px-6 xl:px-14 py-2 md:py-3 xl:py-3'>
                <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'items-center' : 'items-center'}`}>

                    {/* Logo + Name */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <a href="/">
                            <img
                                src={logo}
                                alt="viva-logo"
                                className="h-10 md:h-14 lg:h-20 xl:h-20 w-auto object-contain"
                            />
                        </a>

                        <div className="leading-none tracking-wide text-sm md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                            <span className='block text-[var(--viva-navy)]'>VIVA</span>
                            <span className='block text-[var(--viva-red)]'>COLLEGE</span>
                        </div>
                    </div>

                    {/* Right side: Search */}
                    <div className={`hidden xl:flex gap-6 transition-all duration-300 ${scrolled ? 'items-center self-center pb-6' : 'items-start self-start pt-2'}`}>
                        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-[450px] bg-white">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="What do you want to search?"
                                className="flex-1 outline-none text-[12px] text-gray-500 bg-transparent ml-2"
                            />
                            {searchQuery ? (
                                <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-[var(--viva-red)] transition-colors cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--viva-navy)] flex-shrink-0 cursor-pointer">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            )}
                        </div>


                        {/* Apply Now Button */}
                        <button
                            className="relative group overflow-hidden px-6 py-2 rounded-full text-[14px] font-bold text-white transition-all duration-300"
                            style={{ background: 'var(--viva-red)' }}
                        >
                            {/* Shine animation */}
                            <span
                                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                                style={{
                                    background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                                }}
                            />
                            <span className="relative flex items-center gap-2">
                                Apply Now
                            </span>
                        </button>

                        {/* Hamburger - only shows when scrolled */}
                        {scrolled && (
                            <button
                                onClick={() => {
                                    manualToggle.current = true
                                    setNavVisible(prev => !prev)
                                }}
                                className="p-2 rounded-lg hover:bg-gray-100 text-[var(--viva-navy)] transition-colors cursor-pointer"
                            >
                                {navVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>
                                )}
                            </button>
                        )}

                    </div>
                    {/* Mobile icons - only below lg */}
                    <div className="flex xl:hidden items-center gap-2">

                        {/* Search toggle */}
                        <div className="flex items-center">
                            {/* {mobileSearchOpen ? (
                                <div className="flex items-center border border-[var(--viva-navy)] rounded-full bg-white md:w-[230px] lg:w-[300px] overflow-hidden">
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="What do you want to Search..."
                                        className="flex-1 outline-none text-sm text-gray-700 bg-transparent pl-3 md:py-2 lg:py-4"
                                    />
                                    <button onClick={() => setMobileSearchOpen(false)} className="flex-shrink-0 px-2 text-[var(--viva-navy)] hover:text-[var(--viva-red)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5 lg:w-8 lg:h-8">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            ) : ( */}
                            <button
                                onClick={() => setMobileSearchOpen(prev => !prev)}
                                className="p-2 text-[var(--viva-navy)]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-5 md:h-5 lg:w-8 lg:h-8">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </button>
                        </div>

                        {/* Apply Now button */}
                        <button
                            className="relative group overflow-hidden hidden md:block px-5 lg:px-7 py-2 lg:py-3 rounded-full text-sm lg:text-lg font-bold text-white transition-all duration-300"
                            style={{ background: 'var(--viva-red)' }}
                        >
                            <span
                                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                                style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)' }}
                            />
                            <span className="relative">Apply Now</span>
                        </button>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            className="p-2 text-[var(--viva-navy)]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            {/* Mobile Search Dropdown */}
            {mobileSearchOpen && (
                <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 px-4 py-3 border-t border-gray-100">
                    <div className="flex items-center border border-[var(--viva-navy)] rounded-full px-4 py-2.5 bg-white">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--viva-navy)] flex-shrink-0">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg> */}
                        <input
                            autoFocus
                            type="text"
                            placeholder="What do you want to search?"
                            className="flex-1 outline-none text-base text-gray-700 bg-transparent ml-2"
                        />
                        <button
                            onClick={() => setMobileSearchOpen(false)}
                            className="flex-shrink-0 text-gray-400 hover:text-[var(--viva-red)]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <Navbar visible={navVisible} />

            {/* Mobile Slide Menu */}
            <div className={`xl:hidden fixed top-0 right-0 h-full w-72 bg-[#1A2D5A] z-50 transform transition-transform duration-400 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Close button */}
                <div className="flex justify-end p-5">
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <ul className="flex flex-col px-8 gap-6 mt-4">
                    <li><a href="#" className="text-white text-lg font-medium hover:text-[var(--viva-gold)] transition">About Us</a></li>
                    <li><a href="#" className="text-white text-lg font-medium hover:text-[var(--viva-gold)] transition">Programmes</a></li>
                    <li><a href="#" className="text-white text-lg font-medium hover:text-[var(--viva-gold)] transition">Admission</a></li>
                    <li><a href="#" className="text-white text-lg font-medium hover:text-[var(--viva-gold)] transition">Examination</a></li>
                    <li><a href="#" className="text-white text-lg font-medium hover:text-[var(--viva-gold)] transition">Campus Life</a></li>
                    <li><a href="#" className="text-white text-lg font-medium hover:text-[var(--viva-gold)] transition">Contact Us</a></li>
                </ul>

                {/* Apply Now + Portals */}
                <div className="px-8 mt-8 flex flex-col gap-4">
                    <button
                        className="md:hidden w-full py-3 rounded-full font-bold text-white text-base"
                        style={{ background: 'var(--viva-red)' }}
                    >
                        Apply Now
                    </button>
                    <button className="w-full py-3 rounded-full font-bold text-[var(--viva-navy)] bg-white text-base hover:bg-[var(--viva-gold)] hover:text-white transition-all duration-300">
                        Portals
                    </button>
                </div>

            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    className="xl:hidden fixed inset-0 bg-black/40 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </header>
    )
}

export default Header


