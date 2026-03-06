import React, { useEffect, useRef, useState } from 'react'
import Ticker from '../components/layouts/Ticker'
import Header from '../components/layouts/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Programmes from '../components/sections/Programmes'
import Admissions from '../components/sections/Admissions'
import CampusLife from '../components/sections/CampusLife'
import EventsNotices from '../components/sections/EventNotices'
import Placements from '../components/sections/Placements'
import Alumni from '../components/sections/Alumini'
import Footer from '../components/layouts/Footer'

const Home = () => {
    const tickerRef = useRef(null)
    const [headerTop, setHeaderTop] = useState(0)

    useEffect(() => {
        const updateHeaderPosition = () => {
            if (tickerRef.current) {
                const tickerHeight = tickerRef.current.offsetHeight
                const scrollY = window.scrollY
                // Header follows ticker down until ticker scrolls out, then sticks at 0
                const top = Math.max(0, tickerHeight - scrollY)
                setHeaderTop(top)
            }
        }

        updateHeaderPosition()
        window.addEventListener('scroll', updateHeaderPosition, { passive: true })
        window.addEventListener('resize', updateHeaderPosition)
        return () => {
            window.removeEventListener('scroll', updateHeaderPosition)
            window.removeEventListener('resize', updateHeaderPosition)
        }
    }, [])

    return (
        <>
            {/* Hero — fixed behind everything */}
            <div style={{
                position: 'fixed',
                top: 50, left: 0,
                width: '100vw', height: '100vh',
                zIndex: 0,
                overflow: 'hidden',
            }}>
                <Hero />
            </div>

            {/* Ticker — scrolls away naturally in normal flow */}
            <div ref={tickerRef} style={{ position: 'relative', zIndex: 500 }}>
                <Ticker />
            </div>

            {/* Header — truly fixed, top dynamically tracks ticker scroll-out */}
            <div style={{
                position: 'fixed',
                top: headerTop,
                left: 0,
                width: '100%',
                zIndex: 500,
                transition: 'top 0.05s linear',
            }}>
                <Header />
            </div>

            {/* Spacer so content doesn't hide under fixed header */}
            <div id="header-spacer" style={{ height: 0 }} />

            {/* Main scrollable content */}
            <div style={{ position: 'relative', zIndex: 10 }}>

                {/* Hero spacer */}
                <div style={{ height: '100vh', background: 'transparent' }} />

                <div style={{
                    position: 'relative',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '24px 24px 0 0',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
                    zIndex: 10
                }}>
                    <About />
                </div>
                <div style={{ position: 'relative', backgroundColor: '#F8FAFC', zIndex: 10 }}><Programmes /></div>
                <div style={{ position: 'relative', backgroundColor: '#ffffff', zIndex: 10 }}><Admissions /></div>
                <div style={{ position: 'relative', backgroundColor: '#F8FAFC', zIndex: 10 }}><CampusLife /></div>
                <div style={{ position: 'relative', backgroundColor: '#ffffff', zIndex: 10 }}><EventsNotices /></div>
                <div style={{ position: 'relative', backgroundColor: '#F8FAFC', zIndex: 10 }}><Placements /></div>
                <div style={{ position: 'relative', backgroundColor: '#ffffff', zIndex: 10 }}><Alumni /></div>
                <Footer />
            </div>
        </>
    )
}

export default Home     