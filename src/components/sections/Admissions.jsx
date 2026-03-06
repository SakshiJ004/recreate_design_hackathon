// import React, { useState } from "react"

// const wizardData = {
//     UG: {
//         Arts: {
//             eligibility: "Passed HSC (10+2) in any stream. Minimum 45% aggregate marks required.",
//             fees: "₹8,000 – ₹15,000 per year (varies by course)",
//             seats: "60–120 seats per course",
//             courses: ["B.A. Economics", "B.A. English", "B.A. Film & Media", "B.A. History", "B.A. BAMMC", "B.A. Political Science", "B.A. Psychology"],
//             docs: ["SSC Marksheet", "HSC Marksheet", "Leaving Certificate", "Aadhar Card", "Passport Photos (4)", "Caste Certificate (if applicable)"],
//             dates: [
//                 { event: "Applications Open", date: "1st June 2025" },
//                 { event: "Last Date to Apply", date: "30th June 2025" },
//                 { event: "Merit List Round 1", date: "10th July 2025" },
//                 { event: "Classes Begin", date: "1st August 2025" },
//             ]
//         },
//         Commerce: {
//             eligibility: "Passed HSC (10+2) with Commerce stream. Minimum 45% aggregate marks required.",
//             fees: "₹10,000 – ₹20,000 per year (varies by course)",
//             seats: "60–240 seats per course",
//             courses: ["B.Com Accountancy", "B.Com Accounting & Finance", "B.Com Banking & Insurance", "B.Com Financial Markets", "B.Com BMS", "B.Com Investment Management", "B.Com Business Economics"],
//             docs: ["SSC Marksheet", "HSC Marksheet", "Leaving Certificate", "Aadhar Card", "Passport Photos (4)", "Caste Certificate (if applicable)"],
//             dates: [
//                 { event: "Applications Open", date: "1st June 2025" },
//                 { event: "Last Date to Apply", date: "30th June 2025" },
//                 { event: "Merit List Round 1", date: "10th July 2025" },
//                 { event: "Classes Begin", date: "1st August 2025" },
//             ]
//         },
//         Science: {
//             eligibility: "Passed HSC (10+2) with Science stream. Minimum 45% aggregate marks required.",
//             fees: "₹12,000 – ₹25,000 per year (varies by course)",
//             seats: "60–120 seats per course",
//             courses: ["B.Sc. Computer Science", "B.Sc. Information Technology", "B.Sc. Biotechnology", "B.Sc. Chemistry", "B.Sc. Physics", "B.Sc. Mathematics", "B.Sc. Data Science"],
//             docs: ["SSC Marksheet", "HSC Marksheet", "Leaving Certificate", "Aadhar Card", "Passport Photos (4)", "Caste Certificate (if applicable)"],
//             dates: [
//                 { event: "Applications Open", date: "1st June 2025" },
//                 { event: "Last Date to Apply", date: "30th June 2025" },
//                 { event: "Merit List Round 1", date: "10th July 2025" },
//                 { event: "Classes Begin", date: "1st August 2025" },
//             ]
//         }
//     },
//     PG: {
//         Arts: {
//             eligibility: "Passed Bachelor's degree (B.A.) in relevant subject from recognized university. Minimum 45% marks.",
//             fees: "₹10,000 – ₹18,000 per year",
//             seats: "30–60 seats per course",
//             courses: ["M.A. English", "M.A. Economics", "M.A. History", "M.A. Political Science"],
//             docs: ["SSC Marksheet", "HSC Marksheet", "Graduation Marksheets (all years)", "Degree Certificate", "Leaving Certificate", "Aadhar Card", "Passport Photos (4)", "Caste Certificate (if applicable)"],
//             dates: [
//                 { event: "Applications Open", date: "1st June 2025" },
//                 { event: "Last Date to Apply", date: "15th July 2025" },
//                 { event: "Merit List Round 1", date: "25th July 2025" },
//                 { event: "Classes Begin", date: "1st August 2025" },
//             ]
//         },
//         Commerce: {
//             eligibility: "Passed Bachelor's degree (B.Com) from recognized university. Minimum 45% marks.",
//             fees: "₹12,000 – ₹20,000 per year",
//             seats: "30–60 seats per course",
//             courses: ["M.Com Accountancy", "M.Com Banking", "M.Com Business Management"],
//             docs: ["SSC Marksheet", "HSC Marksheet", "Graduation Marksheets (all years)", "Degree Certificate", "Leaving Certificate", "Aadhar Card", "Passport Photos (4)", "Caste Certificate (if applicable)"],
//             dates: [
//                 { event: "Applications Open", date: "1st June 2025" },
//                 { event: "Last Date to Apply", date: "15th July 2025" },
//                 { event: "Merit List Round 1", date: "25th July 2025" },
//                 { event: "Classes Begin", date: "1st August 2025" },
//             ]
//         },
//         Science: {
//             eligibility: "Passed Bachelor's degree (B.Sc.) in relevant subject from recognized university. Minimum 45% marks.",
//             fees: "₹15,000 – ₹25,000 per year",
//             seats: "20–40 seats per course",
//             courses: ["M.Sc. Organic Chemistry", "M.Sc. Botany", "M.Sc. Zoology", "M.Sc. Mathematics", "M.Sc. Information Technology"],
//             docs: ["SSC Marksheet", "HSC Marksheet", "Graduation Marksheets (all years)", "Degree Certificate", "Leaving Certificate", "Aadhar Card", "Passport Photos (4)", "Caste Certificate (if applicable)"],
//             dates: [
//                 { event: "Applications Open", date: "1st June 2025" },
//                 { event: "Last Date to Apply", date: "15th July 2025" },
//                 { event: "Merit List Round 1", date: "25th July 2025" },
//                 { event: "Classes Begin", date: "1st August 2025" },
//             ]
//         }
//     }
// }

// const streamConfig = {
//     Arts: { bg: "bg-[var(--viva-red)]", text: "text-[var(--viva-red)]", light: "bg-red-50", border: "border-[var(--viva-red)]", icon: "🎨" },
//     Commerce: { bg: "bg-[var(--viva-navy)]", text: "text-[var(--viva-navy)]", light: "bg-blue-50", border: "border-[var(--viva-navy)]", icon: "💼" },
//     Science: { bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-600", icon: "🔬" },
// }

// const stepLabels = ["Level", "Stream", "Details"]

// const Admissions = () => {
//     const [step, setStep] = useState(1)
//     const [level, setLevel] = useState(null)
//     const [stream, setStream] = useState(null)
//     const [activeDetail, setActiveDetail] = useState("eligibility")

//     const data = level && stream ? wizardData[level][stream] : null
//     const c = stream ? streamConfig[stream] : null

//     const reset = () => { setStep(1); setLevel(null); setStream(null); setActiveDetail("eligibility") }

//     return (
//         <section className="w-full py-24 bg-[#F8FAFC]">
//             <div className="px-8 md:px-16 xl:px-24">

//                 {/* Header */}
//                 <div className="mb-16">
//                     <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                         <span className="w-6 h-px bg-[var(--viva-red)]" />
//                         Admissions 2025–26
//                     </span>
//                     <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
//                         <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-[1.2]">
//                             Your Admission<br />
//                             <span className="text-[var(--viva-red)]">Made Simple.</span>
//                         </h2>
//                         <div className="flex items-center gap-2">
//                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                             <p className="text-emerald-600 text-sm font-bold">Admissions Open 2025–26</p>
//                         </div>
//                     </div>
//                     <div className="mt-4 w-14 h-1 bg-[var(--viva-gold)] rounded-full" />
//                 </div>

//                 {/* Wizard Container */}
//                 <div className="max-w-4xl mx-auto">

//                     {/* Progress Bar */}
//                     <div className="flex items-center gap-0 mb-12">
//                         {stepLabels.map((label, i) => {
//                             const stepNum = i + 1
//                             const isCompleted = step > stepNum
//                             const isActive = step === stepNum
//                             return (
//                                 <React.Fragment key={i}>
//                                     <div className="flex flex-col items-center gap-2">
//                                         <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm transition-all duration-300 ${isCompleted ? "bg-emerald-500 text-white" :
//                                                 isActive ? "bg-[var(--viva-navy)] text-white ring-4 ring-[var(--viva-navy)]/20" :
//                                                     "bg-gray-100 text-gray-400"
//                                             }`}>
//                                             {isCompleted ? "✓" : stepNum}
//                                         </div>
//                                         <span className={`text-xs font-bold ${isActive ? "text-[var(--viva-navy)]" : isCompleted ? "text-emerald-500" : "text-gray-400"}`}>
//                                             {label}
//                                         </span>
//                                     </div>
//                                     {i < stepLabels.length - 1 && (
//                                         <div className={`flex-1 h-0.5 mb-5 mx-2 transition-all duration-500 ${step > stepNum ? "bg-emerald-500" : "bg-gray-200"}`} />
//                                     )}
//                                 </React.Fragment>
//                             )
//                         })}
//                     </div>

//                     {/* STEP 1 — Level */}
//                     {step === 1 && (
//                         <div className="animate-fadeIn">
//                             <h3 className="text-2xl font-extrabold text-[var(--viva-navy)] mb-3">
//                                 What are you applying for?
//                             </h3>
//                             <p className="text-gray-400 text-sm mb-8">Select your programme level to get started.</p>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                                 {[
//                                     {
//                                         id: "UG", label: "Undergraduate (UG)",
//                                         sub: "After 12th • 3 Year Degree",
//                                         desc: "B.A. / B.Com / B.Sc programmes across Arts, Commerce & Science",
//                                         icon: "🎓", count: "29 Programmes"
//                                     },
//                                     {
//                                         id: "PG", label: "Postgraduate (PG)",
//                                         sub: "After Graduation • 2 Year Degree",
//                                         desc: "M.A. / M.Com / M.Sc programmes for graduates",
//                                         icon: "🏅", count: "12 Programmes"
//                                     }
//                                 ].map((opt) => (
//                                     <button key={opt.id}
//                                         onClick={() => { setLevel(opt.id); setStep(2) }}
//                                         className="group text-left p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
//                                     >
//                                         <div className="flex items-start justify-between mb-5">
//                                             <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
//                                                 {opt.icon}
//                                             </div>
//                                             <span className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-[var(--viva-navy)] rounded-full">
//                                                 {opt.count}
//                                             </span>
//                                         </div>
//                                         <h4 className="text-lg font-extrabold text-[var(--viva-navy)] mb-1">{opt.label}</h4>
//                                         <p className="text-xs text-[var(--viva-red)] font-bold mb-3">{opt.sub}</p>
//                                         <p className="text-sm text-gray-500 leading-relaxed">{opt.desc}</p>
//                                         <div className="mt-5 flex items-center gap-2 text-[var(--viva-navy)] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-200">
//                                             Select {opt.id}
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                                             </svg>
//                                         </div>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 2 — Stream */}
//                     {step === 2 && (
//                         <div>
//                             <div className="flex items-center gap-3 mb-6">
//                                 <button onClick={() => setStep(1)} className="text-gray-400 hover:text-gray-600 transition-colors">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="M19 12H5M12 19l-7-7 7-7" />
//                                     </svg>
//                                 </button>
//                                 <div>
//                                     <h3 className="text-2xl font-extrabold text-[var(--viva-navy)]">Choose your Stream</h3>
//                                     <p className="text-gray-400 text-sm mt-1">{level} Programmes — Select your faculty</p>
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                                 {Object.keys(streamConfig).map((s) => {
//                                     const sc = streamConfig[s]
//                                     return (
//                                         <button key={s}
//                                             onClick={() => { setStream(s); setStep(3) }}
//                                             className={`group text-left p-8 bg-white rounded-3xl border-2 border-gray-100 hover:${sc.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
//                                         >
//                                             <div className={`w-14 h-14 ${sc.light} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                                                 {sc.icon}
//                                             </div>
//                                             <h4 className={`text-lg font-extrabold text-[var(--viva-navy)] group-hover:${sc.text} transition-colors duration-200 mb-1`}>
//                                                 {s}
//                                             </h4>
//                                             <p className="text-xs text-gray-400 mb-4">
//                                                 {wizardData[level][s].courses.length} {level} Programmes
//                                             </p>
//                                             <div className="flex flex-wrap gap-1.5">
//                                                 {wizardData[level][s].courses.slice(0, 3).map((course, i) => (
//                                                     <span key={i} className={`text-[10px] font-medium px-2 py-1 ${sc.light} ${sc.text} rounded-lg`}>
//                                                         {course.split(" ").slice(0, 3).join(" ")}
//                                                     </span>
//                                                 ))}
//                                                 {wizardData[level][s].courses.length > 3 && (
//                                                     <span className="text-[10px] font-medium px-2 py-1 bg-gray-100 text-gray-400 rounded-lg">
//                                                         +{wizardData[level][s].courses.length - 3} more
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </button>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 3 — Details */}
//                     {step === 3 && data && c && (
//                         <div>
//                             {/* Back + Title */}
//                             <div className="flex items-center gap-3 mb-6">
//                                 <button onClick={() => setStep(2)} className="text-gray-400 hover:text-gray-600 transition-colors">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="M19 12H5M12 19l-7-7 7-7" />
//                                     </svg>
//                                 </button>
//                                 <div className="flex items-center gap-3">
//                                     <div className={`px-3 py-1.5 ${c.light} ${c.text} rounded-full text-xs font-extrabold`}>
//                                         {level} • {stream}
//                                     </div>
//                                     <button onClick={reset} className="text-xs text-gray-400 hover:text-gray-600 underline">
//                                         Start Over
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Detail Tabs */}
//                             <div className="flex gap-2 mb-8 flex-wrap">
//                                 {[
//                                     { id: "eligibility", label: "✅ Eligibility" },
//                                     { id: "courses", label: "📚 Courses" },
//                                     { id: "documents", label: "📄 Documents" },
//                                     { id: "dates", label: "📅 Dates" },
//                                 ].map((tab) => (
//                                     <button key={tab.id} onClick={() => setActiveDetail(tab.id)}
//                                         className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${activeDetail === tab.id
//                                                 ? `${c.bg} text-white shadow-md`
//                                                 : "bg-white text-gray-400 border border-gray-200 hover:shadow-sm"
//                                             }`}>
//                                         {tab.label}
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Eligibility */}
//                             {activeDetail === "eligibility" && (
//                                 <div className="space-y-4">
//                                     <div className={`p-7 bg-white rounded-3xl border-2 ${c.border}`}>
//                                         <h4 className={`font-extrabold text-lg ${c.text} mb-3`}>Eligibility Criteria</h4>
//                                         <p className="text-gray-600 leading-relaxed">{data.eligibility}</p>
//                                     </div>
//                                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                         {[
//                                             { label: "Fees", value: data.fees, icon: "💰" },
//                                             { label: "Available Seats", value: data.seats, icon: "🪑" },
//                                             { label: "Duration", value: level === "UG" ? "3 Years" : "2 Years", icon: "⏱️" },
//                                         ].map((info, i) => (
//                                             <div key={i} className={`p-5 ${c.light} rounded-2xl`}>
//                                                 <p className="text-2xl mb-2">{info.icon}</p>
//                                                 <p className="text-xs text-gray-400 font-medium">{info.label}</p>
//                                                 <p className={`font-extrabold ${c.text} mt-1 text-sm`}>{info.value}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Courses */}
//                             {activeDetail === "courses" && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                                     {data.courses.map((course, i) => (
//                                         <div key={i} className={`flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:${c.border} hover:shadow-md transition-all duration-200 group`}>
//                                             <div className={`w-9 h-9 ${c.light} rounded-xl flex items-center justify-center ${c.text} font-extrabold text-sm flex-shrink-0`}>
//                                                 {String(i + 1).padStart(2, '0')}
//                                             </div>
//                                             <span className={`text-sm font-bold text-[var(--viva-navy)] group-hover:${c.text} transition-colors duration-200`}>
//                                                 {course}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Documents */}
//                             {activeDetail === "documents" && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                                     {data.docs.map((doc, i) => (
//                                         <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-sm transition-all duration-200">
//                                             <div className={`w-7 h-7 ${c.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                                                     <polyline points="20 6 9 17 4 12" />
//                                                 </svg>
//                                             </div>
//                                             <span className="text-sm font-medium text-gray-600">{doc}</span>
//                                         </div>
//                                     ))}
//                                     <div className={`md:col-span-2 p-4 ${c.light} rounded-2xl flex gap-3 items-start`}>
//                                         <span>💡</span>
//                                         <p className={`text-xs ${c.text} font-medium leading-relaxed`}>
//                                             Carry 2 sets of all documents (original + photocopy). All photocopies should be self-attested.
//                                         </p>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Dates */}
//                             {activeDetail === "dates" && (
//                                 <div className="space-y-3">
//                                     {data.dates.map((d, i) => (
//                                         <div key={i} className={`flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:${c.border} hover:shadow-md transition-all duration-200 group`}>
//                                             <div className="flex items-center gap-4">
//                                                 <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center text-white font-extrabold text-sm`}>
//                                                     {String(i + 1).padStart(2, '0')}
//                                                 </div>
//                                                 <span className={`font-bold text-sm text-[var(--viva-navy)] group-hover:${c.text} transition-colors duration-200`}>{d.event}</span>
//                                             </div>
//                                             <span className={`text-sm font-extrabold ${c.text} ${c.light} px-4 py-1.5 rounded-full`}>{d.date}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Apply CTA */}
//                             <div className={`mt-8 p-7 bg-[var(--viva-navy)] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5`}>
//                                 <div>
//                                     <h4 className="text-white font-extrabold text-lg">Ready to Apply?</h4>
//                                     <p className="text-white/60 text-sm mt-1">Apply online for {level} {stream} programmes at Viva College</p>
//                                 </div>
//                                 <div className="flex gap-3 flex-shrink-0">
//                                     <button className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-xl text-sm hover:bg-red-700 transition-all duration-200 hover:scale-105">
//                                         Apply Now →
//                                     </button>
//                                     <button className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all duration-200">
//                                         Download Brochure
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Admissions

// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const AdmissionsHome = () => {
//     const navigate = useNavigate()

//     return (
//         <section className="w-full py-24 bg-white">
//             <div className="px-8 md:px-16 xl:px-24">

//                 {/* Header */}
//                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
//                     <div className='pb-10'>
//                         <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                             <span className="w-6 h-px bg-[var(--viva-red)]" />
//                             Admissions 2025–26
//                         </span>
//                         <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-[1.2]">
//                             Start Your<br />
//                             <span className="text-[var(--viva-red)]">Journey Today.</span>
//                         </h2>
//                         <div className="mt-4 w-14 h-1 bg-[var(--viva-gold)] rounded-full" />
//                     </div>
//                     <div className="flex items-center gap-2 pb-4">
//                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                         <p className="text-emerald-600 text-sm font-bold">Admissions Open 2025–26</p>
//                     </div>
//                 </div>

//                 {/* 2 Cards — UG & PG */}
//                 <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//                     {[
//                         {
//                             id: "UG",
//                             label: "Undergraduate",
//                             sub: "After 12th • 3 Year Degree",
//                             desc: "29 programmes across Arts, Commerce & Science streams.",
//                             icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
//                             bg: "bg-[var(--viva-red)]",
//                             light: "bg-red-50",
//                             text: "text-[var(--viva-red)]",
//                             streams: ["🎨 Arts — 7", "💼 Commerce — 10", "🔬 Science — 12"],
//                         },
//                         {
//                             id: "PG",
//                             label: "Postgraduate",
//                             sub: "After Graduation • 2 Year Degree",
//                             desc: "12 programmes across Arts, Commerce & Science streams.",
//                             icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
//                             bg: "bg-[var(--viva-navy)]",
//                             light: "bg-blue-50",
//                             text: "text-[var(--viva-navy)]",
//                             streams: ["🎨 Arts — 4", "💼 Commerce — 3", "🔬 Science — 5"],
//                         },
//                     ].map((opt) => (
//                         <button key={opt.id}
//                             onClick={() => navigate('/admissions', { state: { level: opt.id } })}
//                             className="group text-left p-8 bg-[#F8FAFC] rounded-3xl border-2 border-gray-100 hover:border-[var(--viva-navy)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
//                             <div className="flex items-start justify-between mb-6">
//                                 <div className={`w-14 h-14 ${opt.bg} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
//                                     {opt.icon}
//                                 </div>
//                                 <span className={`text-xs font-bold px-3 py-1.5 ${opt.light} ${opt.text} rounded-full`}>
//                                     {opt.id}
//                                 </span>
//                             </div>
//                             <h3 className="pt-4 text-xl font-extrabold text-[var(--viva-navy)] mb-1">{opt.label}</h3>
//                             <p className={`text-xs font-bold ${opt.text}`}>{opt.sub}</p>
//                             <p className="text-sm text-gray-500 pb-5">{opt.desc}</p>
//                             <div className="flex gap-2 flex-wrap pb-6">
//                                 {opt.streams.map((s, i) => (
//                                     <span key={i} className={`text-xs font-semibold px-3 py-1.5 ${opt.light} ${opt.text} rounded-full`}>{s}</span>
//                                 ))}
//                             </div>
//                             <div className={`flex items-center gap-2 ${opt.text} text-sm font-bold cursor-pointer`}>
//                                 View Admission Details
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M5 12h14M12 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </button>
//                     ))}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[var(--viva-navy)] rounded-3xl px-8 py-6">
//                     <div>
//                         <h4 className="text-white font-extrabold text-lg">Need help choosing the right programme?</h4>
//                         <p className="text-white/50 text-sm mt-1">Our admission team is ready to guide you.</p>
//                     </div>
//                     <div className="flex gap-3">
//                         <button onClick={() => navigate('/admissions')} className="px-7 py-3 bg-[var(--viva-red)] text-white font-bold rounded-full text-sm hover:bg-red-700 transition-all hover:scale-105 cursor-pointer">
//                             Explore Admissions →
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default AdmissionsHome



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdmissionsHome = () => {
    const navigate = useNavigate()
    const [hoveredCard, setHoveredCard] = useState(null)

    const cards = [
        {
            id: "UG",
            label: "Undergraduate",
            shortLabel: "UG",
            sub: "After 12th • 3 Year Degree",
            desc: "Begin your academic journey with 29 programmes across Arts, Commerce & Science.",
            streams: [
                { name: "Arts", count: 7, color: "bg-red-100 text-[var(--viva-red)]" },
                { name: "Commerce", count: 10, color: "bg-blue-100 text-[var(--viva-navy)]" },
                { name: "Science", count: 12, color: "bg-emerald-100 text-emerald-700" },
            ],
            accent: "#C8102E",
            accentLight: "#FEF2F2",
            number: "01",
        },
        {
            id: "PG",
            label: "Postgraduate",
            shortLabel: "PG",
            sub: "After Graduation • 2 Year Degree",
            desc: "Advance your expertise with 12 specialised M.A., M.Com & M.Sc programmes.",
            streams: [
                { name: "Arts", count: 4, color: "bg-red-100 text-[var(--viva-red)]" },
                { name: "Commerce", count: 3, color: "bg-blue-100 text-[var(--viva-navy)]" },
                { name: "Science", count: 5, color: "bg-emerald-100 text-emerald-700" },
            ],
            accent: "#0F1C3D",
            accentLight: "#EFF3FF",
            number: "02",
        },
    ]

    return (
        <section id='admissions' className="w-full bg-white overflow-hidden">

            {/* Top diagonal band */}
            <div className="relative bg-[var(--viva-navy)] py-16 px-8 md:px-16 xl:px-24"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}>
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
                            <span className="w-6 h-px bg-[var(--viva-red)]" />
                            Admissions 2025–26
                        </span>
                        <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-[1.1]">
                            Your Future<br />
                            <span style={{ WebkitTextStroke: '2px #C8102E', color: 'transparent' }}>Starts Here.</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-sm font-bold">Admissions Open 2025–26</span>
                    </div>
                </div>
            </div>

            {/* Cards — overlap the diagonal */}
            <div className="px-8 pt-10 md:px-16 xl:px-24 -mt-8 pb-16">
                <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => navigate('/admissions', { state: { level: card.id } })}
                            className="relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 group"
                            style={{
                                boxShadow: hoveredCard === card.id
                                    ? `0 24px 60px ${card.accent}30`
                                    : '0 4px 24px rgba(0,0,0,0.08)',
                                transform: hoveredCard === card.id ? 'translateY(-6px)' : 'translateY(0)',
                            }}>

                            {/* Background */}
                            <div className="absolute inset-0 transition-all duration-500"
                                style={{ backgroundColor: hoveredCard === card.id ? card.accent : '#F8FAFC' }} />

                            {/* Big number watermark */}
                            <div className="absolute top-4 right-6 font-extrabold select-none transition-all duration-500 leading-none"
                                style={{
                                    fontSize: '120px',
                                    color: hoveredCard === card.id ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                                }}>
                                {card.number}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8">

                                {/* Top row */}
                                <div className="flex items-start justify-between pb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500"
                                            style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : card.accentLight }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                                                stroke={hoveredCard === card.id ? 'white' : card.accent}
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-black tracking-widest uppercase transition-colors duration-500"
                                                style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.5)' : '#9CA3AF' }}>
                                                Programme Level
                                            </p>
                                            <p className="text-lg font-extrabold transition-colors duration-500"
                                                style={{ color: hoveredCard === card.id ? 'white' : card.accent }}>
                                                {card.shortLabel}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                                        style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : 'white', border: `2px solid ${hoveredCard === card.id ? 'rgba(255,255,255,0.2)' : '#E5E7EB'}` }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke={hoveredCard === card.id ? 'white' : card.accent}
                                            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            style={{ transform: hoveredCard === card.id ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.4s' }}>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl font-extrabold mb-1 transition-colors duration-500"
                                    style={{ color: hoveredCard === card.id ? 'white' : '#0F1C3D' }}>
                                    {card.label}
                                </h3>
                                <p className="text-sm font-bold mb-3 transition-colors duration-500"
                                    style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.6)' : card.accent }}>
                                    {card.sub}
                                </p>
                                <p className="text-sm leading-relaxed mb-7 transition-colors duration-500"
                                    style={{ color: hoveredCard === card.id ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>
                                    {card.desc}
                                </p>

                                {/* Divider */}
                                <div className="h-px mb-6 transition-all duration-500"
                                    style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : '#E5E7EB' }} />

                                {/* Stream pills */}
                                <div className="pt-8 flex gap-2 flex-wrap">
                                    {card.streams.map((s, i) => (
                                        <div key={i}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500"
                                            style={{
                                                backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.15)' : 'white',
                                                color: hoveredCard === card.id ? 'white' : '#374151',
                                                border: hoveredCard === card.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid #E5E7EB'
                                            }}>
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: hoveredCard === card.id ? 'rgba(255,255,255,0.6)' : card.accent }} />
                                            {s.name} — {s.count}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom strip */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl px-7 py-5 border border-gray-100 bg-[#F8FAFC]">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[var(--viva-navy)] rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-extrabold text-[var(--viva-navy)] text-sm">Need help choosing?</p>
                            <p className="text-gray-400 text-xs">Call us: +91 250 2450 891 • Mon–Sat, 10am–5pm</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/admissions')}
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--viva-red)] text-white font-bold rounded-full text-sm hover:bg-red-700 transition-all hover:scale-105 flex-shrink-0">
                        Explore All Admissions
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AdmissionsHome