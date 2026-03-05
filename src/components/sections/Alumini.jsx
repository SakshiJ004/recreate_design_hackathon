// import React, { useState, useEffect, useRef } from 'react'

// // ── SVG Icons ──
// const IconUsers = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
// )
// const IconCalendar = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="4" width="18" height="18" rx="2" />
//         <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
//         <line x1="3" y1="10" x2="21" y2="10" />
//     </svg>
// )
// const IconBriefcase = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="7" width="20" height="14" rx="2" />
//         <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//     </svg>
// )
// const IconGlobe = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <line x1="2" y1="12" x2="22" y2="12" />
//         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//     </svg>
// )
// const IconMapPin = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//         <circle cx="12" cy="10" r="3" />
//     </svg>
// )
// const IconHeart = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//     </svg>
// )
// const IconNewspaper = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a4 4 0 0 1-4-4V6" />
//         <path d="M8 6h8M8 10h8M8 14h4" />
//     </svg>
// )
// const IconHandshake = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
//     </svg>
// )
// const IconMail = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//     </svg>
// )
// const IconArrow = ({ size = 14, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 12h14M12 5l7 7-7 7" />
//     </svg>
// )
// const IconQuote = ({ size = 28, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
//         <path d="M11 7H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v2a2 2 0 0 1-2 2H7a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1zm10 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v2a2 2 0 0 1-2 2h-1a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1z" />
//     </svg>
// )

// // ── Data ──
// const STATS = [
//     { n: '7,000+', label: 'Alumni', icon: <IconUsers size={20} color="#C8102E" />, bg: '#FEF2F2' },
//     { n: '35+', label: 'Years', icon: <IconCalendar size={20} color="#0F1C3D" />, bg: '#EFF3FF' },
//     { n: '50+', label: 'Cities', icon: <IconMapPin size={20} color="#065F46" />, bg: '#ECFDF5' },
//     { n: '20+', label: 'Countries', icon: <IconGlobe size={20} color="#D4A017" />, bg: '#FEFCE8' },
// ]

// const FEATURED = [
//     {
//         name: 'Nikhil Jain',
//         course: 'B.Sc. IT',
//         batch: '2009–12',
//         company: 'Enterprise Software',
//         role: 'Engineering Lead',
//         quote: "My focus is on improving the overall experience of any product — ultimately, it's the experience that stays with people.",
//         color: '#1D4ED8',
//         initials: 'NJ',
//         img: null, // img path: '../../assets/images/alumni/nikhi_Jain.png'
//     },
//     {
//         name: 'Utsav Shetty',
//         course: 'B.Sc. Hospitality',
//         batch: '',
//         company: 'Royal Caribbean',
//         role: 'Security Professional',
//         quote: "My academic foundation at VIVA College was instrumental in carving the path toward my professional success.",
//         color: '#065F46',
//         initials: 'US',
//         img: null, // img path: '../../assets/images/alumni/utsav_Shetty.png'
//     },
//     {
//         name: 'Uttung Thakur',
//         course: 'B.A. Film & Media',
//         batch: '',
//         company: 'VIVA INEN Productions',
//         role: 'Film Producer & Director',
//         quote: "Won National Award for 'Yellow' & Life OK Screen Award for 'Balak Palak'. Owner of Film Production VIVA INEN.",
//         color: '#C8102E',
//         initials: 'UT',
//         img: null, // img path: '../../assets/images/alumni/uttung_thakur.png'
//     },
//     {
//         name: 'Aditya Parab',
//         course: 'B.A. Film, TV & New Media',
//         batch: '2021–22',
//         company: 'Film Industry',
//         role: 'Filmmaker',
//         quote: "The class gave me practical experience with camera equipment, lighting, and editing — a valuable step toward becoming a filmmaker.",
//         color: '#003DA5',
//         initials: 'AP',
//         img: null, // img path: '../../assets/images/alumni/aditya.jpg'
//     },
//     {
//         name: 'Agnish Shah',
//         course: 'Hotel Management',
//         batch: '2009–12',
//         company: 'Oberoi Mumbai',
//         role: 'Restaurant Manager',
//         quote: "VIVA has world class facilities, vast library, huge kitchen, restaurant training setup and fantastic cooperative faculty.",
//         color: '#8B0000',
//         initials: 'AS',
//         img: null, // img path: '../../assets/images/alumni/Agnish_shah.png'
//     },
//     {
//         name: 'Tanmay Kadam',
//         course: 'B.Sc. IT',
//         batch: '',
//         company: 'Azure / Former NM Idea',
//         role: 'Data Architect & Author',
//         quote: "Engineer, Data Architect, Former Director at NM Idea, Azure Infrastructure Engineer & Author of Neural Network book.",
//         color: '#0070AD',
//         initials: 'TK',
//         img: null, // img path: '../../assets/images/alumni/Tanmay.png'
//     },
//     {
//         name: 'Nitin Kushwaha',
//         course: 'B.Sc. IT',
//         batch: '',
//         company: 'Siemens-Atos',
//         role: 'CISSP Manager & Cyber Forensics',
//         quote: "CISSP Certified — Manager at Siemens-Atos, Cyber-crime Investigator and Data Carving Analyst under Forensics.",
//         color: '#341C6A',
//         initials: 'NK',
//         img: null, // img path: '../../assets/images/alumni/Nitin.png'
//     },
//     {
//         name: 'Mayuri Ruparel',
//         course: 'B.Com',
//         batch: '',
//         company: 'RoyalPOS / Reeva Academy',
//         role: 'Co-Founder & Entrepreneur',
//         quote: "Co-Founder at RoyalPOS, Founder of Reeva Academy & YouTuber of SaasBahuRasoi — Gujarat, India.",
//         color: '#D4A017',
//         initials: 'MR',
//         img: null, // img path: '../../assets/images/alumni/Mayuri.png'
//     },
//     {
//         name: 'Samir Lalani',
//         course: 'B.Sc. IT',
//         batch: '',
//         company: 'Dynamic Web, Singapore',
//         role: 'Senior Mobile App Developer',
//         quote: "Senior Mobile Application Developer at Dynamic Web, Singapore — building applications that connect people across borders.",
//         color: '#003087',
//         initials: 'SL',
//         img: null, // img path: '../../assets/images/alumni/Samir.png'
//     },
// ]

