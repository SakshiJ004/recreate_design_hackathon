import React, { useState, useEffect, useRef } from 'react'

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

// ── Mobile: single scrolling row, smaller cards ──
const MobileCarousel = ({ paused, setPaused }) => {
    const allItems = [...RECRUITERS, ...RECRUITERS, ...RECRUITERS]
    return (
        <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />
            <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="flex"
                style={{
                    gap: '8px',
                    width: 'max-content',
                    animation: 'scrollLeft 28s linear infinite',
                    animationPlayState: paused ? 'paused' : 'running',
                }}
            >
                {allItems.map((r, i) => (
                    <div key={i}
                        className="flex-shrink-0 flex items-center justify-center rounded-xl"
                        style={{
                            padding: '12px 16px',
                            minWidth: '90px',
                            border: `1.5px solid ${r.color}25`,
                            background: `${r.color}08`,
                        }}
                    >
                        <span className="whitespace-nowrap font-extrabold text-[11px] tracking-wide"
                            style={{ color: r.color }}>
                            {r.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ── Tablet: 2 rows, medium cards ──
const TabletCarousel = ({ paused, setPaused }) => {
    const row1 = [...ROW1, ...ROW1, ...ROW1]
    const row2 = [...ROW2, ...ROW2, ...ROW2]
    return (
        <div className="flex flex-col gap-2.5">
            {[{ items: row1, dir: 'scrollLeft' }, { items: row2, dir: 'scrollRight' }].map(({ items, dir }, ri) => (
                <div key={ri} className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-14 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-14 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />
                    <div
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="flex"
                        style={{
                            gap: '10px',
                            width: 'max-content',
                            animation: `${dir} 32s linear infinite`,
                            animationPlayState: paused ? 'paused' : 'running',
                        }}
                    >
                        {items.map((r, i) => (
                            <div key={i}
                                className="flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 cursor-default"
                                style={{
                                    padding: '14px 20px',
                                    minWidth: '110px',
                                    border: `1.5px solid ${r.color}25`,
                                    background: `${r.color}08`,
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = r.color
                                    e.currentTarget.style.transform = 'translateY(-3px)'
                                    e.currentTarget.querySelector('span').style.color = '#fff'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = `${r.color}08`
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.querySelector('span').style.color = r.color
                                }}
                            >
                                <span className="whitespace-nowrap font-extrabold text-xs tracking-wide transition-colors duration-300"
                                    style={{ color: r.color }}>
                                    {r.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

// ── Desktop lg/xl/2xl: 2 rows, full size cards ──
const DesktopCarousel = ({ paused, setPaused }) => {
    const row1 = [...ROW1, ...ROW1, ...ROW1]
    const row2 = [...ROW2, ...ROW2, ...ROW2]
    return (
        <div className="flex flex-col gap-3 lg:gap-3.5">
            {[{ items: row1, dir: 'scrollLeft' }, { items: row2, dir: 'scrollRight' }].map(({ items, dir }, ri) => (
                <div key={ri} className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none
                        w-24 lg:w-28 xl:w-32 2xl:w-36"
                        style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
                    <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none
                        w-24 lg:w-28 xl:w-32 2xl:w-36"
                        style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />
                    <div
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="flex"
                        style={{
                            gap: '12px',
                            width: 'max-content',
                            animation: `${dir} 35s linear infinite`,
                            animationPlayState: paused ? 'paused' : 'running',
                        }}
                    >
                        {items.map((r, i) => (
                            <div key={i}
                                className="flex-shrink-0 flex items-center justify-center rounded-2xl transition-all duration-300 cursor-default"
                                style={{
                                    padding: '22px 28px',
                                    minWidth: '140px',
                                    border: `1.5px solid ${r.color}25`,
                                    background: `${r.color}08`,
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
                                <span className="whitespace-nowrap font-extrabold tracking-wide transition-colors duration-300
                                    text-xs lg:text-sm"
                                    style={{ color: r.color }}>
                                    {r.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const Placements = () => {
    const [sectionRef, inView] = useInView()
    const [paused, setPaused] = useState(false)

    return (
        <section
            ref={sectionRef}
            className="bg-[#F8FAFC] w-full overflow-hidden
                py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20
            "
        >
            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes scrollRight {
                    0%   { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            {/* ── Section Header ── */}
            <div
                className="
                    px-4    pb-7
                    sm:px-6 sm:pb-8
                    md:px-10 md:pb-9
                    lg:px-14 lg:pb-10
                    xl:px-18 xl:pb-11
                    2xl:px-22 2xl:pb-12
                "
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease',
                }}
            >
                {/* Tag */}
                <p className="flex items-center gap-2 font-extrabold tracking-[0.25em] uppercase text-[var(--viva-red)] mb-2.5
                    text-[10px] md:text-xs
                ">
                    <span className="inline-block h-0.5 bg-[var(--viva-red)] flex-shrink-0 w-5 md:w-6" />
                    Placements
                </p>

                {/* Heading row */}
                <div className="flex items-end justify-between flex-wrap gap-3">
                    <h2 className="font-black text-[var(--viva-navy)] leading-[1.1] m-0
                        text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl
                    ">
                        Our Recruiters
                    </h2>
                    <p className="text-gray-500 leading-relaxed m-0
                        text-[11px] max-w-[180px]
                        sm:text-xs  sm:max-w-[220px]
                        md:text-xs  md:max-w-sm
                        lg:text-sm  lg:max-w-md
                    ">
                        50+ top companies visit VIVA College annually for campus recruitment drives across all streams.
                    </p>
                </div>
            </div>

            {/* ── Carousel — responsive per breakpoint ── */}
            <div
                className="transition-opacity duration-700 delay-200"
                style={{ opacity: inView ? 1 : 0 }}
            >
                {/* sm only — single row */}
                <div className="block sm:block md:hidden">
                    <MobileCarousel paused={paused} setPaused={setPaused} />
                </div>

                {/* md only — 2 rows medium */}
                <div className="hidden md:block lg:hidden">
                    <TabletCarousel paused={paused} setPaused={setPaused} />
                </div>

                {/* lg xl 2xl — full desktop */}
                <div className="hidden lg:block">
                    <DesktopCarousel paused={paused} setPaused={setPaused} />
                </div>
            </div>

        </section>
    )
}

export default Placements