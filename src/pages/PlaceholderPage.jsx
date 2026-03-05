// src/pages/PlaceholderPage.jsx
import { useLocation, Link } from 'react-router-dom'

export default function PlaceholderPage() {
    const { pathname } = useLocation()
    const segs = pathname.split('/').filter(Boolean)
    const title = segs.length
        ? segs[segs.length - 1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : 'Page'

    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
            <div className="flex items-center gap-2 text-[12px] text-[#6b7280] mb-8">
                <Link to="/" className="text-[#1a2456] font-medium no-underline hover:text-[#b91c1c] transition-colors">Home</Link>
                {segs.map((seg, i) => (
                    <span key={i} className="flex items-center gap-2">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                        <span className={i === segs.length - 1 ? 'text-[#b91c1c] font-medium' : ''}>
                            {seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </span>
                    </span>
                ))}
            </div>
            <h1 className="text-[#1a2456] font-bold text-[36px] mb-4 text-center"
                style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h1>
            <p className="text-[#6b7280] text-[14px] text-center max-w-md">Content coming soon.</p>
            <Link to="/" className="mt-8 flex items-center gap-2 px-6 py-3 bg-[#1a2456] text-white
                               text-[13px] font-semibold tracking-wide uppercase no-underline
                               hover:bg-[#b91c1c] transition-colors duration-200">
                Back to Home
            </Link>
        </section>
    )
}