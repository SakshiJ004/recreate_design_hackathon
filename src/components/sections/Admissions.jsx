// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const AdmissionsHome = () => {
//     const navigate = useNavigate()
//     const [hoveredCard, setHoveredCard] = useState(null)

//     const cards = [
//         {
//             id: "UG",
//             label: "Undergraduate",
//             shortLabel: "UG",
//             sub: "After 12th • 3 Year Degree",
//             desc: "Begin your academic journey with 29 programmes across Arts, Commerce & Science.",
//             streams: [
//                 { name: "Arts", count: 7, color: "bg-red-100 text-[var(--viva-red)]" },
//                 { name: "Commerce", count: 10, color: "bg-blue-100 text-[var(--viva-navy)]" },
//                 { name: "Science", count: 12, color: "bg-emerald-100 text-emerald-700" },
//             ],
//             accent: "#C8102E",
//             accentLight: "#FEF2F2",
//             number: "01",
//         },
//         {
//             id: "PG",
//             label: "Postgraduate",
//             shortLabel: "PG",
//             sub: "After Graduation • 2 Year Degree",
//             desc: "Advance your expertise with 12 specialised M.A., M.Com & M.Sc programmes.",
//             streams: [
//                 { name: "Arts", count: 4, color: "bg-red-100 text-[var(--viva-red)]" },
//                 { name: "Commerce", count: 3, color: "bg-blue-100 text-[var(--viva-navy)]" },
//                 { name: "Science", count: 5, color: "bg-emerald-100 text-emerald-700" },
//             ],
//             accent: "#0F1C3D",
//             accentLight: "#EFF3FF",
//             number: "02",
//         },
//     ]

//     return (
//         <section id='admissions' className="w-full bg-white overflow-hidden">

//             {/* Top diagonal band */}
//             <div className="relative bg-[var(--viva-navy)] py-16 px-8 md:px-16 xl:px-24"
//                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}>
//                 <div className="absolute inset-0 opacity-5"
//                     style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
//                 <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
//                     <div>
//                         <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                             <span className="w-6 h-px bg-[var(--viva-red)]" />
//                             Admissions 2025–26
//                         </span>
//                         <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-[1.1]">
//                             Your Future<br />
//                             <span style={{ WebkitTextStroke: '2px #C8102E', color: 'transparent' }}>Starts Here.</span>
//                         </h2>
//                     </div>
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                         <span className="text-emerald-400 text-sm font-bold">Admissions Open 2025–26</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Cards — overlap the diagonal */}
//             <div className="px-8 pt-10 md:px-16 xl:px-24 -mt-8 pb-16">
//                 <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {cards.map((card) => (
//                         <div
//                             key={card.id}
//                             onMouseEnter={() => setHoveredCard(card.id)}
//                             onMouseLeave={() => setHoveredCard(null)}
//                             onClick={() => navigate('/admissions', { state: { level: card.id } })}
//                             className="relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 group"
//                             style={{
//                                 boxShadow: hoveredCard === card.id
//                                     ? `0 24px 60px ${card.accent}30`
//                                     : '0 4px 24px rgba(0,0,0,0.08)',
//                                 transform: hoveredCard === card.id ? 'translateY(-6px)' : 'translateY(0)',
//                             }}>

//                             {/* Background */}
//                             <div className="absolute inset-0 transition-all duration-500"
//                                 style={{ backgroundColor: hoveredCard === card.id ? card.accent : '#F8FAFC' }} />

//                             {/* Big number watermark */}
//                             <div className="absolute top-4 right-6 font-extrabold select-none transition-all duration-500 leading-none"
//                                 style={{
//                                     fontSize: '120px',
//                                     color: hoveredCard === card.id ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
//                                 }}>
//                                 {card.number}
//                             </div>

//                             {/* Content */}
//                             <div className="relative z-10 p-8">

