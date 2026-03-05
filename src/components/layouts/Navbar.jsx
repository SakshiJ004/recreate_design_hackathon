// import React from "react"
// const Navbar = ({ visible = true }) => {
//     return (
//         <nav className={`hidden xl:block absolute left-1/2 -translate-x-[37%] bottom-[-30px] w-[75%] z-30 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

//             <div className="bg-gradient-to-r from-[#1F2F5E] to-[#5973b1] text-white px-20 py-4 shadow-lg nav-diagonal flex items-center justify-between">

//                 <ul className="flex items-center gap-14 text-lg font-medium tracking-wider cursor-pointer">
//                     <li><a href="#" className="hover:text-[var(--viva-gold)] transition">About Us</a></li>
//                     <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Programmes</a></li>
//                     <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Admission</a></li>
//                     <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Examination</a></li>
//                     <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Campus Life</a></li>
//                     <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Contact Us</a></li>
//                 </ul>

//                 <button className="bg-white text-[var(--viva-navy)] px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-[var(--viva-gold)] hover:text-white">
//                     Portals
//                 </button>

//             </div>

//         </nav>
//     )
// }

// export default Navbar



// import React from "react"
// import { Link } from "react-router-dom"

// const NAV_LINKS = [
//     { label: "About Us", href: "/#about" },
//     { label: "Programmes", href: "/#programmes" },
//     { label: "Admission", href: "/admissions" },
//     { label: "Examination", href: "/#examination" },
//     { label: "Campus Life", href: "/#campus-life" },
//     { label: "Contact Us", href: "/contact" },
// ]

// const Navbar = ({ visible = true }) => {
//     const handleScroll = (e, href) => {
//         // Internal section scroll — only if starts with /#
//         if (href.startsWith('/#')) {
//             e.preventDefault()
//             const id = href.replace('/#', '')
//             const el = document.getElementById(id)
//             if (el) {
//                 el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//             }
//         }
//         // External routes (/admissions, /contact) — normal Link behaviour
//     }

//     return (
//         //         <nav className={`
//         //     hidden xl:block absolute left-1/2 z-30
//         //     transition-all duration-500
//         //     -translate-x-[37%] bottom-[-30px] w-[80%]
//         //     2xl:-translate-x-[37%] 2xl:bottom-[-32px] 2xl:w-[72%]
//         //     ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
//         // `}>
//         <nav className={`
//     hidden xl:block absolute left-1/2 z-30
//     transition-all duration-500
//     -translate-x-[37%] bottom-[-24px] w-[82%]
//     2xl:bottom-[-28px] 2xl:w-[76%]
//     ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
// `}>
//             {/* <div className="
//                 bg-gradient-to-r from-[#1F2F5E] to-[#5973b1]
//                 text-white shadow-lg nav-diagonal
//                 flex items-center justify-between

//                 px-10 py-3
//                 xl:px-10 xl:py-3
//                 2xl:px-20 2xl:py-4
//             "> */}
//             <div className="
//     bg-gradient-to-r from-[#1F2F5E] to-[#5973b1]
//     text-white shadow-lg nav-diagonal
//     flex items-center justify-between
//     px-8 py-2.5
//     2xl:px-16 2xl:py-4
// ">
//                 {/* <ul className="
//     flex items-center font-medium tracking-wider cursor-pointer
//     whitespace-nowrap

//     gap-6 text-[13px]
//     xl:gap-6 xl:text-[13px]
//     2xl:gap-14 2xl:text-lg
// "> */}
//                 <ul className="
//     flex items-center font-medium tracking-wide
//     cursor-pointer whitespace-nowrap
//     gap-5 text-[12px]
//     2xl:gap-12 2xl:text-base
// ">
//                     {NAV_LINKS.map((link, i) => (
//                         <li key={i} className="whitespace-nowrap">
//                             <a
//                                 href={link.href}
//                                 onClick={(e) => handleScroll(e, link.href)}
//                                 className="hover:text-[var(--viva-gold)] transition-colors duration-200 whitespace-nowrap"
//                             >
//                                 {link.label}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* <button className="
//                     bg-white text-[var(--viva-navy)] font-semibold rounded-xl
//                     transition-all duration-300
//                     hover:bg-[var(--viva-gold)] hover:text-white

//                     px-4 py-1.5 text-sm
//                     xl:px-4 xl:py-1.5 xl:text-sm
//                     2xl:px-6 2xl:py-2 2xl:text-base
//                 "> */}
//                 <button className="
//     bg-white text-[var(--viva-navy)] font-semibold rounded-xl
//     transition-all duration-300
//     hover:bg-[var(--viva-gold)] hover:text-white whitespace-nowrap
//     px-3 py-1 text-[11px]
//     2xl:px-6 2xl:py-2 2xl:text-sm
// ">
//                     Portals
//                 </button>
//             </div>
//         </nav >
//     )
// }

// export default Navbar


import React from "react"

const NAV_LINKS = [
    { label: "About Us", href: "/#about" },
    { label: "Programmes", href: "/#programmes" },
    { label: "Admission", href: "/admissions" },
    { label: "Examination", href: "/#examination" },
    { label: "Campus Life", href: "/#campus-life" },
    { label: "Contact Us", href: "/contact" },
]

const Navbar = ({ visible = true }) => {
    const handleScroll = (e, href) => {
        if (href.startsWith('/#')) {
            e.preventDefault()
            const id = href.replace('/#', '')
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav
            className={`hidden xl:block absolute left-1/2 -translate-x-[37%] w-[80%] z-30 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            style={{ bottom: 'clamp(-20px, -1.5vw, -28px)' }}
        >
            <div
                className="bg-gradient-to-r from-[#1F2F5E] to-[#5973b1] text-white shadow-lg nav-diagonal flex items-center justify-between"
                style={{ padding: 'clamp(8px, 0.65vw, 14px) clamp(20px, 2.2vw, 56px)' }}
            >
                <ul
                    className="flex items-center font-medium tracking-wide cursor-pointer whitespace-nowrap"
                    style={{
                        gap: 'clamp(16px, 1.8vw, 44px)',
                        fontSize: 'clamp(11px, 0.85vw, 14px)',
                    }}
                >
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

                <button
                    className="bg-white text-[var(--viva-navy)] font-semibold rounded-xl transition-all duration-300 hover:bg-[var(--viva-gold)] hover:text-white whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(10px, 0.75vw, 13px)',
                        padding: 'clamp(4px, 0.35vw, 7px) clamp(10px, 1vw, 20px)',
                    }}
                >
                    Portals
                </button>
            </div>
        </nav >
    )
}

export default Navbar