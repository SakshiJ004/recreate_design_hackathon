import React from "react"
const Navbar = ({ visible = true }) => {
    return (
        <nav className={`hidden xl:block absolute left-1/2 -translate-x-[37%] bottom-[-30px] w-[75%] z-30 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

            <div className="bg-gradient-to-r from-[#1F2F5E] to-[#5973b1] text-white px-20 py-4 shadow-lg nav-diagonal flex items-center justify-between">

                <ul className="flex items-center gap-14 text-lg font-medium tracking-wider cursor-pointer">
                    <li><a href="#" className="hover:text-[var(--viva-gold)] transition">About Us</a></li>
                    <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Programmes</a></li>
                    <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Admission</a></li>
                    <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Examination</a></li>
                    <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Campus Life</a></li>
                    <li><a href="#" className="hover:text-[var(--viva-gold)] transition">Contact Us</a></li>
                </ul>

                <button className="bg-white text-[var(--viva-navy)] px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-[var(--viva-gold)] hover:text-white">
                    Portals
                </button>

            </div>

        </nav>
    )
}

export default Navbar

