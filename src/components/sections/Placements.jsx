// import React, { useState, useEffect, useRef } from 'react'

// // ── InView hook ──
// const useInView = () => {
//     const ref = useRef(null)
//     const [inView, setInView] = useState(false)
//     useEffect(() => {
//         const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
//         if (ref.current) obs.observe(ref.current)
//         return () => obs.disconnect()
//     }, [])
//     return [ref, inView]
// }

// const RECRUITERS = [
//     { name: 'TCS', color: '#1D4ED8' },
//     { name: 'Infosys', color: '#007CC3' },
//     { name: 'Wipro', color: '#341C6A' },
//     { name: 'Capgemini', color: '#0070AD' },
//     { name: 'Amazon', color: '#FF9900' },
//     { name: 'ICICI Bank', color: '#B02A2A' },
//     { name: 'HDFC Bank', color: '#004C97' },
//     { name: 'Tech Mahindra', color: '#E31837' },
//     { name: 'Airtel', color: '#E40000' },
//     { name: 'Axis Bank', color: '#97144D' },
//     { name: 'Ernst & Young', color: '#2E3A59' },
//     { name: 'KPMG', color: '#00338D' },
//     { name: 'Bajaj FinServ', color: '#003399' },
//     { name: 'Deloitte', color: '#5B8C00' },
//     { name: 'Edelweiss', color: '#E31B23' },
//     { name: 'Bajaj Allianz', color: '#FF6600' },
//     { name: 'Birla Sunlife', color: '#E31837' },
//     { name: 'Saraswat Bank', color: '#003087' },
// ]

// // RecruiterCarousel replace कर हे ने:

// const ROW1 = RECRUITERS.slice(0, 12)
// const ROW2 = RECRUITERS.slice(11)

// const CarouselRow = ({ items, direction = 'left', paused, setPaused }) => {
//     const doubled = [...items, ...items, ...items]
//     const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight'

//     return (
//         <div style={{ position: 'relative', overflow: 'hidden' }}>
//             <div style={{
//                 position: 'absolute', left: 0, top: 0, bottom: 0, width: 130,
//                 background: 'linear-gradient(to right, #fff, transparent)',
//                 zIndex: 2, pointerEvents: 'none',
//             }} />
//             <div style={{
//                 position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
//                 background: 'linear-gradient(to left, #fff, transparent)',
//                 zIndex: 2, pointerEvents: 'none',
//             }} />

//             <div
//                 onMouseEnter={() => setPaused(true)}
//                 onMouseLeave={() => setPaused(false)}
//                 style={{
//                     display: 'flex', gap: 14,
//                     width: 'max-content',
//                     animation: `${animName} 35s linear infinite`,
//                     animationPlayState: paused ? 'paused' : 'running',
//                 }}
//             >
//                 {doubled.map((r, i) => (
//                     <div key={i}
//                         style={{
//                             flexShrink: 0,
//                             padding: '35px 32px',
//                             borderRadius: 16,
//                             border: `1.5px solid ${r.color}25`,
//                             background: `${r.color}08`,
//                             minWidth: 180,
//                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                             transition: 'all 0.25s ease',
//                             cursor: 'default',
//                         }}
//                         onMouseEnter={e => {
//                             e.currentTarget.style.background = r.color
//                             e.currentTarget.style.borderColor = r.color
//                             e.currentTarget.style.transform = 'translateY(-4px)'
//                             e.currentTarget.style.boxShadow = `0 12px 28px ${r.color}35`
//                             e.currentTarget.querySelector('span').style.color = '#fff'
//                         }}
//                         onMouseLeave={e => {
//                             e.currentTarget.style.background = `${r.color}08`
//                             e.currentTarget.style.borderColor = `${r.color}25`
//                             e.currentTarget.style.transform = 'translateY(0)'
//                             e.currentTarget.style.boxShadow = 'none'
//                             e.currentTarget.querySelector('span').style.color = r.color
//                         }}
//                     >
//                         <span style={{
//                             fontSize: 14, fontWeight: 800,
//                             color: r.color, whiteSpace: 'nowrap',
//                             transition: 'color 0.25s',
//                             letterSpacing: '0.02em',
//                         }}>
//                             {r.name}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// const RecruiterCarousel = ({ paused, setPaused }) => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//         <CarouselRow items={ROW1} direction="left" paused={paused} setPaused={setPaused} />
//         <CarouselRow items={ROW2} direction="right" paused={paused} setPaused={setPaused} />
//     </div>
// )


// const Placements = () => {
//     const [sectionRef, inView] = useInView()
//     const [paused, setPaused] = useState(false)

//     return (
//         <section ref={sectionRef} style={{
//             background: '#F8FAFC',
//             padding: '88px 0',
//             fontFamily: "'DM Sans', 'Inter', sans-serif",
//             width: '100%',
//             boxSizing: 'border-box',
//             overflow: 'hidden',
//         }}>
//             <style>{`
//                 @keyframes scrollTrack {
//                     0%   { transform: translateX(0); }
//                     100% { transform: translateX(-33.33%); }
//                 }
//                 @keyframes fadeUp {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//             `}</style>

//             {/* ── Section Header ── */}
//             <div style={{
//                 padding: '0 48px',
//                 marginBottom: 52,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 0.6s ease',
//             }}>
//                 <p style={{
//                     fontSize: 11, fontWeight: 800,
//                     letterSpacing: '0.25em', textTransform: 'uppercase',
//                     color: '#C8102E', margin: '0 0 10px',
//                     display: 'flex', alignItems: 'center', gap: 8,
//                 }}>
//                     <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block' }} />
//                     Placements
//                 </p>
//                 <div style={{
//                     display: 'flex', alignItems: 'flex-end',
//                     justifyContent: 'space-between',
//                     flexWrap: 'wrap', gap: 16,
//                 }}>
//                     <h2 style={{
//                         fontSize: 'clamp(32px, 4vw, 48px)',
//                         fontWeight: 900, color: '#0F1C3D',
//                         lineHeight: 1.1, margin: 0,
//                     }}>
//                         Our Recruiters
//                     </h2>
//                     <p style={{
//                         fontSize: 14, color: '#6B7280',
//                         maxWidth: 420, margin: 0, lineHeight: 1.6,
//                     }}>
//                         50+ top companies visit VIVA College annually for campus recruitment drives across all streams.
//                     </p>
//                 </div>
//             </div>

//             {/* ── Carousel ── */}
//             <div style={{
//                 opacity: inView ? 1 : 0,
//                 transition: 'opacity 0.8s ease 0.2s',
//             }}>
//                 <RecruiterCarousel paused={paused} setPaused={setPaused} />
//             </div>

//         </section>
//     )
// }

// export default Placements


import React, { useState, useEffect, useRef } from 'react'

// ── InView hook ──
const useInView = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return [ref, inView]
}

const RECRUITERS = [
    { name: 'TCS', color: '#1D4ED8' },
    { name: 'Infosys', color: '#007CC3' },
    { name: 'Wipro', color: '#341C6A' },
    { name: 'Capgemini', color: '#0070AD' },
    { name: 'Amazon', color: '#FF9900' },
    { name: 'ICICI Bank', color: '#B02A2A' },
    { name: 'HDFC Bank', color: '#004C97' },
    { name: 'Tech Mahindra', color: '#E31837' },
    { name: 'Airtel', color: '#E40000' },
    { name: 'Axis Bank', color: '#97144D' },
    { name: 'Ernst & Young', color: '#2E3A59' },
    { name: 'KPMG', color: '#00338D' },
    { name: 'Bajaj FinServ', color: '#003399' },
    { name: 'Deloitte', color: '#5B8C00' },
    { name: 'Edelweiss', color: '#E31B23' },
    { name: 'Bajaj Allianz', color: '#FF6600' },
    { name: 'Birla Sunlife', color: '#E31837' },
    { name: 'Saraswat Bank', color: '#003087' },
]

const ROW1 = RECRUITERS.slice(0, 12)
const ROW2 = RECRUITERS.slice(11)

// ── dynamic color values must stay in style={} ──
const CarouselRow = ({ items, direction = 'left', paused, setPaused }) => {
    const doubled = [...items, ...items, ...items]
    const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight'

    return (
        <div className="relative overflow-hidden">
            {/* Left fade */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[130px] z-[2] pointer-events-none"
                style={{ background: 'linear-gradient(to right, #fff, transparent)' }}
            />
            {/* Right fade */}
            <div
                className="absolute right-0 top-0 bottom-0 w-[120px] z-[2] pointer-events-none"
                style={{ background: 'linear-gradient(to left, #fff, transparent)' }}
            />

            <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="flex gap-3.5 w-max"
                style={{
                    animation: `${animName} 35s linear infinite`,
                    animationPlayState: paused ? 'paused' : 'running',
                }}
            >
                {doubled.map((r, i) => (
                    <div
                        key={i}
                        className="shrink-0 min-w-[180px] flex items-center justify-center rounded-2xl cursor-default px-8 py-[35px]"
                        style={{
                            border: `1.5px solid ${r.color}25`,
                            background: `${r.color}08`,
                            transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = r.color
                            e.currentTarget.style.borderColor = r.color
                            e.currentTarget.style.transform = 'translateY(-4px)'
                            e.currentTarget.style.boxShadow = `0 12px 28px ${r.color}35`
                            e.currentTarget.querySelector('span').style.color = '#fff'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = `${r.color}08`
                            e.currentTarget.style.borderColor = `${r.color}25`
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.querySelector('span').style.color = r.color
                        }}
                    >
                        <span
                            className="text-sm font-extrabold whitespace-nowrap tracking-[0.02em]"
                            style={{
                                color: r.color,
                                transition: 'color 0.25s',
                            }}
                        >
                            {r.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const RecruiterCarousel = ({ paused, setPaused }) => (
    <div className="flex flex-col gap-3.5">
        <CarouselRow items={ROW1} direction="left" paused={paused} setPaused={setPaused} />
        <CarouselRow items={ROW2} direction="right" paused={paused} setPaused={setPaused} />
    </div>
)

const Placements = () => {
    const [sectionRef, inView] = useInView()
    const [paused, setPaused] = useState(false)

    return (
        <section
            ref={sectionRef}
            className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-[88px] w-full box-border overflow-hidden"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
            {/* ── Section Header ── */}
            <div
                className="px-4 sm:px-6 md:px-8 lg:px-12 pb-10 sm:mb-12 lg:mb-[52px]"
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease',
                }}
            >
                <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#C8102E] mb-2.5 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-[#C8102E] inline-block" />
                    Placements
                </p>

                <div className="flex items-end justify-between flex-wrap gap-4">
                    {/* Original: clamp(32px,4vw,48px) → breakpoints */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-black text-[#0F1C3D] leading-[1.1] m-0">
                        Our Recruiters
                    </h2>
                    <p className="text-sm text-gray-500 max-w-[420px] m-0 leading-relaxed">
                        50+ top companies visit VIVA College annually for campus recruitment drives across all streams.
                    </p>
                </div>
            </div>

            {/* ── Carousel ── */}
            <div
                style={{
                    opacity: inView ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.2s',
                }}
            >
                <RecruiterCarousel paused={paused} setPaused={setPaused} />
            </div>
        </section>
    )
}

export default Placements