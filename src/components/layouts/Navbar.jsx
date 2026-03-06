
// import React from "react"

// const NAV_LINKS = [
//     { label: "About Us", href: "/#about" },
//     { label: "Programmes", href: "/#programmes" },
//     { label: "Admission", href: "/admissions" },
//     { label: "Examination", href: "/examination" },
//     { label: "Campus Life", href: "/#campus-life" },
//     { label: "Contact Us", href: "/contact" },
// ]

// const Navbar = ({ visible = true }) => {
//     const handleScroll = (e, href) => {
//         if (href.startsWith('/#')) {
//             e.preventDefault()
//             const id = href.replace('/#', '')
//             const el = document.getElementById(id)
//             if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//         }
//     }

//     return (
//         <nav className={`
//     hidden xl:block absolute left-1/2 z-30
//     transition-all duration-500
//     -translate-x-[42%] bottom-[-22px] w-[82%] xl:w-[77%]
//     2xl:-translate-x-[45%] 2xl:bottom-[-45px] 2xl:w-[78%]
//     ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
// `}>
//             <div className="
//                 bg-gradient-to-r from-[#1F2F5E] to-[#5973b1]
//                 text-white shadow-lg nav-diagonal
//                 flex items-center justify-between
//                 px-8 py-2 xl:px-13
//                 2xl:px-16  2xl:py-3.5 
//             ">
//                 <ul className="
//                     flex items-center font-medium tracking-wide
//                     cursor-pointer whitespace-nowrap
//                     gap-5     text-[11px] xl:text-[13px]
//                     2xl:gap-8    2xl:text-[18px]
//                 ">
//                     {NAV_LINKS.map((link, i) => (
//                         <li key={i} className="whitespace-nowrap">
//                             <a
//                                 href={link.href}
//                                 onClick={(e) => handleScroll(e, link.href)}
//                                 className="hover:text-[var(--viva-gold) transition-colors duration-200"
//                             >
//                                 {link.label}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>

//                 <button className="
//                     bg-white text-[var(--viva-navy)] font-semibold rounded-xl
//                     transition-all duration-300
//                     hover:bg-[var(--viva-gold)] hover:text-white whitespace-nowrap
//                     px-3    py-1    text-[10px] 
//                     2xl:px-4   2xl:py-1.5  xl:text-[13px] 2xl:text-[18px]
//                 ">
//                     Portals
//                 </button>
//             </div>
//         </nav >
//     )
// }

// export default Navbar



import React from "react"
import { useState } from "react"
const NAV_LINKS = [
    { label: "About Us", href: "/#about" },
    { label: "Programmes", href: "/#programmes" },
    { label: "Admission", href: "/admissions" },
    { label: "Examination", href: "/examination" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Contact Us", href: "/contact" },
]

const PORTAL_LINKS = [
    {
        label: "Student Login",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
        ),
        href: "https://vivacollege.org/student-login",
    },
    {
        label: "Staff Login",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        href: "https://vivacollege.org/staff-login",
    },
    {
        label: "Student EDBA Login",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
        href: "https://app.edba.io/login",
    },
    {
        label: "Inventory Login",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        ),
        href: "https://vivacollege.org/inventory-login",
    },
]

const Navbar = ({ visible = true }) => {
    const [portalOpen, setPortalOpen] = useState(false)

    const handleScroll = (e, href) => {
        if (href.startsWith('/#')) {
            e.preventDefault()
            const id = href.replace('/#', '')
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className={`
            hidden xl:block absolute left-1/2 z-30
            transition-all duration-500
            -translate-x-[42%] bottom-[-22px] w-[80%]
            2xl:-translate-x-[40%] 2xl:bottom-[-28px] 2xl:w-[76%]
            3xl:-translate-x-[38%] 3xl:bottom-[-34px] 3xl:w-[72%]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
            <div className="
                bg-gradient-to-r from-[#1F2F5E] to-[#5973b1]
                text-white shadow-lg nav-diagonal
                flex items-center justify-between
                px-6    py-2
                xl:px-8  xl:py-2.5
                2xl:px-12 2xl:py-2.5
                3xl:px-20 3xl:py-4
            ">
                <ul className="
                    flex items-center font-medium tracking-wide
                    cursor-pointer whitespace-nowrap
                    gap-4      text-[11px]
                    xl:gap-5   xl:text-[12px]
                    2xl:gap-8  2xl:text-[14px]
                    3xl:gap-14 3xl:text-lg
                ">
                    {NAV_LINKS.map((link, i) => (
                        <li key={i} className="whitespace-nowrap">
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="hover:text-[var(--viva-gold)] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Portals — Hover Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setPortalOpen(true)}
                    onMouseLeave={() => setPortalOpen(false)}
                >
                    {/* Portals Button */}
                    <button className="
                        flex items-center gap-1
                        bg-white text-[var(--viva-navy)] font-semibold rounded-xl
                        transition-all duration-300
                        hover:bg-[var(--viva-gold)] hover:text-white whitespace-nowrap
                        px-3    py-1    text-[10px]
                        xl:px-3  xl:py-1   xl:text-[11px]
                        2xl:px-4 2xl:py-1.5 2xl:text-[13px]
                        3xl:px-6 3xl:py-2   3xl:text-sm
                    ">
                        Portals
                        <svg
                            className={`transition-transform duration-200 w-3 h-3 ${portalOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    <div className={`
                        absolute right-0 top-full mt-2
                        bg-white rounded-2xl shadow-2xl border border-gray-100
                        w-[200px] overflow-hidden
                        transition-all duration-200
                        ${portalOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
                    `}>

                        {/* Header */}
                        <div className="bg-[var(--viva-navy)] px-4 py-2.5">
                            <p className="text-white font-bold text-[10px] tracking-widest uppercase">Quick Access</p>
                        </div>

                        {/* Links */}
                        <div className="py-1.5">
                            {PORTAL_LINKS.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors duration-150 group"
                                >
                                    <span className="text-[var(--viva-navy)] group-hover:text-[var(--viva-red)] transition-colors flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="text-[var(--viva-navy)] font-semibold text-xs group-hover:text-[var(--viva-red)] transition-colors">
                                        {item.label}
                                    </span>
                                    <svg className="ml-auto w-3 h-3 text-gray-300 group-hover:text-[var(--viva-red)] flex-shrink-0 transition-colors"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar