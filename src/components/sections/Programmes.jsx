// import React, { useState } from "react"

// const programmes = {
//     UG: {
//         Arts: [
//             { name: "B.A. Economics", duration: "3 Years", desc: "Analytical thinking & financial insight", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
//             { name: "B.A. English", duration: "3 Years", desc: "Literature, language & communication", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
//             { name: "B.A. Film, Television & New Media Production", duration: "3 Years", desc: "Media, filmmaking & digital content", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg> },
//             { name: "B.A. History", duration: "3 Years", desc: "Civilizations, events & heritage", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
//             { name: "B.A. Mass Media & Communication (BAMMC)", duration: "3 Years", desc: "Journalism, PR & mass communication", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> },
//             { name: "B.A. Political Science", duration: "3 Years", desc: "Governance, policy & global affairs", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
//             { name: "B.A. Psychology", duration: "3 Years", desc: "Human behavior & mental processes", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" /></svg> },
//         ],
//         Commerce: [
//             { name: "B.Com Accountancy", duration: "3 Years", desc: "Core accounting & financial reporting", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
//             { name: "B.Com Accounting & Finance (BCAF)", duration: "3 Years", desc: "Financial mastery & accounting expertise", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
//             { name: "B.Com Banking & Insurance (BCBI)", duration: "3 Years", desc: "Banking systems & insurance management", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
//             { name: "B.Com Business Economics", duration: "3 Years", desc: "Economics applied to business decisions", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
//             { name: "B.Com Commerce", duration: "3 Years", desc: "Core commerce & business fundamentals", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
//             { name: "B.Com Environment Management & Economics", duration: "3 Years", desc: "Sustainable business & green economy", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.87a.45.45 0 0 0 .8.4C6.71 17 9.5 15 12 15c4 0 5-2 5-6z" /><path d="M3 3l18 18" /></svg> },
//             { name: "B.Com Financial Markets (BFM)", duration: "3 Years", desc: "Stock markets, trading & investments", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
//             { name: "B.Com Financial Management (BFMG)", duration: "3 Years", desc: "Corporate finance & fund management", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
//             { name: "B.Com Investment Management (BIM)", duration: "3 Years", desc: "Portfolio & investment strategies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
//             { name: "B.Com Management Studies (BMS)", duration: "3 Years", desc: "Business management & strategy", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
//         ],
//         Science: [
//             { name: "B.Sc. Biochemistry", duration: "3 Years", desc: "Chemical processes in living organisms", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" /></svg> },
//             { name: "B.Sc. Biotechnology", duration: "3 Years", desc: "Life sciences & biotech innovations", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M12 2v20" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" /><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10" /></svg> },
//             { name: "B.Sc. Botany", duration: "3 Years", desc: "Plant science & ecology", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 12C12 7 7 3 2 5c0 5 4 9 10 7" /><path d="M12 12c0-5 5-9 10-7-1 5-5 9-10 7" /></svg> },
//             { name: "B.Sc. Chemistry", duration: "3 Years", desc: "Organic, inorganic & physical chemistry", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg> },
//             { name: "B.Sc. Computer Science", duration: "3 Years", desc: "Programming, algorithms & software", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
//             { name: "B.Sc. Data Science", duration: "3 Years", desc: "Data analysis, ML & AI fundamentals", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
//             { name: "B.Sc. Hotel & Tourism Management", duration: "3 Years", desc: "Hospitality & tourism industry skills", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
//             { name: "B.Sc. Information Technology", duration: "3 Years", desc: "Networks, databases & IT systems", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
//             { name: "B.Sc. Mathematics", duration: "3 Years", desc: "Pure & applied mathematics", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
//             { name: "B.Sc. Physics", duration: "3 Years", desc: "Mechanics, optics & quantum theory", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg> },
//             { name: "B.Sc. Statistics", duration: "3 Years", desc: "Data, probability & statistical analysis", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
//             { name: "B.Sc. Zoology", duration: "3 Years", desc: "Animal science & biodiversity", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> },
//         ],
//     },
//     PG: {
//         Arts: [
//             { name: "M.A. English", duration: "2 Years", desc: "Advanced literature & language studies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
//             { name: "M.A. Economics", duration: "2 Years", desc: "Advanced economic theory & policy", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
//             { name: "M.A. History", duration: "2 Years", desc: "Advanced historical research & analysis", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
//             { name: "M.A. Political Science", duration: "2 Years", desc: "Advanced governance & political theory", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
//         ],
//         Commerce: [
//             { name: "M.Com Accountancy", duration: "2 Years", desc: "Advanced accounting & audit practices", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg> },
//             { name: "M.Com Banking", duration: "2 Years", desc: "Advanced banking systems & finance", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
//             { name: "M.Com Business Management", duration: "2 Years", desc: "Advanced business & management studies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
//         ],
//         Science: [
//             { name: "M.Sc. Organic Chemistry", duration: "2 Years", desc: "Advanced organic synthesis & research", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg> },
//             { name: "M.Sc. Botany", duration: "2 Years", desc: "Advanced plant biology & research", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 12C12 7 7 3 2 5c0 5 4 9 10 7" /><path d="M12 12c0-5 5-9 10-7-1 5-5 9-10 7" /></svg> },
//             { name: "M.Sc. Zoology", duration: "2 Years", desc: "Advanced animal science & biodiversity", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> },
//             { name: "M.Sc. Mathematics", duration: "2 Years", desc: "Advanced pure & applied mathematics", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
//             { name: "M.Sc. Information Technology", duration: "2 Years", desc: "Advanced IT systems & networks", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
//         ],
//     }
// }

