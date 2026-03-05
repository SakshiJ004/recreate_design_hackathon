// import React from 'react'

// // ── SVG Icons ──
// const IconMapPin = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//         <circle cx="12" cy="10" r="3" />
//     </svg>
// )
// const IconPhone = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
// )
// const IconMail = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//     </svg>
// )
// const IconClock = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//     </svg>
// )
// const IconArrow = ({ size = 12, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 12h14M12 5l7 7-7 7" />
//     </svg>
// )
// const IconFacebook = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
// )
// const IconInstagram = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//     </svg>
// )
// const IconYoutube = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
//         <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
//     </svg>
// )
// const IconLinkedin = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect x="2" y="9" width="4" height="12" />
//         <circle cx="4" cy="4" r="2" />
//     </svg>
// )

// const USEFUL_LINKS = [
//     { label: 'University of Mumbai', href: 'https://mu.ac.in' },
//     { label: 'UGC', href: 'https://ugc.ac.in' },
//     { label: 'NAAC', href: 'https://naac.gov.in' },
//     { label: 'MAHA DBT Scholarship', href: 'https://mahadbt.maharashtra.gov.in' },
//     { label: 'Freeship Portal', href: 'https://mahaescholar.maharashtra.gov.in' },
//     { label: 'National Test Agency', href: 'https://nta.ac.in' },
//     { label: 'SET Exam', href: 'https://setexam.unipune.ac.in' },
//     { label: 'UPSC', href: 'https://upsc.gov.in' },
//     { label: 'MPSC', href: 'https://mpsc.gov.in' },
//     { label: 'Joint Director HE', href: 'https://www.dhepune.gov.in' },
// ]

// const SOCIALS = [
//     { icon: <IconFacebook size={18} />, label: 'Facebook', href: 'https://facebook.com/vivacollege', color: '#1877F2' },
//     { icon: <IconInstagram size={18} />, label: 'Instagram', href: 'https://instagram.com/vivacollege', color: '#E1306C' },
//     { icon: <IconYoutube size={18} />, label: 'YouTube', href: 'https://youtube.com/@vivacollege', color: '#FF0000' },
//     { icon: <IconLinkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/school/viva-college', color: '#0A66C2' },
// ]

// const HELPDESK = [
//     { icon: <IconPhone size={14} color="#D4A017" />, label: 'Admin', value: '+91 97657 42335' },
//     { icon: <IconPhone size={14} color="#D4A017" />, label: 'Exam', value: '+91 93592 47885' },
//     { icon: <IconMail size={14} color="#D4A017" />, label: 'Email', value: 'admission@vivacollege.org' },
//     { icon: <IconClock size={14} color="#D4A017" />, label: 'Hours', value: 'Mon–Sat, 10am – 5pm' },
// ]

// const Footer = () => {
//     return (
//         <footer className="w-full font-sans">

//             {/* ── Main Footer Body ── */}
//             <div className="bg-slate-900 px-12 pt-16 pb-10">
//                 <div className="grid grid-cols-3 gap-12">

//                     {/* ══ COL 1 — Logo + Address ══ */}
//                     <div className="flex flex-col gap-6">

//                         {/* Logo */}
//                         <div className="flex items-center gap-3">
//                             <div className="w-12 h-12 rounded-xl bg-red-700 flex items-center justify-center flex-shrink-0">
//                                 <span className="text-white font-black text-lg">V</span>
//                             </div>
//                             <div>
//                                 <p className="font-black text-white text-lg leading-tight tracking-wide">VIVA COLLEGE</p>
//                                 <p className="text-xs text-slate-400 font-medium tracking-wider">Arts, Commerce & Science</p>
//                             </div>
//                         </div>

//                         {/* Tagline */}
//                         <p className="text-sm text-slate-400 leading-relaxed">
//                             NAAC Accredited · Est. 2001 · Virar, Maharashtra
//                         </p>

