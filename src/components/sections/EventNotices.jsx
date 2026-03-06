// import React, { useState, useEffect, useRef } from 'react'

// // ── SVG Icons ──
// const IconArrow = ({ size = 14 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 12h14M12 5l7 7-7 7" />
//     </svg>
// )
// const IconClock = ({ size = 12 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
//     </svg>
// )
// const IconPin = ({ size = 12 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
//     </svg>
// )
// const IconBell = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
//     </svg>
// )
// const IconCalendar = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
//     </svg>
// )
// const IconWarning = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
//     </svg>
// )
// const IconBook = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//     </svg>
// )
// const IconGrad = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
//     </svg>
// )
// const IconClip = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
//     </svg>
// )
// const IconStar = ({ size = 16 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
// )

// const EVENTS = [
//     {
//         date: { day: '15', month: 'MAR' },
//         title: 'VIVA Fest 2025',
//         detail: 'Annual Cultural Extravaganza',
//         time: '9:00 AM onwards',
//         venue: 'VIVA College Campus, Virar',
//         tag: 'Cultural',
//         tagColor: { bg: '#FEF2F2', text: '#C8102E' },
//         icon: <IconStar size={18} />,
//     },
//     {
//         date: { day: '22', month: 'MAR' },
//         title: 'Commerce Conclave 2025',
//         detail: 'Annual Business & Finance Summit',
//         time: '10:00 AM – 4:00 PM',
//         venue: 'Seminar Hall, VIVA College',
//         tag: 'Academic',
//         tagColor: { bg: '#EFF6FF', text: '#1D4ED8' },
//         icon: <IconBook size={18} />,
//     },
//     {
//         date: { day: '05', month: 'APR' },
//         title: 'Science Exhibition',
//         detail: 'Student Project Showcase 2025',
//         time: '10:00 AM – 5:00 PM',
//         venue: 'Science Block, VIVA College',
//         tag: 'Academic',
//         tagColor: { bg: '#ECFDF5', text: '#065F46' },
//         icon: <IconGrad size={18} />,
//     },
//     {
//         date: { day: '12', month: 'APR' },
//         title: 'NSS Blood Donation Drive',
//         detail: 'Community Health Initiative',
//         time: '9:00 AM – 2:00 PM',
//         venue: 'College Premises, Virar',
//         tag: 'NSS',
//         tagColor: { bg: '#F5F3FF', text: '#6D28D9' },
//         icon: <IconStar size={18} />,
//     },
// ]

// const NOTICES = [
//     { icon: <IconWarning size={15} />, text: 'FY & SY (Sem I to IV) ATKT Revaluation Notice — Winter 2025', priority: 'HIGH', category: 'Exams', date: '02 Mar 2026' },
//     { icon: <IconCalendar size={15} />, text: 'Examination Schedule — March 2025 Declared. Check College Notice Board.', priority: 'HIGH', category: 'Exams', date: '28 Feb 2026' },
//     { icon: <IconBook size={15} />, text: 'Remedial Lectures for FY & SY Students under NEP — Schedule Released', priority: 'MED', category: 'Academic', date: '25 Feb 2026' },
//     { icon: <IconGrad size={15} />, text: 'Add-on Course: INVESTRIGHT — Portfolio Building for Beginners (Commerce Dept)', priority: 'MED', category: 'Academic', date: '20 Feb 2026' },
//     { icon: <IconClip size={15} />, text: 'Marathi Bhasha Gaurav Din Celebration — All Students Welcome', priority: 'LOW', category: 'Events', date: '18 Feb 2026' },
//     { icon: <IconClip size={15} />, text: 'Symposium by Dept. of B.Com (Accounting & Finance) AY 2025-26', priority: 'LOW', category: 'Events', date: '15 Feb 2026' },
// ]

// const PRIORITY_STYLE = {
//     HIGH: { bg: '#FEF2F2', text: '#C8102E', border: '#C8102E' },
//     MED: { bg: '#FFF7ED', text: '#C2410C', border: '#F97316' },
//     LOW: { bg: '#F0FDF4', text: '#15803D', border: '#22C55E' },
// }

// const FILTER_TABS = ['All', 'Academic', 'Events', 'Exams']

// // ── Animate on scroll hook ──
// const useInView = () => {
//     const ref = useRef(null)
//     const [inView, setInView] = useState(false)
//     useEffect(() => {
//         const obs = new IntersectionObserver(
//             ([entry]) => { if (entry.isIntersecting) setInView(true) },
//             { threshold: 0.12 }
//         )
//         if (ref.current) obs.observe(ref.current)
//         return () => obs.disconnect()
//     }, [])
//     return [ref, inView]
// }

