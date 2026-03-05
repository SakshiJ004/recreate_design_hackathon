
import React, { useEffect, useRef } from 'react'
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
    return (
        <div>
            <Ticker />
            <Header />

            {/* Hero - fixed position */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0
            }}>
                <Hero />
            </div>

            {/* Scroll container */}
            <div style={{ position: 'relative', zIndex: 10 }}>

                {/* Hero साठी spacer */}
                <div style={{ height: '100vh', background: 'transparent' }} />

                {/* About */}
                <div style={{
                    position: 'relative',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '24px 24px 0 0',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
                    minHeight: 'auto',
                    zIndex: 10
                }}>
                    <About />
                </div>

                {/* Programmes */}
                <div style={{
                    position: 'relative',
                    backgroundColor: '#F8FAFC',
                    zIndex: 10
                }}>
                    <Programmes />
                </div>

                {/* Admissions */}
                <div style={{
                    position: 'relative',
                    backgroundColor: '#ffffff',
                    zIndex: 10
                }}>
                    <Admissions />
                </div>

                <div style={{
                    position: 'relative',
                    backgroundColor: '#F8FAFC',
                    zIndex: 10
                }}>
                    <CampusLife />
                </div>

                <div style={{
                    position: 'relative',
                    backgroundColor: '#ffffff',
                    zIndex: 10
                }}>
                    <EventsNotices />
                </div>

                <div style={{
                    position: 'relative',
                    backgroundColor: '#F8FAFC',
                    zIndex: 10
                }}>
                    <Placements />
                </div>

                <div style={{
                    position: 'relative',
                    backgroundColor: '#ffffff',
                    zIndex: 10
                }}>
                    <Alumni />
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default Home