// const streamConfig = {
//     Arts: {
//         bg: "bg-[var(--viva-red)]", text: "text-[var(--viva-red)]", light: "bg-red-50",
//         border: "border-[var(--viva-red)]", gradient: "from-red-600 to-red-800",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
//     },
//     Commerce: {
//         bg: "bg-[var(--viva-navy)]", text: "text-[var(--viva-navy)]", light: "bg-blue-50",
//         border: "border-[var(--viva-navy)]", gradient: "from-[#1A2D5A] to-[#0F1C3D]",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
//     },
//     Science: {
//         bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50",
//         border: "border-emerald-600", gradient: "from-emerald-600 to-emerald-800",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg>
//     },
// }

// const Programmes = () => {
//     const [level, setLevel] = useState("UG")
//     const [stream, setStream] = useState("Arts")
//     const [expandedCourse, setExpandedCourse] = useState(null)
//     const [animating, setAnimating] = useState(false)

//     const c = streamConfig[stream]
//     const currentCourses = programmes[level][stream]

//     const handleLevel = (l) => {
//         if (l === level) return
//         setAnimating(true)
//         setExpandedCourse(null)
//         setTimeout(() => { setLevel(l); setStream("Arts"); setAnimating(false) }, 200)
//     }

//     const handleStream = (s) => {
//         if (s === stream) return
//         setAnimating(true)
//         setExpandedCourse(null)
//         setTimeout(() => { setStream(s); setAnimating(false) }, 200)
//     }

//     return (
//         <section id="programmes" className="w-full py-24 bg-[#F8FAFC]">
//             <div className="px-8 md:px-16 xl:px-24">

//                 {/* Header */}
//                 <div className="pb-10">
//                     <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]">
//                         <span className="w-6 h-px bg-[var(--viva-red)]" />
//                         Academic Programmes
//                     </span>
//                     <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
//                         <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--viva-navy)] leading-[1.2]">
//                             Find Your<br />
//                             <span className="text-[var(--viva-red)]">Perfect Course.</span>
//                         </h2>
//                         <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
//                             Explore UG & PG programmes across Arts, Commerce & Science.
//                         </p>
//                     </div>
//                     <div className="mt-4 w-14 h-1 bg-[var(--viva-gold)] rounded-full" />
//                 </div>

//                 {/* Main Split */}
//                 <div className={`grid grid-cols-1 xl:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>

//                     {/* LEFT PANEL — Controls */}
//                     <div className="xl:col-span-1 bg-[#0F1C3D] flex flex-col">

//                         {/* UG / PG */}
//                         <div className="px-8 py-6 border-b border-white/10">
//                             <p className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase pb-4">Programme Level</p>
//                             <div className="flex gap-2">
//                                 {["UG", "PG"].map((l) => (
//                                     <button key={l} onClick={() => handleLevel(l)}
//                                         className={`flex-1 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-300 ${level === l
//                                             ? "bg-white text-[var(--viva-navy)] shadow-md"
//                                             : "bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/80"
//                                             }`}>
//                                         {l}
//                                         <span className="block text-[9px] font-medium opacity-60 mt-0.5">
//                                             {l === "UG" ? "Undergraduate" : "Postgraduate"}
//                                         </span>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Stream */}
//                         <div className="px-8 py-6 border-b border-white/10">
//                             <p className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase mb-3">Faculty / Stream</p>
//                             <div className="flex flex-col gap-2">
//                                 {Object.keys(programmes[level]).map((s) => (
//                                     <button key={s} onClick={() => handleStream(s)}
//                                         className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 border-l-4 ${stream === s
//                                             ? `${streamConfig[s].bg} text-white border-white`
//                                             : "bg-white/5 text-white/70 border-transparent hover:bg-white/15 hover:text-white"
//                                             }`}>
//                                         <span>{streamConfig[s].icon}</span>
//                                         <span>{s}</span>
//                                         <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${stream === s ? "bg-white/20 text-white" : "bg-white/10 text-white/30"
//                                             }`}>
//                                             {programmes[level][s].length}
//                                         </span>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Info */}
//                         <div className="px-8 py-5 mt-auto">
//                             <p className="text-white/50 text-xs leading-relaxed">
//                                 {level === "UG" ? "Eligibility: 10+2 pass • Duration: 3 Years" : "Eligibility: Graduation • Duration: 2 Years"}
//                             </p>
//                         </div>
//                     </div>

//                     {/* RIGHT PANEL — Course List */}
//                     <div className="xl:col-span-4 bg-white flex flex-col">

//                         {/* Right Header */}
//                         <div className={`px-8 py-6 bg-gradient-to-r ${c.gradient} flex items-center justify-between`}>
//                             <div>
//                                 <p className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase">
//                                     {level} • Faculty of {stream}
//                                 </p>
//                                 <h3 className="text-white font-extrabold text-xl mt-1">
//                                     {currentCourses.length} Programmes
//                                 </h3>
//                             </div>
//                             <div className="text-6xl font-black text-white/10 select-none">{stream[0]}</div>
//                         </div>

//                         {/* Course List */}
//                         <div className="flex-1 divide-y divide-gray-50" style={{ maxHeight: '480px', overflowY: 'auto', scrollbarWidth: 'none' }}>
//                             {currentCourses.map((course, i) => (
//                                 <div key={i}>
//                                     {/* Course Row */}
//                                     <button
//                                         onClick={() => setExpandedCourse(expandedCourse === i ? null : i)}
//                                         className={`w-full flex items-center gap-4 px-8 py-4 text-left transition-all duration-200 group hover:bg-gray-50 ${expandedCourse === i ? "bg-gray-50" : ""
//                                             }`}
//                                     >
//                                         {/* Icon */}
//                                         <div className={`w-11 h-11 ${c.light} rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}>
//                                             {course.icon}
//                                         </div>

//                                         {/* Text */}
//                                         <div className="flex-1 min-w-0">
//                                             <h4 className={`text-sm font-extrabold leading-snug transition-colors duration-200 ${expandedCourse === i ? c.text : "text-[var(--viva-navy)] group-hover:" + c.text
//                                                 }`}>
//                                                 {course.name}
//                                             </h4>
//                                             <p className="text-xs text-gray-400 mt-0.5">{course.duration}</p>
//                                         </div>

//                                         {/* Arrow */}
//                                         <div className={`w-8 h-8 rounded-full ${c.light} flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={expandedCourse === i ? "white" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={expandedCourse === i ? "" : c.text}>
//                                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                                             </svg>
//                                         </div>
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="pt-12 text-center">
//                     <p className="text-gray-400 text-sm pb-4">Ready to start your journey at Viva College?</p>
//                     <div className="flex justify-center gap-4 flex-wrap">
//                         <button className="px-10 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105">
//                             Apply Now →
//                         </button>
//                         <button className="px-10 py-3.5 border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300 text-sm">
//                             Download Prospectus
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Programmes



import React, { useState } from "react"

const programmes = {
    UG: {
        Arts: [
            { name: "B.A. Economics", duration: "3 Years", desc: "Analytical thinking & financial insight", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
            { name: "B.A. English", duration: "3 Years", desc: "Literature, language & communication", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
            { name: "B.A. Film, Television & New Media Production", duration: "3 Years", desc: "Media, filmmaking & digital content", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg> },
            { name: "B.A. History", duration: "3 Years", desc: "Civilizations, events & heritage", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
            { name: "B.A. Mass Media & Communication (BAMMC)", duration: "3 Years", desc: "Journalism, PR & mass communication", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> },
            { name: "B.A. Political Science", duration: "3 Years", desc: "Governance, policy & global affairs", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
            { name: "B.A. Psychology", duration: "3 Years", desc: "Human behavior & mental processes", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" /></svg> },
        ],
        Commerce: [
            { name: "B.Com Accountancy", duration: "3 Years", desc: "Core accounting & financial reporting", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
            { name: "B.Com Accounting & Finance (BCAF)", duration: "3 Years", desc: "Financial mastery & accounting expertise", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
            { name: "B.Com Banking & Insurance (BCBI)", duration: "3 Years", desc: "Banking systems & insurance management", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
            { name: "B.Com Business Economics", duration: "3 Years", desc: "Economics applied to business decisions", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
            { name: "B.Com Commerce", duration: "3 Years", desc: "Core commerce & business fundamentals", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
            { name: "B.Com Environment Management & Economics", duration: "3 Years", desc: "Sustainable business & green economy", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.87a.45.45 0 0 0 .8.4C6.71 17 9.5 15 12 15c4 0 5-2 5-6z" /><path d="M3 3l18 18" /></svg> },
            { name: "B.Com Financial Markets (BFM)", duration: "3 Years", desc: "Stock markets, trading & investments", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
            { name: "B.Com Financial Management (BFMG)", duration: "3 Years", desc: "Corporate finance & fund management", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
            { name: "B.Com Investment Management (BIM)", duration: "3 Years", desc: "Portfolio & investment strategies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
            { name: "B.Com Management Studies (BMS)", duration: "3 Years", desc: "Business management & strategy", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
        ],
        Science: [
            { name: "B.Sc. Biochemistry", duration: "3 Years", desc: "Chemical processes in living organisms", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" /></svg> },
            { name: "B.Sc. Biotechnology", duration: "3 Years", desc: "Life sciences & biotech innovations", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M12 2v20" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" /><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10" /></svg> },
            { name: "B.Sc. Botany", duration: "3 Years", desc: "Plant science & ecology", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 12C12 7 7 3 2 5c0 5 4 9 10 7" /><path d="M12 12c0-5 5-9 10-7-1 5-5 9-10 7" /></svg> },
            { name: "B.Sc. Chemistry", duration: "3 Years", desc: "Organic, inorganic & physical chemistry", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg> },
            { name: "B.Sc. Computer Science", duration: "3 Years", desc: "Programming, algorithms & software", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
            { name: "B.Sc. Data Science", duration: "3 Years", desc: "Data analysis, ML & AI fundamentals", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
            { name: "B.Sc. Hotel & Tourism Management", duration: "3 Years", desc: "Hospitality & tourism industry skills", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
            { name: "B.Sc. Information Technology", duration: "3 Years", desc: "Networks, databases & IT systems", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
            { name: "B.Sc. Mathematics", duration: "3 Years", desc: "Pure & applied mathematics", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
            { name: "B.Sc. Physics", duration: "3 Years", desc: "Mechanics, optics & quantum theory", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg> },
            { name: "B.Sc. Statistics", duration: "3 Years", desc: "Data, probability & statistical analysis", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
            { name: "B.Sc. Zoology", duration: "3 Years", desc: "Animal science & biodiversity", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> },
        ],
    },
    PG: {
        Arts: [
            { name: "M.A. English", duration: "2 Years", desc: "Advanced literature & language studies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
            { name: "M.A. Economics", duration: "2 Years", desc: "Advanced economic theory & policy", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
            { name: "M.A. History", duration: "2 Years", desc: "Advanced historical research & analysis", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
            { name: "M.A. Political Science", duration: "2 Years", desc: "Advanced governance & political theory", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
        ],
        Commerce: [
            { name: "M.Com Accountancy", duration: "2 Years", desc: "Advanced accounting & audit practices", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg> },
            { name: "M.Com Banking", duration: "2 Years", desc: "Advanced banking systems & finance", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
            { name: "M.Com Business Management", duration: "2 Years", desc: "Advanced business & management studies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
        ],
        Science: [
            { name: "M.Sc. Organic Chemistry", duration: "2 Years", desc: "Advanced organic synthesis & research", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg> },
            { name: "M.Sc. Botany", duration: "2 Years", desc: "Advanced plant biology & research", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 12C12 7 7 3 2 5c0 5 4 9 10 7" /><path d="M12 12c0-5 5-9 10-7-1 5-5 9-10 7" /></svg> },
            { name: "M.Sc. Zoology", duration: "2 Years", desc: "Advanced animal science & biodiversity", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> },
            { name: "M.Sc. Mathematics", duration: "2 Years", desc: "Advanced pure & applied mathematics", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
            { name: "M.Sc. Information Technology", duration: "2 Years", desc: "Advanced IT systems & networks", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
        ],
    }
}

const streamConfig = {
    Arts: {
        bg: "bg-[var(--viva-red)]", text: "text-[var(--viva-red)]", light: "bg-red-50",
        border: "border-[var(--viva-red)]", gradient: "from-red-600 to-red-800",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
    },
    Commerce: {
        bg: "bg-[var(--viva-navy)]", text: "text-[var(--viva-navy)]", light: "bg-blue-50",
        border: "border-[var(--viva-navy)]", gradient: "from-[#1A2D5A] to-[#0F1C3D]",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    },
    Science: {
        bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50",
        border: "border-emerald-600", gradient: "from-emerald-600 to-emerald-800",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg>
    },
}

const Programmes = () => {
    const [level, setLevel] = useState("UG")
    const [stream, setStream] = useState("Arts")
    const [expandedCourse, setExpandedCourse] = useState(null)
    const [animating, setAnimating] = useState(false)

    const c = streamConfig[stream]
    const currentCourses = programmes[level][stream]

    const handleLevel = (l) => {
        if (l === level) return
        setAnimating(true)
        setExpandedCourse(null)
        setTimeout(() => { setLevel(l); setStream("Arts"); setAnimating(false) }, 200)
    }

    const handleStream = (s) => {
        if (s === stream) return
        setAnimating(true)
        setExpandedCourse(null)
        setTimeout(() => { setStream(s); setAnimating(false) }, 200)
    }

    return (
        <section id="programmes" className="w-full bg-[#F8FAFC]
            py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20
        ">
            <div className="
                px-4
                sm:px-6
                md:px-8
                lg:px-12
                xl:px-16
                2xl:px-20
            ">

                {/* Header */}
                <div className="pb-5 sm:pb-6 lg:pb-8 xl:pb-10">
                    <span className="inline-flex items-center gap-2 font-bold tracking-[0.3em] uppercase text-[var(--viva-red)]
                        text-[10px] sm:text-[10px] md:text-xs
                    ">
                        <span className="w-4 sm:w-5 md:w-6 h-px bg-[var(--viva-red)]" />
                        Academic Programmes
                    </span>
                    <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4">
                        <h2 className="font-extrabold text-[var(--viva-navy)] leading-[1.2]
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-3xl
                            xl:text-4xl
                            2xl:text-4xl
                        ">
                            Find Your<br />
                            <span className="text-[var(--viva-red)]">Perfect Course.</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed
                            text-[11px] sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm
                            max-w-[200px] sm:max-w-xs
                        ">
                            Explore UG & PG programmes across Arts, Commerce & Science.
                        </p>
                    </div>
                    <div className="mt-3 w-10 sm:w-12 h-1 bg-[var(--viva-gold)] rounded-full" />
                </div>

                {/* ── MOBILE / SM / MD — Stacked (320px - 1023px) ── */}
                <div className={`lg:hidden transition-all duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>

                    {/* Controls */}
                    <div className="bg-[#0F1C3D] rounded-2xl overflow-hidden mb-3">

                        {/* UG / PG */}
                        <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10">
                            <p className="text-white/60 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-2 sm:mb-3">
                                Programme Level
                            </p>
                            <div className="flex gap-2">
                                {["UG", "PG"].map((l) => (
                                    <button key={l} onClick={() => handleLevel(l)}
                                        className={`flex-1 py-2 rounded-xl font-extrabold transition-all duration-300
                                            text-xs sm:text-sm
                                            ${level === l
                                                ? "bg-white text-[var(--viva-navy)] shadow-md"
                                                : "bg-white/10 text-white/50 hover:bg-white/15"
                                            }`}>
                                        {l}
                                        <span className="block text-[8px] sm:text-[9px] font-medium opacity-60 mt-0.5">
                                            {l === "UG" ? "Undergraduate" : "Postgraduate"}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stream — horizontal pills */}
                        <div className="px-4 sm:px-5 py-3 sm:py-4">
                            <p className="text-white/60 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-2 sm:mb-3">
                                Faculty / Stream
                            </p>
                            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                                {Object.keys(programmes[level]).map((s) => (
                                    <button key={s} onClick={() => handleStream(s)}
                                        className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0
                                            text-[11px] sm:text-xs
                                            ${stream === s
                                                ? `${streamConfig[s].bg} text-white`
                                                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                                            }`}>
                                        <span>{streamConfig[s].icon}</span>
                                        <span>{s}</span>
                                        <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-bold
                                            ${stream === s ? "bg-white/20 text-white" : "bg-white/10 text-white/40"}
                                        `}>
                                            {programmes[level][s].length}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Course header */}
                    <div className={`bg-gradient-to-r ${c.gradient} rounded-t-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between`}>
                        <div>
                            <p className="text-white/50 font-bold tracking-[0.2em] uppercase text-[9px] sm:text-[10px]">
                                {level} • Faculty of {stream}
                            </p>
                            <h3 className="text-white font-extrabold mt-0.5 text-sm sm:text-base md:text-lg">
                                {currentCourses.length} Programmes
                            </h3>
                        </div>
                        <div className="font-black text-white/10 select-none text-4xl sm:text-5xl">{stream[0]}</div>
                    </div>

                    {/* Course list */}
                    <div className="bg-white rounded-b-2xl divide-y divide-gray-50 mb-3 overflow-hidden">
                        {currentCourses.map((course, i) => (
                            <button
                                key={i}
                                onClick={() => setExpandedCourse(expandedCourse === i ? null : i)}
                                className={`w-full flex items-center gap-3 text-left transition-all duration-200 group hover:bg-gray-50
                                    px-4 sm:px-5 py-2.5 sm:py-3
                                    ${expandedCourse === i ? "bg-gray-50" : ""}
                                `}
                            >
                                <div className={`${c.light} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200
                                    w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                                `}>
                                    {course.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-extrabold leading-snug transition-colors duration-200
                                        text-[11px] sm:text-xs md:text-sm 
                                        ${expandedCourse === i ? c.text : "text-[var(--viva-navy)]"}
                                    `}>
                                        {course.name}
                                    </h4>
                                    <p className="text-gray-400 mt-0.5 text-[9px] sm:text-[10px] md:text-xs">{course.duration}</p>
                                    {expandedCourse === i && (
                                        <p className={`mt-1 text-[9px] sm:text-[10px] md:text-xs ${c.text} opacity-80`}>{course.desc}</p>
                                    )}
                                </div>
                                <div className={`rounded-full ${c.light} flex items-center justify-center flex-shrink-0
                                    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
                                `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                        className={c.text}
                                        style={{ transform: expandedCourse === i ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>

                    <p className="text-center text-gray-400 text-[10px] sm:text-xs pb-1">
                        {level === "UG" ? "Eligibility: 10+2 pass • Duration: 3 Years" : "Eligibility: Graduation • Duration: 2 Years"}
                    </p>
                </div>

                {/* ── DESKTOP lg / xl / 2xl — Side by Side (1024px+) ── */}
                <div className={`hidden lg:grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>

                    {/* LEFT PANEL */}
                    <div className="lg:col-span-1 bg-[#0F1C3D] flex flex-col">

                        {/* UG/PG */}
                        <div className="
                            px-4 py-4
                            xl:px-6 xl:py-5
                            2xl:px-8 2xl:py-6
                            border-b border-white/10
                        ">
                            <p className="text-white/60 font-bold tracking-[0.25em] uppercase pb-3
                                text-[9px] xl:text-[10px] 2xl:text-xs
                            ">Programme Level</p>
                            <div className="flex gap-2">
                                {["UG", "PG"].map((l) => (
                                    <button key={l} onClick={() => handleLevel(l)}
                                        className={`flex-1 rounded-xl font-extrabold transition-all duration-300
                                            py-2 text-xs
                                            xl:py-2.5 xl:text-sm
                                            ${level === l
                                                ? "bg-white text-[var(--viva-navy)] shadow-md"
                                                : "bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/80"
                                            }`}>
                                        {l}
                                        <span className="block font-medium opacity-60 mt-0.5 text-[8px] xl:text-[9px]">
                                            {l === "UG" ? "Undergraduate" : "Postgraduate"}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stream */}
                        <div className="
                            px-4 py-4
                            xl:px-6 xl:py-5
                            2xl:px-8 2xl:py-6
                            border-b border-white/10
                        ">
                            <p className="text-white/60 font-bold tracking-[0.25em] uppercase mb-2 xl:mb-3
                                text-[9px] xl:text-[10px] 2xl:text-xs
                            ">Faculty / Stream</p>
                            <div className="flex flex-col gap-1.5 xl:gap-2">
                                {Object.keys(programmes[level]).map((s) => (
                                    <button key={s} onClick={() => handleStream(s)}
                                        className={`flex items-center gap-2 xl:gap-3 rounded-xl font-bold transition-all duration-300 border-l-4
                                            px-3 py-2 text-xs
                                            xl:px-4 xl:py-2.5 xl:text-sm
                                            ${stream === s
                                                ? `${streamConfig[s].bg} text-white border-white`
                                                : "bg-white/5 text-white/70 border-transparent hover:bg-white/15 hover:text-white"
                                            }`}>
                                        <span>{streamConfig[s].icon}</span>
                                        <span>{s}</span>
                                        <span className={`ml-auto rounded-full font-bold
                                            text-[9px] xl:text-xs px-1.5 py-0.5
                                            ${stream === s ? "bg-white/20 text-white" : "bg-white/10 text-white/30"}
                                        `}>
                                            {programmes[level][s].length}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="px-4 xl:px-6 2xl:px-8 py-4 xl:py-5 mt-auto">
                            <p className="text-white/50 leading-relaxed text-[9px] xl:text-[10px] 2xl:text-xs">
                                {level === "UG" ? "Eligibility: 10+2 pass • Duration: 3 Years" : "Eligibility: Graduation • Duration: 2 Years"}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="lg:col-span-4 bg-white flex flex-col">

                        {/* Right header */}
                        <div className={`bg-gradient-to-r ${c.gradient} flex items-center justify-between
                            px-6 py-4
                            xl:px-8 xl:py-5
                            2xl:px-10 2xl:py-4
                        `}>
                            <div>
                                <p className="text-white/50 font-bold tracking-[0.2em] uppercase
                                    text-[9px] xl:text-[10px] 2xl:text-[10px]
                                ">
                                    {level} • Faculty of {stream}
                                </p>
                                <h3 className="text-white font-extrabold mt-1
                                    text-base lg:text-lg xl:text-xl 2xl:text-[24px]
                                ">
                                    {currentCourses.length} Programmes
                                </h3>
                            </div>
                            <div className="font-black text-white/10 select-none
                                text-5xl xl:text-6xl 2xl:text-7xl
                            ">{stream[0]}</div>
                        </div>

                        {/* Course list */}
                        <div className="flex-1 divide-y divide-gray-50" style={{ maxHeight: '420px', overflowY: 'auto', scrollbarWidth: 'none' }}>
                            {currentCourses.map((course, i) => (
                                <button
                                    key={i}
                                    onClick={() => setExpandedCourse(expandedCourse === i ? null : i)}
                                    className={`w-full flex items-center text-left transition-all duration-200 group hover:bg-gray-50
                                        gap-3 px-5 py-3
                                        xl:gap-4 xl:px-7 xl:py-3.5
                                        2xl:px-8 2xl:py-3
                                        ${expandedCourse === i ? "bg-gray-50" : ""}
                                    `}
                                >
                                    <div className={`${c.light} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200
                                        w-9 h-9
                                        xl:w-10 xl:h-10
                                        2xl:w-11 2xl:h-11
                                    `}>
                                        {course.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`font-extrabold leading-snug transition-colors duration-200
                                            text-xs lg:text-xs xl:text-sm 2xl:text-[14px]
                                            ${expandedCourse === i ? c.text : "text-[var(--viva-navy)]"}
                                        `}>
                                            {course.name}
                                        </h4>
                                        <p className="text-gray-400 mt-0.5
                                            text-[10px] xl:text-xs 2xl:text-xs
                                        ">{course.duration}</p>
                                    </div>
                                    <div className={`rounded-full ${c.light} flex items-center justify-center flex-shrink-0
                                        w-7 h-7 xl:w-8 xl:h-8
                                    `}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            className={c.text}>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center
                    pt-6 sm:pt-8 lg:pt-10 xl:pt-12
                ">
                    <p className="text-gray-400 pb-3
                        text-[11px] sm:text-xs xl:text-sm
                    ">
                        Ready to start your journey at Viva College?
                    </p>
                    <div className="flex justify-center flex-wrap gap-3">
                        <button className="
                            bg-[var(--viva-red)] text-white font-bold rounded-full
                            shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-105 transition-all duration-300
                            px-6 py-2.5 text-xs
                            sm:px-7 sm:py-3 sm:text-xs
                            xl:px-9 xl:py-3 xl:text-sm
                        ">Apply Now →</button>
                        <button className="
                            border-2 border-[var(--viva-navy)] text-[var(--viva-navy)] font-bold rounded-full
                            hover:bg-[var(--viva-navy)] hover:text-white transition-all duration-300
                            px-6 py-2.5 text-xs
                            sm:px-7 sm:py-3 sm:text-xs
                            xl:px-9 xl:py-3 xl:text-sm
                        ">Download Prospectus</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Programmes
