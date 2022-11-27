import React from 'react';
import Features from '../../components/LandingPage/Features';
import HeroSection from '../../components/LandingPage/HeroSection';
import Navbar from '../../components/LandingPage/Navbar';

const LandingPage = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Features />
        </>
    )
}

export default LandingPage;