import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import UpdateToast from '../components/UpdateToast';

const Landing = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Features />
            <Demo />
            <Footer />
            <ThemeToggle />
            <UpdateToast />
        </div>
    );
};

export default Landing;
