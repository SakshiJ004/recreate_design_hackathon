import React, { useState, useRef, useCallback } from "react"
import { Link } from "react-router-dom"

const NAV_LINKS = [
    { label: "About Us", href: "/#about" },
    { label: "Programmes", href: "/#programmes" },
    { label: "Admission", href: "/admissions" },
    { label: "Examination", href: "/examination" },
    { label: "Campus Life", href: "/#campus-life" },
    { label: "Contact Us", href: "/contact" },
]

const PORTAL_LINKS = [
    {
        label: "Student Login",
        desc: "Access student dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
        href: "https://vivacollege.in/student/",
        color: "bg-blue-50 text-blue-600",
    },
    {
        label: "Staff Login",
        desc: "Faculty & staff portal",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
        href: "https://vivacollege.in/staff/",
        color: "bg-red-50 text-[var(--viva-red)]",
    },
    {
        label: "Student EDBA",
        desc: "EDBA learning platform",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
        href: "https://app.edba.io/login",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        label: "Inventory Login",
        desc: "Inventory management",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
        href: "https://vivacollege.in/inventory/",
        color: "bg-amber-50 text-amber-600",
    },
]

const Navbar = ({ visible = true }) => {
    const [portalOpen, setPortalOpen] = useState(false)
    const buttonRef = useRef(null)
    const [pos, setPos] = useState({ top: 0, right: 0 })
    const closeTimer = useRef(null)

    const handleScroll = (e, href) => {
        if (href.startsWith('/#')) {
            e.preventDefault()
            const id = href.replace('/#', '')
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const openDropdown = () => {
        clearTimeout(closeTimer.current)
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setPos({
                top: rect.bottom + 4, // gap कमी केला — 8 → 4
                right: window.innerWidth - rect.right,
            })
        }
        setPortalOpen(true)
    }

    const closeDropdown = () => {
        // 150ms delay — mouse gap cross करताना बंद होत नाही
        closeTimer.current = setTimeout(() => {
            setPortalOpen(false)
        }, 150)
    }

    const cancelClose = () => {
        clearTimeout(closeTimer.current)
    }

    return (
        <>
            <nav className={`
                hidden xl:block absolute left-1/2 z-[200]
                transition-all duration-500
                -translate-x-[42%] bottom-[-22px] w-[80%]
                2xl:-translate-x-[40%] 2xl:bottom-[-28px] 2xl:w-[76%]
                3xl:-translate-x-[38%] 3xl:bottom-[-34px] 3xl:w-[72%]
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
                <div className="
                    bg-gradient-to-r from-[#1F2F5E] to-[#5973b1]
                    text-white shadow-lg nav-diagonal
                    flex items-center justify-between overflow-visible
                    px-6 py-2
                    xl:px-8 xl:py-2.5
                    2xl:px-12 2xl:py-2.5
                    3xl:px-20 3xl:py-4
                ">
                    <ul className="
                        flex items-center font-medium tracking-wide
                        cursor-pointer whitespace-nowrap
                        gap-4 text-[11px]
                        xl:gap-5 xl:text-[12px]
                        2xl:gap-8 2xl:text-[14px]
                        3xl:gap-14 3xl:text-lg
                    ">
                        {NAV_LINKS.map((link, i) => (
                            <li key={i} className="whitespace-nowrap">
                                {link.href.startsWith('/#') ? (
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="hover:text-[var(--viva-gold)] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="hover:text-[var(--viva-gold)] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Portals button */}
                    <button
                        ref={buttonRef}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className="
                            flex items-center gap-1
                            bg-white text-[var(--viva-navy)] font-semibold rounded-xl
                            transition-all duration-300
                            hover:bg-[var(--viva-gold)] hover:text-white whitespace-nowrap
                            px-3 py-1 text-[10px]
                            xl:px-3 xl:py-1 xl:text-[11px]
                            2xl:px-4 2xl:py-1.5 2xl:text-[13px]
                            3xl:px-6 3xl:py-2 3xl:text-sm
                        "
                    >
                        Portals
                        <svg
                            className={`transition-transform duration-300 w-3 h-3 ${portalOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                </div>
            </nav >

            {/* Dropdown */}
            {
                portalOpen && (
                    <div
                        onMouseEnter={cancelClose}
                        onMouseLeave={closeDropdown}
                        style={{
                            position: 'fixed',
                            top: pos.top,
                            right: pos.right,
                            zIndex: 99999,
                            animation: 'dropdownFadeIn 0.2s ease forwards',
                        }}
                        className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[240px] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0F1C3D] to-[#1F2F5E] px-4 py-3 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-bold text-[10px] tracking-widest uppercase">Quick Access</p>
                                <p className="text-white/40 text-[9px]">Select your portal</p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="p-2 flex flex-col gap-1">
                            {PORTAL_LINKS.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-150 group"
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                >
                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[var(--viva-navy)] font-bold text-xs group-hover:text-[var(--viva-red)] transition-colors leading-tight">
                                            {item.label}
                                        </p>
                                        <p className="text-gray-400 text-[10px] mt-0.5 truncate">{item.desc}</p>
                                    </div>
                                    <svg className="w-3 h-3 text-gray-300 group-hover:text-[var(--viva-red)] flex-shrink-0 group-hover:translate-x-0.5 transition-all duration-200"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="mx-2 mb-2 p-2.5 bg-gray-50 rounded-xl flex items-center justify-between">
                            <p className="text-[10px] text-gray-400">Viva College Portals</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Navbar