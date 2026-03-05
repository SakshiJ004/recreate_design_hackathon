// import React, { useState, useEffect, useRef } from 'react'

// // ── SVG Icons ──
// const IconBriefcase = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="7" width="20" height="14" rx="2" />
//         <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//         <line x1="12" y1="12" x2="12" y2="12" /><line x1="12" y1="12" x2="12" y2="16" />
//     </svg>
// )
// const IconUsers = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
// )
// const IconTrendUp = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
//         <polyline points="17 6 23 6 23 12" />
//     </svg>
// )
// const IconStar = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
// )
// const IconBuilding = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="3" width="20" height="18" rx="2" />
//         <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
//     </svg>
// )
// const IconQuote = ({ size = 24, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
//         <path d="M11 7H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v2a2 2 0 0 1-2 2H7a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1zm10 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v2a2 2 0 0 1-2 2h-1a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1z" />
//     </svg>
// )
// const IconArrow = ({ size = 14, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 12h14M12 5l7 7-7 7" />
//     </svg>
// )
// const IconMail = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//     </svg>
// )
// const IconPhone = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
// )

// // ── Data ──
// // const STATS = [
// //     { n: '500+', label: 'Students Placed', sub: 'Across UG & PG programmes', icon: <IconUsers size={22} color="#C8102E" />, bg: '#FEF2F2' },
// //     { n: '50+', label: 'Recruiters', sub: 'Top companies visit annually', icon: <IconBuilding size={22} color="#0F1C3D" />, bg: '#EFF3FF' },
// //     { n: '₹8 LPA', label: 'Highest Package', sub: 'Best offer received on campus', icon: <IconTrendUp size={22} color="#065F46" />, bg: '#ECFDF5' },
// //     { n: '75%', label: 'Placement Rate', sub: 'Students placed successfully', icon: <IconStar size={22} color="#D4A017" />, bg: '#FEFCE8' },
// // ]

// const STATS = [
//     {
//         n: "100+",
//         label: "Students Placed",
//         sub: "Across UG & PG programmes",
//         icon: <IconUsers size={22} color="#C8102E" />,
//         bg: "#FEF2F2"
//     },
//     {
//         n: "20+",
//         label: "Recruiters",
//         sub: "Companies visiting campus drives",
//         icon: <IconBuilding size={22} color="#0F1C3D" />,
//         bg: "#EFF3FF"
//     },
//     {
//         n: "₹4 LPA",
//         label: "Average Package",
//         sub: "Across multiple departments",
//         icon: <IconTrendUp size={22} color="#065F46" />,
//         bg: "#ECFDF5"
//     },
//     {
//         n: "Career Support",
//         label: "Placement Training",
//         sub: "Resume & interview preparation",
//         icon: <IconStar size={22} color="#D4A017" />,
//         bg: "#FEFCE8"
//     }
// ]

// // const STREAMS = [
// //     { name: 'Science (IT/CS)', rate: 96, color: '#065F46', bg: '#ECFDF5', roles: 'Software, Data Science, IT' },
// //     { name: 'Commerce', rate: 91, color: '#0F1C3D', bg: '#EFF3FF', roles: 'Finance, Banking, CA, MBA' },
// //     { name: 'Arts', rate: 85, color: '#C8102E', bg: '#FEF2F2', roles: 'Media, Civil Services, Teaching' },
// // ]

// const STREAMS = [
//     {
//         name: "Science (IT / CS)",
//         rate: 60,
//         color: "#065F46",
//         bg: "#ECFDF5",
//         roles: "Software, Data, IT Support"
//     },
//     {
//         name: "Commerce",
//         rate: 55,
//         color: "#0F1C3D",
//         bg: "#EFF3FF",
//         roles: "Banking, Finance, Sales"
//     },
//     {
//         name: "Arts",
//         rate: 45,
//         color: "#C8102E",
//         bg: "#FEF2F2",
//         roles: "Media, Teaching, Content"
//     }
// ]

// const RECRUITERS = [
//     { name: "TCS", color: "#1D4ED8" },
//     { name: "Infosys", color: "#007CC3" },
//     { name: "Wipro", color: "#341c6a" },
//     { name: "Capgemini", color: "#0070AD" },
//     { name: "ICICI Bank", color: "#D32F2F" },
//     { name: "HDFC Bank", color: "#004C97" },
//     { name: "Reliance", color: "#003087" },
//     { name: "Tech Mahindra", color: "#C8102E" },
//     { name: "Airtel", color: "#E60000" },
//     { name: "Axis Bank", color: "#97144D" },
//     { name: "Flipkart", color: "#FACC15" },
//     { name: "Concentrix", color: "#F97316" }
// ]

// const TESTIMONIALS = [
//     {
//         name: 'Rahul Sharma',
//         course: 'B.Sc. IT — 2024',
//         company: 'TCS',
//         package: '₹6.5 LPA',
//         quote: "Viva's placement cell was incredibly supportive. Got placed in TCS in 3rd year itself!",
//         color: '#1D4ED8',
//     },
//     {
//         name: 'Priya Patil',
//         course: 'BMS — 2024',
//         company: 'Deloitte',
//         package: '₹7 LPA',
//         quote: "The mock interviews and resume workshops really helped me crack the placement drive.",
//         color: '#86BC25',
//     },
//     {
//         name: 'Aditya Parab',
//         course: 'B.A. Film & Media — 2022',
//         company: 'Star Network',
//         package: '₹4 LPA',
//         quote: "Film department's industry connections helped me land my dream job in media.",
//         color: '#003DA5',
//     },
// ]

// // ── Animated progress bar ──
// const ProgressBar = ({ rate, color, inView }) => {
//     return (
//         <div style={{ height: 8, background: '#F3F4F6', borderRadius: 100, overflow: 'hidden' }}>
//             <div style={{
//                 height: '100%', borderRadius: 100,
//                 background: color,
//                 width: inView ? `${rate}%` : '0%',
//                 transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s',
//             }} />
//         </div>
//     )
// }

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

// const Placements = () => {
//     const [sectionRef, inView] = useInView()
//     const [hoveredRecruiter, setHoveredRecruiter] = useState(null)
//     const [hoveredTestimonial, setHoveredTestimonial] = useState(null)

//     return (
//         <section ref={sectionRef} style={{
//             background: '#fff',
//             padding: '88px 48px',
//             fontFamily: "'DM Sans', 'Inter', sans-serif",
//             width: '100%', boxSizing: 'border-box',
//             overflow: 'hidden',
//         }}>
//             <style>{`
//                 @keyframes fadeUp {
//                     from { opacity: 0; transform: translateY(24px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 @keyframes fadeIn {
//                     from { opacity: 0; } to { opacity: 1; }
//                 }
//             `}</style>

//             {/* ── Section Header ── */}
//             <div style={{
//                 marginBottom: 56,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 0.6s ease',
//             }}>
//                 <p style={{
//                     fontSize: 11, fontWeight: 700, letterSpacing: '0.25em',
//                     textTransform: 'uppercase', color: '#9CA3AF',
//                     margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8,
//                 }}>
//                     <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block' }} />
//                     Career & Placements
//                 </p>
//                 <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
//                     <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 900, color: '#0F1C3D', lineHeight: 1.1, margin: 0 }}>
//                         Your Career<br />
//                         <span style={{ WebkitTextStroke: '2px #C8102E', color: 'transparent' }}>Starts Here.</span>
//                     </h2>
//                     <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 380, margin: 0, lineHeight: 1.6 }}>
//                         VIVA College's dedicated placement cell connects students with 50+ top recruiters through campus drives, workshops & mentorship.
//                     </p>
//                 </div>
//             </div>

//             {/* ── Stats row ── */}
//             <div style={{
//                 display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
//                 gap: 20, marginBottom: 56,
//             }}>
//                 {STATS.map((s, i) => (
//                     <div key={i} style={{
//                         padding: '28px 24px',
//                         background: s.bg,
//                         borderRadius: 20,
//                         display: 'flex', gap: 16, alignItems: 'flex-start',
//                         opacity: inView ? 1 : 0,
//                         animation: inView ? `fadeUp 0.5s ease ${i * 0.1}s both` : 'none',
//                     }}>
//                         <div style={{
//                             width: 46, height: 46, borderRadius: 13,
//                             background: '#fff',
//                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                             flexShrink: 0,
//                             boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//                         }}>
//                             {s.icon}
//                         </div>
//                         <div>
//                             <p style={{ fontSize: 28, fontWeight: 900, color: '#0F1C3D', margin: '0 0 4px', lineHeight: 1 }}>{s.n}</p>
//                             <p style={{ fontSize: 13, fontWeight: 700, color: '#374151', margin: '0 0 3px' }}>{s.label}</p>
//                             <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{s.sub}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* ── 2 column: Stream stats + Recruiters ── */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, marginBottom: 56 }}>

//                 {/* Stream-wise stats */}
//                 <div style={{
//                     background: '#F8FAFC', borderRadius: 24, padding: '32px 28px',
//                     opacity: inView ? 1 : 0,
//                     transition: 'opacity 0.7s ease 0.2s',
//                 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
//                         <div style={{
//                             width: 34, height: 34, borderRadius: 10,
//                             background: '#0F1C3D',
//                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         }}>
//                             <IconTrendUp size={16} color="#D4A017" />
//                         </div>
//                         <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
//                             Stream-wise Placement Rate
//                         </h3>
//                     </div>

//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
//                         {STREAMS.map((s, i) => (
//                             <div key={i}>
//                                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
//                                     <div>
//                                         <p style={{ fontWeight: 700, fontSize: 14, color: '#0F1C3D', margin: '0 0 3px' }}>{s.name}</p>
//                                         <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{s.roles}</p>
//                                     </div>
//                                     <span style={{
//                                         fontWeight: 900, fontSize: 22, color: s.color,
//                                         fontVariantNumeric: 'tabular-nums',
//                                     }}>
//                                         {s.rate}%
//                                     </span>
//                                 </div>
//                                 <ProgressBar rate={s.rate} color={s.color} inView={inView} />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Contact placement cell */}
//                     <div style={{
//                         marginTop: 32, paddingTop: 24,
//                         borderTop: '1px solid #E5E7EB',
//                     }}>
//                         <p style={{ fontSize: 12, fontWeight: 700, color: '#0F1C3D', margin: '0 0 12px' }}>
//                             Contact Placement Cell
//                         </p>
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//                             <a href="mailto:placement@vivacollege.org" style={{
//                                 display: 'flex', alignItems: 'center', gap: 8,
//                                 fontSize: 12, color: '#6B7280', textDecoration: 'none',
//                                 transition: 'color 0.2s',
//                             }}
//                                 onMouseEnter={e => e.currentTarget.style.color = '#C8102E'}
//                                 onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
//                             >
//                                 <IconMail size={14} color="#9CA3AF" />
//                                 placement@vivacollege.org
//                             </a>
//                             <a href="tel:+919765742335" style={{
//                                 display: 'flex', alignItems: 'center', gap: 8,
//                                 fontSize: 12, color: '#6B7280', textDecoration: 'none',
//                                 transition: 'color 0.2s',
//                             }}
//                                 onMouseEnter={e => e.currentTarget.style.color = '#C8102E'}
//                                 onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
//                             >
//                                 <IconPhone size={14} color="#9CA3AF" />
//                                 +91 97657 42335
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Recruiters grid */}
//                 <div style={{
//                     opacity: inView ? 1 : 0,
//                     transition: 'opacity 0.7s ease 0.3s',
//                 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
//                         <div style={{
//                             width: 34, height: 34, borderRadius: 10,
//                             background: '#C8102E',
//                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         }}>
//                             <IconBriefcase size={16} color="#fff" />
//                         </div>
//                         <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
//                             Our Recruiters
//                         </h3>
//                     </div>

//                     <div style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(3, 1fr)',
//                         gap: 12,
//                     }}>
//                         {RECRUITERS.map((r, i) => (
//                             <div key={i}
//                                 onMouseEnter={() => setHoveredRecruiter(i)}
//                                 onMouseLeave={() => setHoveredRecruiter(null)}
//                                 style={{
//                                     padding: '16px 14px',
//                                     borderRadius: 14,
//                                     border: '1px solid',
//                                     borderColor: hoveredRecruiter === i ? r.color : '#E5E7EB',
//                                     background: hoveredRecruiter === i ? r.color : '#FAFAF8',
//                                     cursor: 'default',
//                                     transition: 'all 0.25s ease',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     animation: inView ? `fadeUp 0.4s ease ${0.05 * i}s both` : 'none',
//                                 }}>
//                                 <span style={{
//                                     fontSize: 12, fontWeight: 800,
//                                     color: hoveredRecruiter === i ? '#fff' : '#374151',
//                                     textAlign: 'center',
//                                     transition: 'color 0.25s',
//                                     letterSpacing: '0.01em',
//                                 }}>
//                                     {r.name}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── Testimonials ── */}
//             <div style={{
//                 opacity: inView ? 1 : 0,
//                 transition: 'opacity 0.7s ease 0.4s',
//             }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
//                     <div style={{
//                         width: 34, height: 34, borderRadius: 10,
//                         background: '#0F1C3D',
//                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     }}>
//                         <IconStar size={16} color="#D4A017" />
//                     </div>
//                     <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
//                         Student Success Stories
//                     </h3>
//                 </div>

//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
//                     {TESTIMONIALS.map((t, i) => (
//                         <div key={i}
//                             onMouseEnter={() => setHoveredTestimonial(i)}
//                             onMouseLeave={() => setHoveredTestimonial(null)}
//                             style={{
//                                 padding: '28px 24px',
//                                 borderRadius: 20,
//                                 border: '1px solid',
//                                 borderColor: hoveredTestimonial === i ? t.color : '#E5E7EB',
//                                 background: '#FAFAF8',
//                                 transition: 'all 0.25s ease',
//                                 boxShadow: hoveredTestimonial === i ? `0 12px 32px ${t.color}18` : 'none',
//                                 transform: hoveredTestimonial === i ? 'translateY(-4px)' : 'translateY(0)',
//                             }}>

//                             {/* Quote icon */}
//                             <div style={{ marginBottom: 16, opacity: 0.15 }}>
//                                 <IconQuote size={28} color={t.color} />
//                             </div>

//                             <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic' }}>
//                                 "{t.quote}"
//                             </p>

//                             {/* Divider */}
//                             <div style={{ height: 1, background: '#F3F4F6', marginBottom: 16 }} />

//                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                 <div>
//                                     <p style={{ fontWeight: 800, fontSize: 14, color: '#0F1C3D', margin: '0 0 3px' }}>{t.name}</p>
//                                     <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{t.course}</p>
//                                 </div>
//                                 <div style={{ textAlign: 'right' }}>
//                                     <p style={{ fontWeight: 800, fontSize: 13, color: t.color, margin: '0 0 2px' }}>{t.company}</p>
//                                     <p style={{ fontSize: 11, color: '#6B7280', margin: 0 }}>{t.package}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
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

// RecruiterCarousel replace कर हे ने:

const ROW1 = RECRUITERS.slice(0, 12)
const ROW2 = RECRUITERS.slice(11)

const CarouselRow = ({ items, direction = 'left', paused, setPaused }) => {
    const doubled = [...items, ...items, ...items]
    const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight'

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: 130,
                background: 'linear-gradient(to right, #fff, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
                background: 'linear-gradient(to left, #fff, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                style={{
                    display: 'flex', gap: 14,
                    width: 'max-content',
                    animation: `${animName} 35s linear infinite`,
                    animationPlayState: paused ? 'paused' : 'running',
                }}
            >
                {doubled.map((r, i) => (
                    <div key={i}
                        style={{
                            flexShrink: 0,
                            padding: '35px 32px',
                            borderRadius: 16,
                            border: `1.5px solid ${r.color}25`,
                            background: `${r.color}08`,
                            minWidth: 180,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.25s ease',
                            cursor: 'default',
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
                        <span style={{
                            fontSize: 14, fontWeight: 800,
                            color: r.color, whiteSpace: 'nowrap',
                            transition: 'color 0.25s',
                            letterSpacing: '0.02em',
                        }}>
                            {r.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const RecruiterCarousel = ({ paused, setPaused }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <CarouselRow items={ROW1} direction="left" paused={paused} setPaused={setPaused} />
        <CarouselRow items={ROW2} direction="right" paused={paused} setPaused={setPaused} />
    </div>
)


const Placements = () => {
    const [sectionRef, inView] = useInView()
    const [paused, setPaused] = useState(false)

    return (
        <section ref={sectionRef} style={{
            background: '#F8FAFC',
            padding: '88px 0',
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
        }}>
            <style>{`
                @keyframes scrollTrack {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* ── Section Header ── */}
            <div style={{
                padding: '0 48px',
                marginBottom: 52,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease',
            }}>
                <p style={{
                    fontSize: 11, fontWeight: 800,
                    letterSpacing: '0.25em', textTransform: 'uppercase',
                    color: '#C8102E', margin: '0 0 10px',
                    display: 'flex', alignItems: 'center', gap: 8,
                }}>
                    <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block' }} />
                    Placements
                </p>
                <div style={{
                    display: 'flex', alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 16,
                }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: 900, color: '#0F1C3D',
                        lineHeight: 1.1, margin: 0,
                    }}>
                        Our Recruiters
                    </h2>
                    <p style={{
                        fontSize: 14, color: '#6B7280',
                        maxWidth: 420, margin: 0, lineHeight: 1.6,
                    }}>
                        50+ top companies visit VIVA College annually for campus recruitment drives across all streams.
                    </p>
                </div>
            </div>

            {/* ── Carousel ── */}
            <div style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.8s ease 0.2s',
            }}>
                <RecruiterCarousel paused={paused} setPaused={setPaused} />
            </div>

        </section>
    )
}

export default Placements