// const STREAMS = [
//     {
//         name: 'Commerce',
//         count: '3,200+',
//         sectors: 'Finance, Banking, CA, Entrepreneurship, MBA',
//         color: '#0F1C3D',
//         bg: '#EFF3FF',
//     },
//     {
//         name: 'Arts',
//         count: '2,100+',
//         sectors: 'Media, Civil Services, Teaching, Journalism',
//         color: '#C8102E',
//         bg: '#FEF2F2',
//     },
//     {
//         name: 'Science',
//         count: '1,700+',
//         sectors: 'IT, Data Science, Research, Hospitality',
//         color: '#065F46',
//         bg: '#ECFDF5',
//     },
// ]

// const BENEFITS = [
//     { icon: <IconHandshake size={18} color="#C8102E" />, label: 'Mentorship Program', desc: 'Connect with senior alumni for career guidance' },
//     { icon: <IconCalendar size={18} color="#0F1C3D" />, label: 'Exclusive Alumni Events', desc: 'Annual meets, reunions & networking evenings' },
//     { icon: <IconBriefcase size={18} color="#065F46" />, label: 'Job Referrals', desc: 'Priority referrals through alumni network' },
//     { icon: <IconNewspaper size={18} color="#D4A017" />, label: 'Alumni Newsletter', desc: 'Monthly updates on college & alumni achievements' },
// ]

// // ── InView hook ──
// const useInView = () => {
//     const ref = useRef(null)
//     const [inView, setInView] = useState(false)
//     useEffect(() => {
//         const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.08 })
//         if (ref.current) obs.observe(ref.current)
//         return () => obs.disconnect()
//     }, [])
//     return [ref, inView]
// }

// const Alumni = () => {
//     const [sectionRef, inView] = useInView()
//     const [hoveredCard, setHoveredCard] = useState(null)
//     const [formData, setFormData] = useState({ name: '', batch: '', course: '', company: '', email: '' })
//     const [submitted, setSubmitted] = useState(false)

//     const handleSubmit = () => {
//         if (formData.name && formData.email) setSubmitted(true)
//     }

//     return (
//         <section ref={sectionRef} style={{
//             background: '#F8FAFC',
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
//                 .alumni-input {
//                     width: 100%; padding: 11px 14px;
//                     border: 1.5px solid #E5E7EB;
//                     border-radius: 10px; font-size: 13px;
//                     font-family: inherit; outline: none;
//                     background: #fff; color: #1E293B;
//                     box-sizing: border-box;
//                     transition: border-color 0.2s;
//                 }
//                 .alumni-input:focus { border-color: #0F1C3D; }
//                 .alumni-input::placeholder { color: #9CA3AF; }
//             `}</style>