//                                 {/* Top row */}
//                                 <div className="flex items-start justify-between pb-8">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500"
//                                             style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : card.accentLight }}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
//                                                 stroke={hoveredCard === card.id ? 'white' : card.accent}
//                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                                 <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                                                 <path d="M6 12v5c3 3 9 3 12 0v-5" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <p className="text-xs font-black tracking-widest uppercase transition-colors duration-500"
//                                                 style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.5)' : '#9CA3AF' }}>
//                                                 Programme Level
//                                             </p>
//                                             <p className="text-lg font-extrabold transition-colors duration-500"
//                                                 style={{ color: hoveredCard === card.id ? 'white' : card.accent }}>
//                                                 {card.shortLabel}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Arrow */}
//                                     <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
//                                         style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : 'white', border: `2px solid ${hoveredCard === card.id ? 'rgba(255,255,255,0.2)' : '#E5E7EB'}` }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
//                                             stroke={hoveredCard === card.id ? 'white' : card.accent}
//                                             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
//                                             style={{ transform: hoveredCard === card.id ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.4s' }}>
//                                             <path d="M5 12h14M12 5l7 7-7 7" />
//                                         </svg>
//                                     </div>
//                                 </div>

//                                 {/* Title */}
//                                 <h3 className="text-3xl font-extrabold mb-1 transition-colors duration-500"
//                                     style={{ color: hoveredCard === card.id ? 'white' : '#0F1C3D' }}>
//                                     {card.label}
//                                 </h3>
//                                 <p className="text-sm font-bold mb-3 transition-colors duration-500"
//                                     style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.6)' : card.accent }}>
//                                     {card.sub}
//                                 </p>
//                                 <p className="text-sm leading-relaxed mb-7 transition-colors duration-500"
//                                     style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>
//                                     {card.desc}
//                                 </p>

//                                 {/* Divider */}
//                                 <div className="h-px mb-6 transition-all duration-500"
//                                     style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : '#E5E7EB' }} />