//                         {/* Contact info */}
//                         <div className="flex flex-col gap-3">
//                             <div className="flex items-start gap-3">
//                                 <div className="mt-0.5 flex-shrink-0">
//                                     <IconMapPin size={15} color="#D4A017" />
//                                 </div>
//                                 <p className="text-sm text-slate-400 leading-relaxed">
//                                     VIVA College Road, Virar (W),<br />
//                                     Dist. Palghar — 401303
//                                 </p>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <IconPhone size={15} color="#D4A017" />
//                                 <a href="tel:+919765742335"
//                                     className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
//                                     +91 97657 42335
//                                 </a>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <IconMail size={15} color="#D4A017" />
//                                 <a href="mailto:viva@vivacollege.org"
//                                     className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
//                                     viva@vivacollege.org
//                                 </a>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <IconMail size={15} color="#D4A017" />
//                                 <a href="mailto:admission@vivacollege.org"
//                                     className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
//                                     admission@vivacollege.org
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ══ COL 2 — Useful Links ══ */}
//                     <div>
//                         <div className="mb-6">
//                             <p className="text-white font-extrabold text-sm tracking-wider uppercase mb-2">
//                                 Useful Links
//                             </p>
//                             <div className="w-8 h-0.5 bg-red-600" />
//                         </div>

//                         {/* 2 sub-columns */}
//                         <div className="grid grid-cols-2 gap-x-4 gap-y-3">
//                             {USEFUL_LINKS.map((link, i) => (
//                                 <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
//                                     className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 group">
//                                     <span className="text-red-600 group-hover:translate-x-0.5 transition-transform duration-200">
//                                         <IconArrow size={11} color="#C8102E" />
//                                     </span>
//                                     <span className="text-xs font-medium leading-tight">{link.label}</span>
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* ══ COL 3 — Socials + Helpdesk ══ */}
//                     <div className="flex flex-col gap-6">

//                         {/* Connect */}
//                         <div>
//                             <div className="mb-5">
//                                 <p className="text-white font-extrabold text-sm tracking-wider uppercase mb-2">
//                                     Connect With Us
//                                 </p>
//                                 <div className="w-8 h-0.5 bg-red-600" />
//                             </div>

//                             <div className="flex gap-3">
//                                 {SOCIALS.map((s, i) => (
//                                     <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
//                                         className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-250 hover:scale-110 hover:text-white"
//                                         style={{ background: '#1E3A6E' }}
//                                         onMouseEnter={e => {
//                                             e.currentTarget.style.background = s.color
//                                         }}
//                                         onMouseLeave={e => {
//                                             e.currentTarget.style.background = '#1E3A6E'
//                                         }}
//                                         title={s.label}
//                                     >
//                                         {s.icon}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Helpdesk card */}
//                         <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: '#1E3A6E' }}>
//                             <div>
//                                 <p className="text-white font-extrabold text-sm mb-1">Admission Helpdesk</p>
//                                 <div className="w-8 h-0.5 bg-red-600" />
//                             </div>

//                             {HELPDESK.map((h, i) => (
//                                 <div key={i} className="flex items-start gap-3">
//                                     <div className="mt-0.5 flex-shrink-0">{h.icon}</div>
//                                     <div className="flex items-baseline gap-2 flex-wrap">
//                                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider w-10 flex-shrink-0">
//                                             {h.label}
//                                         </span>
//                                         <span className="text-xs text-white font-medium">{h.value}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ── Copyright Bar ── */}
//             <div className="bg-slate-950 px-12 py-4 flex items-center justify-between flex-wrap gap-3">
//                 <p className="text-xs text-slate-500 font-medium">
//                     © 2025 Viva College of Arts, Commerce & Science. All Rights Reserved.
//                 </p>
//                 <p className="text-xs text-slate-600 font-medium">
//                     Designed & Developed by VIVA Software Solutions
//                 </p>
//             </div>
//         </footer>
//     )
// }

// export default Footer

import React, { useState } from 'react'
import logo from '../../assets/images/viva-logo.png'
// ── SVG Icons ──
const IconMapPin = () => (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
)
const IconPhone = () => (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)
const IconMail = () => (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)
const IconFacebook = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
)
const IconInstagram = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
)
const IconYoutube = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
)
const IconLinkedin = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
)

// ── Data ──
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
    {
        short: 'VIT',
        name: 'VIVA Institute of Technology',
        type: 'Engineering',
        href: 'https://www.viva-technology.org',
    },
    {
        short: 'VIMR',
        name: 'VIVA Institute of Management & Research',
        type: 'Management · NAAC A',
        href: 'https://vivaimr.org',
    },
    {
        short: 'VIP',
        name: 'VIVA Institute of Pharmacy',
        type: 'Pharmacy',
        href: 'https://vivapharmacy.org',
    },
    {
        short: 'VCL',
        name: 'VIVA College of Law',
        type: 'Law',
        href: '#',
    },
    {
        short: 'VAC',
        name: 'VIVA Acupuncture College',
        type: 'Medicine',
        href: 'https://vivaacupuncture.org',
    },
    {
        short: 'UJC',
        name: 'Utkarsha Junior College',
        type: 'Junior College · Est. 1991',
        href: '#',
    },
]

// ── Social button ──
const SocialBtn = ({ s }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={s.label}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:-translate-y-1"
            style={{ background: hovered ? s.hoverBg : 'rgba(255,255,255,0.09)' }}
        >
            {s.icon}
        </a >
    )
}

const Footer = () => {
    return (
        <footer className="w-full bg-[#0D1B35]">

            

            {/* ══════════════════════════════════════
                MAIN FOOTER BODY
            ══════════════════════════════════════ */}
            < div className="bg-[#0D1B35] px-12 py-20" >
                {/* 3 columns */}
                <div className="grid grid-cols-3 gap-16">

                    {/* ── COL 1 — Logo + Contact ── */}
                    <div className="flex flex-col gap-5">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-20 h-20 p-2 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                                {/* <span className="text-white font-black text-base leading-none">V</span> */}
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <p className="font-black text-white text-lg tracking-widest uppercase leading-tight">
                                    Viva College
                                </p>
                                <p className="text-xs text-slate-300 tracking-wider mt-0.5">
                                    Arts, Commerce & Science
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-yellow-600/60">
                            NAAC Accredited · Est. 2001<br />
                            Affiliated to University of Mumbai
                        </p>

                        <div className="flex flex-col gap-3">
                            {[
                                { icon: <IconMapPin />, text: 'VIVA College Road, Virar (W), Palghar — 401303' },
                                { icon: <IconPhone />, text: '+91 97657 42335' },
                                { icon: <IconMail />, text: 'viva@vivacollege.org' },
                                { icon: <IconMail />, text: 'admission@vivacollege.org' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                                    <span className="text-sm text-slate-300 leading-relaxed">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── COL 2 — Useful Links ── */}
                    <div>
                        <p className="text-white font-extrabold text-md tracking-[0.2em] uppercase">
                            Useful Links
                        </p>
                        <div className="w-5 h-0.5 bg-red-600 mb-6" />

                        <div className="pt-6 grid grid-cols-2 gap-x-4 gap-y-4">
                            {USEFUL_LINKS.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md text-slate-300 hover:text-white transition-colors duration-200 leading-tight hover:translate-x-0.5 inline-block transition-transform"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── COL 3 — Socials ── */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-white font-extrabold text-md tracking-[0.2em] uppercase mb-1.5">
                                Connect With Us
                            </p>
                            <div className="w-5 h-0.5 bg-red-600 mb-5" />
                            <div className="flex gap-6 pt-8">
                                {SOCIALS.map((s, i) => <SocialBtn key={i} s={s} />)}
                            </div>
                        </div>
                    </div>
                </div >

                {/* ══════════════════════════════════════
                    SISTER INSTITUTES
                ══════════════════════════════════════ */}
                < div
                    className="pt-10"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <p className="pb-10 text-center text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">
                        Late Shri Vishnu Waman Thakur Charitable Trust · Sister Institutes
                    </p>

                    <div className="flex items-stretch justify-center flex-wrap gap-3">
                        {SISTER_INSTITUTES.map((inst, i) => (
                            <a
                                key={i}
                                href={inst.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-250 hover:-translate-y-0.5"
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
                                <div className="w-8 h-8 rounded-xl bg-red-700/70 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[9px] font-black text-white leading-none">{inst.short}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors duration-200 leading-tight whitespace-nowrap">
                                        {inst.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400 mt-0.5">{inst.type}</p>
                                </div>
                            </a>
                        ))}
                    </div >
                </div >

            </div >

            {/* ── Copyright Bar ── */}
            < div className="bg-[#060C18] px-12 py-4 flex items-center justify-between flex-wrap gap-3" >
                <p className="text-sm text-slate-400">
                    © 2026 Viva College of Arts, Commerce & Science. All Rights Reserved.
                </p>
                <p className="text-sm text-slate-400">
                    Designed & Developed by SAKSHI JADHAV
                </p>
            </div >

        </footer >
    )
}

export default Footer