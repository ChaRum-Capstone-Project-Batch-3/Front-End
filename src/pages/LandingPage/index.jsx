import React from 'react';
import AboutSection from '../../components/LandingPage/AboutSection';
import DownloadUs from '../../components/LandingPage/DownloadUs';
import Features from '../../components/LandingPage/Features';
import HeroSection from '../../components/LandingPage/HeroSection';
import Navbar from '../../components/LandingPage/Navbar';

const LandingPage = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Features />
            <AboutSection />
            <DownloadUs />
        </>
    )
}

export default LandingPage;