// const EventsNotices = () => {
//     const [activeFilter, setActiveFilter] = useState('All')
//     const [hoveredEvent, setHoveredEvent] = useState(null)
//     const [hoveredNotice, setHoveredNotice] = useState(null)
//     const [sectionRef, inView] = useInView()

//     const filteredNotices = activeFilter === 'All'
//         ? NOTICES
//         : NOTICES.filter(n => n.category === activeFilter)

//     return (
//         <section ref={sectionRef} style={{
//             background: '#fff',
//             padding: '88px 48px',
//             fontFamily: "'DM Sans', 'Inter', sans-serif",
//             width: '100%',
//             boxSizing: 'border-box',
//             overflow: 'hidden',
//         }}>
//             <style>{`
//                 @keyframes fadeUp {
//                     from { opacity: 0; transform: translateY(28px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 @keyframes slideLeft {
//                     from { opacity: 0; transform: translateX(32px); }
//                     to   { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes pulseDot {
//                     0%, 100% { transform: scale(1); opacity: 1; }
//                     50%       { transform: scale(1.5); opacity: 0.6; }
//                 }
//                 @keyframes shimmer {
//                     0%   { background-position: -200% 0; }
//                     100% { background-position: 200% 0; }
//                 }
//             `}</style>

//             {/* ── Section Header ── */}
//             <div style={{
//                 marginBottom: 52,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'translateY(0)' : 'translateY(24px)',
//                 transition: 'opacity 0.6s ease, transform 0.6s ease',
//             }}>
//                 <p style={{
//                     fontSize: 11, fontWeight: 800,
//                     letterSpacing: '0.25em', textTransform: 'uppercase',
//                     color: '#C8102E', margin: '0 0 10px',
//                     display: 'flex', alignItems: 'center', gap: 8,
//                 }}>
//                     <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block' }} />
//                     What's Happening
//                 </p>
//                 <h2 style={{
//                     fontSize: 'clamp(32px, 4vw, 48px)',
//                     fontWeight: 900, color: '#0F1C3D',
//                     lineHeight: 1.1, margin: 0,
//                 }}>
//                     Events & Notices
//                 </h2>
//             </div>

//             {/* ── 2 Column ── */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>

//                 {/* ════════════════════
//                     LEFT — Events
//                 ════════════════════ */}
//                 <div style={{
//                     opacity: inView ? 1 : 0,
//                     transform: inView ? 'translateX(0)' : 'translateX(-32px)',
//                     transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
//                 }}>
//                     {/* Column header */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                             <div style={{
//                                 width: 34, height: 34, borderRadius: 10,
//                                 background: '#0F1C3D',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 color: '#D4A017',
//                             }}>
//                                 <IconCalendar size={16} />
//                             </div>
//                             <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
//                                 Upcoming Events
//                             </h3>
//                         </div>
//                         <a href="#" style={{
//                             fontSize: 12, fontWeight: 700, color: '#C8102E',
//                             textDecoration: 'none',
//                             display: 'flex', alignItems: 'center', gap: 4,
//                             transition: 'gap 0.2s',
//                         }}
//                             onMouseEnter={e => e.currentTarget.style.gap = '8px'}
//                             onMouseLeave={e => e.currentTarget.style.gap = '4px'}
//                         >
//                             View All <IconArrow size={13} />
//                         </a>
//                     </div>

//                     {/* Event cards */}
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//                         {EVENTS.map((ev, i) => (
//                             <div key={i}
//                                 onMouseEnter={() => setHoveredEvent(i)}
//                                 onMouseLeave={() => setHoveredEvent(null)}
//                                 style={{
//                                     display: 'flex', gap: 16, alignItems: 'flex-start',
//                                     padding: '18px 20px',
//                                     border: '1px solid',
//                                     borderColor: hoveredEvent === i ? '#0F1C3D' : '#F3F4F6',
//                                     borderRadius: 16,
//                                     background: hoveredEvent === i ? '#F8FAFC' : '#FAFAF8',
//                                     cursor: 'pointer',
//                                     transition: 'all 0.25s ease',
//                                     transform: hoveredEvent === i ? 'translateY(-3px)' : 'translateY(0)',
//                                     boxShadow: hoveredEvent === i ? '0 10px 28px rgba(15,28,61,0.09)' : 'none',
//                                     opacity: inView ? 1 : 0,
//                                     animation: inView ? `fadeUp 0.5s ease ${0.15 + i * 0.1}s both` : 'none',
//                                 }}>

//                                 {/* Date badge */}
//                                 <div style={{
//                                     flexShrink: 0, width: 54, height: 60,
//                                     background: hoveredEvent === i ? '#C8102E' : '#0F1C3D',
//                                     borderRadius: 14,
//                                     display: 'flex', flexDirection: 'column',
//                                     alignItems: 'center', justifyContent: 'center',
//                                     transition: 'background 0.25s',
//                                     gap: 1,
//                                 }}>
//                                     <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
//                                         {ev.date.day}
//                                     </span>
//                                     <span style={{ fontSize: 9, fontWeight: 700, color: '#D4A017', letterSpacing: '0.12em' }}>
//                                         {ev.date.month}
//                                     </span>
//                                 </div>

//                                 {/* Content */}
//                                 <div style={{ flex: 1, minWidth: 0 }}>
//                                     <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
//                                         <p style={{ fontWeight: 800, fontSize: 14, color: '#0F1C3D', margin: 0 }}>
//                                             {ev.title}
//                                         </p>
//                                         <span style={{
//                                             fontSize: 10, fontWeight: 700,
//                                             padding: '2px 8px', borderRadius: 100,
//                                             background: ev.tagColor.bg, color: ev.tagColor.text,
//                                             flexShrink: 0,
//                                         }}>
//                                             {ev.tag}
//                                         </span>
//                                     </div>
//                                     <p style={{ fontSize: 12, color: '#6B7280', margin: '0 0 8px', lineHeight: 1.4 }}>
//                                         {ev.detail}
//                                     </p>
//                                     <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
//                                         <span style={{ fontSize: 11, color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: 4 }}>
//                                             <IconClock size={11} /> {ev.time}
//                                         </span>
//                                         <span style={{ fontSize: 11, color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: 4 }}>
//                                             <IconPin size={11} /> {ev.venue}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* ════════════════════
//                     RIGHT — Notices
//                 ════════════════════ */}
//                 <div style={{
//                     opacity: inView ? 1 : 0,
//                     transform: inView ? 'translateX(0)' : 'translateX(32px)',
//                     transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
//                 }}>
//                     {/* Column header */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                             <div style={{
//                                 width: 34, height: 34, borderRadius: 10,
//                                 background: '#C8102E',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 color: '#fff', position: 'relative',
//                             }}>
//                                 <IconBell size={16} />
//                                 {/* Pulsing dot */}
//                                 <span style={{
//                                     position: 'absolute', top: -3, right: -3,
//                                     width: 9, height: 9, borderRadius: '50%',
//                                     background: '#D4A017',
//                                     animation: 'pulseDot 1.8s ease-in-out infinite',
//                                     border: '2px solid #fff',
//                                 }} />
//                             </div>
//                             <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
//                                 Notices & Circulars
//                             </h3>
//                         </div>
//                         <a href="#" style={{
//                             fontSize: 12, fontWeight: 700, color: '#C8102E',
//                             textDecoration: 'none',
//                             display: 'flex', alignItems: 'center', gap: 4,
//                             transition: 'gap 0.2s',
//                         }}
//                             onMouseEnter={e => e.currentTarget.style.gap = '8px'}
//                             onMouseLeave={e => e.currentTarget.style.gap = '4px'}
//                         >
//                             View All <IconArrow size={13} />
//                         </a>
//                     </div>

//                     {/* Filter tabs */}
//                     <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
//                         {FILTER_TABS.map((tab, i) => (
//                             <button key={i} onClick={() => setActiveFilter(tab)} style={{
//                                 padding: '6px 16px', borderRadius: 100,
//                                 fontSize: 12, fontWeight: 600,
//                                 border: '1px solid',
//                                 cursor: 'pointer',
//                                 fontFamily: 'inherit',
//                                 transition: 'all 0.2s',
//                                 borderColor: activeFilter === tab ? '#0F1C3D' : '#E5E7EB',
//                                 background: activeFilter === tab ? '#0F1C3D' : '#fff',
//                                 color: activeFilter === tab ? '#fff' : '#6B7280',
//                                 transform: activeFilter === tab ? 'scale(1.04)' : 'scale(1)',
//                             }}>
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Notice list */}
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                         {filteredNotices.map((notice, i) => {
//                             const ps = PRIORITY_STYLE[notice.priority]
//                             return (
//                                 <div key={`${activeFilter}-${i}`}
//                                     onMouseEnter={() => setHoveredNotice(i)}
//                                     onMouseLeave={() => setHoveredNotice(null)}
//                                     style={{
//                                         display: 'flex', gap: 14, alignItems: 'flex-start',
//                                         padding: '14px 16px',
//                                         border: '1px solid #F3F4F6',
//                                         borderLeft: `3px solid ${ps.border}`,
//                                         borderRadius: 12,
//                                         background: hoveredNotice === i ? '#F8FAFC' : '#FAFAF8',
//                                         cursor: 'pointer',
//                                         transition: 'all 0.2s ease',
//                                         transform: hoveredNotice === i ? 'translateX(4px)' : 'translateX(0)',
//                                         animation: inView ? `slideLeft 0.4s ease ${0.25 + i * 0.07}s both` : 'none',
//                                     }}>

//                                     {/* Icon box */}
//                                     <div style={{
//                                         width: 32, height: 32, flexShrink: 0,
//                                         borderRadius: 8,
//                                         background: ps.bg,
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         color: ps.text,
//                                         transition: 'background 0.2s',
//                                     }}>
//                                         {notice.icon}
//                                     </div>

//                                     {/* Text */}
//                                     <div style={{ flex: 1, minWidth: 0 }}>
//                                         <p style={{
//                                             fontSize: 13, fontWeight: 600,
//                                             color: '#1E293B', margin: '0 0 6px',
//                                             lineHeight: 1.5,
//                                         }}>
//                                             {notice.text}
//                                         </p>
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                                             <span style={{ fontSize: 10, color: '#9CA3AF' }}>{notice.date}</span>
//                                             <span style={{
//                                                 fontSize: 9, fontWeight: 800,
//                                                 padding: '2px 8px', borderRadius: 100,
//                                                 background: ps.bg, color: ps.text,
//                                                 letterSpacing: '0.08em',
//                                             }}>
//                                                 {notice.priority}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default EventsNotices


import React, { useState, useEffect, useRef } from 'react'

// ── SVG Icons ──
const IconArrow = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)
const IconClock = ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
)
const IconPin = ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
)
const IconBell = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
)
const IconCalendar = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)
const IconWarning = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
)
const IconBook = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
)
const IconGrad = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
)
const IconClip = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
)
const IconStar = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const EVENTS = [
    {
        date: { day: '15', month: 'MAR' },
        title: 'VIVA Fest 2025',
        detail: 'Annual Cultural Extravaganza',
        time: '9:00 AM onwards',
        venue: 'VIVA College Campus, Virar',
        tag: 'Cultural',
        tagColor: { bg: '#FEF2F2', text: '#C8102E' },
        icon: <IconStar size={18} />,
    },
    {
        date: { day: '22', month: 'MAR' },
        title: 'Commerce Conclave 2025',
        detail: 'Annual Business & Finance Summit',
        time: '10:00 AM – 4:00 PM',
        venue: 'Seminar Hall, VIVA College',
        tag: 'Academic',
        tagColor: { bg: '#EFF6FF', text: '#1D4ED8' },
        icon: <IconBook size={18} />,
    },
    {
        date: { day: '05', month: 'APR' },
        title: 'Science Exhibition',
        detail: 'Student Project Showcase 2025',
        time: '10:00 AM – 5:00 PM',
        venue: 'Science Block, VIVA College',
        tag: 'Academic',
        tagColor: { bg: '#ECFDF5', text: '#065F46' },
        icon: <IconGrad size={18} />,
    },
    {
        date: { day: '12', month: 'APR' },
        title: 'NSS Blood Donation Drive',
        detail: 'Community Health Initiative',
        time: '9:00 AM – 2:00 PM',
        venue: 'College Premises, Virar',
        tag: 'NSS',
        tagColor: { bg: '#F5F3FF', text: '#6D28D9' },
        icon: <IconStar size={18} />,
    },
]

