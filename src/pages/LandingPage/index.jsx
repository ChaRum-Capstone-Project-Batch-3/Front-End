import React from 'react';
import AboutSection from '../../components/LandingPage/AboutSection';
import DownloadUs from '../../components/LandingPage/DownloadUs';
import Features from '../../components/LandingPage/Features';
import HeroSection from '../../components/LandingPage/HeroSection';
import Navbar from '../../components/LandingPage/Navbar';
import OurTeam from '../../components/LandingPage/OurTeam';
import Footer from '../../components/LandingPage/Footer';

const LandingPage = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Features />
            <AboutSection />
            <DownloadUs />
            <OurTeam />
            <Footer />
        </>
    )
}

export default LandingPage;