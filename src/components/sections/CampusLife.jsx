// import React, { useState } from 'react'
// import vivaFest from "../../assets/videos/event-day.mp4"
// import cultural from '../../assets/images/cultural1.png'
// import science from '../../assets/images/science1.png'
// import sports from '../../assets/images/sports.png'
// import nss from '../../assets/images/nss.png'
// import collegeFest from '../../assets/images/college-fest.png'
// import scienceExibition from '../../assets/images/science-exibition.png'
// import convocation from '../../assets/images/convocation.png'
// import farewell from '../../assets/images/farewell.jpeg'
// import carnival from '../../assets/images/carnival.png'
// import bloodDonation from '../../assets/images/blood-donation.png'

// const TABS = ['Life on Campus', 'Clubs & Societies', 'Sports', 'Gallery']

// // SVG Icon components — file च्या top ला add कर
// const IconUsers = ({ size = 20, color = '#6B7280' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
// )

// const IconDrama = ({ size = 26, color = '#C8102E' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10" />
//         <path d="M7 13c0 2.21 1.79 4 4 4s4-1.79 4-4" />
//         <circle cx="9" cy="10" r="1" fill={color} />
//         <circle cx="15" cy="10" r="1" fill={color} />
//     </svg>
// )

// const IconMusic = ({ size = 26, color = '#C8102E' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M9 18V5l12-2v13" />
//         <circle cx="6" cy="18" r="3" />
//         <circle cx="18" cy="16" r="3" />
//     </svg>
// )

// const IconCamera = ({ size = 26, color = '#C2410C' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
//         <circle cx="12" cy="13" r="4" />
//     </svg>
// )

// const IconBall = ({ size = 26, color = '#065F46' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//         <path d="M2 12h20" />
//     </svg>
// )

// const IconCode = ({ size = 26, color = '#1D4ED8' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="16 18 22 12 16 6" />
//         <polyline points="8 6 2 12 8 18" />
//     </svg>
// )

// const IconLeaf = ({ size = 26, color = '#6D28D9' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 0 0 1.38 1.38C8.55 18.9 15.5 17 20 8" />
//         <path d="M3.82 19.34C4.63 18.1 6 16.4 8 15" />
//     </svg>
// )

// const IconBuilding = ({ size = 26, color = '#0369A1' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="3" width="20" height="14" rx="2" />
//         <path d="M8 21h8M12 17v4" />
//         <path d="M7 8h2M7 12h2M15 8h2M15 12h2M11 8h2M11 12h2" />
//     </svg>
// )

// const IconPalette = ({ size = 26, color = '#C2410C' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="13.5" cy="6.5" r=".5" fill={color} />
//         <circle cx="17.5" cy="10.5" r=".5" fill={color} />
//         <circle cx="8.5" cy="7.5" r=".5" fill={color} />
//         <circle cx="6.5" cy="12.5" r=".5" fill={color} />
//         <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
//     </svg>
// )

// const IconTrophy = ({ size = 24, color = '#C8102E' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="8 21 12 21 16 21" />
//         <line x1="12" y1="17" x2="12" y2="21" />
//         <path d="M7 4H17l-1 7a5 5 0 0 1-8 0L7 4z" />
//         <path d="M5 4H3v3a4 4 0 0 0 4 4" />
//         <path d="M19 4h2v3a4 4 0 0 1-4 4" />
//     </svg>
// )

// const CLUBS = [
//     {
//         icon: <IconDrama />,
//         name: 'Dramatic Arts Club',
//         members: 80,
//         desc: 'Street plays, mono-acting, one-act plays & inter-college drama competitions',
//         tag: 'Cultural',
//     },
//     {
//         icon: <IconMusic />,
//         name: 'Music Society',
//         members: 95,
//         desc: 'Western & classical vocals, college band, instruments & annual music fest',
//         tag: 'Cultural',
//     },
//     {
//         icon: <IconCamera />,
//         name: 'Photography & Film Club',
//         members: 60,
//         desc: 'Campus photography, short films, photo exhibitions & documentary projects',
//         tag: 'Creative',
//     },
//     {
//         icon: <IconBall />,
//         name: 'Sports Committee',
//         members: 200,
//         desc: 'Cricket, football, basketball, chess, carrom & inter-college tournament org.',
//         tag: 'Sports',
//     },
//     {
//         icon: <IconCode />,
//         name: 'Tech & Coding Club',
//         members: 110,
//         desc: 'Hackathons, web dev workshops, coding contests & industry guest sessions',
//         tag: 'Technical',
//     },
//     {
//         icon: <IconLeaf />,
//         name: 'NSS Unit',
//         members: 150,
//         desc: 'National Service Scheme — blood donation, tree plantation & community drives',
//         tag: 'Social',
//     },
//     {
//         icon: <IconBuilding />,
//         name: 'Commerce Association',
//         members: 130,
//         desc: 'Business conclaves, stock market simulations, CA talks & finance workshops',
//         tag: 'Academic',
//     },
//     {
//         icon: <IconPalette />,
//         name: 'Fine Arts Circle',
//         members: 70,
//         desc: 'Rangoli, poster making, sketching, painting competitions & annual art show',
//         tag: 'Creative',
//     },
// ]

// const SPORTS = [
//     {
//         position: '1st',
//         event: 'Inter-College Chess Championship',
//         detail: 'Girls Team — University of Mumbai Level 2025-26',
//         year: '2025-26',
//     },
//     {
//         position: <IconTrophy />,
//         event: 'University Shooting Competition',
//         detail: 'Silver & Bronze Medals — District Level 2024',
//         year: '2024',
//     },
//     {
//         position: '1st',
//         event: 'Zonal Cricket Tournament',
//         detail: 'Men\'s Cricket Team — Palghar Zone Champions',
//         year: '2024-25',
//     },
//     {
//         position: 'Best',
//         event: 'NCC Unit Award',
//         detail: 'Best College NCC — District Level Recognition',
//         year: '2024',
//     },
//     {
//         position: '2nd',
//         event: 'Inter-College Athletics',
//         detail: 'Track & Field — University of Mumbai Sports Meet',
//         year: '2023-24',
//     },
//     {
//         position: '1st',
//         event: 'Carrom Championship',
//         detail: 'Mixed Category — Inter-College Virar Zone',
//         year: '2024-25',
//     },
// ]

// const tagColors = {
//     Cultural: { bg: '#FEF2F2', text: '#C8102E' },
//     Creative: { bg: '#FFF7ED', text: '#C2410C' },
//     Sports: { bg: '#ECFDF5', text: '#065F46' },
//     Technical: { bg: '#EFF6FF', text: '#1D4ED8' },
//     Social: { bg: '#F5F3FF', text: '#6D28D9' },
//     Academic: { bg: '#F0F9FF', text: '#0369A1' },
// }

// const CampusLife = () => {
//     const [activeTab, setActiveTab] = useState(0)

//     return (
//         <section id='campus-life' style={{
//             background: '#F8FAFC',
//             padding: '80px 0 80px',
//             fontFamily: "'DM Sans', 'Inter', sans-serif",
//             width: '100%',
//         }}>
//             {/* ── Full width wrapper ── */}
//             <div style={{ width: '100%', padding: '0 48px', boxSizing: 'border-box' }}>

//                 {/* ── Section header ── */}
//                 <div style={{ marginBottom: 36 }}>
//                     <p style={{
//                         fontSize: 11, fontWeight: 800,
//                         letterSpacing: '0.25em', textTransform: 'uppercase',
//                         color: '#C8102E', marginBottom: 10, margin: '0 0 10px',
//                         display: 'flex', alignItems: 'center', gap: 8,
//                     }}>
//                         <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block', flexShrink: 0 }} />
//                         Campus Life
//                     </p>
//                     <h2 style={{
//                         fontSize: 'clamp(36px, 4vw, 52px)',
//                         fontWeight: 900, color: '#0F1C3D',
//                         lineHeight: 1.1, margin: '8px 0 0',
//                     }}>
//                         Life at Viva.
//                     </h2>
//                 </div>

