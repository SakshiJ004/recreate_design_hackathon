import React, { useState } from 'react'
import logo from '../../assets/images/viva-logo.png'

const IconMapPin = () => (<svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>)
const IconPhone = () => (<svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>)
const IconMail = () => (<svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>)
const IconFacebook = () => (<svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>)
const IconInstagram = () => (<svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>)
const IconYoutube = () => (<svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>)
const IconLinkedin = () => (<svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>)

const USEFUL_LINKS = [
    { label: 'University of Mumbai', href: 'https://mu.ac.in' },
    { label: 'UGC', href: 'https://ugc.ac.in' },
    { label: 'NAAC', href: 'https://naac.gov.in' },
    { label: 'MAHA DBT Scholarship', href: 'https://mahadbt.maharashtra.gov.in' },
    { label: 'Freeship Portal', href: 'https://mahaescholar.maharashtra.gov.in' },
    { label: 'National Test Agency', href: 'https://nta.ac.in' },
    { label: 'SET Exam', href: 'https://setexam.unipune.ac.in' },
    { label: 'UPSC', href: 'https://upsc.gov.in' },
    { label: 'MPSC', href: 'https://mpsc.gov.in' },
    { label: 'Joint Director HE', href: 'https://www.dhepune.gov.in' },
]

const SOCIALS = [
    { icon: <IconFacebook />, label: 'Facebook', href: '#', hoverBg: '#1877F2' },
    { icon: <IconInstagram />, label: 'Instagram', href: '#', hoverBg: '#E1306C' },
    { icon: <IconYoutube />, label: 'YouTube', href: '#', hoverBg: '#FF0000' },
    { icon: <IconLinkedin />, label: 'LinkedIn', href: '#', hoverBg: '#0A66C2' },
]

const SISTER_INSTITUTES = [
    { short: 'VIT', name: 'VIVA Institute of Technology', type: 'Engineering', href: 'https://www.viva-technology.org' },
    { short: 'VIMR', name: 'VIVA Institute of Management & Research', type: 'Management · NAAC A', href: 'https://vivaimr.org' },
    { short: 'VIP', name: 'VIVA Institute of Pharmacy', type: 'Pharmacy', href: 'https://vivapharmacy.org' },
    { short: 'VCL', name: 'VIVA College of Law', type: 'Law', href: '#' },
    { short: 'VAC', name: 'VIVA Acupuncture College', type: 'Medicine', href: 'https://vivaacupuncture.org' },
    { short: 'UJC', name: 'Utkarsha Junior College', type: 'Junior College · Est. 1991', href: '#' },
]

const SocialBtn = ({ s }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <a href={s.href} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={s.label}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:-translate-y-1"
            style={{ background: hovered ? s.hoverBg : 'rgba(255,255,255,0.09)' }}
        >
            {s.icon}
        </a>
    )
}

const Footer = () => {
    return (
        <footer className="w-full bg-[#0D1B35]">

            {/* ── Main Body ── */}
            <div className="bg-[#0D1B35]
                px-4    py-8
                sm:px-6  sm:py-10
                md:px-10 md:py-12
                lg:px-12 lg:py-14
                xl:px-16 xl:py-16
                2xl:px-20 2xl:py-18
            ">
                {/* 3 columns — stack on mobile/sm, 2-col md, 3-col lg+ */}
                <div className="grid gap-10
                    grid-cols-1
                    md:grid-cols-2  md:gap-10
                    lg:grid-cols-3  lg:gap-12
                    xl:gap-14
                    2xl:gap-16
                ">

                    {/* ── COL 1 — Logo + Contact ── */}
                    <div className="flex flex-col gap-4 xl:gap-5">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="bg-white rounded-xl flex items-center justify-center flex-shrink-0
                                w-14 h-14 p-1.5
                                sm:w-16 sm:h-16 sm:p-2
                                xl:w-18 xl:h-18 xl:p-1.5
                            ">
                                <img src={logo} alt="Viva College" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="font-black text-white tracking-widest uppercase leading-tight
                                    text-sm sm:text-base xl:text-lg
                                ">
                                    Viva College
                                </p>
                                <p className="text-slate-300 tracking-wider mt-0.5
                                    text-[10px] sm:text-xs
                                ">
                                    Arts, Commerce & Science
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-300 leading-relaxed pl-3 border-l-2 border-yellow-600/60
                            text-xs sm:text-[12px]
                        ">
                            NAAC Accredited · Est. 2001<br />
                            Affiliated to University of Mumbai
                        </p>

                        <div className="flex flex-col gap-2.5 xl:gap-3">
                            {[
                                { icon: <IconMapPin />, text: 'VIVA College Road, Virar (W), Palghar — 401303' },
                                { icon: <IconPhone />, text: '+91 97657 42335' },
                                { icon: <IconMail />, text: 'viva@vivacollege.org' },
                                { icon: <IconMail />, text: 'admission@vivacollege.org' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 xl:gap-2.5">
                                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                                    <span className="text-slate-300 leading-relaxed
                                        text-xs sm:text-xs xl:text-[11px]
                                    ">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── COL 2 — Useful Links ── */}
                    <div>
                        <p className="text-white font-extrabold tracking-[0.2em] uppercase
                            text-xs sm:text-[14px]
                        ">
                            Useful Links
                        </p>
                        <div className="w-5 h-0.5 bg-red-600 mt-1 mb-4 xl:mb-6" />

                        <div className="pt-6 grid grid-cols-2 gap-x-4
                            gap-y-3 sm:gap-y-3.5 xl:gap-y-4
                        ">
                            {USEFUL_LINKS.map((link, i) => (
                                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-white transition-colors duration-200 leading-tight hover:translate-x-0.5 inline-block
                                        text-[11px] sm:text-xs xl:text-[12px]
                                    ">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── COL 3 — Socials ── */}
                    {/* On md: spans full width below col1+col2, on lg: own column */}
                    <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                        <div>
                            <p className="text-white font-extrabold tracking-[0.2em] uppercase mb-1.5
                                text-xs sm:text-[14px]
                            ">
                                Connect With Us
                            </p>
                            <div className="w-5 h-0.5 bg-red-600 mb-4 xl:mb-5" />
                            <div className="pt-8 flex gap-3 sm:gap-4 xl:gap-4 flex-wrap">
                                {SOCIALS.map((s, i) => <SocialBtn key={i} s={s} />)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Sister Institutes ── */}
                <div className="mt-8 sm:mt-10 xl:mt-12 pt-8 xl:pt-8"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>

                    <p className="text-center font-bold tracking-[0.3em] uppercase text-slate-400
                        text-[9px] sm:text-[10px] xl:text-[10px]
                        mb-5 sm:mb-6 xl:pb-6
                    ">
                        Late Shri Vishnu Waman Thakur Charitable Trust · Sister Institutes
                    </p>

                    {/* Wrap nicely on all screens */}
                    <div className="flex items-stretch justify-center flex-wrap
                        gap-2 sm:gap-2.5 xl:gap-2
                    ">
                        {SISTER_INSTITUTES.map((inst, i) => (
                            <a key={i} href={inst.href} target="_blank" rel="noopener noreferrer"
                                className="group flex items-center gap-2 xl:gap-3 rounded-2xl transition-all duration-250 hover:-translate-y-0.5
                                    px-2 py-2
                                    sm:px-3 sm:py-2
                                    xl:px-4 xl:py-2.5
                                "
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                    e.currentTarget.style.borderColor = 'rgba(212,160,23,0.25)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                                }}
                            >
                                <div className="rounded-xl bg-red-700/70 flex items-center justify-center flex-shrink-0
                                    w-7 h-7 sm:w-8 sm:h-8
                                ">
                                    <span className="font-black text-white leading-none
                                        text-[8px] sm:text-[9px]
                                    ">{inst.short}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-300 group-hover:text-white transition-colors duration-200 leading-tight
                                        text-[10px] sm:text-xs xl:text-xs
                                        whitespace-nowrap
                                    ">
                                        {inst.name}
                                    </p>
                                    <p className="text-slate-400 mt-0.5
                                        text-[9px] sm:text-[10px]
                                    ">{inst.type}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Copyright Bar ── */}
            <div className="bg-[#060C18] flex items-center justify-between flex-wrap
                px-4    py-3    gap-2
                sm:px-6  sm:py-3.5
                md:px-10
                lg:px-12
                xl:px-16 xl:py-3
                2xl:px-20
            ">
                <p className="text-slate-400
                    text-[10px] sm:text-xs xl:text-[12px]
                ">
                    © 2026 Viva College of Arts, Commerce & Science. All Rights Reserved.
                </p>
                <p className="text-slate-400
                    text-[10px] sm:text-xs xl:text-sm
                ">
                    Designed & Developed by SAKSHI JADHAV
                </p>
            </div>

        </footer>
    )
}

export default Footer