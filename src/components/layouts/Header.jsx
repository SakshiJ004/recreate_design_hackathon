import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/viva-logo.png'
import Navbar from './Navbar'

const NAV_LINKS = [
    { label: "About Us",    href: "/#about" },
    { label: "Programmes",  href: "/#programmes" },
    { label: "Admission",   href: "/admissions" },
    { label: "Examination", href: "/#examination" },
    { label: "Campus Life", href: "/#campus-life" },
    { label: "Contact Us",  href: "/contact" },
]

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
                if (scrollingDown && !manualToggle.current) setNavVisible(false)
            } else {
                setScrolled(false)
                setNavVisible(true)
                manualToggle.current = false
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMobileNav = (e, href) => {
        setMobileMenuOpen(false)
        if (href.startsWith('/#')) {
            e.preventDefault()
            const id = href.replace('/#', '')
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 300)
        }
    }

    return (
        <header className={`relative bg-[#F8FAFC] border-b border-gray-200 transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}>

            {/* ── Main padding div ── */}
            <div className="
                px-3   py-1.5
                md:px-5  md:py-2
                lg:px-8  lg:py-2.5
                xl:px-10 xl:py-2.5
                2xl:px-12 2xl:py-3
            ">
                <div className="flex items-center justify-between">

                    {/* ── Logo + Name ── */}
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-3 xl:gap-4">
                        <a href="/">
                            <img
                                src={logo}
                                alt="viva-logo"
                                className="
                                    w-auto object-contain
                                    h-9
                                    md:h-12
                                    lg:h-14
                                    xl:h-18
                                    2xl:h-20
                                "
                            />
                        </a>
                        <div className="
                            leading-none tracking-wide font-extrabold
                            text-[10px]
                            md:text-lg
                            lg:text-xl
                            xl:text-2xl
                            2xl:text-3xl
                            3xl:text-4xl
                        ">
                            <span className="block text-[var(--viva-navy)]">VIVA</span>
                            <span className="block text-[var(--viva-red)]">COLLEGE</span>
                        </div>
                    </div>

                    {/* ── Desktop Right ── */}
                    <div className={`hidden xl:flex transition-all duration-300
                        gap-3 2xl:gap-4 3xl:gap-6
                        ${scrolled ? 'items-center self-center pb-6' : 'items-start self-start pt-2'}
                    `}>
                        {/* Search bar */}
                        <div className="
                            flex items-center border border-gray-400 rounded-full bg-white
                            px-3 py-1.5 w-[260px]
                            xl:px-3 xl:py-2   xl:w-[300px]
                            2xl:px-5 2xl:py-3 2xl:w-[480px]
                            
                        ">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="What do you want to search?"
                                className="
                                    flex-1 outline-none bg-transparent text-gray-500 ml-2
                                    text-xs
                                    xl:text-[12px]
                                    2xl:text-[16px]
                                "
                            />
                            {searchQuery ? (
                                <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-[var(--viva-red)] transition-colors cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-6 xl:w-5 xl:h-6 2xl:w-5 2xl:h-8"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="text-[var(--viva-navy)] flex-shrink-0 cursor-pointer w-4 h-6 xl:w-5 xl:h-6 2xl:w-5 2xl:h-8"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            )}
                        </div>

                        {/* Apply Now */}
                        <button
                            className="
                                relative group overflow-hidden rounded-full font-bold text-white
                                transition-all duration-300
                                px-5  py-1.5 md:py-1.5  text-xs
                                xl:px-4  xl:py-2    xl:text-[12px]
                                2xl:px-8  2xl:py-4.5  2xl:text-[16px]
                                
                            "
                            style={{ background: 'var(--viva-red)' }}
                        >
                            <span
                                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                                style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)' }}
                            />
                            <span className="relative">Apply Now</span>
                        </button>

                        {/* Hamburger when scrolled */}
                        {scrolled && (
                            <button
                                onClick={() => {
                                    manualToggle.current = true
                                    setNavVisible(prev => !prev)
                                }}
                                className="p-2 rounded-lg hover:bg-gray-100 text-[var(--viva-navy)] transition-colors cursor-pointer"
                            >
                                {navVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 3xl:w-7 3xl:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 3xl:w-7 3xl:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>

                    {/* ── Mobile icons (320px - 1279px) ── */}
                    <div className="flex xl:hidden items-center gap-1 md:gap-2">
                        <button onClick={() => setMobileSearchOpen(prev => !prev)} className="p-2 text-[var(--viva-navy)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-5 h-5 md:w-5 md:h-5 lg:w-7 lg:h-7">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>

                        <button
                            className="relative group overflow-hidden hidden md:block rounded-full font-bold text-white transition-all duration-300
                                px-4 py-1.5 text-xs
                                md:px-5 md:py-1.5 md:text-sm
                                lg:px-7 lg:py-2.5 lg:text-base
                            "
                            style={{ background: 'var(--viva-red)' }}
                        >
                            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                                style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)' }} />
                            <span className="relative">Apply Now</span>
                        </button>

                        <button onClick={() => setMobileMenuOpen(prev => !prev)} className="p-2 text-[var(--viva-navy)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Search */}
            {mobileSearchOpen && (
                <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 px-4 py-3 border-t border-gray-100">
                    <div className="flex items-center border border-[var(--viva-navy)] rounded-full px-4 py-2.5 bg-white">
                        <input autoFocus type="text" placeholder="What do you want to search?"
                            className="flex-1 outline-none text-base text-gray-700 bg-transparent ml-2" />
                        <button onClick={() => setMobileSearchOpen(false)} className="flex-shrink-0 text-gray-400 hover:text-[var(--viva-red)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <Navbar visible={navVisible} />

            {/* Mobile Slide Menu */}
            <div className={`xl:hidden fixed top-0 right-0 h-full w-72 bg-[#1A2D5A] z-50 transform transition-transform duration-400 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-5">
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col px-8 gap-6 mt-4">
                    {NAV_LINKS.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} onClick={(e) => handleMobileNav(e, link.href)}
                                className="text-white text-lg xl:text-xl font-medium hover:text-[var(--viva-gold)] transition">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="px-8 mt-8 flex flex-col gap-4">
                    <button className="md:hidden w-full py-3 rounded-full font-bold text-white text-base" style={{ background: 'var(--viva-red)' }}>Apply Now</button>
                    <button className="w-full py-3 rounded-full font-bold text-[var(--viva-navy)] bg-white text-base hover:bg-[var(--viva-gold)] hover:text-white transition-all duration-300">Portals</button>
                </div>
            </div>

            {mobileMenuOpen && <div className="xl:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMobileMenuOpen(false)} />}
        </header>
    )
}

export default Header