//                 {/* ── Tabs ── */}
//                 <div style={{
//                     display: 'flex', gap: 0,
//                     borderBottom: '2px solid #E5E7EB',
//                     marginBottom: 40,
//                 }}>
//                     {TABS.map((tab, i) => (
//                         <button key={i} onClick={() => setActiveTab(i)}
//                             style={{
//                                 padding: '12px 28px',
//                                 fontWeight: 600, fontSize: 14,
//                                 border: 'none', background: 'none',
//                                 cursor: 'pointer',
//                                 color: activeTab === i ? '#0F1C3D' : '#9CA3AF',
//                                 borderBottom: activeTab === i ? '2px solid #C8102E' : '2px solid transparent',
//                                 marginBottom: -2,
//                                 transition: 'all 0.2s',
//                                 fontFamily: 'inherit',
//                                 letterSpacing: '0.02em',
//                             }}>
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 {/* ══════════════════════════════
//                     TAB 0 — Life on Campus
//                 ══════════════════════════════ */}
//                 {activeTab === 0 && (
//                     <div style={{ display: 'flex', gap: 16, width: '100%', height: 460 }}>

//                         {/* Large left — Video */}
//                         <div style={{
//                             flex: '0 0 44%',
//                             borderRadius: 20,
//                             overflow: 'hidden',
//                             position: 'relative',
//                         }}>
//                             <video
//                                 src={vivaFest}
//                                 autoPlay
//                                 loop
//                                 muted
//                                 playsInline
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                     objectPosition: 'center',
//                                     display: 'block',
//                                 }}
//                             />
//                             {/* Gradient overlay */}
//                             <div style={{
//                                 position: 'absolute', inset: 0,
//                                 pointerEvents: 'none',
//                             }} />
//                             {/* Caption */}
//                             <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
//                                 <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 6px' }}>
//                                     Annual Cultural Fest
//                                 </p>
//                                 <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.2 }}>
//                                     VIVA Fest 2025
//                                 </p>
//                                 <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: '4px 0 0' }}>
//                                     March 15–16 · Virar Campus
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Right 2×2 */}
//                         <div style={{
//                             flex: 1,
//                             display: 'grid',
//                             gridTemplateColumns: '1fr 1fr',
//                             gridTemplateRows: '1fr 1fr',
//                             gap: 16,
//                         }}>
//                             {[
//                                 { label: 'Cultural Programme', sub: 'Annual Day 2025', img: cultural },
//                                 { label: 'Sports Day', sub: 'Zonal Championship', img: sports },
//                                 { label: 'Science Exhibition', sub: 'Project Showcase', img: science },
//                                 { label: 'NSS Activity', sub: 'Community Drive', img: nss },
//                             ].map((p, i) => (
//                                 <div key={i} style={{
//                                     borderRadius: 16,
//                                     overflow: 'hidden',
//                                     position: 'relative',
//                                     cursor: 'pointer',
//                                     transition: 'transform 0.2s',
//                                     // background: '#CBD5E1',
//                                 }}
//                                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
//                                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//                                 >
//                                     {/* Actual image */}
//                                     <img
//                                         src={p.img}
//                                         alt={p.label}
//                                         style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                             objectPosition: 'center',
//                                             display: 'block',
//                                         }}
//                                     />
//                                     {/* Caption */}
//                                     <div style={{ position: 'absolute', bottom: 14, left: 16 }}>
//                                         <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: 0 }}>{p.label}</p>
//                                         <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', margin: '2px 0 0' }}>{p.sub}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* ══════════════════════════════
//                     TAB 1 — Clubs & Societies
//                 ══════════════════════════════ */}
//                 {activeTab === 1 && (
//                     <div style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(4, 1fr)',
//                         gap: 20,
//                         width: '100%',
//                     }}>
//                         {CLUBS.map((club, i) => {
//                             const tc = tagColors[club.tag]
//                             return (
//                                 <div key={i} style={{
//                                     background: '#fff',
//                                     border: '1px solid #E5E7EB',
//                                     borderRadius: 20,
//                                     padding: '28px 24px',
//                                     display: 'flex', flexDirection: 'column', gap: 14,
//                                     transition: 'box-shadow 0.25s, transform 0.25s',
//                                     cursor: 'default',
//                                 }}
//                                     onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,28,61,0.10)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
//                                     onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
//                                 >
//                                     {/* Icon */}
//                                     <div style={{
//                                         width: 52, height: 52, borderRadius: 14,
//                                         background: '#F1F5F9',
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         flexShrink: 0,
//                                     }}>
//                                         {club.icon}
//                                     </div>

//                                     {/* Tag */}
//                                     <span style={{
//                                         display: 'inline-block',
//                                         padding: '3px 10px', borderRadius: 100,
//                                         fontSize: 10, fontWeight: 700,
//                                         background: tc.bg, color: tc.text,
//                                         alignSelf: 'flex-start',
//                                         letterSpacing: '0.06em',
//                                     }}>
//                                         {club.tag}
//                                     </span>

//                                     <div>
//                                         <p style={{ fontWeight: 800, fontSize: 15, color: '#0F1C3D', margin: '0 0 6px', lineHeight: 1.3 }}>
//                                             {club.name}
//                                         </p>
//                                         <p style={{ fontSize: 12, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
//                                             {club.desc}
//                                         </p>
//                                     </div>

//                                     <div style={{
//                                         display: 'flex', alignItems: 'center',
//                                         justifyContent: 'space-between', marginTop: 'auto',
//                                         paddingTop: 14, borderTop: '1px solid #F3F4F6',
//                                     }}>
//                                         <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
//                                             <IconUsers size={14} color="#9CA3AF" /> {club.members}+ members
//                                         </span>
//                                         <button style={{
//                                             background: '#0F1C3D', color: '#fff',
//                                             border: 'none', borderRadius: 100,
//                                             padding: '6px 16px', fontSize: 12,
//                                             fontWeight: 700, cursor: 'pointer',
//                                             fontFamily: 'inherit',
//                                             transition: 'background 0.2s',
//                                         }}
//                                             onMouseEnter={e => e.target.style.background = '#C8102E'}
//                                             onMouseLeave={e => e.target.style.background = '#0F1C3D'}
//                                         >
//                                             Join →
//                                         </button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 )}

//                 {/* ══════════════════════════════
//                     TAB 2 — Sports
//                 ══════════════════════════════ */}
//                 {activeTab === 2 && (
//                     <div style={{ width: '100%' }}>

//                         {/* Stats bar — top */}
//                         <div style={{
//                             background: '#0F1C3D',
//                             borderRadius: 20, padding: '28px 40px',
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(4, 1fr)',
//                             gap: 20, marginBottom: 28,
//                         }}>
//                             {[
//                                 { n: '15+', l: 'Sports Events Annually' },
//                                 { n: '300+', l: 'Student Athletes' },
//                                 { n: '12+', l: 'Championships Won' },
//                                 { n: '5', l: 'University Medals' },
//                             ].map((s, i) => (
//                                 <div key={i} style={{ textAlign: 'center' }}>
//                                     <p style={{ fontSize: 36, fontWeight: 900, color: '#D4A017', margin: 0, lineHeight: 1 }}>{s.n}</p>
//                                     <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', margin: '8px 0 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.l}</p>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Achievement cards */}
//                         <div style={{
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(3, 1fr)',
//                             gap: 20,
//                         }}>
//                             {SPORTS.map((s, i) => (
//                                 <div key={i} style={{
//                                     background: '#fff',
//                                     border: '1px solid #E5E7EB',
//                                     borderLeft: '4px solid #C8102E',
//                                     borderRadius: 16, padding: '24px 24px',
//                                     display: 'flex', gap: 18, alignItems: 'flex-start',
//                                 }}>
//                                     {/* Sports position div — emoji 🏆 बदल */}
//                                     <div style={{
//                                         width: 52, height: 52, flexShrink: 0,
//                                         background: '#FEF2F2', borderRadius: 14,
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         fontWeight: 900, color: '#C8102E',
//                                         fontSize: 18,
//                                     }}>
//                                         {s.position === '🏆'
//                                             ? <IconTrophy size={24} color="#C8102E" />
//                                             : s.position
//                                         }
//                                     </div>
//                                     <div>
//                                         <span style={{
//                                             fontSize: 10, fontWeight: 700,
//                                             color: '#9CA3AF', letterSpacing: '0.1em',
//                                             textTransform: 'uppercase', display: 'block', marginBottom: 4,
//                                         }}>
//                                             {s.year}
//                                         </span>
//                                         <p style={{ fontWeight: 800, fontSize: 15, color: '#0F1C3D', margin: '0 0 6px', lineHeight: 1.3 }}>
//                                             {s.event}
//                                         </p>
//                                         <p style={{ fontSize: 12, color: '#6B7280', margin: 0, lineHeight: 1.5 }}>
//                                             {s.detail}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* ══════════════════════════════
//                     TAB 3 — Gallery
//                 ══════════════════════════════ */}
//                 {activeTab === 3 && (
//                     <div style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(3, 1fr)',
//                         gap: 16, width: '100%',
//                     }}>
//                         {[
//                             { label: 'VIVA Fest 2025', sub: 'Annual Cultural Extravaganza', h: 260, img: collegeFest },
//                             { label: 'Annual Day', sub: 'Prize Distribution Ceremony', h: 260, img: cultural },
//                             { label: 'Sports Day 2025', sub: 'Inter-College Athletics Meet', h: 260, img: sports},
//                             { label: 'Science Exhibition', sub: 'Project Showcase 2024', h: 220, img: scienceExibition },
//                             { label: 'NSS Blood Donation', sub: 'Community Drive 2025', h: 220, img: bloodDonation},
//                             { label: 'Convocation 2024', sub: 'Graduation Ceremony', h: 220, img: convocation },
//                             { label: 'Maharashtra Times Carnival', sub: 'Annual Business Summit', h: 220, img: carnival},
//                             { label: 'NCC Parade', sub: 'Republic Day March 2025', h: 220, img: nss },
//                             { label: 'Farewell 2025', sub: 'TY Farewell Ceremony', h: 220, img: farewell},
//                         ].map((p, i) => (
//                             <div key={i} style={{
//                                 height: p.h,
//                                 borderRadius: 16,
//                                 position: 'relative',
//                                 overflow: 'hidden',
//                                 cursor: 'pointer',
//                                 transition: 'transform 0.25s',
//                                 background: '#1E293B', // fallback if image loads late
//                             }}
//                                 onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
//                                 onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//                             >
//                                 {/* Image */}
//                                 {p.img && (
//                                     <img
//                                         src={p.img}
//                                         alt={p.label}
//                                         style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                             objectPosition: 'center',
//                                             display: 'block',
//                                         }}
//                                     />
//                                 )}

//                                 {/* Gradient overlay */}
//                                 <div style={{
//                                     position: 'absolute', inset: 0,
//                                     background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
//                                 }} />

//                                 {/* Caption */}
//                                 <div style={{ position: 'absolute', bottom: 18, left: 20 }}>
//                                     <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', margin: 0 }}>{p.label}</p>
//                                     <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', margin: '3px 0 0' }}>{p.sub}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//             </div>
//         </section>
//     )
// }

// export default CampusLife

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

// SVG Icon components
const IconUsers = ({ size = 20, color = '#6B7280' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const IconDrama = ({ size = 26, color = '#C8102E' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10" />
        <path d="M7 13c0 2.21 1.79 4 4 4s4-1.79 4-4" />
        <circle cx="9" cy="10" r="1" fill={color} />
        <circle cx="15" cy="10" r="1" fill={color} />
    </svg>
)

const IconMusic = ({ size = 26, color = '#C8102E' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
)

const IconCamera = ({ size = 26, color = '#C2410C' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </svg>
)

const IconBall = ({ size = 26, color = '#065F46' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
    </svg>
)

const IconCode = ({ size = 26, color = '#1D4ED8' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
)

const IconLeaf = ({ size = 26, color = '#6D28D9' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 0 0 1.38 1.38C8.55 18.9 15.5 17 20 8" />
        <path d="M3.82 19.34C4.63 18.1 6 16.4 8 15" />
    </svg>
)

const IconBuilding = ({ size = 26, color = '#0369A1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h2M7 12h2M15 8h2M15 12h2M11 8h2M11 12h2" />
    </svg>
)

const IconPalette = ({ size = 26, color = '#C2410C' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill={color} />
        <circle cx="17.5" cy="10.5" r=".5" fill={color} />
        <circle cx="8.5" cy="7.5" r=".5" fill={color} />
        <circle cx="6.5" cy="12.5" r=".5" fill={color} />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
)

const IconTrophy = ({ size = 24, color = '#C8102E' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 21 12 21 16 21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 4H17l-1 7a5 5 0 0 1-8 0L7 4z" />
        <path d="M5 4H3v3a4 4 0 0 0 4 4" />
        <path d="M19 4h2v3a4 4 0 0 1-4 4" />
    </svg>
)

const CLUBS = [
    {
        icon: <IconDrama />,
        name: 'Dramatic Arts Club',
        members: 80,
        desc: 'Street plays, mono-acting, one-act plays & inter-college drama competitions',
        tag: 'Cultural',
    },
    {
        icon: <IconMusic />,
        name: 'Music Society',
        members: 95,
        desc: 'Western & classical vocals, college band, instruments & annual music fest',
        tag: 'Cultural',
    },
    {
        icon: <IconCamera />,
        name: 'Photography & Film Club',
        members: 60,
        desc: 'Campus photography, short films, photo exhibitions & documentary projects',
        tag: 'Creative',
    },
    {
        icon: <IconBall />,
        name: 'Sports Committee',
        members: 200,
        desc: 'Cricket, football, basketball, chess, carrom & inter-college tournament org.',
        tag: 'Sports',
    },
    {
        icon: <IconCode />,
        name: 'Tech & Coding Club',
        members: 110,
        desc: 'Hackathons, web dev workshops, coding contests & industry guest sessions',
        tag: 'Technical',
    },
    {
        icon: <IconLeaf />,
        name: 'NSS Unit',
        members: 150,
        desc: 'National Service Scheme — blood donation, tree plantation & community drives',
        tag: 'Social',
    },
    {
        icon: <IconBuilding />,
        name: 'Commerce Association',
        members: 130,
        desc: 'Business conclaves, stock market simulations, CA talks & finance workshops',
        tag: 'Academic',
    },
    {
        icon: <IconPalette />,
        name: 'Fine Arts Circle',
        members: 70,
        desc: 'Rangoli, poster making, sketching, painting competitions & annual art show',
        tag: 'Creative',
    },
]

const SPORTS = [
    {
        position: '1st',
        event: 'Inter-College Chess Championship',
        detail: 'Girls Team — University of Mumbai Level 2025-26',
        year: '2025-26',
    },
    {
        position: <IconTrophy />,
        event: 'University Shooting Competition',
        detail: 'Silver & Bronze Medals — District Level 2024',
        year: '2024',
    },
    {
        position: '1st',
        event: 'Zonal Cricket Tournament',
        detail: "Men's Cricket Team — Palghar Zone Champions",
        year: '2024-25',
    },
    {
        position: 'Best',
        event: 'NCC Unit Award',
        detail: 'Best College NCC — District Level Recognition',
        year: '2024',
    },
    {
        position: '2nd',
        event: 'Inter-College Athletics',
        detail: 'Track & Field — University of Mumbai Sports Meet',
        year: '2023-24',
    },
    {
        position: '1st',
        event: 'Carrom Championship',
        detail: 'Mixed Category — Inter-College Virar Zone',
        year: '2024-25',
    },
]

const tagColorClasses = {
    Cultural: { bg: 'bg-red-50', text: 'text-[#C8102E]' },
    Creative: { bg: 'bg-orange-50', text: 'text-orange-700' },
    Sports: { bg: 'bg-emerald-50', text: 'text-emerald-800' },
    Technical: { bg: 'bg-blue-50', text: 'text-blue-700' },
    Social: { bg: 'bg-violet-50', text: 'text-violet-700' },
    Academic: { bg: 'bg-sky-50', text: 'text-sky-700' },
}

const CampusLife = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section
            id="campus-life"
            className="bg-[#F8FAFC] py-16 sm:py-20 w-full"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
            {/* ── Full width wrapper ── */}
            {/* Original padding: 0 48px = px-12 on lg+, scale down on smaller screens */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 box-border">

                {/* ── Section header ── */}
                <div className="mb-9">
                    <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#C8102E] mb-2.5 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-[#C8102E] inline-block shrink-0" />
                        Campus Life
                    </p>
                    {/* Original: clamp(36px, 4vw, 52px) → sm:36 md:40 lg:44 xl:48 2xl:52 */}
                    <h2 className="text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] font-black text-[#0F1C3D] leading-[1.1] mt-2">
                        Life at Viva.
                    </h2>
                </div>

                {/* ── Tabs ── */}
                <div className="flex gap-0 border-b-2 border-gray-200 mb-10 overflow-x-auto">
                    {TABS.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 sm:px-7 py-3 font-semibold text-sm border-none bg-transparent cursor-pointer font-[inherit] tracking-[0.02em] whitespace-nowrap -mb-0.5 transition-all duration-200
                                ${activeTab === i
                                    ? 'text-[#0F1C3D] border-b-2 border-[#C8102E]'
                                    : 'text-gray-400 border-b-2 border-transparent'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ══════════════════════════════
                    TAB 0 — Life on Campus
                ══════════════════════════════ */}
                {activeTab === 0 && (
                    <div className="flex flex-col lg:flex-row gap-4 w-full lg:h-[460px]">

                        {/* Large left — Video */}
                        <div className="lg:flex-[0_0_44%] rounded-[20px] overflow-hidden relative h-[260px] sm:h-[300px] md:h-[360px] lg:h-full">
                            <video
                                src={vivaFest}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover object-center block"
                            />
                            {/* Caption */}
                            <div className="absolute bottom-7 left-7">
                                <p className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-1.5">
                                    Annual Cultural Fest
                                </p>
                                <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-extrabold text-white leading-tight">
                                    VIVA Fest 2025
                                </p>
                                <p className="text-[11px] sm:text-xs text-white/55 mt-1">
                                    March 15–16 · Virar Campus
                                </p>
                            </div>
                        </div>

                        {/* Right 2×2 grid */}
                        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 min-h-[280px] lg:min-h-0">
                            {[
                                { label: 'Cultural Programme', sub: 'Annual Day 2025', img: cultural },
                                { label: 'Sports Day', sub: 'Zonal Championship', img: sports },
                                { label: 'Science Exhibition', sub: 'Project Showcase', img: science },
                                { label: 'NSS Activity', sub: 'Community Drive', img: nss },
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl overflow-hidden relative cursor-pointer"
                                    style={{ transition: 'transform 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <img
                                        src={p.img}
                                        alt={p.label}
                                        className="w-full h-full object-cover object-center block"
                                    />
                                    <div className="absolute bottom-3 sm:bottom-3.5 left-3 sm:left-4">
                                        <p className="text-[11px] sm:text-[13px] font-bold text-white m-0">{p.label}</p>
                                        <p className="text-[9px] sm:text-[10px] text-white/60 mt-0.5">{p.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════
                    TAB 1 — Clubs & Societies
                ══════════════════════════════ */}
                {activeTab === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
                        {CLUBS.map((club, i) => {
                            const tc = tagColorClasses[club.tag]
                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-7 flex flex-col gap-3.5 cursor-default"
                                    style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,28,61,0.10)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                                >
                                    {/* Icon */}
                                    <div className="w-[52px] h-[52px] rounded-[14px] bg-slate-100 flex items-center justify-center shrink-0">
                                        {club.icon}
                                    </div>

                                    {/* Tag */}
                                    <span className={`inline-block px-2.5 py-[3px] rounded-full text-[10px] font-bold self-start tracking-[0.06em] ${tc.bg} ${tc.text}`}>
                                        {club.tag}
                                    </span>

                                    <div>
                                        <p className="font-extrabold text-[14px] sm:text-[15px] text-[#0F1C3D] mb-1.5 leading-[1.3]">
                                            {club.name}
                                        </p>
                                        <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                                            {club.desc}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-gray-100">
                                        <span className="text-[11px] sm:text-xs text-gray-400 font-semibold flex items-center gap-1.5">
                                            <IconUsers size={14} color="#9CA3AF" /> {club.members}+ members
                                        </span>
                                        <button
                                            className="bg-[#0F1C3D] text-white border-none rounded-full px-4 py-1.5 text-xs font-bold cursor-pointer font-[inherit]"
                                            style={{ transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.target.style.background = '#C8102E'}
                                            onMouseLeave={e => e.target.style.background = '#0F1C3D'}
                                        >
                                            Join →
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* ══════════════════════════════
                    TAB 2 — Sports
                ══════════════════════════════ */}
                {activeTab === 2 && (
                    <div className="w-full">

                        {/* Stats bar — top */}
                        <div className="bg-[#0F1C3D] rounded-[20px] px-6 sm:px-8 lg:px-10 py-6 sm:py-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-7">
                            {[
                                { n: '15+', l: 'Sports Events Annually' },
                                { n: '300+', l: 'Student Athletes' },
                                { n: '12+', l: 'Championships Won' },
                                { n: '5', l: 'University Medals' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-black text-[#D4A017] leading-none">{s.n}</p>
                                    <p className="text-[10px] sm:text-[11px] text-white/45 mt-2 tracking-[0.1em] uppercase">{s.l}</p>
                                </div>
                            ))}
                        </div>

                        {/* Achievement cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {SPORTS.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 border-l-4 border-l-[#C8102E] rounded-2xl p-5 sm:p-6 flex gap-4 items-start"
                                >
                                    <div className="w-[52px] h-[52px] shrink-0 bg-red-50 rounded-[14px] flex items-center justify-center font-black text-[#C8102E] text-lg">
                                        {s.position === '🏆'
                                            ? <IconTrophy size={24} color="#C8102E" />
                                            : s.position
                                        }
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.1em] uppercase block mb-1">
                                            {s.year}
                                        </span>
                                        <p className="font-extrabold text-[14px] sm:text-[15px] text-[#0F1C3D] mb-1.5 leading-[1.3]">
                                            {s.event}
                                        </p>
                                        <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                                            {s.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════
                    TAB 3 — Gallery
                ══════════════════════════════ */}
                {activeTab === 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {[
                            { label: 'VIVA Fest 2025', sub: 'Annual Cultural Extravaganza', h: 'h-[220px] sm:h-[240px] lg:h-[260px]', img: collegeFest },
                            { label: 'Annual Day', sub: 'Prize Distribution Ceremony', h: 'h-[220px] sm:h-[240px] lg:h-[260px]', img: cultural },
                            { label: 'Sports Day 2025', sub: 'Inter-College Athletics Meet', h: 'h-[220px] sm:h-[240px] lg:h-[260px]', img: sports },
                            { label: 'Science Exhibition', sub: 'Project Showcase 2024', h: 'h-[190px] sm:h-[205px] lg:h-[220px]', img: scienceExibition },
                            { label: 'NSS Blood Donation', sub: 'Community Drive 2025', h: 'h-[190px] sm:h-[205px] lg:h-[220px]', img: bloodDonation },
                            { label: 'Convocation 2024', sub: 'Graduation Ceremony', h: 'h-[190px] sm:h-[205px] lg:h-[220px]', img: convocation },
                            { label: 'Maharashtra Times Carnival', sub: 'Annual Business Summit', h: 'h-[190px] sm:h-[205px] lg:h-[220px]', img: carnival },
                            { label: 'NCC Parade', sub: 'Republic Day March 2025', h: 'h-[190px] sm:h-[205px] lg:h-[220px]', img: nss },
                            { label: 'Farewell 2025', sub: 'TY Farewell Ceremony', h: 'h-[190px] sm:h-[205px] lg:h-[220px]', img: farewell },
                        ].map((p, i) => (
                            <div
                                key={i}
                                className={`${p.h} rounded-2xl relative overflow-hidden cursor-pointer bg-[#1E293B]`}
                                style={{ transition: 'transform 0.25s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {p.img && (
                                    <img
                                        src={p.img}
                                        alt={p.label}
                                        className="w-full h-full object-cover object-center block"
                                    />
                                )}
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                                {/* Caption */}
                                <div className="absolute bottom-[14px] sm:bottom-[18px] left-4 sm:left-5">
                                    <p className="text-[13px] sm:text-[15px] font-extrabold text-white">{p.label}</p>
                                    <p className="text-[10px] sm:text-[11px] text-white/60 mt-0.5">{p.sub}</p>
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