const NOTICES = [
    { icon: <IconWarning size={15} />, text: 'FY & SY (Sem I to IV) ATKT Revaluation Notice — Winter 2025', priority: 'HIGH', category: 'Exams', date: '02 Mar 2026' },
    { icon: <IconCalendar size={15} />, text: 'Examination Schedule — March 2025 Declared. Check College Notice Board.', priority: 'HIGH', category: 'Exams', date: '28 Feb 2026' },
    { icon: <IconBook size={15} />, text: 'Remedial Lectures for FY & SY Students under NEP — Schedule Released', priority: 'MED', category: 'Academic', date: '25 Feb 2026' },
    { icon: <IconGrad size={15} />, text: 'Add-on Course: INVESTRIGHT — Portfolio Building for Beginners (Commerce Dept)', priority: 'MED', category: 'Academic', date: '20 Feb 2026' },
    { icon: <IconClip size={15} />, text: 'Marathi Bhasha Gaurav Din Celebration — All Students Welcome', priority: 'LOW', category: 'Events', date: '18 Feb 2026' },
    { icon: <IconClip size={15} />, text: 'Symposium by Dept. of B.Com (Accounting & Finance) AY 2025-26', priority: 'LOW', category: 'Events', date: '15 Feb 2026' },
]

const PRIORITY_STYLE = {
    HIGH: { bg: '#FEF2F2', text: '#C8102E', border: '#C8102E' },
    MED: { bg: '#FFF7ED', text: '#C2410C', border: '#F97316' },
    LOW: { bg: '#F0FDF4', text: '#15803D', border: '#22C55E' },
}

const FILTER_TABS = ['All', 'Academic', 'Events', 'Exams']

// ── Animate on scroll hook ──
const useInView = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold: 0.12 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return [ref, inView]
}

const EventsNotices = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [hoveredEvent, setHoveredEvent] = useState(null)
    const [hoveredNotice, setHoveredNotice] = useState(null)
    const [sectionRef, inView] = useInView()

    const filteredNotices = activeFilter === 'All'
        ? NOTICES
        : NOTICES.filter(n => n.category === activeFilter)

    return (
        <section
            ref={sectionRef}
            className="bg-white w-full overflow-hidden box-border py-16 sm:py-20 lg:py-[88px] px-4 sm:px-6 md:px-8 lg:px-12"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
            {/* ── Section Header ── */}
            <div
                className="mb-10 sm:mb-12 lg:mb-[52px]"
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
            >
                <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#C8102E] mb-2.5 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-[#C8102E] inline-block" />
                    What's Happening
                </p>
                {/* Original: clamp(32px,4vw,48px) → sm:32 md:36 lg:40 xl:44 2xl:48 */}
                <h2 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-black text-[#0F1C3D] leading-[1.1] m-0">
                    Events & Notices
                </h2>
            </div>

            {/* ── 2 Column Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px]">

                {/* ════════════════════
                    LEFT — Events
                ════════════════════ */}
                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateX(0)' : 'translateX(-32px)',
                        transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
                    }}
                >
                    {/* Column header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2.5">
                            <div className="w-[34px] h-[34px] rounded-[10px] bg-[#0F1C3D] flex items-center justify-center text-[#D4A017]">
                                <IconCalendar size={16} />
                            </div>
                            <h3 className="text-base font-extrabold text-[#0F1C3D] m-0">
                                Upcoming Events
                            </h3>
                        </div>
                        <a
                            href="#"
                            className="text-xs font-bold text-[#C8102E] no-underline flex items-center gap-1"
                            style={{ transition: 'gap 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                            onMouseLeave={e => e.currentTarget.style.gap = '4px'}
                        >
                            View All <IconArrow size={13} />
                        </a>
                    </div>

                    {/* Event cards */}
                    <div className="flex flex-col gap-3.5">
                        {EVENTS.map((ev, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredEvent(i)}
                                onMouseLeave={() => setHoveredEvent(null)}
                                className="flex gap-4 items-start px-4 sm:px-5 py-4 sm:py-[18px] rounded-2xl cursor-pointer"
                                style={{
                                    border: '1px solid',
                                    borderColor: hoveredEvent === i ? '#0F1C3D' : '#F3F4F6',
                                    background: hoveredEvent === i ? '#F8FAFC' : '#FAFAF8',
                                    transition: 'all 0.25s ease',
                                    transform: hoveredEvent === i ? 'translateY(-3px)' : 'translateY(0)',
                                    boxShadow: hoveredEvent === i ? '0 10px 28px rgba(15,28,61,0.09)' : 'none',
                                    opacity: inView ? 1 : 0,
                                    animation: inView ? `fadeUp 0.5s ease ${0.15 + i * 0.1}s both` : 'none',
                                }}
                            >
                                {/* Date badge */}
                                <div
                                    className="shrink-0 w-[54px] h-[60px] rounded-[14px] flex flex-col items-center justify-center gap-[2px]"
                                    style={{
                                        background: hoveredEvent === i ? '#C8102E' : '#0F1C3D',
                                        transition: 'background 0.25s',
                                    }}
                                >
                                    <span className="text-[22px] font-black text-white leading-none">
                                        {ev.date.day}
                                    </span>
                                    <span className="text-[9px] font-bold text-[#D4A017] tracking-[0.12em]">
                                        {ev.date.month}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-[5px] flex-wrap">
                                        <p className="font-extrabold text-[13px] sm:text-[14px] text-[#0F1C3D] m-0">
                                            {ev.title}
                                        </p>
                                        <span
                                            className="text-[10px] font-bold px-2 py-[2px] rounded-full shrink-0"
                                            style={{ background: ev.tagColor.bg, color: ev.tagColor.text }}
                                        >
                                            {ev.tag}
                                        </span>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-gray-500 mb-2 leading-[1.4]">
                                        {ev.detail}
                                    </p>
                                    <div className="flex gap-3 sm:gap-3.5 flex-wrap">
                                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                            <IconClock size={11} /> {ev.time}
                                        </span>
                                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                            <IconPin size={11} /> {ev.venue}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ════════════════════
                    RIGHT — Notices
                ════════════════════ */}
                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateX(0)' : 'translateX(32px)',
                        transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
                    }}
                >
                    {/* Column header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2.5">
                            <div className="w-[34px] h-[34px] rounded-[10px] bg-[#C8102E] flex items-center justify-center text-white relative">
                                <IconBell size={16} />
                                {/* Pulsing dot */}
                                <span
                                    className="absolute -top-[3px] -right-[3px] w-[9px] h-[9px] rounded-full bg-[#D4A017] border-2 border-white"
                                    style={{ animation: 'pulseDot 1.8s ease-in-out infinite' }}
                                />
                            </div>
                            <h3 className="text-base font-extrabold text-[#0F1C3D] m-0">
                                Notices & Circulars
                            </h3>
                        </div>
                        <a
                            href="#"
                            className="text-xs font-bold text-[#C8102E] no-underline flex items-center gap-1"
                            style={{ transition: 'gap 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                            onMouseLeave={e => e.currentTarget.style.gap = '4px'}
                        >
                            View All <IconArrow size={13} />
                        </a>
                    </div>

                    {/* Filter tabs */}
                    <div className="flex gap-1.5 mb-5 flex-wrap">
                        {FILTER_TABS.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveFilter(tab)}
                                className="px-4 py-1.5 rounded-full text-xs font-semibold border cursor-pointer font-[inherit]"
                                style={{
                                    transition: 'all 0.2s',
                                    borderColor: activeFilter === tab ? '#0F1C3D' : '#E5E7EB',
                                    background: activeFilter === tab ? '#0F1C3D' : '#fff',
                                    color: activeFilter === tab ? '#fff' : '#6B7280',
                                    transform: activeFilter === tab ? 'scale(1.04)' : 'scale(1)',
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Notice list */}
                    <div className="flex flex-col gap-2.5">
                        {filteredNotices.map((notice, i) => {
                            const ps = PRIORITY_STYLE[notice.priority]
                            return (
                                <div
                                    key={`${activeFilter}-${i}`}
                                    onMouseEnter={() => setHoveredNotice(i)}
                                    onMouseLeave={() => setHoveredNotice(null)}
                                    className="flex gap-3.5 items-start px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl cursor-pointer"
                                    style={{
                                        border: '1px solid #F3F4F6',
                                        borderLeft: `3px solid ${ps.border}`,
                                        background: hoveredNotice === i ? '#F8FAFC' : '#FAFAF8',
                                        transition: 'all 0.2s ease',
                                        transform: hoveredNotice === i ? 'translateX(4px)' : 'translateX(0)',
                                        animation: inView ? `slideLeft 0.4s ease ${0.25 + i * 0.07}s both` : 'none',
                                    }}
                                >
                                    {/* Icon box */}
                                    <div
                                        className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: ps.bg,
                                            color: ps.text,
                                            transition: 'background 0.2s',
                                        }}
                                    >
                                        {notice.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[12px] sm:text-[13px] font-semibold text-[#1E293B] mb-1.5 leading-[1.5]">
                                            {notice.text}
                                        </p>
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-[10px] text-gray-400">{notice.date}</span>
                                            <span
                                                className="text-[9px] font-extrabold px-2 py-[2px] rounded-full tracking-[0.08em]"
                                                style={{ background: ps.bg, color: ps.text }}
                                            >
                                                {notice.priority}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsNotices