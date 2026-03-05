// import { ANNOUNCEMENTS } from '../../data/navData';

// export default function Ticker() {
//     // const text = ANNOUNCEMENTS.join('   •   ');
//     const text = ANNOUNCEMENTS.map(item => item.text).join('   •   ');

//     return (
//         <div
//             className="relative overflow-hidden flex items-center"
//             style={{ background: 'var(--viva-navy)', height: '36px' }}>

//             {/* Label badge */}
//             <div
//                 className="flex-shrink-0 flex items-center gap-2 px-4 h-full text-white text-xs font-bold tracking-widest uppercase z-10"
//                 style={{ background: 'var(--viva-red)', minWidth: '110px' }}>
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
//                 </svg>
//                 <span>NOTICES</span>
//             </div>

//             {/* Scrolling text — duplicated for seamless loop */}
//             <div className="overflow-hidden flex-1 h-full flex items-center">
//                 <div className="ticker-content text-sm font-medium" style={{ color: '#e2e8f0' }}>
//                     {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
//                 </div>
//             </div>
//         </div>
//     );
// }


// import { ANNOUNCEMENTS } from '../../data/navData';

// export default function Ticker() {
//     return (
//         <div
//             className="relative z-[100] overflow-hidden flex items-center viva-font"
//             style={{ background: '#F1F5F9', height: '42px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>

//             {/* Label badge */}
//             <div
//                 className="flex-shrink-0 flex items-center gap-2 px-4 h-full text-white text-xs font-bold tracking-widest uppercase z-10"
//                 style={{ background: '#8B1E2D', minWidth: '110px' }}>
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
//                 </svg>
//                 <span>NOTICES</span>
//             </div>

//             {/* Scrolling text */}
//             <div className="overflow-hidden flex-1 h-full flex items-center">
//                 {/* <div className="ticker-content flex items-center text-sm font-medium"> */}
//                 <div
//                     className="ticker-content flex items-center text-base font-medium"
//                     style={{ color: '#1F2F5E  ' }}
//                 >

//                     {/* Duplicate for seamless loop */}
//                     {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center gap-6 px-6 whitespace-nowrap group cursor-pointer"
//                         >
//                             <span className="notice-text transition-colors duration-300 group-hover:text-[var(--viva-gold)] px-8">
//                                 {item.text}
//                             </span>
//                             <svg width="6" height="6" viewBox="0 0 6 6" fill="var(--viva-gold)">
//                                 <circle cx="3" cy="3" r="3" />
//                             </svg>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     );
// }

// import { ANNOUNCEMENTS } from '../../data/navData';

// export default function Ticker() {
//     return (
//         <div
//             className="relative z-[100] overflow-hidden flex items-center viva-font"
//             style={{
//                 background: '#F1F5F9',
//                 height: '38px',
//                 boxShadow: '0 1px 6px rgba(0,0,0,0.08)'
//             }}
//         >
//             {/* Label badge */}
//             <div
//                 className="
//                     flex-shrink-0 flex items-center h-full
//                     text-white font-bold tracking-widest uppercase z-10

//                     gap-1.5 px-3 min-w-[80px]  text-[9px]
//                     sm:gap-1.5 sm:px-3 sm:min-w-[85px]  sm:text-[10px]
//                     md:gap-2   md:px-3 md:min-w-[95px]   md:text-[10px]
//                     lg:gap-2   lg:px-3 lg:min-w-[100px]  lg:text-[11px]
//                     xl:gap-2   xl:px-4 xl:min-w-[105px]  xl:text-xs
//                     2xl:gap-2  2xl:px-4 2xl:min-w-[110px] 2xl:text-xs
//                 "
//                 style={{ background: '#8B1E2D' }}
//             >
//                 <svg
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3"
//                 >
//                     <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
//                 </svg>
//                 <span>NOTICES</span>
//             </div>

//             {/* Scrolling text */}
//             <div className="overflow-hidden flex-1 h-full flex items-center">
//                 <div
//                     className="
//                         ticker-content flex items-center font-medium
//                         text-[11px]
//                         sm:text-[11px]
//                         md:text-xs
//                         lg:text-xs
//                         xl:text-[13px]
//                         2xl:text-sm
//                     "
//                     style={{ color: '#1F2F5E' }}
//                 >
//                     {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, index) => (
//                         <div
//                             key={index}
//                             className="
//                                 flex items-center whitespace-nowrap group cursor-pointer
//                                 gap-3 px-3
//                                 sm:gap-4 sm:px-4
//                                 md:gap-4 md:px-5
//                                 lg:gap-5 lg:px-5
//                                 xl:gap-6 xl:px-6
//                                 2xl:gap-6 2xl:px-6
//                             "
//                         >
//                             <span
//                                 className="
//                                     notice-text transition-colors duration-300
//                                     group-hover:text-[var(--viva-gold)]
//                                     px-2
//                                     sm:px-3
//                                     md:px-4
//                                     lg:px-5
//                                     xl:px-6
//                                     2xl:px-8
//                                 "
//                             >
//                                 {item.text}
//                             </span>
//                             <svg
//                                 viewBox="0 0 6 6"
//                                 fill="var(--viva-gold)"
//                                 className="flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5"
//                             >
//                                 <circle cx="3" cy="3" r="3" />
//                             </svg>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


import { ANNOUNCEMENTS } from '../../data/navData';

export default function Ticker() {
    return (
        <div
            className="relative z-[100] overflow-hidden flex items-center viva-font h-[34px] sm:h-[36px] md:h-[38px] lg:h-[38px]"
            style={{
                background: '#F1F5F9',
                boxShadow: '0 1px 6px rgba(0,0,0,0.08)'
            }}
        >
            {/* Label badge */}
            <div
                className="
                    flex-shrink-0 flex items-center h-full
                    text-white font-bold tracking-widest uppercase z-10

                    gap-1.5 px-3 min-w-[80px] text-[9px]
                    sm:min-w-[85px] sm:text-[10px]
                    md:min-w-[95px] md:text-[10px]
                    lg:min-w-[100px] lg:text-[11px]
                    xl:min-w-[105px] xl:text-xs
                    2xl:min-w-[110px] 2xl:text-xs
                "
                style={{ background: '#8B1E2D' }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3"
                >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
                <span>NOTICES</span>
            </div>

            {/* Scrolling text */}
            <div className="overflow-hidden flex-1 h-full flex items-center">
                <div
                    className="
                        ticker-content flex items-center font-medium
                        text-[11px]
                        md:text-xs
                        xl:text-[13px]
                        2xl:text-sm
                    "
                    style={{ color: '#1F2F5E' }}
                >
                    {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex items-center whitespace-nowrap group cursor-pointer
                                gap-3 px-3
                                sm:gap-4 sm:px-4
                                md:gap-4 md:px-5
                                lg:gap-5 lg:px-5
                                xl:gap-6 xl:px-6
                                2xl:gap-6 2xl:px-6
                            "
                        >
                            <span
                                className="
                                    notice-text transition-colors duration-300
                                    group-hover:text-[var(--viva-gold)]
                                    px-2
                                    sm:px-3
                                    md:px-4
                                    lg:px-5
                                    xl:px-6
                                    2xl:px-8
                                "
                            >
                                {item.text}
                            </span>

                            <svg
                                viewBox="0 0 6 6"
                                fill="var(--viva-gold)"
                                className="flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5"
                            >
                                <circle cx="3" cy="3" r="3" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}