//             {/* ── Section Header ── */}
//             <div style={{
//                 marginBottom: 52,
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
//                     Alumni Network
//                 </p>
//                 <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
//                     <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 900, color: '#0F1C3D', lineHeight: 1.1, margin: 0 }}>
//                         Viva Alumni<br />
//                         <span style={{ WebkitTextStroke: '2px #C8102E', color: 'transparent' }}>Network.</span>
//                     </h2>
//                     <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 400, margin: 0, lineHeight: 1.7 }}>
//                         A thriving community of 7,000+ graduates across 20+ countries — staying connected, giving back, and growing together.
//                     </p>
//                 </div>
//             </div>

//             {/* ── Stats row ── */}
//             <div style={{
//                 display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
//                 gap: 16, marginBottom: 56,
//             }}>
//                 {STATS.map((s, i) => (
//                     <div key={i} style={{
//                         padding: '24px 20px',
//                         background: s.bg,
//                         borderRadius: 18,
//                         display: 'flex', gap: 14, alignItems: 'center',
//                         opacity: inView ? 1 : 0,
//                         animation: inView ? `fadeUp 0.5s ease ${i * 0.1}s both` : 'none',
//                     }}>
//                         <div style={{
//                             width: 44, height: 44, borderRadius: 12,
//                             background: '#fff', flexShrink: 0,
//                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                             boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//                         }}>
//                             {s.icon}
//                         </div>
//                         <div>
//                             <p style={{ fontSize: 26, fontWeight: 900, color: '#0F1C3D', margin: 0, lineHeight: 1 }}>{s.n}</p>
//                             <p style={{ fontSize: 12, color: '#6B7280', margin: '4px 0 0', fontWeight: 600 }}>{s.label}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* ── Featured Alumni ── */}
//             <div style={{ marginBottom: 56 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
//                     <div style={{ width: 34, height: 34, borderRadius: 10, background: '#0F1C3D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         <IconHeart size={16} color="#D4A017" />
//                     </div>
//                     <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>Notable Alumni</h3>
//                 </div>

//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
//                     {FEATURED.map((a, i) => (
//                         <div key={i}
//                             onMouseEnter={() => setHoveredCard(i)}
//                             onMouseLeave={() => setHoveredCard(null)}
//                             style={{
//                                 background: '#fff',
//                                 borderRadius: 20, padding: '28px 24px',
//                                 border: '1px solid',
//                                 borderColor: hoveredCard === i ? a.color : '#E5E7EB',
//                                 boxShadow: hoveredCard === i ? `0 16px 40px ${a.color}18` : 'none',
//                                 transform: hoveredCard === i ? 'translateY(-5px)' : 'translateY(0)',
//                                 transition: 'all 0.3s ease',
//                                 opacity: inView ? 1 : 0,
//                                 animation: inView ? `fadeUp 0.5s ease ${0.1 + i * 0.12}s both` : 'none',
//                             }}>

//                             {/* Quote icon */}
//                             <div style={{ marginBottom: 14, opacity: 0.12 }}>
//                                 <IconQuote size={26} color={a.color} />
//                             </div>

//                             <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 20px' }}>
//                                 "{a.quote}"
//                             </p>

//                             <div style={{ height: 1, background: '#F3F4F6', marginBottom: 18 }} />

//                             <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                                 {/* Avatar */}
//                                 <div style={{
//                                     width: 44, height: 44, borderRadius: '50%',
//                                     background: a.color,
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     flexShrink: 0,
//                                 }}>
//                                     <span style={{ fontSize: 14, fontWeight: 900, color: '#fff' }}>{a.initials}</span>
//                                 </div>
//                                 <div style={{ flex: 1 }}>
//                                     <p style={{ fontWeight: 800, fontSize: 14, color: '#0F1C3D', margin: '0 0 2px' }}>{a.name}</p>
//                                     <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{a.course} · {a.batch}</p>
//                                 </div>
//                                 <div style={{ textAlign: 'right' }}>
//                                     <p style={{ fontWeight: 800, fontSize: 12, color: a.color, margin: '0 0 2px' }}>{a.company}</p>
//                                     <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{a.role}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ── Stream distribution + Registration ── */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32 }}>

//                 {/* Stream distribution */}
//                 <div style={{
//                     opacity: inView ? 1 : 0,
//                     transition: 'opacity 0.7s ease 0.3s',
//                 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
//                         <div style={{ width: 34, height: 34, borderRadius: 10, background: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <IconUsers size={16} color="#fff" />
//                         </div>
//                         <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>Alumni by Stream</h3>
//                     </div>

