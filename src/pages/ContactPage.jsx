// import React, { useState } from 'react'
// import Header from '../components/layouts/Header'

// // ── SVG Icons ──
// const IconMapPin = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//         <circle cx="12" cy="10" r="3" />
//     </svg>
// )
// const IconPhone = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
// )
// const IconMail = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//     </svg>
// )
// const IconClock = ({ size = 20, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//     </svg>
// )
// const IconSend = ({ size = 16, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <line x1="22" y1="2" x2="11" y2="13" />
//         <polygon points="22 2 15 22 11 13 2 9 22 2" />
//     </svg>
// )
// const IconCheck = ({ size = 28, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="20 6 9 17 4 12" />
//     </svg>
// )
// const IconChevronDown = ({ size = 14, color = 'currentColor' }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="6 9 12 15 18 9" />
//     </svg>
// )

// // ── Data ──
// const INFO_CARDS = [
//     {
//         icon: <IconMapPin size={18} color="#fff" />,
//         label: 'Address',
//         lines: ['VIVA College Road, Virar (W)', 'Dist. Palghar — 401303'],
//         color: '#C8102E',
//         bg: '#FEF2F2',
//     },
//     {
//         icon: <IconPhone size={18} color="#fff" />,
//         label: 'Phone',
//         lines: ['Admin: +91 97657 42335', 'Exam: +91 93592 47885'],
//         color: '#065F46',
//         bg: '#ECFDF5',
//     },
//     {
//         icon: <IconMail size={18} color="#fff" />,
//         label: 'Email',
//         lines: ['viva@vivacollege.org', 'admission@vivacollege.org'],
//         color: '#1D4ED8',
//         bg: '#EFF6FF',
//     },
//     {
//         icon: <IconClock size={18} color="#fff" />,
//         label: 'Office Hours',
//         lines: ['Monday – Saturday', '10:00 AM – 5:00 PM'],
//         color: '#D4A017',
//         bg: '#FEFCE8',
//     },
// ]

// const DEPT_CONTACTS = [
//     { dept: 'Admission Office', phone: '+91 97657 42335', color: '#065F46', bg: '#ECFDF5', border: '#065F46' },
//     { dept: 'Examination Dept', phone: '+91 93592 47885', color: '#C2410C', bg: '#FFF7ED', border: '#F97316' },
//     { dept: 'Arts Faculty', phone: '0250-245 0891', color: '#C8102E', bg: '#FEF2F2', border: '#C8102E' },
//     { dept: 'Commerce Faculty', phone: '0250-245 0891', color: '#0F1C3D', bg: '#EFF3FF', border: '#0F1C3D' },
//     { dept: 'Science Faculty', phone: '0250-245 0891', color: '#0369A1', bg: '#F0F9FF', border: '#0369A1' },
// ]

// const DEPARTMENTS = [
//     'General Enquiry',
//     'Admission Enquiry',
//     'Arts Department',
//     'Commerce Department',
//     'Science / IT Department',
//     'Examination Cell',
//     'Placement Cell',
//     'Alumni Network',
//     'Other',
// ]

// const ContactPage = () => {
//     const [form, setForm] = useState({
//         name: '', email: '', phone: '', dept: '', message: '',
//     })
//     const [submitted, setSubmitted] = useState(false)
//     const [focused, setFocused] = useState(null)

//     const handleSubmit = () => {
//         if (form.name && form.email && form.message) setSubmitted(true)
//     }

//     const inputBase = (field) => ({
//         width: '100%',
//         padding: '11px 14px',
//         borderRadius: 10,
//         border: `1.5px solid ${focused === field ? '#0F1C3D' : '#E5E7EB'}`,
//         fontSize: 13,
//         fontFamily: 'inherit',
//         outline: 'none',
//         background: '#fff',
//         color: '#1E293B',
//         boxSizing: 'border-box',
//         transition: 'border-color 0.2s',
//     })

//     const labelStyle = {
//         fontSize: 11, fontWeight: 700,
//         color: '#374151', display: 'block',
//         marginBottom: 6,
//         letterSpacing: '0.06em',
//         textTransform: 'uppercase',
//     }

//     return (
//         <div id='contact' style={{
//             background: '#F8FAFC',
//             minHeight: '100vh',
//             fontFamily: "'DM Sans', 'Inter', sans-serif",
//             paddingBottom: 80,
//         }}>
//             <Header />
//             <style>{`
//                 @keyframes fadeUp {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 @keyframes checkPop {
//                     0%   { transform: scale(0); opacity: 0; }
//                     70%  { transform: scale(1.15); }
//                     100% { transform: scale(1); opacity: 1; }
//                 }
//                 select:focus { outline: none; }
//             `}</style>

//             {/* ── Hero strip ── */}
//             <div style={{
//                 background: 'linear-gradient(135deg, #0F1C3D 0%, #1A2D5A 100%)',
//                 padding: '64px 48px 56px',
//                 position: 'relative',
//                 overflow: 'hidden',
//             }}>
//                 {/* Dot grid */}
//                 <div style={{
//                     position: 'absolute', inset: 0, opacity: 0.04,
//                     backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
//                     backgroundSize: '28px 28px',
//                     pointerEvents: 'none',
//                 }} />
//                 {/* Red glow */}
//                 <div style={{
//                     position: 'absolute', top: -60, right: 80,
//                     width: 300, height: 300, borderRadius: '50%',
//                     background: '#C8102E', opacity: 0.08,
//                     filter: 'blur(80px)', pointerEvents: 'none',
//                 }} />

//                 <div style={{ position: 'relative', animation: 'fadeUp 0.6s ease both' }}>
//                     <p style={{
//                         fontSize: 11, fontWeight: 700,
//                         letterSpacing: '0.25em', textTransform: 'uppercase',
//                         color: 'rgba(255,255,255,0.4)',
//                         margin: '0 0 12px',
//                         display: 'flex', alignItems: 'center', gap: 8,
//                     }}>
//                         <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block' }} />
//                         Get In Touch
//                     </p>
//                     <h1 style={{
//                         fontSize: 'clamp(36px, 5vw, 56px)',
//                         fontWeight: 900, color: '#fff',
//                         lineHeight: 1.1, margin: '0 0 16px',
//                     }}>
//                         Contact Us
//                     </h1>
//                     <p style={{
//                         fontSize: 15, color: 'rgba(255,255,255,0.5)',
//                         margin: 0, maxWidth: 480, lineHeight: 1.7,
//                     }}>
//                         Have a question, need guidance, or want to visit campus? We're here to help.
//                     </p>
//                 </div>
//             </div>

//             {/* ── Info cards strip ── */}
//             <div style={{ padding: '0 48px', marginTop: -28 }}>
//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(4, 1fr)',
//                     gap: 16,
//                 }}>
//                     {INFO_CARDS.map((card, i) => (
//                         <div key={i} style={{
//                             background: '#fff',
//                             borderRadius: 18,
//                             padding: '20px 20px',
//                             border: '1px solid #F3F4F6',
//                             boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//                             display: 'flex', gap: 14, alignItems: 'flex-start',
//                             animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
//                         }}>
//                             <div style={{
//                                 width: 40, height: 40, borderRadius: 12,
//                                 background: card.color, flexShrink: 0,
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                             }}>
//                                 {card.icon}
//                             </div>
//                             <div>
//                                 <p style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 5px' }}>
//                                     {card.label}
//                                 </p>
//                                 {card.lines.map((line, j) => (
//                                     <p key={j} style={{ fontSize: 13, fontWeight: j === 0 ? 700 : 500, color: j === 0 ? '#0F1C3D' : '#6B7280', margin: '0 0 2px', lineHeight: 1.5 }}>
//                                         {line}
//                                     </p>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ── Main 2 column ── */}
//             <div style={{
//                 padding: '40px 48px 0',
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1.1fr',
//                 gap: 32,
//             }}>

//                 {/* ════ LEFT — Form ════ */}
//                 <div style={{
//                     background: '#fff',
//                     borderRadius: 24,
//                     padding: '36px 32px',
//                     border: '1px solid #E5E7EB',
//                     animation: 'fadeUp 0.6s ease 0.2s both',
//                 }}>
//                     {submitted ? (
//                         <div style={{ textAlign: 'center', padding: '60px 20px' }}>
//                             <div style={{
//                                 width: 72, height: 72, borderRadius: '50%',
//                                 background: '#ECFDF5',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 margin: '0 auto 20px',
//                                 animation: 'checkPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
//                             }}>
//                                 <IconCheck size={32} color="#065F46" />
//                             </div>
//                             <p style={{ fontWeight: 900, fontSize: 22, color: '#0F1C3D', margin: '0 0 10px' }}>
//                                 Message Sent!
//                             </p>
//                             <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 28px', lineHeight: 1.6 }}>
//                                 Thank you, {form.name.split(' ')[0]}! We'll get back to you within 24 hours.
//                             </p>
//                             <button
//                                 onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', dept: '', message: '' }) }}
//                                 style={{
//                                     padding: '10px 24px', borderRadius: 100,
//                                     border: '1.5px solid #E5E7EB',
//                                     background: '#fff', color: '#0F1C3D',
//                                     fontSize: 13, fontWeight: 700,
//                                     cursor: 'pointer', fontFamily: 'inherit',
//                                 }}
//                             >
//                                 Send Another
//                             </button>
//                         </div>
//                     ) : (
//                         <>
//                             <div style={{ marginBottom: 28 }}>
//                                 <h2 style={{ fontSize: 20, fontWeight: 900, color: '#0F1C3D', margin: '0 0 6px' }}>
//                                     Send us a Message
//                                 </h2>
//                                 <p style={{ fontSize: 13, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
//                                     Fill in the form and our team will respond within 24 hours.
//                                 </p>
//                             </div>

//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

//                                 {/* Name + Email */}
//                                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
//                                     <div>
//                                         <label style={labelStyle}>Full Name *</label>
//                                         <input
//                                             style={inputBase('name')}
//                                             placeholder="Your full name"
//                                             value={form.name}
//                                             onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
//                                             onFocus={() => setFocused('name')}
//                                             onBlur={() => setFocused(null)}
//                                         />
//                                     </div>
//                                     <div>
//                                         <label style={labelStyle}>Email Address *</label>
//                                         <input
//                                             style={inputBase('email')}
//                                             type="email"
//                                             placeholder="your@email.com"
//                                             value={form.email}
//                                             onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
//                                             onFocus={() => setFocused('email')}
//                                             onBlur={() => setFocused(null)}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Phone */}
//                                 <div>
//                                     <label style={labelStyle}>Phone Number</label>
//                                     <input
//                                         style={inputBase('phone')}
//                                         placeholder="+91 XXXXX XXXXX"
//                                         value={form.phone}
//                                         onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
//                                         onFocus={() => setFocused('phone')}
//                                         onBlur={() => setFocused(null)}
//                                     />
//                                 </div>

//                                 {/* Department dropdown */}
//                                 <div>
//                                     <label style={labelStyle}>Department / Enquiry About</label>
//                                     <div style={{ position: 'relative' }}>
//                                         <select
//                                             style={{
//                                                 ...inputBase('dept'),
//                                                 appearance: 'none',
//                                                 paddingRight: 36,
//                                                 cursor: 'pointer',
//                                                 color: form.dept ? '#1E293B' : '#9CA3AF',
//                                             }}
//                                             value={form.dept}
//                                             onChange={e => setForm(p => ({ ...p, dept: e.target.value }))}
//                                             onFocus={() => setFocused('dept')}
//                                             onBlur={() => setFocused(null)}
//                                         >
//                                             <option value="" disabled>Select Department</option>
//                                             {DEPARTMENTS.map((d, i) => (
//                                                 <option key={i} value={d}>{d}</option>
//                                             ))}
//                                         </select>
//                                         <div style={{
//                                             position: 'absolute', right: 12, top: '50%',
//                                             transform: 'translateY(-50%)',
//                                             pointerEvents: 'none', color: '#9CA3AF',
//                                         }}>
//                                             <IconChevronDown size={14} />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Message */}
//                                 <div>
//                                     <label style={labelStyle}>Your Message *</label>
//                                     <textarea
//                                         style={{
//                                             ...inputBase('message'),
//                                             height: 110,
//                                             resize: 'vertical',
//                                         }}
//                                         placeholder="Type your message here..."
//                                         value={form.message}
//                                         onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
//                                         onFocus={() => setFocused('message')}
//                                         onBlur={() => setFocused(null)}
//                                     />
//                                 </div>

//                                 {/* Submit */}
//                                 <button
//                                     onClick={handleSubmit}
//                                     style={{
//                                         padding: '14px 24px',
//                                         background: '#0F1C3D',
//                                         color: '#fff', border: 'none',
//                                         borderRadius: 12, fontSize: 14,
//                                         fontWeight: 700, cursor: 'pointer',
//                                         fontFamily: 'inherit',
//                                         display: 'flex', alignItems: 'center',
//                                         justifyContent: 'center', gap: 8,
//                                         transition: 'background 0.2s',
//                                         width: '100%', marginTop: 4,
//                                     }}
//                                     onMouseEnter={e => e.currentTarget.style.background = '#C8102E'}
//                                     onMouseLeave={e => e.currentTarget.style.background = '#0F1C3D'}
//                                 >
//                                     Send Message
//                                     <IconSend size={14} color="#fff" />
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                 </div>

//                 {/* ════ RIGHT — Map + Dept contacts ════ */}
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 20, animation: 'fadeUp 0.6s ease 0.3s both' }}>

//                     {/* Google Map embed */}
//                     <div style={{
//                         borderRadius: 20, overflow: 'hidden',
//                         border: '1px solid #E5E7EB',
//                         boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//                         height: 280,
//                     }}>
//                         <iframe
//                             title="VIVA College Location"
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1234567890!2d72.80938!3d19.45678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9b4e5f01234%3A0xabcdef1234567890!2sViva%20College%2C%20Virar%20West!5e0!3m2!1sen!2sin!4v1234567890"
//                             width="100%"
//                             height="100%"
//                             style={{ border: 0, display: 'block' }}
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                         />
//                     </div>

//                     {/* Department contacts */}
//                     <div style={{
//                         background: '#fff',
//                         borderRadius: 20, padding: '24px 24px',
//                         border: '1px solid #E5E7EB',
//                     }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
//                             <div style={{
//                                 width: 34, height: 34, borderRadius: 10,
//                                 background: '#0F1C3D',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                             }}>
//                                 <IconPhone size={15} color="#D4A017" />
//                             </div>
//                             <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
//                                 Department Contacts
//                             </h3>
//                         </div>

//                         <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                             {DEPT_CONTACTS.map((d, i) => (
//                                 <div key={i} style={{
//                                     display: 'flex', alignItems: 'center',
//                                     justifyContent: 'space-between',
//                                     padding: '12px 16px',
//                                     borderRadius: 12,
//                                     background: d.bg,
//                                     borderLeft: `3px solid ${d.border}`,
//                                 }}>
//                                     <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                                         <div style={{
//                                             width: 8, height: 8, borderRadius: '50%',
//                                             background: d.color, flexShrink: 0,
//                                         }} />
//                                         <span style={{ fontSize: 13, fontWeight: 700, color: '#0F1C3D' }}>
//                                             {d.dept}
//                                         </span>
//                                     </div>
//                                     <a
//                                         href={`tel:${d.phone.replace(/\s/g, '')}`}
//                                         style={{
//                                             fontSize: 13, fontWeight: 800,
//                                             color: d.color, textDecoration: 'none',
//                                             transition: 'opacity 0.2s',
//                                         }}
//                                         onMouseEnter={e => e.target.style.opacity = '0.7'}
//                                         onMouseLeave={e => e.target.style.opacity = '1'}
//                                     >
//                                         {d.phone}
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default ContactPage



import React, { useState } from 'react'
import Header from '../components/layouts/Header'

const IconMapPin = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)
const IconPhone = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)
const IconMail = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)
const IconClock = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
)
const IconSend = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
)
const IconCheck = ({ size = 28, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)
const IconChevronDown = ({ size = 14, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
)

const INFO_CARDS = [
    { icon: <IconMapPin size={18} color="#fff" />, label: 'Address', lines: ['VIVA College Road, Virar (W)', 'Dist. Palghar — 401303'], color: '#C8102E', bg: '#FEF2F2' },
    { icon: <IconPhone size={18} color="#fff" />, label: 'Phone', lines: ['Admin: +91 97657 42335', 'Exam: +91 93592 47885'], color: '#065F46', bg: '#ECFDF5' },
    { icon: <IconMail size={18} color="#fff" />, label: 'Email', lines: ['viva@vivacollege.org', 'admission@vivacollege.org'], color: '#1D4ED8', bg: '#EFF6FF' },
    { icon: <IconClock size={18} color="#fff" />, label: 'Office Hours', lines: ['Monday – Saturday', '10:00 AM – 5:00 PM'], color: '#D4A017', bg: '#FEFCE8' },
]

const DEPT_CONTACTS = [
    { dept: 'Admission Office', phone: '+91 97657 42335', color: '#065F46', bg: '#ECFDF5', border: '#065F46' },
    { dept: 'Examination Dept', phone: '+91 93592 47885', color: '#C2410C', bg: '#FFF7ED', border: '#F97316' },
    { dept: 'Arts Faculty', phone: '0250-245 0891', color: '#C8102E', bg: '#FEF2F2', border: '#C8102E' },
    { dept: 'Commerce Faculty', phone: '0250-245 0891', color: '#0F1C3D', bg: '#EFF3FF', border: '#0F1C3D' },
    { dept: 'Science Faculty', phone: '0250-245 0891', color: '#0369A1', bg: '#F0F9FF', border: '#0369A1' },
]

const DEPARTMENTS = [
    'General Enquiry', 'Admission Enquiry', 'Arts Department',
    'Commerce Department', 'Science / IT Department',
    'Examination Cell', 'Placement Cell', 'Alumni Network', 'Other',
]

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [focused, setFocused] = useState(null)

    const handleSubmit = () => {
        if (form.name && form.email && form.message) setSubmitted(true)
    }

    const inputBase = (field) => ({
        width: '100%',
        padding: '11px 14px',
        borderRadius: 10,
        border: `1.5px solid ${focused === field ? '#0F1C3D' : '#E5E7EB'}`,
        fontSize: 13,
        fontFamily: 'inherit',
        outline: 'none',
        background: '#fff',
        color: '#1E293B',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
    })

    const labelStyle = {
        fontSize: 11, fontWeight: 700,
        color: '#374151', display: 'block',
        marginBottom: 6,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
    }

    return (
        <div id='contact' className="bg-[#F8FAFC] min-h-screen pb-16 sm:pb-20"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
            <Header />
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes checkPop {
                    0%   { transform: scale(0); opacity: 0; }
                    70%  { transform: scale(1.15); }
                    100% { transform: scale(1); opacity: 1; }
                }
                select:focus { outline: none; }
            `}</style>

            {/* ── Hero strip ── */}
            <div className="relative overflow-hidden px-4 sm:px-8 md:px-12 xl:px-[48px] pt-12 sm:pt-14 md:pt-16 pb-12 sm:pb-14"
                style={{ background: 'linear-gradient(135deg, #0F1C3D 0%, #1A2D5A 100%)' }}>
                {/* Dot grid */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.04,
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '28px 28px', pointerEvents: 'none',
                }} />
                {/* Red glow */}
                <div style={{
                    position: 'absolute', top: -60, right: 80,
                    width: 300, height: 300, borderRadius: '50%',
                    background: '#C8102E', opacity: 0.08,
                    filter: 'blur(80px)', pointerEvents: 'none',
                }} />
                <div className="relative" style={{ animation: 'fadeUp 0.6s ease both' }}>
                    <p className="flex items-center gap-2 mb-3"
                        style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 12px' }}>
                        <span style={{ width: 24, height: 2, background: '#C8102E', display: 'inline-block' }} />
                        Get In Touch
                    </p>
                    <h1 className="font-black text-white leading-tight mb-3"
                        style={{ fontSize: 'clamp(28px, 5vw, 56px)', margin: '0 0 16px' }}>
                        Contact Us
                    </h1>
                    <p className="text-white/50 leading-relaxed max-w-md"
                        style={{ fontSize: 15, margin: 0 }}>
                        Have a question, need guidance, or want to visit campus? We're here to help.
                    </p>
                </div>
            </div>

            {/* ── Info cards strip ── */}
            <div className="px-4 sm:px-8 md:px-12 xl:px-[48px] -mt-7">
                <div className="pt-10 grid gap-3 sm:gap-4
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {INFO_CARDS.map((card, i) => (
                        <div key={i} className="bg-white rounded-[18px] border border-gray-100 flex gap-3 sm:gap-4 items-start
                            p-4 sm:p-5"
                            style={{
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
                            }}>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                                style={{ background: card.color }}>
                                {card.icon}
                            </div>
                            <div className="min-w-0">
                                <p className="mb-1" style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    {card.label}
                                </p>
                                {card.lines.map((line, j) => (
                                    <p key={j} className="leading-snug truncate" style={{
                                        fontSize: 12, fontWeight: j === 0 ? 700 : 500,
                                        color: j === 0 ? '#0F1C3D' : '#6B7280', margin: '0 0 2px'
                                    }}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Main 2 column ── */}
            <div className="px-4 sm:px-8 md:px-12 xl:px-[48px] pt-8 sm:pt-10
                grid gap-6 sm:gap-8
                grid-cols-1 lg:grid-cols-2">

                {/* ════ LEFT — Form ════ */}
                <div className="bg-white rounded-3xl border border-gray-200
                    p-5 sm:p-7 md:p-8"
                    style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
                    {submitted ? (
                        <div className="text-center py-12 sm:py-16 px-4">
                            <div style={{
                                width: 72, height: 72, borderRadius: '50%',
                                background: '#ECFDF5',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 20px',
                                animation: 'checkPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
                            }}>
                                <IconCheck size={32} color="#065F46" />
                            </div>
                            <p style={{ fontWeight: 900, fontSize: 22, color: '#0F1C3D', margin: '0 0 10px' }}>
                                Message Sent!
                            </p>
                            <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 28px', lineHeight: 1.6 }}>
                                Thank you, {form.name.split(' ')[0]}! We'll get back to you within 24 hours.
                            </p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', dept: '', message: '' }) }}
                                style={{
                                    padding: '10px 24px', borderRadius: 100,
                                    border: '1.5px solid #E5E7EB',
                                    background: '#fff', color: '#0F1C3D',
                                    fontSize: 13, fontWeight: 700,
                                    cursor: 'pointer', fontFamily: 'inherit',
                                }}>
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <h2 style={{ fontSize: 20, fontWeight: 900, color: '#0F1C3D', margin: '0 0 6px' }}>
                                    Send us a Message
                                </h2>
                                <p style={{ fontSize: 13, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                                    Fill in the form and our team will respond within 24 hours.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">

                                {/* Name + Email — stacked on mobile, side-by-side on sm+ */}
                                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                                    <div>
                                        <label style={labelStyle}>Full Name *</label>
                                        <input
                                            style={inputBase('name')}
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                                            onFocus={() => setFocused('name')}
                                            onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email Address *</label>
                                        <input
                                            style={inputBase('email')}
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label style={labelStyle}>Phone Number</label>
                                    <input
                                        style={inputBase('phone')}
                                        placeholder="+91 XXXXX XXXXX"
                                        value={form.phone}
                                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                                        onFocus={() => setFocused('phone')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                {/* Department dropdown */}
                                <div>
                                    <label style={labelStyle}>Department / Enquiry About</label>
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            style={{
                                                ...inputBase('dept'),
                                                appearance: 'none',
                                                paddingRight: 36,
                                                cursor: 'pointer',
                                                color: form.dept ? '#1E293B' : '#9CA3AF',
                                            }}
                                            value={form.dept}
                                            onChange={e => setForm(p => ({ ...p, dept: e.target.value }))}
                                            onFocus={() => setFocused('dept')}
                                            onBlur={() => setFocused(null)}
                                        >
                                            <option value="" disabled>Select Department</option>
                                            {DEPARTMENTS.map((d, i) => (
                                                <option key={i} value={d}>{d}</option>
                                            ))}
                                        </select>
                                        <div style={{
                                            position: 'absolute', right: 12, top: '50%',
                                            transform: 'translateY(-50%)',
                                            pointerEvents: 'none', color: '#9CA3AF',
                                        }}>
                                            <IconChevronDown size={14} />
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label style={labelStyle}>Your Message *</label>
                                    <textarea
                                        style={{ ...inputBase('message'), height: 110, resize: 'vertical' }}
                                        placeholder="Type your message here..."
                                        value={form.message}
                                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    style={{
                                        padding: '14px 24px',
                                        background: '#0F1C3D',
                                        color: '#fff', border: 'none',
                                        borderRadius: 12, fontSize: 14,
                                        fontWeight: 700, cursor: 'pointer',
                                        fontFamily: 'inherit',
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', gap: 8,
                                        transition: 'background 0.2s',
                                        width: '100%', marginTop: 4,
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#C8102E'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#0F1C3D'}
                                >
                                    Send Message
                                    <IconSend size={14} color="#fff" />
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* ════ RIGHT — Map + Dept contacts ════ */}
                <div className="flex flex-col gap-5 sm:gap-6"
                    style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}>

                    {/* Google Map embed */}
                    <div className="rounded-[20px] overflow-hidden border border-gray-200
                        h-[220px] sm:h-[260px] md:h-[280px] lg:h-[260px] xl:h-[280px]"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                        <iframe
                            title="VIVA College Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1234567890!2d72.80938!3d19.45678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9b4e5f01234%3A0xabcdef1234567890!2sViva%20College%2C%20Virar%20West!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Department contacts */}
                    <div className="bg-white rounded-[20px] border border-gray-200
                        p-5 sm:p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div style={{
                                width: 34, height: 34, borderRadius: 10,
                                background: '#0F1C3D',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <IconPhone size={15} color="#D4A017" />
                            </div>
                            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0F1C3D', margin: 0 }}>
                                Department Contacts
                            </h3>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            {DEPT_CONTACTS.map((d, i) => (
                                <div key={i} className="flex items-center justify-between rounded-xl
                                    px-3 py-2.5 sm:px-4 sm:py-3"
                                    style={{ background: d.bg, borderLeft: `3px solid ${d.border}` }}>
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1C3D] truncate">{d.dept}</span>
                                    </div>
                                    <a
                                        href={`tel:${d.phone.replace(/\s/g, '')}`}
                                        className="text-xs sm:text-[13px] font-extrabold whitespace-nowrap ml-2 flex-shrink-0"
                                        style={{ color: d.color, textDecoration: 'none', transition: 'opacity 0.2s' }}
                                        onMouseEnter={e => e.target.style.opacity = '0.7'}
                                        onMouseLeave={e => e.target.style.opacity = '1'}
                                    >
                                        {d.phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactPage