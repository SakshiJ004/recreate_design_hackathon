
import React from "react"

const NAV_LINKS = [
    { label: "About Us", href: "/#about" },
    { label: "Programmes", href: "/#programmes" },
    { label: "Admission", href: "/admissions" },
    { label: "Examination", href: "/examination" },
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
        <nav className={`
    hidden xl:block absolute left-1/2 z-30
    transition-all duration-500
    -translate-x-[42%] bottom-[-22px] w-[82%] xl:w-[77%]
    2xl:-translate-x-[45%] 2xl:bottom-[-45px] 2xl:w-[78%]
    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
`}>
            <div className="
                bg-gradient-to-r from-[#1F2F5E] to-[#5973b1]
                text-white shadow-lg nav-diagonal
                flex items-center justify-between
                px-8 py-2 xl:px-13
                2xl:px-16  2xl:py-3.5 
            ">
                <ul className="
                    flex items-center font-medium tracking-wide
                    cursor-pointer whitespace-nowrap
                    gap-5     text-[11px] xl:text-[13px]
                    2xl:gap-8    2xl:text-[18px]
                ">
                    {NAV_LINKS.map((link, i) => (
                        <li key={i} className="whitespace-nowrap">
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="hover:text-[var(--viva-gold) transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="
                    bg-white text-[var(--viva-navy)] font-semibold rounded-xl
                    transition-all duration-300
                    hover:bg-[var(--viva-gold)] hover:text-white whitespace-nowrap
                    px-3    py-1    text-[10px] 
                    2xl:px-4   2xl:py-1.5  xl:text-[13px] 2xl:text-[18px]
                ">
                    Portals
                </button>
            </div>
        </nav >
    )
}

export default Navbar