//                                 {/* Stream pills */}
//                                 <div className="pt-8 flex gap-2 flex-wrap">
//                                     {card.streams.map((s, i) => (
//                                         <div key={i}
//                                             className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500"
//                                             style={{
//                                                 backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : 'white',
//                                                 color: hoveredCard === card.id ? 'white' : '#374151',
//                                                 border: hoveredCard === card.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid #E5E7EB'
//                                             }}>
//                                             <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
//                                                 style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.6)' : card.accent }} />
//                                             {s.name} — {s.count}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom strip */}
//                 <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl px-7 py-5 border border-gray-100 bg-[#F8FAFC]">
//                     <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 bg-[var(--viva-navy)] rounded-xl flex items-center justify-center flex-shrink-0">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//                             </svg>
//                         </div>
//                         <div>
//                             <p className="font-extrabold text-[var(--viva-navy)] text-sm">Need help choosing?</p>
//                             <p className="text-gray-400 text-xs">Call us: +91 250 2450 891 • Mon–Sat, 10am–5pm</p>
//                         </div>
//                     </div>
//                     <button
//                         onClick={() => navigate('/admissions')}
//                         className="flex items-center gap-2 px-6 py-3 bg-[var(--viva-red)] text-white font-bold rounded-full text-sm hover:bg-red-700 transition-all hover:scale-105 flex-shrink-0">
//                         Explore All Admissions
//                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M5 12h14M12 5l7 7-7 7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AdmissionsHome



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdmissionsHome = () => {
    const navigate = useNavigate()
    const [hoveredCard, setHoveredCard] = useState(null)

    const cards = [
        {
            id: "UG",
            label: "Undergraduate",
            shortLabel: "UG",
            sub: "After 12th • 3 Year Degree",
            desc: "Begin your academic journey with 29 programmes across Arts, Commerce & Science.",
            streams: [
                { name: "Arts", count: 7, color: "bg-red-100 text-[var(--viva-red)]" },
                { name: "Commerce", count: 10, color: "bg-blue-100 text-[var(--viva-navy)]" },
                { name: "Science", count: 12, color: "bg-emerald-100 text-emerald-700" },
            ],
            accent: "#C8102E",
            accentLight: "#FEF2F2",
            number: "01",
        },
        {
            id: "PG",
            label: "Postgraduate",
            shortLabel: "PG",
            sub: "After Graduation • 2 Year Degree",
            desc: "Advance your expertise with 12 specialised M.A., M.Com & M.Sc programmes.",
            streams: [
                { name: "Arts", count: 4, color: "bg-red-100 text-[var(--viva-red)]" },
                { name: "Commerce", count: 3, color: "bg-blue-100 text-[var(--viva-navy)]" },
                { name: "Science", count: 5, color: "bg-emerald-100 text-emerald-700" },
            ],
            accent: "#0F1C3D",
            accentLight: "#EFF3FF",
            number: "02",
        },
    ]

    return (
        <section id='admissions' className="w-full bg-white overflow-hidden">

            {/* Top diagonal band */}
            <div className="relative bg-[var(--viva-navy)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}>

                {/* Pattern */}
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between
                    gap-4
                    px-4    py-10
                    sm:px-6  sm:py-12
                    md:px-10 md:py-14
                    lg:px-14 lg:py-16
                    xl:px-18 xl:py-16
                    2xl:px-22 2xl:py-14
                ">
                    <div>
                        <span className="inline-flex items-center gap-2 font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]
                            text-[10px] sm:text-[10px] md:text-xs
                        ">
                            <span className="w-4 sm:w-5 md:w-6 h-px bg-[var(--viva-red)]" />
                            Admissions 2025–26
                        </span>
                        <h2 className="font-extrabold text-white leading-[1.1]
                            mt-2 text-xl
                            sm:mt-3 sm:text-2xl
                            md:mt-4 md:text-3xl
                            lg:text-4xl
                            xl:text-4xl
                            2xl:text-4xl
                        ">
                            Your Future<br />
                            <span style={{ WebkitTextStroke: '2px #C8102E', color: 'transparent' }}>Starts Here.</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:pb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 font-bold
                            text-xs sm:text-sm
                        ">Admissions Open 2025–26</span>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="
                -mt-6   pb-10   px-4
                sm:-mt-6  sm:pb-8  sm:px-6
                md:-mt-8  md:pb-10  md:px-10
                lg:-mt-8  lg:pb-12  lg:px-12
                xl:-mt-8  xl:pb-14  xl:px-16
                2xl:-mt-8 2xl:pb-16 2xl:px-18
            ">
                <div className="pb-6 sm:pb-8 sm:pt-10 xl:pb-8 xl:pt-10 grid grid-cols-1 md:grid-cols-2
                    gap-4 sm:gap-5 xl:gap-6
                ">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => navigate('/admissions', { state: { level: card.id } })}
                            className="relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 group"
                            style={{
                                boxShadow: hoveredCard === card.id
                                    ? `0 24px 60px ${card.accent}30`
                                    : '0 4px 24px rgba(0,0,0,0.08)',
                                transform: hoveredCard === card.id ? 'translateY(-6px)' : 'translateY(0)',
                            }}>

                            {/* Background */}
                            <div className="absolute inset-0 transition-all duration-500"
                                style={{ backgroundColor: hoveredCard === card.id ? card.accent : '#F8FAFC' }} />

                            {/* Number watermark */}
                            <div className="absolute top-3 right-4 font-extrabold select-none transition-all duration-500 leading-none
                                text-[60px] sm:text-[80px] md:text-[90px] xl:text-[100px] 2xl:text-[90px]
                            "
                                style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)' }}>
                                {card.number}
                            </div>

                            {/* Content */}
                            <div className="relative z-10
                                p-5
                                sm:p-6
                                md:p-6
                                lg:p-7
                                xl:p-8
                                2xl:p-6
                            ">
                                {/* Top row */}
                                <div className="flex items-start justify-between
                                    pb-5 sm:pb-6 xl:pb-5
                                ">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="rounded-2xl flex items-center justify-center transition-all duration-500
                                            w-9 h-9 sm:w-10 sm:h-10 xl:w-10 xl:h-8
                                        "
                                            style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : card.accentLight }}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18"
                                                viewBox="0 0 24 24" fill="none"
                                                stroke={hoveredCard === card.id ? 'white' : card.accent}
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-black tracking-widest uppercase transition-colors duration-500
                                                text-[8px] sm:text-[9px] xl:text-[10px]
                                            "
                                                style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.5)' : '#9CA3AF' }}>
                                                Programme Level
                                            </p>
                                            <p className="font-extrabold transition-colors duration-500
                                                text-sm sm:text-base xl:text-[12px]
                                            "
                                                style={{ color: hoveredCard === card.id ? 'white' : card.accent }}>
                                                {card.shortLabel}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0
                                        w-8 h-8 sm:w-9 sm:h-9 xl:w-8 xl:h-8
                                    "
                                        style={{
                                            backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : 'white',
                                            border: `2px solid ${hoveredCard === card.id ? 'rgba(255,255,255,0.2)' : '#E5E7EB'}`
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                            stroke={hoveredCard === card.id ? 'white' : card.accent}
                                            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            style={{ transform: hoveredCard === card.id ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.4s' }}>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-extrabold mb-1 transition-colors duration-500
                                    text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl
                                "
                                    style={{ color: hoveredCard === card.id ? 'white' : '#0F1C3D' }}>
                                    {card.label}
                                </h3>

                                <p className="font-bold mb-2 sm:mb-3 transition-colors duration-500
                                    text-xs sm:text-[14px]
                                "
                                    style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.6)' : card.accent }}>
                                    {card.sub}
                                </p>

                                <p className="leading-relaxed transition-colors duration-500
                                    text-xs sm:text-[11px]
                                    mb-4 sm:mb-5 xl:mb-7
                                "
                                    style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>
                                    {card.desc}
                                </p>

                                {/* Divider */}
                                <div className="h-px transition-all duration-500
                                    mb-4 sm:mb-5 xl:mb-6
                                "
                                    style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : '#E5E7EB' }} />

                                {/* Stream pills */}
                                <div className="flex gap-2 flex-wrap
                                    pt-3 sm:pt-4 xl:pt-6
                                ">
                                    {card.streams.map((s, i) => (
                                        <div key={i}
                                            className="flex items-center gap-1.5 rounded-full font-bold transition-all duration-500
                                                px-2.5 py-1 text-[10px]
                                                sm:px-3 sm:py-1.5 sm:text-[10px]
                                            "
                                            style={{
                                                backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : 'white',
                                                color: hoveredCard === card.id ? 'white' : '#374151',
                                                border: hoveredCard === card.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid #E5E7EB'
                                            }}>
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.6)' : card.accent }} />
                                            {s.name} — {s.count}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom strip */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between
                    gap-3 sm:gap-4
                    rounded-2xl border border-gray-100 bg-[#F8FAFC]
                    px-4 py-4
                    sm:px-5 sm:py-4
                    xl:px-5 xl:py-3
                ">
                    <div className="flex items-center gap-3 xl:gap-4">
                        <div className="bg-[var(--viva-navy)] rounded-xl flex items-center justify-center flex-shrink-0
                            w-8 h-8 sm:w-9 sm:h-9 xl:w-8 xl:h-8
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-extrabold text-[var(--viva-navy)]
                                text-xs sm:text-[12px]
                            ">Need help choosing?</p>
                            <p className="text-gray-400
                                text-[10px] sm:text-[10px]
                            ">Call us: +91 250 2450 891 • Mon–Sat, 10am–5pm</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/admissions')}
                        className="flex items-center gap-2 bg-[var(--viva-red)] text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 flex-shrink-0
                            px-4 py-2 text-xs
                            sm:px-5 sm:py-2.5 sm:text-xs
                            xl:px-5 xl:py-2.5 xl:text-[12px]
                        ">
                        Explore All Admissions
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AdmissionsHome