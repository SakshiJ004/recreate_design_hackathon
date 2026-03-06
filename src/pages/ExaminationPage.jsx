// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Header from '../components/layouts/Header'
// import Footer from '../components/layouts/Footer'

// // ── Tab config ──
// const tabs = [
//     {
//         id: "timetable",
//         label: "Exam Timetable",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
//     },
//     {
//         id: "results",
//         label: "Results",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
//     },
//     {
//         id: "hallticket",
//         label: "Hall Ticket",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" /></svg>
//     },
//     {
//         id: "atkt",
//         label: "ATKT Info",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
//     },
//     {
//         id: "forms",
//         label: "Exam Forms",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
//     },
//     {
//         id: "guidelines",
//         label: "Exam Guidelines",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
//     },
// ]

// // ── Timetable data ──
// const timetableData = {
//     college: [
//         { exam: "Internal Test 1", stream: "All Streams", date: "15 Jan 2025", time: "10:00 AM", venue: "Respective Classrooms" },
//         { exam: "Internal Test 2", stream: "All Streams", date: "20 Feb 2025", time: "10:00 AM", venue: "Respective Classrooms" },
//         { exam: "Prelim Exam", stream: "All Streams", date: "10 Mar 2025", time: "10:00 AM", venue: "Exam Hall A, B, C" },
//         { exam: "Practical Exam (Science)", stream: "B.Sc.", date: "25 Mar 2025", time: "9:00 AM", venue: "Science Labs" },
//         { exam: "Project Submission", stream: "BMS / BCAF / BFM", date: "30 Mar 2025", time: "Before 5:00 PM", venue: "Respective Dept." },
//     ],
//     university: [
//         { exam: "Semester End Exam — Odd Sem", stream: "All", date: "Nov 2025", time: "As per MU", venue: "As per Hall Ticket" },
//         { exam: "Semester End Exam — Even Sem", stream: "All", date: "Apr–May 2025", time: "As per MU", venue: "As per Hall Ticket" },
//         { exam: "ATKT Exam", stream: "All", date: "Oct / Mar", time: "As per MU", venue: "As per Hall Ticket" },
//         { exam: "Practical Exam (University)", stream: "B.Sc. / B.A.", date: "Apr 2025", time: "As per MU", venue: "As per Hall Ticket" },
//     ]
// }

// // ── Results data ──
// const resultsLinks = [
//     { title: "SY / TY Semester Results", desc: "Check your latest semester results on Mumbai University portal", href: "https://mu.ac.in/examinations/results", icon: "📊" },
//     { title: "ATKT Results", desc: "Allowed To Keep Terms exam results", href: "https://mu.ac.in/examinations/results", icon: "📋" },
//     { title: "Revaluation / Photocopy", desc: "Apply for revaluation or photocopy of answer sheet", href: "https://mu.ac.in/examinations/revaluation", icon: "🔍" },
//     { title: "Mark Verification", desc: "Online mark verification for current students", href: "https://mu.ac.in/examinations/verification", icon: "✅" },
// ]

// // ── ATKT data ──
// const atktInfo = [
//     { q: "What is ATKT?", a: "ATKT (Allowed To Keep Terms) permits students who have failed in limited subjects to appear in the next semester while continuing their studies." },
//     { q: "How many subjects can I have ATKT in?", a: "As per University of Mumbai norms, students can have ATKT in a limited number of subjects. The specific limit varies by programme — check with the college exam department." },
//     { q: "When are ATKT exams held?", a: "ATKT exams are conducted twice a year — typically in October/November and March/April alongside regular semester exams." },
//     { q: "How do I apply for ATKT exam?", a: "Fill the ATKT exam form available on the MU portal within the specified dates. Pay the exam fee online and take a printout of the form." },
//     { q: "Will ATKT affect my degree certificate?", a: "No, ATKT does not appear on your final degree certificate. However, it will reflect in your semester marksheets." },
// ]

// // ── Guidelines data ──
// const guidelines = [
//     { icon: "🪪", title: "Carry Hall Ticket", desc: "Hall ticket is mandatory. Entry will be denied without it. Ensure photo and signature are clearly visible." },
//     { icon: "⏰", title: "Report Early", desc: "Report to the exam hall at least 30 minutes before the exam starts. Latecomers may not be allowed entry after 30 minutes." },
//     { icon: "🚫", title: "No Electronic Devices", desc: "Mobile phones, smartwatches, earphones, and calculators (unless permitted) are strictly prohibited inside the exam hall." },
//     { icon: "✏️", title: "Stationery Rules", desc: "Use only blue or black ballpoint pen. Pencil allowed only for diagrams. No whitener/correction fluid allowed." },
//     { icon: "📋", title: "Read Instructions Carefully", desc: "Read all instructions on the question paper before starting. Attempt only the required number of questions." },
//     { icon: "🤝", title: "No Malpractice", desc: "Any form of malpractice will result in immediate cancellation of the exam and may lead to debarment." },
//     { icon: "💊", title: "Medical Emergency", desc: "Inform the invigilator immediately in case of medical emergency. A medical room is available on campus." },
//     { icon: "📝", title: "Answer Sheet Submission", desc: "Submit the answer sheet to the invigilator before leaving. Do not tear or damage any pages." },
// ]

// // ── Exam Forms data ──
// const examForms = [
//     { title: "Regular Exam Form", desc: "Fill semester exam form for regular students", deadline: "15 days before exam", href: "https://mu.ac.in/examinations/forms", status: "active" },
//     { title: "ATKT Exam Form", desc: "Form for students appearing in ATKT exams", deadline: "As announced by MU", href: "https://mu.ac.in/examinations/forms", status: "active" },
//     { title: "Ex-Student Exam Form", desc: "Form for ex-students / external students", deadline: "As announced by MU", href: "https://mu.ac.in/examinations/forms", status: "active" },
//     { title: "Revaluation Form", desc: "Apply for revaluation within 15 days of result", deadline: "15 days after result", href: "https://mu.ac.in/examinations/revaluation", status: "active" },
//     { title: "Photocopy Application", desc: "Request photocopy of assessed answer sheet", deadline: "As announced by MU", href: "https://mu.ac.in/examinations/photocopy", status: "active" },
// ]

// // ── FaqAccordion (reused from Admissions) ──
// const FaqAccordion = ({ items }) => {
//     const [open, setOpen] = useState(null)
//     return (
//         <div className="space-y-3">
//             {items.map((item, i) => (
//                 <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${open === i ? 'border-2 border-[var(--viva-navy)]' : 'border-gray-100'}`}>
//                     <button onClick={() => setOpen(open === i ? null : i)}
//                         className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
//                         <span className="text-sm font-bold text-[var(--viva-navy)]">{item.q}</span>
//                         <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-[var(--viva-navy)] text-white' : 'bg-gray-100 text-gray-400'}`}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
//                                 style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
//                                 <polyline points="6 9 12 15 18 9" />
//                             </svg>
//                         </div>
//                     </button>
//                     {open === i && (
//                         <div className="px-5 pb-4">
//                             <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     )
// }

// // ── Main Page ──
// const ExaminationPage = () => {
//     const navigate = useNavigate()
//     const [activeTab, setActiveTab] = useState("timetable")
//     const [timetableType, setTimetableType] = useState("college")

//     return (
//         <div className="min-h-screen bg-[#F8FAFC]">
//             <Header />

//             {/* ── Page Hero ── */}
//             <div className="bg-[var(--viva-navy)] pt-32 pb-0 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-bl-[250px]" />
//                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-tr-[120px]" />

//                 <div className="relative z-10 px-8 md:px-16 xl:px-24">
//                     <button onClick={() => navigate('/')}
//                         className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold mb-8 transition-colors tracking-wider uppercase">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M19 12H5M12 19l-7-7 7-7" />
//                         </svg>
//                         Back to Home
//                     </button>

//                     <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
//                         <div>
//                             <div className="flex items-center gap-2 mb-4">
//                                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                                 <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Examination Portal — 2024–25</span>
//                             </div>
//                             <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//                                 Examination<br />
//                                 <span className="text-[var(--viva-red)]">2024–25</span>
//                             </h1>
//                             <p className="text-white/40 mt-4 text-sm max-w-md leading-relaxed">
//                                 Timetables, results, hall tickets, ATKT info, exam forms and guidelines — all in one place.
//                             </p>
//                         </div>

//                         {/* Quick links */}
//                         <div className="flex flex-wrap gap-2 self-start md:self-end">
//                             {[
//                                 { label: "MU Results", href: "https://mu.ac.in/examinations/results" },
//                                 { label: "Hall Ticket", href: "https://mu.ac.in/examinations/hall-ticket" },
//                                 { label: "MU Portal", href: "https://mu.ac.in" },
//                             ].map((link, i) => (
//                                 <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
//                                     className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all duration-200">
//                                     {link.label}
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                                         <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
//                                     </svg>
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Tab strip */}
//                     <div className="flex gap-1 overflow-x-auto">
//                         {tabs.map((tab) => (
//                             <button key={tab.id}
//                                 onClick={() => setActiveTab(tab.id)}
//                                 className={`flex items-center gap-2 px-5 py-3.5 font-bold text-sm transition-all duration-300 rounded-t-xl whitespace-nowrap ${activeTab === tab.id ? 'bg-[#F8FAFC] text-[var(--viva-navy)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}>
//                                 {tab.icon} {tab.label}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── Main Content ── */}
//             <div className="px-8 md:px-16 xl:px-24 py-0">
//                 <div className="grid grid-cols-1 xl:grid-cols-4 gap-0">

//                     {/* LEFT SIDEBAR */}
//                     <div className="xl:col-span-1 bg-white border-r border-gray-100 min-h-screen pt-8 pr-6">

//                         <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl mb-6">
//                             <div className="w-10 h-10 bg-[var(--viva-navy)] rounded-xl flex items-center justify-center text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
//                             </div>
//                             <div>
//                                 <p className="text-xs font-black text-[var(--viva-navy)] tracking-widest uppercase">Exam Cell</p>
//                                 <p className="text-xs text-gray-400 mt-0.5">Viva College, Virar</p>
//                             </div>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                             {tabs.map((tab) => (
//                                 <button key={tab.id}
//                                     onClick={() => setActiveTab(tab.id)}
//                                     className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-left transition-all duration-200 ${activeTab === tab.id ? 'bg-[var(--viva-navy)] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}>
//                                     <span>{tab.icon}</span>
//                                     {tab.label}
//                                     {activeTab === tab.id && (
//                                         <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="M5 12h14M12 5l7 7-7 7" />
//                                         </svg>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Contact box */}
//                         <div className="mt-8 p-4 bg-[var(--viva-navy)] rounded-2xl">
//                             <p className="text-white font-bold text-xs mb-3">📞 Exam Cell Contact</p>
//                             <p className="text-white/60 text-xs leading-relaxed">Mon–Sat, 10am–4pm</p>
//                             <p className="text-white text-xs font-bold mt-1">+91 250 2450 891</p>
//                             <p className="text-white/60 text-xs mt-2">exam@vivacollege.org</p>
//                         </div>
//                     </div>

//                     {/* RIGHT CONTENT */}
//                     <div className="xl:col-span-3 pt-8 pl-10 min-h-screen">

//                         {/* ── TIMETABLE ── */}
//                         {activeTab === "timetable" && (
//                             <div className="space-y-6 pb-10">
//                                 <div>
//                                     <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Exam Timetable</h2>
//                                     <p className="text-gray-400 text-sm mt-1 pb-6">College internal exams & University semester exams</p>
//                                 </div>

//                                 {/* College / University switcher */}
//                                 <div className="flex bg-gray-100 rounded-2xl p-1.5 gap-1 w-fit">
//                                     {[
//                                         { id: "college", label: "🏫 College Exams" },
//                                         { id: "university", label: "🎓 University Exams" },
//                                     ].map((t) => (
//                                         <button key={t.id}
//                                             onClick={() => setTimetableType(t.id)}
//                                             className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${timetableType === t.id ? 'bg-white text-[var(--viva-navy)] shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>
//                                             {t.label}
//                                         </button>
//                                     ))}
//                                 </div>

//                                 {/* Timetable table */}
//                                 <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
//                                     <div className="px-6 py-4 bg-gradient-to-r from-[#1A2D5A] to-[#0F1C3D] flex items-center justify-between">
//                                         <h3 className="text-white font-extrabold text-sm tracking-wide uppercase">
//                                             {timetableType === "college" ? "College Internal Exams — 2024–25" : "University Exams — 2024–25"}
//                                         </h3>
//                                         {timetableType === "university" && (
//                                             <a href="https://mu.ac.in/examinations/time-table" target="_blank" rel="noopener noreferrer"
//                                                 className="text-white/60 text-xs hover:text-white flex items-center gap-1 transition-colors">
//                                                 Full MU Timetable ↗
//                                             </a>
//                                         )}
//                                     </div>

//                                     {/* Header row */}
//                                     <div className="grid grid-cols-5 px-6 py-3 bg-gray-50 border-b border-gray-100">
//                                         {["Examination", "Stream", "Date", "Time", "Venue"].map((h) => (
//                                             <p key={h} className="text-xs font-extrabold text-gray-400 uppercase tracking-wide">{h}</p>
//                                         ))}
//                                     </div>

//                                     <div className="divide-y divide-gray-50">
//                                         {timetableData[timetableType].map((row, i) => (
//                                             <div key={i} className="grid grid-cols-5 px-6 py-4 hover:bg-gray-50 transition-colors group">
//                                                 <p className="text-sm font-bold text-[var(--viva-navy)]">{row.exam}</p>
//                                                 <p className="text-xs text-gray-500 font-medium">{row.stream}</p>
//                                                 <p className="text-xs font-bold text-[var(--viva-red)]">{row.date}</p>
//                                                 <p className="text-xs text-gray-500">{row.time}</p>
//                                                 <p className="text-xs text-gray-400">{row.venue}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {timetableType === "university" && (
//                                     <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
//                                         <span>⚠️</span>
//                                         <p className="text-xs text-amber-700 leading-relaxed">
//                                             University exam dates are indicative. Always verify the official timetable on <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer" className="font-bold underline">mu.ac.in</a> before your exam.
//                                         </p>
//                                     </div>
//                                 )}
//                             </div>
//                         )}

//                         {/* ── RESULTS ── */}
//                         {activeTab === "results" && (
//                             <div className="space-y-6 pb-10">
//                                 <div>
//                                     <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Exam Results</h2>
//                                     <p className="text-gray-400 text-sm mt-1 pb-6">All results are published on the Mumbai University portal</p>
//                                 </div>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     {resultsLinks.map((item, i) => (
//                                         <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
//                                             className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-lg transition-all duration-200">
//                                             <span className="text-3xl">{item.icon}</span>
//                                             <div className="flex-1">
//                                                 <p className="font-bold text-[var(--viva-navy)] text-sm group-hover:text-[var(--viva-red)] transition-colors">{item.title}</p>
//                                                 <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
//                                             </div>
//                                             <svg className="w-4 h-4 text-gray-300 group-hover:text-[var(--viva-red)] flex-shrink-0 mt-1 transition-colors"
//                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                                                 <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
//                                             </svg>
//                                         </a>
//                                     ))}
//                                 </div>

//                                 <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl flex gap-3">
//                                     <span>💡</span>
//                                     <p className="text-xs text-blue-700 font-medium leading-relaxed">
//                                         Results are declared by Mumbai University. For result-related queries, contact the Exam Cell at the college or visit <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer" className="font-bold underline">mu.ac.in</a>
//                                     </p>
//                                 </div>
//                             </div>
//                         )}

//                         {/* ── HALL TICKET ── */}
//                         {activeTab === "hallticket" && (
//                             <div className="space-y-6 pb-10">
//                                 <div>
//                                     <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Hall Ticket / Admit Card</h2>
//                                     <p className="text-gray-400 text-sm mt-1 pb-6">Download your hall ticket from Mumbai University portal</p>
//                                 </div>

//                                 {/* Steps */}
//                                 <div className="relative">
//                                     <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />
//                                     {[
//                                         "Visit the Mumbai University student portal at mu.ac.in",
//                                         "Login with your PRN number and date of birth",
//                                         "Navigate to 'Hall Ticket' section under Examinations",
//                                         "Select the current semester / exam",
//                                         "Download and print your hall ticket",
//                                         "Carry printed hall ticket to the exam hall — mandatory",
//                                     ].map((step, i) => (
//                                         <div key={i} className="relative flex gap-6 pb-4 group">
//                                             <div className="w-12 h-12 bg-[var(--viva-navy)] rounded-2xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
//                                                 {String(i + 1).padStart(2, '0')}
//                                             </div>
//                                             <div className="flex-1 bg-white rounded-2xl px-6 py-4 border border-gray-100 group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
//                                                 <p className="font-bold text-[var(--viva-navy)] text-sm leading-relaxed">{step}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <a href="https://mu.ac.in/examinations/hall-ticket" target="_blank" rel="noopener noreferrer"
//                                     className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--viva-navy)] text-white font-bold rounded-2xl hover:bg-[var(--viva-dark)] transition-all duration-300 hover:scale-[1.01]">
//                                     Download Hall Ticket from MU Portal ↗
//                                 </a>

//                                 <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
//                                     <span>⚠️</span>
//                                     <p className="text-xs text-amber-700 leading-relaxed">
//                                         Hall tickets are available approximately 10 days before the exam. If you face any issue downloading, contact the Exam Cell immediately.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}

//                         {/* ── ATKT ── */}
//                         {activeTab === "atkt" && (
//                             <div className="space-y-6 pb-10">
//                                 <div>
//                                     <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">ATKT Information</h2>
//                                     <p className="text-gray-400 text-sm mt-1 pb-6">Allowed To Keep Terms — everything you need to know</p>
//                                 </div>

//                                 {/* Info cards */}
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {[
//                                         { icon: "📅", label: "ATKT Exam Dates", value: "Oct/Nov & Mar/Apr" },
//                                         { icon: "📝", label: "Form Deadline", value: "As announced by MU" },
//                                         { icon: "🔗", label: "Apply Online", value: "mu.ac.in portal" },
//                                     ].map((s, i) => (
//                                         <div key={i} className="p-5 bg-white rounded-2xl border border-gray-100">
//                                             <p className="text-2xl mb-2">{s.icon}</p>
//                                             <p className="text-sm font-extrabold text-[var(--viva-navy)]">{s.value}</p>
//                                             <p className="text-xs text-gray-400 mt-1">{s.label}</p>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <FaqAccordion items={atktInfo} />

//                                 <a href="https://mu.ac.in/examinations/atkt" target="_blank" rel="noopener noreferrer"
//                                     className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--viva-navy)] text-white font-bold rounded-2xl hover:bg-[var(--viva-dark)] transition-all duration-300">
//                                     ATKT Details on MU Portal ↗
//                                 </a>
//                             </div>
//                         )}

//                         {/* ── EXAM FORMS ── */}
//                         {activeTab === "forms" && (
//                             <div className="space-y-6 pb-10">
//                                 <div>
//                                     <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Exam Forms</h2>
//                                     <p className="text-gray-400 text-sm mt-1 pb-6">Fill and submit your exam forms on time to avoid late fees</p>
//                                 </div>

//                                 <div className="space-y-3">
//                                     {examForms.map((form, i) => (
//                                         <div key={i} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-md transition-all duration-200 group">
//                                             <div className="flex items-center gap-4">
//                                                 <div className="w-10 h-10 bg-blue-50 text-[var(--viva-navy)] rounded-xl flex items-center justify-center font-extrabold text-sm">
//                                                     {String(i + 1).padStart(2, '0')}
//                                                 </div>
//                                                 <div>
//                                                     <p className="font-bold text-[var(--viva-navy)] text-sm group-hover:text-[var(--viva-red)] transition-colors">{form.title}</p>
//                                                     <p className="text-xs text-gray-400 mt-0.5">{form.desc}</p>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-center gap-3 flex-shrink-0 ml-4">
//                                                 <span className="text-xs text-gray-400 hidden md:block">Deadline: {form.deadline}</span>
//                                                 <a href={form.href} target="_blank" rel="noopener noreferrer"
//                                                     className="px-4 py-2 bg-[var(--viva-navy)] text-white text-xs font-bold rounded-xl hover:bg-[var(--viva-dark)] transition-all">
//                                                     Apply ↗
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
//                                     <span>⚠️</span>
//                                     <p className="text-xs text-amber-700 leading-relaxed">
//                                         Late form submission attracts penalty fees. Fill your exam form within the stipulated dates. Contact the Exam Cell for assistance.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}

//                         {/* ── GUIDELINES ── */}
//                         {activeTab === "guidelines" && (
//                             <div className="space-y-6 pb-10">
//                                 <div>
//                                     <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Exam Guidelines & Rules</h2>
//                                     <p className="text-gray-400 text-sm mt-1 pb-6">Read carefully before appearing for any examination</p>
//                                 </div>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     {guidelines.map((g, i) => (
//                                         <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-md transition-all duration-200 group">
//                                             <span className="text-2xl flex-shrink-0">{g.icon}</span>
//                                             <div>
//                                                 <p className="font-bold text-[var(--viva-navy)] text-sm group-hover:text-[var(--viva-red)] transition-colors">{g.title}</p>
//                                                 <p className="text-xs text-gray-500 mt-1 leading-relaxed">{g.desc}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="p-5 bg-red-50 border border-red-200 rounded-2xl flex gap-3">
//                                     <span>🚨</span>
//                                     <p className="text-xs text-red-700 font-medium leading-relaxed">
//                                         Any student found indulging in malpractice will be immediately expelled from the exam hall and their paper will be cancelled. Repeat offences may lead to debarment from future examinations.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}

//                         {/* ── Bottom CTA ── */}
//                         <div className="p-8 bg-[var(--viva-navy)] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden mb-10">
//                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
//                             <div className="relative z-10">
//                                 <h4 className="text-white font-extrabold text-xl">Need Help?</h4>
//                                 <p className="text-white/50 text-sm mt-1">Exam Cell — Mon to Sat, 10am to 4pm</p>
//                             </div>
//                             <div className="flex gap-3 flex-shrink-0 relative z-10">
//                                 <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer"
//                                     className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-xl text-sm hover:bg-red-700 transition-all hover:scale-105 shadow-lg">
//                                     MU Portal ↗
//                                 </a>
//                                 <button className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all">
//                                     Contact Exam Cell
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default ExaminationPage


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

// ── Tab config ──
const tabs = [
    {
        id: "timetable",
        label: "Exam Timetable",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    },
    {
        id: "results",
        label: "Results",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    },
    {
        id: "hallticket",
        label: "Hall Ticket",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" /></svg>
    },
    {
        id: "atkt",
        label: "ATKT Info",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
    },
    {
        id: "forms",
        label: "Exam Forms",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
    },
    {
        id: "guidelines",
        label: "Exam Guidelines",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
    },
]

// ── Timetable data ──
const timetableData = {
    college: [
        { exam: "Internal Test 1", stream: "All Streams", date: "15 Jan 2025", time: "10:00 AM", venue: "Respective Classrooms" },
        { exam: "Internal Test 2", stream: "All Streams", date: "20 Feb 2025", time: "10:00 AM", venue: "Respective Classrooms" },
        { exam: "Prelim Exam", stream: "All Streams", date: "10 Mar 2025", time: "10:00 AM", venue: "Exam Hall A, B, C" },
        { exam: "Practical Exam (Science)", stream: "B.Sc.", date: "25 Mar 2025", time: "9:00 AM", venue: "Science Labs" },
        { exam: "Project Submission", stream: "BMS / BCAF / BFM", date: "30 Mar 2025", time: "Before 5:00 PM", venue: "Respective Dept." },
    ],
    university: [
        { exam: "Semester End Exam — Odd Sem", stream: "All", date: "Nov 2025", time: "As per MU", venue: "As per Hall Ticket" },
        { exam: "Semester End Exam — Even Sem", stream: "All", date: "Apr–May 2025", time: "As per MU", venue: "As per Hall Ticket" },
        { exam: "ATKT Exam", stream: "All", date: "Oct / Mar", time: "As per MU", venue: "As per Hall Ticket" },
        { exam: "Practical Exam (University)", stream: "B.Sc. / B.A.", date: "Apr 2025", time: "As per MU", venue: "As per Hall Ticket" },
    ]
}

// ── Results data ──
const resultsLinks = [
    { title: "SY / TY Semester Results", desc: "Check your latest semester results on Mumbai University portal", href: "https://mu.ac.in/examinations/results", icon: "📊" },
    { title: "ATKT Results", desc: "Allowed To Keep Terms exam results", href: "https://mu.ac.in/examinations/results", icon: "📋" },
    { title: "Revaluation / Photocopy", desc: "Apply for revaluation or photocopy of answer sheet", href: "https://mu.ac.in/examinations/revaluation", icon: "🔍" },
    { title: "Mark Verification", desc: "Online mark verification for current students", href: "https://mu.ac.in/examinations/verification", icon: "✅" },
]

// ── ATKT data ──
const atktInfo = [
    { q: "What is ATKT?", a: "ATKT (Allowed To Keep Terms) permits students who have failed in limited subjects to appear in the next semester while continuing their studies." },
    { q: "How many subjects can I have ATKT in?", a: "As per University of Mumbai norms, students can have ATKT in a limited number of subjects. The specific limit varies by programme — check with the college exam department." },
    { q: "When are ATKT exams held?", a: "ATKT exams are conducted twice a year — typically in October/November and March/April alongside regular semester exams." },
    { q: "How do I apply for ATKT exam?", a: "Fill the ATKT exam form available on the MU portal within the specified dates. Pay the exam fee online and take a printout of the form." },
    { q: "Will ATKT affect my degree certificate?", a: "No, ATKT does not appear on your final degree certificate. However, it will reflect in your semester marksheets." },
]

// ── Guidelines data ──
const guidelines = [
    { icon: "🪪", title: "Carry Hall Ticket", desc: "Hall ticket is mandatory. Entry will be denied without it. Ensure photo and signature are clearly visible." },
    { icon: "⏰", title: "Report Early", desc: "Report to the exam hall at least 30 minutes before the exam starts. Latecomers may not be allowed entry after 30 minutes." },
    { icon: "🚫", title: "No Electronic Devices", desc: "Mobile phones, smartwatches, earphones, and calculators (unless permitted) are strictly prohibited inside the exam hall." },
    { icon: "✏️", title: "Stationery Rules", desc: "Use only blue or black ballpoint pen. Pencil allowed only for diagrams. No whitener/correction fluid allowed." },
    { icon: "📋", title: "Read Instructions Carefully", desc: "Read all instructions on the question paper before starting. Attempt only the required number of questions." },
    { icon: "🤝", title: "No Malpractice", desc: "Any form of malpractice will result in immediate cancellation of the exam and may lead to debarment." },
    { icon: "💊", title: "Medical Emergency", desc: "Inform the invigilator immediately in case of medical emergency. A medical room is available on campus." },
    { icon: "📝", title: "Answer Sheet Submission", desc: "Submit the answer sheet to the invigilator before leaving. Do not tear or damage any pages." },
]

// ── Exam Forms data ──
const examForms = [
    { title: "Regular Exam Form", desc: "Fill semester exam form for regular students", deadline: "15 days before exam", href: "https://mu.ac.in/examinations/forms", status: "active" },
    { title: "ATKT Exam Form", desc: "Form for students appearing in ATKT exams", deadline: "As announced by MU", href: "https://mu.ac.in/examinations/forms", status: "active" },
    { title: "Ex-Student Exam Form", desc: "Form for ex-students / external students", deadline: "As announced by MU", href: "https://mu.ac.in/examinations/forms", status: "active" },
    { title: "Revaluation Form", desc: "Apply for revaluation within 15 days of result", deadline: "15 days after result", href: "https://mu.ac.in/examinations/revaluation", status: "active" },
    { title: "Photocopy Application", desc: "Request photocopy of assessed answer sheet", deadline: "As announced by MU", href: "https://mu.ac.in/examinations/photocopy", status: "active" },
]

// ── FaqAccordion ──
const FaqAccordion = ({ items }) => {
    const [open, setOpen] = useState(null)
    return (
        <div className="space-y-3">
            {items.map((item, i) => (
                <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${open === i ? 'border-2 border-[var(--viva-navy)]' : 'border-gray-100'}`}>
                    <button onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
                        <span className="text-sm font-bold text-[var(--viva-navy)]">{item.q}</span>
                        <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-[var(--viva-navy)] text-white' : 'bg-gray-100 text-gray-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </button>
                    {open === i && (
                        <div className="px-5 pb-4">
                            <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

// ── Main Page ──
const ExaminationPage = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("timetable")
    const [timetableType, setTimetableType] = useState("college")

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />

            {/* ── Page Hero ── */}
            <div className="bg-[var(--viva-navy)] pt-24 sm:pt-28 lg:pt-32 pb-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] sm:w-[320px] lg:w-[500px] h-[200px] sm:h-[320px] lg:h-[500px] bg-white/5 rounded-bl-[250px]" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/5 rounded-tr-[120px]" />

                <div className="relative z-10 px-4 sm:px-8 md:px-16 xl:px-24">
                    <button onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold mb-6 sm:mb-8 transition-colors tracking-wider uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-10">
                        <div>
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Examination Portal — 2024–25</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                                Examination<br />
                                <span className="text-[var(--viva-red)]">2024–25</span>
                            </h1>
                            <p className="text-white/40 mt-3 sm:mt-4 text-xs sm:text-sm max-w-md leading-relaxed">
                                Timetables, results, hall tickets, ATKT info, exam forms and guidelines — all in one place.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div className="flex flex-wrap gap-2 self-start md:self-end">
                            {[
                                { label: "MU Results", href: "https://mu.ac.in/examinations/results" },
                                { label: "Hall Ticket", href: "https://mu.ac.in/examinations/hall-ticket" },
                                { label: "MU Portal", href: "https://mu.ac.in" },
                            ].map((link, i) => (
                                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all duration-200">
                                    {link.label}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Tab strip */}
                    <div className="flex gap-1 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-3 sm:px-5 py-3 sm:py-3.5 font-bold text-xs sm:text-sm transition-all duration-300 rounded-t-xl whitespace-nowrap ${activeTab === tab.id ? 'bg-[#F8FAFC] text-[var(--viva-navy)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}>
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="px-4 sm:px-8 md:px-16 xl:px-24 py-0">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-0">

                    {/* LEFT SIDEBAR — hidden on mobile, shown on xl+ */}
                    <div className="hidden xl:block xl:col-span-1 bg-white border-r border-gray-100 min-h-screen pt-8 pr-6">

                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl mb-6">
                            <div className="w-10 h-10 bg-[var(--viva-navy)] rounded-xl flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-black text-[var(--viva-navy)] tracking-widest uppercase">Exam Cell</p>
                                <p className="text-xs text-gray-400 mt-0.5">Viva College, Virar</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            {tabs.map((tab) => (
                                <button key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-left transition-all duration-200 ${activeTab === tab.id ? 'bg-[var(--viva-navy)] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}>
                                    <span>{tab.icon}</span>
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Contact box */}
                        <div className="mt-8 p-4 bg-[var(--viva-navy)] rounded-2xl">
                            <p className="text-white font-bold text-xs mb-3">📞 Exam Cell Contact</p>
                            <p className="text-white/60 text-xs leading-relaxed">Mon–Sat, 10am–4pm</p>
                            <p className="text-white text-xs font-bold mt-1">+91 250 2450 891</p>
                            <p className="text-white/60 text-xs mt-2">exam@vivacollege.org</p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="xl:col-span-3 pt-6 sm:pt-8 xl:pl-10 min-h-screen">

                        {/* ── TIMETABLE ── */}
                        {activeTab === "timetable" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--viva-navy)]">Exam Timetable</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-6">College internal exams & University semester exams</p>
                                </div>

                                {/* College / University switcher */}
                                <div className="flex bg-gray-100 rounded-2xl p-1.5 gap-1 w-fit">
                                    {[
                                        { id: "college", label: "🏫 College Exams" },
                                        { id: "university", label: "🎓 University Exams" },
                                    ].map((t) => (
                                        <button key={t.id}
                                            onClick={() => setTimetableType(t.id)}
                                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${timetableType === t.id ? 'bg-white text-[var(--viva-navy)] shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>
                                            {t.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Timetable table */}
                                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                                    <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-[#1A2D5A] to-[#0F1C3D] flex items-center justify-between">
                                        <h3 className="text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase">
                                            {timetableType === "college" ? "College Internal Exams — 2024–25" : "University Exams — 2024–25"}
                                        </h3>
                                        {timetableType === "university" && (
                                            <a href="https://mu.ac.in/examinations/time-table" target="_blank" rel="noopener noreferrer"
                                                className="text-white/60 text-xs hover:text-white flex items-center gap-1 transition-colors">
                                                Full MU Timetable ↗
                                            </a>
                                        )}
                                    </div>

                                    {/* Header row — hidden on small, shown md+ */}
                                    <div className="hidden md:grid grid-cols-5 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-100">
                                        {["Examination", "Stream", "Date", "Time", "Venue"].map((h) => (
                                            <p key={h} className="text-xs font-extrabold text-gray-400 uppercase tracking-wide">{h}</p>
                                        ))}
                                    </div>

                                    <div className="divide-y divide-gray-50">
                                        {timetableData[timetableType].map((row, i) => (
                                            <div key={i} className="grid grid-cols-1 md:grid-cols-5 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors group gap-1 md:gap-0">
                                                <p className="text-sm font-bold text-[var(--viva-navy)]">{row.exam}</p>
                                                <p className="text-xs text-gray-500 font-medium">{row.stream}</p>
                                                <p className="text-xs font-bold text-[var(--viva-red)]">{row.date}</p>
                                                <p className="text-xs text-gray-500">{row.time}</p>
                                                <p className="text-xs text-gray-400">{row.venue}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {timetableType === "university" && (
                                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                                        <span>⚠️</span>
                                        <p className="text-xs text-amber-700 leading-relaxed">
                                            University exam dates are indicative. Always verify the official timetable on <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer" className="font-bold underline">mu.ac.in</a> before your exam.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ── RESULTS ── */}
                        {activeTab === "results" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--viva-navy)]">Exam Results</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-6">All results are published on the Mumbai University portal</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {resultsLinks.map((item, i) => (
                                        <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                                            className="group flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-lg transition-all duration-200">
                                            <span className="text-2xl sm:text-3xl">{item.icon}</span>
                                            <div className="flex-1">
                                                <p className="font-bold text-[var(--viva-navy)] text-sm group-hover:text-[var(--viva-red)] transition-colors">{item.title}</p>
                                                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                                            </div>
                                            <svg className="w-4 h-4 text-gray-300 group-hover:text-[var(--viva-red)] flex-shrink-0 mt-1 transition-colors"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>

                                <div className="p-4 sm:p-5 bg-blue-50 border border-blue-200 rounded-2xl flex gap-3">
                                    <span>💡</span>
                                    <p className="text-xs text-blue-700 font-medium leading-relaxed">
                                        Results are declared by Mumbai University. For result-related queries, contact the Exam Cell at the college or visit <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer" className="font-bold underline">mu.ac.in</a>
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ── HALL TICKET ── */}
                        {activeTab === "hallticket" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--viva-navy)]">Hall Ticket / Admit Card</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-6">Download your hall ticket from Mumbai University portal</p>
                                </div>

                                {/* Steps */}
                                <div className="relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />
                                    {[
                                        "Visit the Mumbai University student portal at mu.ac.in",
                                        "Login with your PRN number and date of birth",
                                        "Navigate to 'Hall Ticket' section under Examinations",
                                        "Select the current semester / exam",
                                        "Download and print your hall ticket",
                                        "Carry printed hall ticket to the exam hall — mandatory",
                                    ].map((step, i) => (
                                        <div key={i} className="relative flex gap-4 sm:gap-6 pb-4 group">
                                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[var(--viva-navy)] rounded-2xl flex items-center justify-center text-white font-extrabold text-xs sm:text-sm flex-shrink-0 z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <div className="flex-1 bg-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-gray-100 group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                                                <p className="font-bold text-[var(--viva-navy)] text-xs sm:text-sm leading-relaxed">{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a href="https://mu.ac.in/examinations/hall-ticket" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 bg-[var(--viva-navy)] text-white font-bold text-sm rounded-2xl hover:bg-[var(--viva-dark)] transition-all duration-300 hover:scale-[1.01]">
                                    Download Hall Ticket from MU Portal ↗
                                </a>

                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                                    <span>⚠️</span>
                                    <p className="text-xs text-amber-700 leading-relaxed">
                                        Hall tickets are available approximately 10 days before the exam. If you face any issue downloading, contact the Exam Cell immediately.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ── ATKT ── */}
                        {activeTab === "atkt" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--viva-navy)]">ATKT Information</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-6">Allowed To Keep Terms — everything you need to know</p>
                                </div>

                                {/* Info cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { icon: "📅", label: "ATKT Exam Dates", value: "Oct/Nov & Mar/Apr" },
                                        { icon: "📝", label: "Form Deadline", value: "As announced by MU" },
                                        { icon: "🔗", label: "Apply Online", value: "mu.ac.in portal" },
                                    ].map((s, i) => (
                                        <div key={i} className="p-4 sm:p-5 bg-white rounded-2xl border border-gray-100">
                                            <p className="text-xl sm:text-2xl mb-2">{s.icon}</p>
                                            <p className="text-sm font-extrabold text-[var(--viva-navy)]">{s.value}</p>
                                            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <FaqAccordion items={atktInfo} />

                                <a href="https://mu.ac.in/examinations/atkt" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 bg-[var(--viva-navy)] text-white font-bold text-sm rounded-2xl hover:bg-[var(--viva-dark)] transition-all duration-300">
                                    ATKT Details on MU Portal ↗
                                </a>
                            </div>
                        )}

                        {/* ── EXAM FORMS ── */}
                        {activeTab === "forms" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--viva-navy)]">Exam Forms</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-6">Fill and submit your exam forms on time to avoid late fees</p>
                                </div>

                                <div className="space-y-3">
                                    {examForms.map((form, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-md transition-all duration-200 group gap-3 sm:gap-0">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="w-9 sm:w-10 h-9 sm:h-10 bg-blue-50 text-[var(--viva-navy)] rounded-xl flex items-center justify-center font-extrabold text-xs sm:text-sm flex-shrink-0">
                                                    {String(i + 1).padStart(2, '0')}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[var(--viva-navy)] text-sm group-hover:text-[var(--viva-red)] transition-colors">{form.title}</p>
                                                    <p className="text-xs text-gray-400 mt-0.5">{form.desc}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 flex-shrink-0 sm:ml-4">
                                                <span className="text-xs text-gray-400 hidden md:block">Deadline: {form.deadline}</span>
                                                <a href={form.href} target="_blank" rel="noopener noreferrer"
                                                    className="px-3 sm:px-4 py-2 bg-[var(--viva-navy)] text-white text-xs font-bold rounded-xl hover:bg-[var(--viva-dark)] transition-all">
                                                    Apply ↗
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                                    <span>⚠️</span>
                                    <p className="text-xs text-amber-700 leading-relaxed">
                                        Late form submission attracts penalty fees. Fill your exam form within the stipulated dates. Contact the Exam Cell for assistance.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ── GUIDELINES ── */}
                        {activeTab === "guidelines" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--viva-navy)]">Exam Guidelines & Rules</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-6">Read carefully before appearing for any examination</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {guidelines.map((g, i) => (
                                        <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-md transition-all duration-200 group">
                                            <span className="text-xl sm:text-2xl flex-shrink-0">{g.icon}</span>
                                            <div>
                                                <p className="font-bold text-[var(--viva-navy)] text-sm group-hover:text-[var(--viva-red)] transition-colors">{g.title}</p>
                                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{g.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 sm:p-5 bg-red-50 border border-red-200 rounded-2xl flex gap-3">
                                    <span>🚨</span>
                                    <p className="text-xs text-red-700 font-medium leading-relaxed">
                                        Any student found indulging in malpractice will be immediately expelled from the exam hall and their paper will be cancelled. Repeat offences may lead to debarment from future examinations.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ── Bottom CTA ── */}
                        <div className="p-5 sm:p-8 bg-[var(--viva-navy)] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5 relative overflow-hidden mb-8 sm:mb-10">
                            <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/5 rounded-bl-[80px]" />
                            <div className="relative z-10">
                                <h4 className="text-white font-extrabold text-lg sm:text-xl">Need Help?</h4>
                                <p className="text-white/50 text-xs sm:text-sm mt-1">Exam Cell — Mon to Sat, 10am to 4pm</p>
                            </div>
                            <div className="flex gap-2 sm:gap-3 flex-shrink-0 relative z-10 flex-wrap">
                                <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer"
                                    className="px-5 sm:px-8 py-3 sm:py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-red-700 transition-all hover:scale-105 shadow-lg">
                                    MU Portal ↗
                                </a>
                                <button className="px-5 sm:px-8 py-3 sm:py-3.5 bg-white/10 text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-white/20 transition-all">
                                    Contact Exam Cell
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ExaminationPage