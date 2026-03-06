import React, { useState } from 'react'
import vivaFest from "../../assets/videos/event-day.mp4"
import cultural from '../../assets/images/cultural1.png'
import science from '../../assets/images/science1.png'
import sports from '../../assets/images/sports.png'
import nss from '../../assets/images/nss.png'
import collegeFest from '../../assets/images/college-fest.png'
import scienceExibition from '../../assets/images/science-exibition.png'
import convocation from '../../assets/images/convocation.png'
import farewell from '../../assets/images/farewell.jpeg'
import carnival from '../../assets/images/carnival.png'
import bloodDonation from '../../assets/images/blood-donation.png'

const TABS = ['Life on Campus', 'Clubs & Societies', 'Sports', 'Gallery']

const IconUsers = ({ size = 20, color = '#6B7280' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)
const IconDrama = ({ size = 26, color = '#C8102E' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10" /><path d="M7 13c0 2.21 1.79 4 4 4s4-1.79 4-4" /><circle cx="9" cy="10" r="1" fill={color} /><circle cx="15" cy="10" r="1" fill={color} /></svg>)
const IconMusic = ({ size = 26, color = '#C8102E' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>)
const IconCamera = ({ size = 26, color = '#C2410C' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>)
const IconBall = ({ size = 26, color = '#065F46' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>)
const IconCode = ({ size = 26, color = '#1D4ED8' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>)
const IconLeaf = ({ size = 26, color = '#6D28D9' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 0 0 1.38 1.38C8.55 18.9 15.5 17 20 8" /><path d="M3.82 19.34C4.63 18.1 6 16.4 8 15" /></svg>)
const IconBuilding = ({ size = 26, color = '#0369A1' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8h2M7 12h2M15 8h2M15 12h2M11 8h2M11 12h2" /></svg>)
const IconPalette = ({ size = 26, color = '#C2410C' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill={color} /><circle cx="17.5" cy="10.5" r=".5" fill={color} /><circle cx="8.5" cy="7.5" r=".5" fill={color} /><circle cx="6.5" cy="12.5" r=".5" fill={color} /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>)
const IconTrophy = ({ size = 24, color = '#C8102E' }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 21 12 21 16 21" /><line x1="12" y1="17" x2="12" y2="21" /><path d="M7 4H17l-1 7a5 5 0 0 1-8 0L7 4z" /><path d="M5 4H3v3a4 4 0 0 0 4 4" /><path d="M19 4h2v3a4 4 0 0 1-4 4" /></svg>)

const CLUBS = [
    { icon: <IconDrama />, name: 'Dramatic Arts Club', members: 80, desc: 'Street plays, mono-acting, one-act plays & inter-college drama competitions', tag: 'Cultural' },
    { icon: <IconMusic />, name: 'Music Society', members: 95, desc: 'Western & classical vocals, college band, instruments & annual music fest', tag: 'Cultural' },
    { icon: <IconCamera />, name: 'Photography & Film Club', members: 60, desc: 'Campus photography, short films, photo exhibitions & documentary projects', tag: 'Creative' },
    { icon: <IconBall />, name: 'Sports Committee', members: 200, desc: 'Cricket, football, basketball, chess, carrom & inter-college tournament org.', tag: 'Sports' },
    { icon: <IconCode />, name: 'Tech & Coding Club', members: 110, desc: 'Hackathons, web dev workshops, coding contests & industry guest sessions', tag: 'Technical' },
    { icon: <IconLeaf />, name: 'NSS Unit', members: 150, desc: 'National Service Scheme — blood donation, tree plantation & community drives', tag: 'Social' },
    { icon: <IconBuilding />, name: 'Commerce Association', members: 130, desc: 'Business conclaves, stock market simulations, CA talks & finance workshops', tag: 'Academic' },
    { icon: <IconPalette />, name: 'Fine Arts Circle', members: 70, desc: 'Rangoli, poster making, sketching, painting competitions & annual art show', tag: 'Creative' },
]

const SPORTS = [
    { position: '1st', event: 'Inter-College Chess Championship', detail: 'Girls Team — University of Mumbai Level 2025-26', year: '2025-26' },
    { position: <IconTrophy />, event: 'University Shooting Competition', detail: 'Silver & Bronze Medals — District Level 2024', year: '2024' },
    { position: '1st', event: 'Zonal Cricket Tournament', detail: "Men's Cricket Team — Palghar Zone Champions", year: '2024-25' },
    { position: 'Best', event: 'NCC Unit Award', detail: 'Best College NCC — District Level Recognition', year: '2024' },
    { position: '2nd', event: 'Inter-College Athletics', detail: 'Track & Field — University of Mumbai Sports Meet', year: '2023-24' },
    { position: '1st', event: 'Carrom Championship', detail: 'Mixed Category — Inter-College Virar Zone', year: '2024-25' },
]

const tagColors = {
    Cultural: { bg: '#FEF2F2', text: '#C8102E' },
    Creative: { bg: '#FFF7ED', text: '#C2410C' },
    Sports: { bg: '#ECFDF5', text: '#065F46' },
    Technical: { bg: '#EFF6FF', text: '#1D4ED8' },
    Social: { bg: '#F5F3FF', text: '#6D28D9' },
    Academic: { bg: '#F0F9FF', text: '#0369A1' },
}

const CampusLife = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section
            id="campus-life"
            className="bg-[#F8FAFC] w-full py-14 sm:py-16 lg:py-20"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
            <div className="w-full box-border px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[48px]">

                {/* ── Section Header ── */}
                <div className="mb-8 sm:pb-9">
                    <p className="flex items-center gap-2 font-extrabold tracking-[0.25em] uppercase text-[#C8102E] mb-2.5"
                        style={{ fontSize: 11 }}>
                        <span className="w-6 h-0.5 bg-[#C8102E] inline-block shrink-0" />
                        Campus Life
                    </p>
                    <h2 className="font-black text-[#0F1C3D] leading-[1.1] mt-2
                        text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Life at Viva.
                    </h2>
                </div>

                <div className="flex gap-0 border-b-2 border-gray-200 mb-8 sm:mb-10
                    overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                    {TABS.map((tab, i) => (
                        <button key={i} onClick={() => setActiveTab(i)}
                            className={`
                                shrink-0 font-semibold bg-transparent border-none cursor-pointer font-[inherit]
                                tracking-[0.02em] whitespace-nowrap -mb-0.5 transition-all duration-200
                                px-4 py-2.5 text-xs
                                sm:px-5 sm:py-3 sm:text-sm
                                lg:px-7 lg:text-sm
                                ${activeTab === i
                                    ? 'text-[#0F1C3D] border-b-2 border-[#C8102E]'
                                    : 'text-gray-400 border-b-2 border-transparent'
                                }
                            `}>
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === 0 && (
                    <>
                        {/* ── DESKTOP lg+ : original side-by-side layout ── */}
                        <div className="pt-10 hidden lg:flex gap-4 w-full h-[460px]">
                            {/* Large left — Video */}
                            <div className="flex-[0_0_44%] rounded-[20px] overflow-hidden relative">
                                <video src={vivaFest} autoPlay loop muted playsInline
                                    className="w-full h-full object-cover object-center block" />
                                <div className="absolute bottom-7 left-7">
                                    <p style={{ fontSize: 10, letterSpacing: '0.18em' }}
                                        className="uppercase text-white/60 mb-1.5">Annual Cultural Fest</p>
                                    <p style={{ fontSize: 22 }} className="font-extrabold text-white leading-tight">VIVA Fest 2025</p>
                                    <p style={{ fontSize: 12 }} className="text-white/55 mt-1">March 15–16 · Virar Campus</p>
                                </div>
                            </div>
                            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
                                {[
                                    { label: 'Cultural Programme', sub: 'Annual Day 2025', img: cultural },
                                    { label: 'Sports Day', sub: 'Zonal Championship', img: sports },
                                    { label: 'Science Exhibition', sub: 'Project Showcase', img: science },
                                    { label: 'NSS Activity', sub: 'Community Drive', img: nss },
                                ].map((p, i) => (
                                    <div key={i} className="rounded-2xl overflow-hidden relative cursor-pointer"
                                        style={{ transition: 'transform 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                                        <img src={p.img} alt={p.label} className="w-full h-full object-cover object-center block" />
                                        <div className="absolute bottom-3.5 left-4">
                                            <p style={{ fontSize: 13 }} className="font-bold text-white">{p.label}</p>
                                            <p style={{ fontSize: 10 }} className="text-white/60 mt-0.5">{p.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col gap-3 lg:hidden">
                            <div className="relative rounded-[20px] overflow-hidden h-[220px] sm:h-[260px] md:h-[300px]">
                                <video src={vivaFest} autoPlay loop muted playsInline
                                    className="w-full h-full object-cover object-center block" />
                                <div className="absolute bottom-5 left-5">
                                    <p className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-white/60 mb-1">
                                        Annual Cultural Fest</p>
                                    <p className="text-base sm:text-lg font-extrabold text-white leading-tight">VIVA Fest 2025</p>
                                    <p className="text-[10px] sm:text-xs text-white/55 mt-1">March 15–16 · Virar Campus</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-3.5"
                                style={{ gridTemplateRows: '1fr 1fr' }}>
                                {[
                                    { label: 'Cultural Programme', sub: 'Annual Day 2025', img: cultural },
                                    { label: 'Sports Day', sub: 'Zonal Championship', img: sports },
                                    { label: 'Science Exhibition', sub: 'Project Showcase', img: science },
                                    { label: 'NSS Activity', sub: 'Community Drive', img: nss },
                                ].map((p, i) => (
                                    <div key={i}
                                        className="relative rounded-2xl overflow-hidden cursor-pointer h-[110px] sm:h-[130px] md:h-[150px]"
                                        style={{ transition: 'transform 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                                        <img src={p.img} alt={p.label} className="w-full h-full object-cover object-center block" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-2 sm:bottom-2.5 left-3">
                                            <p className="text-[11px] sm:text-xs font-bold text-white">{p.label}</p>
                                            <p className="text-[9px] sm:text-[10px] text-white/60 mt-0.5">{p.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 1 && (
                    <div className="pt-6 grid gap-4 sm:gap-5
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                        w-full">
                        {CLUBS.map((club, i) => {
                            const tc = tagColors[club.tag]
                            return (
                                <div key={i}
                                    className="bg-white border border-gray-200 rounded-[20px] flex flex-col cursor-default
                                        gap-3 p-5
                                        sm:gap-3.5 sm:p-6
                                        lg:gap-[14px] lg:p-[28px_24px]"
                                    style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,28,61,0.10)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                                >
                                    <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-[14px] bg-[#F1F5F9] flex items-center justify-center shrink-0">
                                        {club.icon}
                                    </div>
                                    <span className="inline-block rounded-full self-start font-bold tracking-[0.06em]"
                                        style={{ padding: '3px 10px', fontSize: 10, background: tc.bg, color: tc.text }}>
                                        {club.tag}
                                    </span>
                                    <div>
                                        <p className="font-extrabold text-[#0F1C3D] mb-1.5 leading-[1.3]"
                                            style={{ fontSize: 15 }}>{club.name}</p>
                                        <p className="text-gray-500 leading-relaxed"
                                            style={{ fontSize: 12 }}>{club.desc}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-gray-100">
                                        <span className="text-gray-400 font-semibold flex items-center gap-1.5"
                                            style={{ fontSize: 12 }}>
                                            <IconUsers size={14} color="#9CA3AF" /> {club.members}+ members
                                        </span>
                                        <button
                                            className="bg-[#0F1C3D] text-white border-none rounded-full font-bold cursor-pointer font-[inherit]"
                                            style={{ padding: '6px 16px', fontSize: 12, transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.target.style.background = '#C8102E'}
                                            onMouseLeave={e => e.target.style.background = '#0F1C3D'}
                                        >Join →</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="w-full pt-6">
                        {/* Stats bar */}
                        <div className="bg-[#0F1C3D] rounded-[20px]
                            grid grid-cols-2 lg:grid-cols-4
                            gap-4 px-5 py-6
                            sm:gap-5 sm:px-8 sm:py-7
                            lg:px-10 lg:py-[28px]">
                            {[
                                { n: '15+', l: 'Sports Events Annually' },
                                { n: '300+', l: 'Student Athletes' },
                                { n: '12+', l: 'Championships Won' },
                                { n: '5', l: 'University Medals' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <p className="font-black text-[#D4A017] leading-none
                                        text-[28px] sm:text-[32px] lg:text-[36px]">{s.n}</p>
                                    <p className="text-white/45 mt-2 tracking-[0.1em] uppercase"
                                        style={{ fontSize: 11 }}>{s.l}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 grid gap-4 sm:gap-5
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {SPORTS.map((s, i) => (
                                <div key={i}
                                    className="bg-white border border-gray-200 border-l-4 border-l-[#C8102E] rounded-2xl flex items-start
                                        gap-4 p-5
                                        lg:gap-[18px] lg:p-6">
                                    <div className="shrink-0 bg-[#FEF2F2] rounded-[14px] flex items-center justify-center font-black text-[#C8102E]
                                        w-[44px] h-[44px] text-base
                                        lg:w-[52px] lg:h-[52px] lg:text-lg">
                                        {typeof s.position === 'string' ? s.position : <IconTrophy size={24} color="#C8102E" />}
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-400 tracking-[0.1em] uppercase block mb-1"
                                            style={{ fontSize: 10 }}>{s.year}</span>
                                        <p className="font-extrabold text-[#0F1C3D] mb-1.5 leading-[1.3]"
                                            style={{ fontSize: 15 }}>{s.event}</p>
                                        <p className="text-gray-500 leading-relaxed"
                                            style={{ fontSize: 12 }}>{s.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 3 && (
                    <div className="pt-6 grid gap-4 w-full
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { label: 'VIVA Fest 2025', sub: 'Annual Cultural Extravaganza', img: collegeFest },
                            { label: 'Annual Day', sub: 'Prize Distribution Ceremony', img: cultural },
                            { label: 'Sports Day 2025', sub: 'Inter-College Athletics Meet', img: sports },
                            { label: 'Science Exhibition', sub: 'Project Showcase 2024', img: scienceExibition },
                            { label: 'NSS Blood Donation', sub: 'Community Drive 2025', img: bloodDonation },
                            { label: 'Convocation 2024', sub: 'Graduation Ceremony', img: convocation },
                            { label: 'Maharashtra Times Carnival', sub: 'Annual Business Summit', img: carnival },
                            { label: 'NCC Parade', sub: 'Republic Day March 2025', img: nss },
                            { label: 'Farewell 2025', sub: 'TY Farewell Ceremony', img: farewell },
                        ].map((p, i) => (
                            <div key={i}
                                className="relative rounded-2xl overflow-hidden cursor-pointer bg-[#1E293B]
                                    h-[190px] sm:h-[205px] lg:h-[220px] xl:h-[240px] 2xl:h-[260px]"
                                style={{ transition: 'transform 0.25s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {p.img && <img src={p.img} alt={p.label} className="w-full h-full object-cover object-center block" />}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                                <div className="absolute bottom-4 sm:bottom-[18px] left-4 sm:left-5">
                                    <p className="font-extrabold text-white" style={{ fontSize: 15 }}>{p.label}</p>
                                    <p className="text-white/60 mt-0.5" style={{ fontSize: 11 }}>{p.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default CampusLife