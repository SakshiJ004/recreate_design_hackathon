import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const data = {
    UG: {
        Arts: {
            eligibility: "Passed HSC (10+2) in any stream from a recognized board. Minimum 45% aggregate marks required.",
            fees: "₹8,000 – ₹15,000 / year",
            seats: "60 – 120 per course",
            duration: "3 Years",
            affiliation: "University of Mumbai",
            courses: [
                "B.A. Economics", "B.A. English",
                "B.A. Film, Television & New Media Production",
                "B.A. History", "B.A. Mass Media & Communication (BAMMC)",
                "B.A. Political Science", "B.A. Psychology"
            ],
            docs: [
                "SSC Marksheet & Certificate",
                "HSC Marksheet & Certificate",
                "School / College Leaving Certificate",
                "Aadhar Card (ID Proof)",
                "Passport Size Photos (4 copies)",
                "Caste Certificate (if applicable)",
                "Income Certificate (if applicable)",
            ],
            dates: [
                { event: "Applications Open", date: "1 June 2025", done: false },
                { event: "Last Date to Apply", date: "30 June 2025", done: false },
                { event: "Merit List — Round 1", date: "10 July 2025", done: false },
                { event: "Admission Confirmation", date: "11–15 July 2025", done: false },
                { event: "Merit List — Round 2", date: "20 July 2025", done: false },
                { event: "Classes Begin", date: "1 August 2025", done: false },
            ],
            process: [
                "Register online at vivacollege.org",
                "Fill in personal & academic details",
                "Upload required documents",
                "Pay application fee online",
                "Check merit list on portal",
                "Visit college for document verification",
            ],
            feeStructure: [
                { course: "B.A. Economics", totalFees: "₹29,500", perYear: "~₹9,833/yr" },
                { course: "B.A. English", totalFees: "₹29,500", perYear: "~₹9,833/yr" },
                { course: "B.A. Film, TV & New Media", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.A. History", totalFees: "₹29,500", perYear: "~₹9,833/yr" },
                { course: "B.A. BAMMC", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.A. Political Science", totalFees: "₹29,500", perYear: "~₹9,833/yr" },
                { course: "B.A. Psychology", totalFees: "₹29,500", perYear: "~₹9,833/yr" },
            ],
            careers: [
                { title: "Economist / Analyst", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg> },
                { title: "Journalist / Media Professional", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> },
                { title: "Civil Services / UPSC", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
                { title: "Counsellor / Psychologist", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> },
                { title: "Content Creator / Filmmaker", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg> },
                { title: "Teacher / Professor", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
            ],
            faqs: [
                { q: "What is the minimum percentage required for Arts admission?", a: "Minimum 45% aggregate marks in HSC (10+2) from any recognized board. Reserved category students may get relaxation as per University of Mumbai norms." },
                { q: "Is admission based on merit or entrance exam?", a: "Admission to UG Arts programmes is purely merit-based on HSC marks. No entrance exam is required." },
                { q: "When does the admission process start?", a: "Applications open from 1st June 2025. The process is done online via the University of Mumbai admission portal." },
                { q: "Can students from Science or Commerce stream apply for B.A.?", a: "Yes! B.A. Economics, English, History, Political Science and Psychology are open to students from any stream." },
            ],
        },
        Commerce: {
            eligibility: "Passed HSC (10+2) with Commerce stream. Minimum 45% aggregate marks required.",
            fees: "₹10,000 – ₹20,000 / year",
            seats: "60 – 240 per course",
            duration: "3 Years",
            affiliation: "University of Mumbai",
            courses: [
                "B.Com Accountancy", "B.Com Accounting & Finance (BCAF)",
                "B.Com Banking & Insurance (BCBI)", "B.Com Business Economics",
                "B.Com Commerce", "B.Com Environment Management & Economics",
                "B.Com Financial Markets (BFM)", "B.Com Financial Management (BFMG)",
                "B.Com Investment Management (BIM)", "B.Com Management Studies (BMS)"
            ],
            docs: [
                "SSC Marksheet & Certificate",
                "HSC Marksheet & Certificate",
                "School / College Leaving Certificate",
                "Aadhar Card (ID Proof)",
                "Passport Size Photos (4 copies)",
                "Caste Certificate (if applicable)",
                "Income Certificate (if applicable)",
            ],
            dates: [
                { event: "Applications Open", date: "1 June 2025", done: false },
                { event: "Last Date to Apply", date: "30 June 2025", done: false },
                { event: "Merit List — Round 1", date: "10 July 2025", done: false },
                { event: "Admission Confirmation", date: "11–15 July 2025", done: false },
                { event: "Merit List — Round 2", date: "20 July 2025", done: false },
                { event: "Classes Begin", date: "1 August 2025", done: false },
            ],
            process: [
                "Register online at vivacollege.org",
                "Fill in personal & academic details",
                "Upload required documents",
                "Pay application fee online",
                "Check merit list on portal",
                "Visit college for document verification",
            ],
            feeStructure: [
                { course: "B.Com Accountancy", totalFees: "₹30,300", perYear: "~₹10,100/yr" },
                { course: "B.Com Accounting & Finance (BCAF)", totalFees: "₹45,000", perYear: "~₹15,000/yr" },
                { course: "B.Com Banking & Insurance (BCBI)", totalFees: "₹45,000", perYear: "~₹15,000/yr" },
                { course: "B.Com Business Economics", totalFees: "₹30,300", perYear: "~₹10,100/yr" },
                { course: "B.Com Commerce", totalFees: "₹30,300", perYear: "~₹10,100/yr" },
                { course: "B.Com Environment Management", totalFees: "₹35,000", perYear: "~₹11,666/yr" },
                { course: "B.Com Financial Markets (BFM)", totalFees: "₹45,000", perYear: "~₹15,000/yr" },
                { course: "B.Com Financial Management (BFMG)", totalFees: "₹45,000", perYear: "~₹15,000/yr" },
                { course: "B.Com Investment Management (BIM)", totalFees: "₹60,900", perYear: "~₹20,300/yr" },
                { course: "B.Com Management Studies (BMS)", totalFees: "₹58,500", perYear: "~₹19,500/yr" },
            ],
            careers: [
                { title: "Chartered Accountant (CA)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg> },
                { title: "Investment Banker", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
                { title: "Stock Market Analyst", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
                { title: "Business Manager / MBA", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
                { title: "Banking Professional", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
                { title: "Entrepreneur", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> },
            ],
            faqs: [
                { q: "Which B.Com course has the best career prospects?", a: "BMS, BFM, and BCAF are highly popular. BMS is ideal for management roles, BFM for stock markets, and BCAF for accounting & finance careers." },
                { q: "Is Commerce stream mandatory for B.Com admission?", a: "For most B.Com courses yes. However, B.Com Business Economics may accept Arts/Science students. Check specific course eligibility." },
                { q: "Can I pursue CA alongside B.Com at Viva College?", a: "Yes! Many students pursue CA simultaneously with B.Com Accountancy or BCAF. The college schedule supports this." },
                { q: "What is the fee for BMS at Viva College?", a: "BMS total fee for 3 years is approximately ₹58,500. Fees may vary slightly based on the academic year." },
            ],
        },
        Science: {
            eligibility: "Passed HSC (10+2) with Science stream. Minimum 45% aggregate marks required.",
            fees: "₹12,000 – ₹25,000 / year",
            seats: "60 – 120 per course",
            duration: "3 Years",
            affiliation: "University of Mumbai",
            courses: [
                "B.Sc. Biochemistry", "B.Sc. Biotechnology", "B.Sc. Botany",
                "B.Sc. Chemistry", "B.Sc. Computer Science", "B.Sc. Data Science",
                "B.Sc. Hotel & Tourism Management", "B.Sc. Information Technology",
                "B.Sc. Mathematics", "B.Sc. Physics", "B.Sc. Statistics", "B.Sc. Zoology"
            ],
            docs: [
                "SSC Marksheet & Certificate",
                "HSC Marksheet & Certificate",
                "School / College Leaving Certificate",
                "Aadhar Card (ID Proof)",
                "Passport Size Photos (4 copies)",
                "Caste Certificate (if applicable)",
                "Income Certificate (if applicable)",
            ],
            dates: [
                { event: "Applications Open", date: "1 June 2025", done: false },
                { event: "Last Date to Apply", date: "30 June 2025", done: false },
                { event: "Merit List — Round 1", date: "10 July 2025", done: false },
                { event: "Admission Confirmation", date: "11–15 July 2025", done: false },
                { event: "Merit List — Round 2", date: "20 July 2025", done: false },
                { event: "Classes Begin", date: "1 August 2025", done: false },
            ],
            process: [
                "Register online at vivacollege.org",
                "Fill in personal & academic details",
                "Upload required documents",
                "Pay application fee online",
                "Check merit list on portal",
                "Visit college for document verification",
            ],
            feeStructure: [
                { course: "B.Sc. Biochemistry", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.Sc. Biotechnology", totalFees: "₹55,000", perYear: "~₹18,333/yr" },
                { course: "B.Sc. Botany", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.Sc. Chemistry", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.Sc. Computer Science", totalFees: "₹75,000", perYear: "~₹25,000/yr" },
                { course: "B.Sc. Data Science", totalFees: "₹97,100", perYear: "~₹32,366/yr" },
                { course: "B.Sc. Hotel & Tourism", totalFees: "₹55,000", perYear: "~₹18,333/yr" },
                { course: "B.Sc. Information Technology", totalFees: "₹80,800", perYear: "~₹26,933/yr" },
                { course: "B.Sc. Mathematics", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.Sc. Physics", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.Sc. Statistics", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
                { course: "B.Sc. Zoology", totalFees: "₹43,600", perYear: "~₹14,533/yr" },
            ],
            careers: [
                { title: "Software Developer", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
                { title: "Data Scientist / AI Engineer", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
                { title: "Research Scientist", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg> },
                { title: "Biotech / Pharma Professional", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 12C12 7 7 3 2 5c0 5 4 9 10 7" /><path d="M12 12c0-5 5-9 10-7-1 5-5 9-10 7" /></svg> },
                { title: "Hotel / Resort Manager", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                { title: "Mathematician / Statistician", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
            ],
            faqs: [
                { q: "What is the fee for B.Sc. IT and Data Science?", a: "B.Sc. IT total fee is ₹80,800 for 3 years. B.Sc. Data Science is ₹97,100 for 3 years — the highest in Science stream." },
                { q: "Is Science stream compulsory for all B.Sc. courses?", a: "Yes, HSC Science is mandatory. For B.Sc. IT and Computer Science, Mathematics or Statistics in 12th is preferred." },
                { q: "Can I pursue M.Sc. after B.Sc. from Viva College itself?", a: "Yes! Viva College offers M.Sc. in Botany, Zoology, Chemistry, Mathematics and IT for eligible B.Sc. graduates." },
                { q: "Which Science course has the best placement?", a: "B.Sc. CS, IT and Data Science have the highest placement rate due to strong industry demand in tech sector." },
            ],
        }
    },
    PG: {
        Arts: {
            eligibility: "Passed Bachelor's degree (B.A.) in relevant subject from a recognized university. Minimum 45% marks.",
            fees: "₹10,000 – ₹18,000 / year",
            seats: "30 – 60 per course",
            duration: "2 Years",
            affiliation: "University of Mumbai",
            courses: ["M.A. English", "M.A. Economics", "M.A. History", "M.A. Political Science"],
            docs: [
                "SSC Marksheet & Certificate",
                "HSC Marksheet & Certificate",
                "All Graduation Year Marksheets",
                "Degree / Provisional Certificate",
                "College Leaving Certificate",
                "Aadhar Card (ID Proof)",
                "Passport Size Photos (4 copies)",
                "Caste Certificate (if applicable)",
                "Migration Certificate (if from other university)",
            ],
            dates: [
                { event: "Applications Open", date: "1 June 2025", done: false },
                { event: "Last Date to Apply", date: "15 July 2025", done: false },
                { event: "Merit List — Round 1", date: "25 July 2025", done: false },
                { event: "Admission Confirmation", date: "26–30 July 2025", done: false },
                { event: "Classes Begin", date: "1 August 2025", done: false },
            ],
            process: [
                "Register online at vivacollege.org",
                "Fill in personal & academic details",
                "Upload required documents",
                "Pay application fee online",
                "Check merit list on portal",
                "Visit college for document verification",
            ],
            feeStructure: [
                { course: "M.A. English", totalFees: "₹25,820", perYear: "~₹12,910/yr" },
                { course: "M.A. Economics", totalFees: "₹25,820", perYear: "~₹12,910/yr" },
                { course: "M.A. History", totalFees: "₹25,820", perYear: "~₹12,910/yr" },
                { course: "M.A. Political Science", totalFees: "₹25,820", perYear: "~₹12,910/yr" },
            ],
            careers: [
                { title: "Professor / Lecturer", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
                { title: "Civil Services / IAS / IPS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
                { title: "Researcher / Historian", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
                { title: "Content Writer / Editor", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> },
            ],
            faqs: [
                { q: "What is the eligibility for M.A. admission?", a: "B.A. in the relevant subject with minimum 45% marks from a recognized university. Students from other streams may apply for some courses." },
                { q: "Is M.A. from Viva College valid for SET/NET exam?", a: "Yes! M.A. from Viva College (University of Mumbai affiliated) is fully valid for SET, NET and other competitive exams." },
                { q: "What is the total fee for M.A. courses?", a: "Total fee for all M.A. courses is approximately ₹25,820 for 2 years — one of the most affordable PG options in Mumbai region." },
            ],
        },
        Commerce: {
            eligibility: "Passed Bachelor's degree (B.Com) from a recognized university. Minimum 45% marks.",
            fees: "₹12,000 – ₹20,000 / year",
            seats: "30 – 60 per course",
            duration: "2 Years",
            affiliation: "University of Mumbai",
            courses: ["M.Com Accountancy", "M.Com Banking", "M.Com Business Management"],
            docs: [
                "SSC Marksheet & Certificate",
                "HSC Marksheet & Certificate",
                "All Graduation Year Marksheets",
                "Degree / Provisional Certificate",
                "College Leaving Certificate",
                "Aadhar Card (ID Proof)",
                "Passport Size Photos (4 copies)",
                "Caste Certificate (if applicable)",
                "Migration Certificate (if from other university)",
            ],
            dates: [
                { event: "Applications Open", date: "1 June 2025", done: false },
                { event: "Last Date to Apply", date: "15 July 2025", done: false },
                { event: "Merit List — Round 1", date: "25 July 2025", done: false },
                { event: "Admission Confirmation", date: "26–30 July 2025", done: false },
                { event: "Classes Begin", date: "1 August 2025", done: false },
            ],
            process: [
                "Register online at vivacollege.org",
                "Fill in personal & academic details",
                "Upload required documents",
                "Pay application fee online",
                "Check merit list on portal",
                "Visit college for document verification",
            ],
            feeStructure: [
                { course: "M.Com Accountancy", totalFees: "₹28,000", perYear: "~₹14,000/yr" },
                { course: "M.Com Banking", totalFees: "₹28,000", perYear: "~₹14,000/yr" },
                { course: "M.Com Business Management", totalFees: "₹28,000", perYear: "~₹14,000/yr" },
            ],
            careers: [
                { title: "Senior Accountant / CFO", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
                { title: "Bank Manager", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
                { title: "Business Consultant", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
                { title: "MBA / Further Studies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg> },
            ],
            faqs: [
                { q: "Can I do M.Com if I have B.Com from another college?", a: "Yes! Any B.Com graduate from a University of Mumbai affiliated college with 45%+ marks is eligible. Migration certificate required." },
                { q: "What is the fee for M.Com at Viva College?", a: "Total M.Com fee is approximately ₹28,000 for 2 years — very affordable compared to private colleges in Mumbai." },
                { q: "Is M.Com useful for banking exams like IBPS?", a: "Absolutely! M.Com Banking specialization is highly relevant for IBPS, SBI PO, and other banking recruitment exams." },
            ],
        },
        Science: {
            eligibility: "Passed Bachelor's degree (B.Sc.) in relevant subject from a recognized university. Minimum 45% marks.",
            fees: "₹15,000 – ₹25,000 / year",
            seats: "20 – 40 per course",
            duration: "2 Years",
            affiliation: "University of Mumbai",
            courses: [
                "M.Sc. Organic Chemistry", "M.Sc. Botany",
                "M.Sc. Zoology", "M.Sc. Mathematics", "M.Sc. Information Technology"
            ],
            docs: [
                "SSC Marksheet & Certificate",
                "HSC Marksheet & Certificate",
                "All Graduation Year Marksheets",
                "Degree / Provisional Certificate",
                "College Leaving Certificate",
                "Aadhar Card (ID Proof)",
                "Passport Size Photos (4 copies)",
                "Caste Certificate (if applicable)",
                "Migration Certificate (if from other university)",
            ],
            dates: [
                { event: "Applications Open", date: "1 June 2025", done: false },
                { event: "Last Date to Apply", date: "15 July 2025", done: false },
                { event: "Merit List — Round 1", date: "25 July 2025", done: false },
                { event: "Admission Confirmation", date: "26–30 July 2025", done: false },
                { event: "Classes Begin", date: "1 August 2025", done: false },
            ],
            process: [
                "Register online at vivacollege.org",
                "Fill in personal & academic details",
                "Upload required documents",
                "Pay application fee online",
                "Check merit list on portal",
                "Visit college for document verification",
            ],
            feeStructure: [
                { course: "M.Sc. Organic Chemistry", totalFees: "₹61,800", perYear: "~₹30,900/yr" },
                { course: "M.Sc. Botany", totalFees: "₹61,800", perYear: "~₹30,900/yr" },
                { course: "M.Sc. Zoology", totalFees: "₹61,800", perYear: "~₹30,900/yr" },
                { course: "M.Sc. Mathematics", totalFees: "₹61,800", perYear: "~₹30,900/yr" },
                { course: "M.Sc. Information Technology", totalFees: "₹1,05,000", perYear: "~₹52,500/yr" },
            ],
            careers: [
                { title: "Research Scientist / PhD", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg> },
                { title: "IT Manager / Tech Lead", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
                { title: "University Lecturer", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg> },
                { title: "Pharmaceutical Scientist", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M12 12C12 7 7 3 2 5c0 5 4 9 10 7" /><path d="M12 12c0-5 5-9 10-7-1 5-5 9-10 7" /></svg> },
            ],
            faqs: [
                { q: "What is the fee for M.Sc. IT at Viva College?", a: "M.Sc. IT total fee is approximately ₹1,05,000 for 2 years. Other M.Sc. courses range from ₹61,800 for 2 years." },
                { q: "Can I pursue PhD after M.Sc. from Viva College?", a: "Yes! M.Sc. from University of Mumbai affiliated college qualifies you for PhD admission at various universities." },
                { q: "Is NET/SET required to teach after M.Sc.?", a: "Yes, NET/SET qualification is required for college-level teaching. M.Sc. makes you eligible to appear for these exams." },
            ],
        }
    }
}

const streamConfig = {
    Arts: {
        bg: "bg-[var(--viva-red)]", text: "text-[var(--viva-red)]", light: "bg-red-50",
        border: "border-[var(--viva-red)]", gradient: "from-red-600 to-red-800",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
    },
    Commerce: {
        bg: "bg-[var(--viva-navy)]", text: "text-[var(--viva-navy)]", light: "bg-blue-50",
        border: "border-[var(--viva-navy)]", gradient: "from-[#1A2D5A] to-[#0F1C3D]",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    },
    Science: {
        bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50",
        border: "border-emerald-600", gradient: "from-emerald-600 to-emerald-800",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l1 7H8L9 3z" /><path d="M8 10l-4 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L16 10" /></svg>
    },
}

const tabs = [
    {
        id: "overview",
        label: "Overview",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
    },
    {
        id: "process",
        label: "How to Apply",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    },
    {
        id: "courses",
        label: "Courses",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
    },
    {
        id: "fees",
        label: "Fee Structure",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    },
    {
        id: "careers",
        label: "Career Options",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    },
    {
        id: "documents",
        label: "Documents",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
    },
    {
        id: "dates",
        label: "Important Dates",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    },
    {
        id: "faq",
        label: "FAQs",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
    },
]

const FaqAccordion = ({ faqs, c }) => {
    const [open, setOpen] = useState(null)
    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${open === i ? `border-2 ${c.border}` : "border-gray-100"}`}>
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
                        <span className="text-sm font-bold text-[var(--viva-navy)]">{faq.q}</span>
                        <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open === i ? `${c.bg} text-white` : "bg-gray-100 text-gray-400"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </button>
                    {open === i && (
                        <div className="px-5 pb-4">
                            <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

const AdmissionsPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [level, setLevel] = useState(location.state?.level || "UG")
    const [stream, setStream] = useState("Arts")
    const [activeTab, setActiveTab] = useState("overview")

    useEffect(() => {
        if (location.state?.level) setLevel(location.state.level)
    }, [location.state])

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [activeTab])

    const c = streamConfig[stream]
    const d = useMemo(() => {
        return data[level][stream]
    }, [level, stream])

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />

            {/* Page Hero */}
            <div className="bg-[var(--viva-navy)] pt-32 pb-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-bl-[250px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-tr-[120px]" />

                <div className="relative z-10 px-8 md:px-16 xl:px-24">
                    <button onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold mb-8 transition-colors tracking-wider uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Admissions Open 2025–26</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                                Admissions<br />
                                <span className="text-[var(--viva-red)]">2025–26</span>
                            </h1>
                            <p className="text-white/40 mt-4 text-sm max-w-md leading-relaxed">
                                Everything you need to know about joining Viva College — eligibility, courses, documents & dates.
                            </p>
                        </div>

                        {/* UG / PG switcher */}
                        <div className="flex bg-white/10 rounded-2xl p-1.5 gap-1 self-start md:self-end">
                            {["UG", "PG"].map((l) => (
                                <button key={l}
                                    onClick={() => { setLevel(l); setStream("Arts") }}
                                    className={`px-8 py-3 rounded-xl font-extrabold text-sm transition-all duration-300 ${level === l ? "bg-white text-[var(--viva-navy)] shadow-md" : "text-white/50 hover:text-white"}`}>
                                    {l}
                                    <span className="block text-[9px] font-medium opacity-70 mt-0.5">
                                        {l === "UG" ? "Undergraduate" : "Postgraduate"}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stream tabs — inside hero, attached to bottom */}
                    <div className="flex gap-1">
                        {Object.entries(streamConfig).map(([s, sc]) => (
                            <button key={s}
                                onClick={() => setStream(s)}
                                className={`flex items-center gap-2 px-7 py-3.5 font-bold text-sm transition-all duration-300 rounded-t-xl ${stream === s ? "bg-[#F8FAFC] text-[var(--viva-navy)]" : "text-white/40 hover:text-white/80 hover:bg-white/5"}`}>
                                {sc.icon} {s}
                                <span className={`text-xs px-2 py-0.5 rounded-full ${stream === s ? `${sc.light} ${sc.text}` : "bg-white/10 text-white/30"}`}>
                                    {data[level][s].courses.length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="px-8 md:px-16 xl:px-24 py-0">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-0">

                    {/* LEFT SIDEBAR */}
                    <div className="xl:col-span-1 bg-white border-r border-gray-100 min-h-screen pt-8 pr-6">

                        {/* Current selection badge */}
                        <div className={`flex items-center gap-3 p-4 ${c.light} rounded-2xl mb-6`}>
                            <span className="text-2xl flex items-center">{c.icon}</span>
                            <div>
                                <p className={`text-xs font-black ${c.text} tracking-widest uppercase`}>{level} • {stream}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{d.duration} • {d.affiliation}</p>
                            </div>
                        </div>

                        {/* Nav tabs */}
                        <div className="flex flex-col gap-1">
                            {tabs.map((tab) => (
                                <button key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-left transition-all duration-200 ${activeTab === tab.id ? `${c.bg} text-white shadow-md` : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}>
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
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="xl:col-span-3 pt-8 pl-10 min-h-screen">

                        {/* OVERVIEW */}
                        {activeTab === "overview" && (
                            <div className="space-y-6 pb-10">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-[var(--viva-navy)] mb-1">{level} {stream} Programmes</h2>
                                    <p className="text-gray-400 text-sm pb-8">Faculty of {stream} — Viva College, Virar</p>
                                </div>

                                {/* Eligibility card */}
                                <div className={`p-7 rounded-3xl border-2 ${c.border} bg-white`}>
                                    <h3 className={`font-extrabold text-lg ${c.text} mb-3`}>Eligibility Criteria</h3>
                                    <p className="text-gray-600 leading-relaxed">{d.eligibility}</p>
                                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                                        <span>⚠️</span>
                                        <p className="text-xs text-amber-700 leading-relaxed">Reserved category students may get relaxation as per University of Mumbai norms.</p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="py-6 grid grid-cols-3 gap-4">
                                    {[
                                        {
                                            label: "Courses Offered", value: d.courses.length,
                                            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                        },
                                        {
                                            label: "Intake Capacity", value: d.seats,
                                            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        },
                                        {
                                            label: "Duration", value: d.duration,
                                            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                        },
                                    ].map((s, i) => (
                                        <div key={i} className={`p-5 ${c.light} rounded-2xl`}>
                                            <p className="text-2xl mb-2">{s.icon}</p>
                                            <p className={`text-xl font-extrabold ${c.text}`}>{s.value}</p>
                                            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Course preview */}
                                <div className="bg-white rounded-3xl border border-gray-100 p-6">
                                    <h3 className="font-extrabold text-[var(--viva-navy)] pb-6">Programmes Offered</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {d.courses.map((course, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-3 ${c.light} rounded-xl`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${c.bg} flex-shrink-0`} />
                                                <span className={`text-sm font-semibold ${c.text}`}>{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* HOW TO APPLY */}
                        {activeTab === "process" && (
                            <div className="space-y-5 pb-10">
                                <h2 className="text-2xl font-extrabold text-[var(--viva-navy)] pb-8">How to Apply</h2>
                                <div className="relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />
                                    {d.process.map((step, i) => (
                                        <div key={i} className="relative flex gap-6 pb-4 group">
                                            <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 z-10 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <div className="flex-1 bg-white rounded-2xl px-6 py-4 border border-gray-100 group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                                                <p className="font-bold text-[var(--viva-navy)] text-sm leading-relaxed">{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`p-5 ${c.light} border ${c.border} rounded-2xl flex gap-3`}>
                                    <span>💡</span>
                                    <p className={`text-xs ${c.text} font-medium leading-relaxed`}>
                                        Keep all documents ready before starting the application. Process takes approximately 10–15 minutes.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* COURSES */}
                        {activeTab === "courses" && (
                            <div className="space-y-5 pb-10">
                                <h2 className="text-2xl font-extrabold text-[var(--viva-navy)] pb-8">Courses Offered</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {d.courses.map((course, i) => (
                                        <div key={i} className={`group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-2 hover:border-2 hover:shadow-lg transition-all duration-200 cursor-pointer ${c.border}`}>
                                            <div className={`w-10 h-10 ${c.light} rounded-xl flex items-center justify-center ${c.text} font-extrabold text-sm flex-shrink-0`}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <span className={`text-sm font-bold text-[var(--viva-navy)] group-hover:${c.text} transition-colors`}>{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* DOCUMENTS */}
                        {activeTab === "documents" && (
                            <div className="space-y-5 pb-10">
                                <h2 className="text-2xl font-extrabold text-[var(--viva-navy)] pb-8">Required Documents</h2>
                                <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {d.docs.map((doc, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-sm transition-all">
                                            <div className={`w-8 h-8 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-600">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={`p-5 ${c.light} border ${c.border} rounded-2xl flex gap-3`}>
                                    <span>💡</span>
                                    <p className={`text-xs ${c.text} font-medium leading-relaxed`}>
                                        Carry 2 sets — original + self-attested photocopy of all documents during verification.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* DATES */}
                        {activeTab === "dates" && (
                            <div className="space-y-5 pb-10">
                                <h2 className="text-2xl font-extrabold text-[var(--viva-navy)] pb-8">Important Dates</h2>
                                <div className="space-y-3">
                                    {d.dates.map((item, i) => (
                                        <div key={i} className={`flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:${c.border} hover:shadow-md transition-all duration-200 group`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center text-white font-extrabold text-sm`}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </div>
                                                <span className={`font-bold text-sm text-[var(--viva-navy)] group-hover:${c.text} transition-colors`}>{item.event}</span>
                                            </div>
                                            <span className={`text-sm font-extrabold ${c.text} ${c.light} px-4 py-1.5 rounded-full whitespace-nowrap`}>{item.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FEE STRUCTURE */}
                        {activeTab === "fees" && (
                            <div className="space-y-5 pb-10">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Fee Structure</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-8">Approximate fees for 2025–26. Actual fees may vary slightly.</p>
                                </div>
                                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                                    <div className={`px-6 py-4 bg-gradient-to-r ${c.gradient} flex items-center justify-between`}>
                                        <h3 className="text-white font-extrabold text-sm tracking-wide uppercase">Course-wise Fee Breakdown</h3>
                                        <span className="text-white/60 text-xs">Total fees for entire duration</span>
                                    </div>
                                    <div className="divide-y divide-gray-50">
                                        {d.feeStructure.map((fee, i) => (
                                            <div key={i} className={`flex items-center justify-between px-6 py-4 hover:${c.light} transition-colors duration-150 group`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-7 h-7 ${c.light} ${c.text} rounded-lg flex items-center justify-center font-extrabold text-xs flex-shrink-0`}>
                                                        {String(i + 1).padStart(2, '0')}
                                                    </div>
                                                    <span className="text-sm font-semibold text-gray-700">{fee.course}</span>
                                                </div>
                                                <div className="text-right flex-shrink-0 ml-4">
                                                    <p className={`text-sm font-extrabold ${c.text}`}>{fee.totalFees}</p>
                                                    <p className="text-[10px] text-gray-400">{fee.perYear}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                    <p className="text-xs text-amber-700 leading-relaxed">Fees shown are approximate and for reference only. Scholarship and fee waiver schemes available for eligible students via Mahadbt portal. Verify exact fees at vivacollege.org.</p>
                                </div>
                            </div>
                        )}

                        {/* CAREER OPTIONS */}
                        {activeTab === "careers" && (
                            <div className="space-y-5 pb-10">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-[var(--viva-navy)]">Career Opportunities</h2>
                                    <p className="text-gray-400 text-sm mt-1 pb-8">Roles you can pursue after completing {level} {stream} programmes.</p>
                                </div>
                                <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {d.careers.map((career, i) => (
                                        <div key={i} className={`group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:${c.border} hover:shadow-lg transition-all duration-200`}>
                                            <div className={`w-12 h-12 ${c.light} rounded-2xl flex items-center justify-center ${c.text} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                {career.icon}
                                            </div>
                                            <span className={`text-sm font-bold text-[var(--viva-navy)] group-hover:${c.text} transition-colors`}>{career.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={`p-5 ${c.light} border ${c.border} rounded-2xl flex gap-3`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 mt-0.5 ${c.text}`}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <p className={`text-xs ${c.text} font-medium leading-relaxed`}>Higher studies (M.A./M.Com/M.Sc/MBA/PhD) further expand career opportunities across government & private sectors.</p>
                                </div>
                            </div>
                        )}

                        {/* FAQ */}
                        {activeTab === "faq" && (
                            <div className="space-y-5 pb-10">
                                <h2 className="text-2xl font-extrabold text-[var(--viva-navy)] pb-8">Frequently Asked Questions</h2>
                                <FaqAccordion faqs={d.faqs} c={c} />
                                <div className={`mt-6 p-6 bg-[var(--viva-navy)] rounded-3xl`}>
                                    <h4 className="text-white font-extrabold mb-1">Still have questions?</h4>
                                    <p className="text-white/50 text-sm pb-4">Our admission helpdesk is available Mon–Sat, 10am–5pm.</p>
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { label: "📞 Call Us", value: "+91 250 2450 891" },
                                            { label: "✉️ Email", value: "admission@vivacollege.org" },
                                            { label: "📍 Visit", value: "Viva College Road, Virar (W), Palghar — 401303" },
                                        ].map((c, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5">
                                                <span className="text-sm text-white/50">{c.label}</span>
                                                <span className="text-sm font-bold text-white">{c.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Bottom CTA */}
                        <div className="p-8 bg-[var(--viva-navy)] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
                            <div className="relative z-10">
                                <h4 className="text-white font-extrabold text-xl">Ready to Apply?</h4>
                                <p className="text-white/50 text-sm mt-1">{level} • Faculty of {stream} • {d.duration}</p>
                            </div>
                            <div className="flex gap-3 flex-shrink-0 relative z-10">
                                <button className="px-8 py-3.5 bg-[var(--viva-red)] text-white font-bold rounded-xl text-sm hover:bg-red-700 transition-all hover:scale-105 shadow-lg">
                                    Apply Now →
                                </button>
                                <button className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all">
                                    Download Brochure
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

export default AdmissionsPage