//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
//                         {STREAMS.map((s, i) => (
//                             <div key={i} style={{
//                                 background: s.bg, borderRadius: 16,
//                                 padding: '20px 20px',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                             }}>
//                                 <div>
//                                     <p style={{ fontWeight: 800, fontSize: 15, color: s.color, margin: '0 0 4px' }}>{s.name}</p>
//                                     <p style={{ fontSize: 11, color: '#6B7280', margin: 0, lineHeight: 1.5 }}>{s.sectors}</p>
//                                 </div>
//                                 <span style={{ fontSize: 22, fontWeight: 900, color: s.color, flexShrink: 0, marginLeft: 12 }}>
//                                     {s.count}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Benefits */}
//                     <div style={{ background: '#0F1C3D', borderRadius: 18, padding: '24px 22px' }}>
//                         <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 16px' }}>
//                             Alumni Benefits
//                         </p>
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//                             {BENEFITS.map((b, i) => (
//                                 <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
//                                     <div style={{
//                                         width: 34, height: 34, borderRadius: 9,
//                                         background: 'rgba(255,255,255,0.08)',
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         flexShrink: 0,
//                                     }}>
//                                         {b.icon}
//                                     </div>
//                                     <div>
//                                         <p style={{ fontWeight: 700, fontSize: 13, color: '#fff', margin: '0 0 2px' }}>{b.label}</p>
//                                         <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Registration form */}
//                 <div style={{
//                     background: '#fff', borderRadius: 24,
//                     padding: '36px 32px',
//                     border: '1px solid #E5E7EB',
//                     opacity: inView ? 1 : 0,
//                     transition: 'opacity 0.7s ease 0.4s',
//                 }}>
//                     {submitted ? (
//                         <div style={{ textAlign: 'center', padding: '40px 0' }}>
//                             <div style={{
//                                 width: 64, height: 64, borderRadius: '50%',
//                                 background: '#ECFDF5',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 margin: '0 auto 20px',
//                             }}>
//                                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#065F46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                     <polyline points="20 6 9 17 4 12" />
//                                 </svg>
//                             </div>
//                             <p style={{ fontWeight: 900, fontSize: 20, color: '#0F1C3D', margin: '0 0 8px' }}>Registered!</p>
//                             <p style={{ fontSize: 13, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
//                                 Welcome to the Viva Alumni Network. We'll be in touch soon.
//                             </p>
//                         </div>
//                     ) : (
//                         <>
//                             <div style={{ marginBottom: 28 }}>
//                                 <h3 style={{ fontSize: 20, fontWeight: 900, color: '#0F1C3D', margin: '0 0 6px' }}>
//                                     Join the Network
//                                 </h3>
//                                 <p style={{ fontSize: 13, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
//                                     Register as a Viva alumnus and stay connected with your college community.
//                                 </p>
//                             </div>

//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//                                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
//                                     <div>
//                                         <label style={{ fontSize: 11, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Full Name *</label>
//                                         <input className="alumni-input" placeholder="Your full name"
//                                             value={formData.name}
//                                             onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
//                                     </div>
//                                     <div>
//                                         <label style={{ fontSize: 11, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Batch Year</label>
//                                         <input className="alumni-input" placeholder="e.g. 2020-21"
//                                             value={formData.batch}
//                                             onChange={e => setFormData(p => ({ ...p, batch: e.target.value }))} />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label style={{ fontSize: 11, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Course</label>
//                                     <input className="alumni-input" placeholder="e.g. B.Com, B.Sc. IT, B.A."
//                                         value={formData.course}
//                                         onChange={e => setFormData(p => ({ ...p, course: e.target.value }))} />
//                                 </div>

//                                 <div>
//                                     <label style={{ fontSize: 11, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Current Company</label>
//                                     <input className="alumni-input" placeholder="Where do you work now?"
//                                         value={formData.company}
//                                         onChange={e => setFormData(p => ({ ...p, company: e.target.value }))} />
//                                 </div>

//                                 <div>
//                                     <label style={{ fontSize: 11, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Email Address *</label>
//                                     <input className="alumni-input" type="email" placeholder="your@email.com"
//                                         value={formData.email}
//                                         onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
//                                 </div>

//                                 <button
//                                     onClick={handleSubmit}
//                                     style={{
//                                         marginTop: 6,
//                                         padding: '14px 24px',
//                                         background: '#0F1C3D',
//                                         color: '#fff', border: 'none',
//                                         borderRadius: 12, fontSize: 14,
//                                         fontWeight: 700, cursor: 'pointer',
//                                         fontFamily: 'inherit',
//                                         display: 'flex', alignItems: 'center',
//                                         justifyContent: 'center', gap: 8,
//                                         transition: 'background 0.2s',
//                                         width: '100%',
//                                     }}
//                                     onMouseEnter={e => e.currentTarget.style.background = '#C8102E'}
//                                     onMouseLeave={e => e.currentTarget.style.background = '#0F1C3D'}
//                                 >
//                                     Register as Alumni
//                                     <IconArrow size={14} color="#fff" />
//                                 </button>

//                                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 4 }}>
//                                     <IconMail size={13} color="#9CA3AF" />
//                                     <a href="mailto:alumni@vivacollege.org" style={{
//                                         fontSize: 12, color: '#9CA3AF',
//                                         textDecoration: 'none', transition: 'color 0.2s',
//                                     }}
//                                         onMouseEnter={e => e.target.style.color = '#C8102E'}
//                                         onMouseLeave={e => e.target.style.color = '#9CA3AF'}
//                                     >
//                                         alumni@vivacollege.org
//                                     </a>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Alumni


import React, { useState, useEffect, useRef } from 'react'

// ── Images — uncomment when you add photos ──
import nikhilImg   from '../../assets/images/nikhi_Jain.png'
import utsavImg    from '../../assets/images/utsav_Shetty.png'
import uttungImg   from '../../assets/images/uttung thakur.png'
import adityaImg   from '../../assets/images/aditya.jpg'
import samikshaImg from '../../assets/images/samiksha.jpg'
import saukhyaImg  from '../../assets/images/Saukhya Patil.png'
import preethiImg  from '../../assets/images/preethi.png'
import agnishImg   from '../../assets/images/Agnish_shah.png'
import suhasImg    from '../../assets/images/suhas.jfif'
import surajImg    from '../../assets/images/suraj k.jfif'
import akshayImg   from '../../assets/images/Akshay.jpeg'
import omkarImg    from '../../assets/images/om.jpg'
import snehalImg   from '../../assets/images/Snehal.jpeg'
import abhishImg   from '../../assets/images/Abhish.png'
import mayuriImg   from '../../assets/images/Mayuri.png'
import samirImg    from '../../assets/images/Samir.png'
import tanmayImg   from '../../assets/images/Tanmay.png'
import nitinImg    from '../../assets/images/Nitin.png'

const ALUMNI = [
    {
        name: 'Mr. Nikhil Jain',
        batch: '',
        role: '',
        quote: 'I bring over 15 years of experience in building scalable enterprise software products that drive digital transformation. My focus is on improving the overall experience of any product because, ultimately, it\'s the experience that stays with people.',
        color: '#1D4ED8',
        tw: { avatar: 'bg-blue-700', badge: 'bg-blue-50 text-blue-700', accent: 'bg-blue-700', border: 'border-blue-200', shadow: 'shadow-blue-100' },
        initials: 'NJ', img: nikhilImg,
    },
    {
        name: 'Mr. Utsav Shetty',
        batch: '',
        role: 'Security Professional, Royal Caribbean International',
        quote: 'I am deeply honored to share my journey as an alumna of VIVA College. My academic foundation here was instrumental in carving the path toward my professional success. I am immensely proud to be a part of the VIVA College alumni community.',
        color: '#065F46',
        tw: { avatar: 'bg-emerald-800', badge: 'bg-emerald-50 text-emerald-800', accent: 'bg-emerald-800', border: 'border-emerald-200', shadow: 'shadow-emerald-100' },
        initials: 'US', img: utsavImg,
    },
    {
        name: 'Mr. Uttung Thakur',
        batch: '',
        role: 'Owner, Film Production "VIVA INEN"',
        quote: '• Owner of Film Production "VIVA INEN"\n• Won National Award — "Yellow"\n• Life Ok Screen Award — "Balak Palak"',
        color: '#C8102E',
        tw: { avatar: 'bg-red-700', badge: 'bg-red-50 text-red-700', accent: 'bg-red-700', border: 'border-red-200', shadow: 'shadow-red-100' },
        initials: 'UT', img: uttungImg,
    },
    {
        name: 'Mr. Aditya Parab',
        batch: '2021-22',
        role: '',
        quote: 'Joining The Film, TV and New media production was a rollercoaster ride of emotions and experiences. I gained practical experience with camera equipment, lighting, and editing software. This was a valuable step towards achieving my dream of becoming a filmmaker.',
        color: '#003DA5',
        tw: { avatar: 'bg-blue-900', badge: 'bg-blue-50 text-blue-900', accent: 'bg-blue-900', border: 'border-blue-200', shadow: 'shadow-blue-100' },
        initials: 'AP', img: adityaImg,
    },
    {
        name: 'Ms. Samiksha Jadhav',
        batch: '2022-2023',
        role: '',
        quote: 'Studying in The Film, Television and New media production class was amazing. The FTNMP was a transformative experience that prepared me for a career in the film industry.',
        color: '#6D28D9',
        tw: { avatar: 'bg-violet-700', badge: 'bg-violet-50 text-violet-700', accent: 'bg-violet-700', border: 'border-violet-200', shadow: 'shadow-violet-100' },
        initials: 'SJ', img: samikshaImg,
    },
    {
        name: 'Mr. Saukhya Patil',
        batch: '2022-23',
        role: '',
        quote: 'Enrolling in a Film, TV class was one of the best decisions I\'ve ever made. The hands-on experience with professional equipment gave me a real taste of what it\'s like to work in Films.',
        color: '#0369A1',
        tw: { avatar: 'bg-sky-700', badge: 'bg-sky-50 text-sky-700', accent: 'bg-sky-700', border: 'border-sky-200', shadow: 'shadow-sky-100' },
        initials: 'SP', img: saukhyaImg,
    },
    {
        name: 'Ms. Preethi Yadav',
        batch: '2020-21',
        role: '',
        quote: 'FTNMP was a transformative experience that helped me discover my true potential as an actor. It gave me the confidence and skills to pursue my dreams in the competitive world of acting.',
        color: '#B45309',
        tw: { avatar: 'bg-amber-700', badge: 'bg-amber-50 text-amber-700', accent: 'bg-amber-700', border: 'border-amber-200', shadow: 'shadow-amber-100' },
        initials: 'PY', img: preethiImg,
    },
    {
        name: 'Mr. Agnish Shah',
        batch: '2009-2012',
        role: 'Restaurant Manager, Oberoi Mumbai',
        quote: 'VIVA has world class facilities, vast library, huge kitchen, restaurant training setup, good Wi-Fi & fantastic cooperative faculties who\'ll always be there to help you out.',
        color: '#8B0000',
        tw: { avatar: 'bg-red-900', badge: 'bg-red-50 text-red-900', accent: 'bg-red-900', border: 'border-red-200', shadow: 'shadow-red-100' },
        initials: 'AS', img: agnishImg,
    },
    {
        name: 'Mr. Suhas Bondre',
        batch: '2018-21',
        role: '',
        quote: 'BMM/BAMMC department is excellent. It gave me tons of opportunities to grow. I spend three years with my department & those were the best years of my life, and trust me I am not exaggerating a tiny bit.',
        color: '#065F46',
        tw: { avatar: 'bg-emerald-800', badge: 'bg-emerald-50 text-emerald-800', accent: 'bg-emerald-800', border: 'border-emerald-200', shadow: 'shadow-emerald-100' },
        initials: 'SB', img: suhasImg,
    },
    {
        name: 'Mr. Suraj Kokare',
        batch: '2016-19',
        role: '',
        quote: 'True education isn\'t about what the books can teach you, it\'s about what is outside the book in the practical world. The lessons the department of Mass Media has taught me still reside in the back of my mind.',
        color: '#1D4ED8',
        tw: { avatar: 'bg-blue-700', badge: 'bg-blue-50 text-blue-700', accent: 'bg-blue-700', border: 'border-blue-200', shadow: 'shadow-blue-100' },
        initials: 'SK', img: surajImg,
    },
    {
        name: 'Mr. Akshay Shinde',
        batch: '2007-2012',
        role: 'Restaurant Manager, JW Marriott Mumbai Sahar',
        quote: 'An alumnus expresses gratitude for the quality education and the opportunities to form strong relationships with professors, peers, and staff.',
        color: '#8B0000',
        tw: { avatar: 'bg-red-900', badge: 'bg-red-50 text-red-900', accent: 'bg-red-900', border: 'border-red-200', shadow: 'shadow-red-100' },
        initials: 'AS', img: akshayImg,
    },
    {
        name: 'Mr. Omkar Nivenkar',
        batch: '2016-19',
        role: '',
        quote: 'My college life was a great journey, filled with joys and lessons. The opportunities that inspire us to do finer than before and mould us to become a better version of ourselves.',
        color: '#0070AD',
        tw: { avatar: 'bg-sky-800', badge: 'bg-sky-50 text-sky-800', accent: 'bg-sky-800', border: 'border-sky-200', shadow: 'shadow-sky-100' },
        initials: 'ON', img: omkarImg,
    },
    {
        name: 'Ms. Snehal Mhatre',
        batch: '2017-2020',
        role: '',
        quote: 'College was an unforgettable experience that helped me build my personality and secure a career.',
        color: '#C2410C',
        tw: { avatar: 'bg-orange-700', badge: 'bg-orange-50 text-orange-700', accent: 'bg-orange-700', border: 'border-orange-200', shadow: 'shadow-orange-100' },
        initials: 'SM', img: snehalImg,
    },
    {
        name: 'Mr. Abhish Ankush Palav',
        batch: '',
        role: 'Campus Technical Head, Whistling Woods International',
        quote: 'Software and Application Development Networking and Campus Technical Head at Whistling Woods International.',
        color: '#341C6A',
        tw: { avatar: 'bg-purple-900', badge: 'bg-purple-50 text-purple-900', accent: 'bg-purple-900', border: 'border-purple-200', shadow: 'shadow-purple-100' },
        initials: 'AP', img: abhishImg,
    },
    {
        name: 'Mrs. Mayuri Rajani Ruparel',
        batch: '',
        role: 'Co-Founder, RoyalPOS',
        quote: 'Co-Founder at RoyalPOS, Founder and mentor at Reeva Academy, Founder and YouTuber of SaasBahuRasoi — Gujarat, India.',
        color: '#D4A017',
        tw: { avatar: 'bg-yellow-600', badge: 'bg-yellow-50 text-yellow-700', accent: 'bg-yellow-500', border: 'border-yellow-200', shadow: 'shadow-yellow-100' },
        initials: 'MR', img: mayuriImg,
    },
    {
        name: 'Mr. Samir Barkarbhai Lalani',
        batch: '',
        role: 'Senior Mobile App Developer, Dynamic Web, Singapore',
        quote: 'Senior Mobile Application Developer at Dynamic Web, Singapore — building applications that connect people across borders.',
        color: '#003087',
        tw: { avatar: 'bg-blue-950', badge: 'bg-blue-50 text-blue-950', accent: 'bg-blue-950', border: 'border-blue-200', shadow: 'shadow-blue-100' },
        initials: 'SL', img: samirImg,
    },
    {
        name: 'Mr. Tanmay Kadam',
        batch: '',
        role: 'Data Architect & Author',
        quote: '• Engineer and Data Architect\n• Former Director at NM Idea\n• Azure Infrastructure and Data Engineer\n• Author of Neural Network book',
        color: '#0070AD',
        tw: { avatar: 'bg-sky-800', badge: 'bg-sky-50 text-sky-800', accent: 'bg-sky-800', border: 'border-sky-200', shadow: 'shadow-sky-100' },
        initials: 'TK', img: tanmayImg,
    },
    {
        name: 'Mr. Nitin Kushwaha',
        batch: '',
        role: 'Manager, Siemens-Atos',
        quote: '• CISSP Certified Information System Security Professional\n• Manager – Siemens-Atos\n• Cyber-crime Investigator and Forensics Consultant\n• Data carving Analyst under Forensics Investigator Consultant',
        color: '#341C6A',
        tw: { avatar: 'bg-purple-900', badge: 'bg-purple-50 text-purple-900', accent: 'bg-purple-900', border: 'border-purple-200', shadow: 'shadow-purple-100' },
        initials: 'NK', img: nitinImg,
    },
]

const CARDS_VISIBLE = 3

// ── InView hook ──
const useInView = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true) },
            { threshold: 0.05 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return [ref, inView]
}

// ── Single Card ──
const AlumniCard = ({ a, isCenter, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`
                relative flex flex-col rounded-2xl border overflow-hidden
                transition-all duration-500 cursor-pointer select-none
                ${isCenter
                    ? `bg-white ${a.tw.border} shadow-xl ${a.tw.shadow} z-10 opacity-100`
                    : 'bg-white border-gray-100 scale-95 shadow-sm opacity-60 hover:opacity-80'
                }
            `}
        >
            {/* Accent top bar */}
            <div className={`h-1 w-full ${a.tw.accent} transition-all duration-500`} />

            <div className="flex flex-col gap-4 p-6 flex-1">

                {/* Big quote bg */}
                <div className="absolute top-4 right-4 text-7xl font-black opacity-5 font-serif leading-none pointer-events-none select-none"
                    style={{ color: a.color }}>
                    "
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-600 italic leading-relaxed flex-1 whitespace-pre-line relative z-10">
                    "{a.quote}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-100 w-full" />

                {/* Profile row */}
                <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className={`
                        w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden
                        border-2 transition-all duration-300
                        ${a.tw.avatar}
                    `} style={{ borderColor: `${a.color}30` }}>
                        {a.img
                            ? <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                            : <span className="text-lg font-black text-white">{a.initials}</span>
                        }
                    </div>

                    {/* Name + course */}
                    <div className="flex-1 min-w-0">
                        <p className="font-extrabold text-sm text-slate-800 truncate">{a.name}</p>
                        {a.batch && (
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.tw.badge}`}>
                                Batch {a.batch}
                            </span>
                        )}
                        {a.role && !a.batch && (
                            <p className="text-xs text-gray-400 truncate mt-0.5">{a.role}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Alumni = () => {
    const [sectionRef, inView] = useInView()
    const [active, setActive] = useState(0)
    const [animDir, setAnimDir] = useState(null)
    const total = ALUMNI.length

    const goTo = (idx, dir) => {
        if (idx === active) return
        setAnimDir(dir)
        setTimeout(() => {
            setActive(idx)
            setAnimDir(null)
        }, 300)
    }

    const prev = () => goTo((active - 1 + total) % total, 'prev')
    const next = () => goTo((active + 1) % total, 'next')

    // Auto advance
    useEffect(() => {
        if (!inView) return
        const t = setInterval(() => {
            setAnimDir('next')
            setTimeout(() => {
                setActive(p => (p + 1) % total)
                setAnimDir(null)
            }, 300)
        }, 5000)
        return () => clearInterval(t)
    }, [inView, total])

    // Visible 3 cards: prev, active, next
    const indices = [
        (active - 1 + total) % total,
        active,
        (active + 1) % total,
    ]

    // Dots — max 7
    const getDots = () => {
        if (total <= 7) return ALUMNI.map((_, i) => i)
        let start = Math.max(0, active - 3)
        let end = Math.min(total - 1, start + 6)
        if (end - start < 6) start = Math.max(0, end - 6)
        return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    }

    return (
        <section ref={sectionRef} className="bg-slate-50 py-20 px-12 w-full box-border overflow-hidden font-sans">

            {/* ── Section Header ── */}
            <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <p className="text-xs font-extrabold tracking-widest uppercase text-[#C8102E] mb-2.5 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-red-700 inline-block" />
                    Alumni Network
                </p>
                <div className="flex items-end justify-between flex-wrap gap-4">
                    <h2 className="text-5xl font-black text-slate-900 leading-tight">
                        Viva Alumni<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #C8102E' }}>
                            Network.
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                        A thriving community of 7,000+ graduates across 20+ countries — staying connected, giving back, and growing together.
                    </p>
                </div>
            </div>

            {/* ── Cards Row ── */}
            <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <div className={`
                    py-10 grid grid-cols-3 gap-5 mb-8
                    transition-all duration-300
                    ${animDir === 'next' ? 'alumni-slide-next' : ''}
                    ${animDir === 'prev' ? 'alumni-slide-prev' : ''}
                `}>
                    {indices.map((idx, i) => (
                        <AlumniCard
                            key={idx}
                            a={ALUMNI[idx]}
                            isCenter={i === 1}
                            onClick={i === 0 ? prev : i === 2 ? next : undefined}
                        />
                    ))}
                </div>

                {/* ── Controls ── */}
                <div className="flex items-center justify-between px-2">

                    {/* Dots */}
                    <div className="flex items-center gap-1.5">
                        {getDots().map(i => (
                            <button
                                key={i}
                                onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                                className={`
                                    h-1.5 rounded-full border-none cursor-pointer p-0
                                    transition-all duration-300
                                    ${i === active ? 'w-6' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}
                                `}
                                style={i === active ? { background: ALUMNI[active].color, width: '24px' } : {}}
                            />
                        ))}
                    </div>

                    {/* Counter + Arrows */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 font-semibold">
                            {active + 1} / {total}
                        </span>
                        <div className="flex gap-2">
                            {[
                                { label: '←', action: prev },
                                { label: '→', action: next },
                            ].map(({ label, action }, i) => (
                                <button
                                    key={i}
                                    onClick={action}
                                    className="w-10 h-10 rounded-full border flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:text-white hover:scale-105 font-sans"
                                    style={{
                                        borderColor: `${ALUMNI[active].color}50`,
                                        color: ALUMNI[active].color,
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = ALUMNI[active].color}
                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alumni