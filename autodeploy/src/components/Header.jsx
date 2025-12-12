import { useState } from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">AD</span>
                        </div>
                        <span className="text-2xl font-bold text-gradient">AutoDeploy</span>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Home
                        </a>
                        <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Features
                        </a>
                        <a href="#demo" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Demo
                        </a>
                        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Contact
                        </a>
                    </div>

                    {/* CI/CD Badge */}
                    <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-500/30">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 dark:text-green-400 text-sm font-semibold">Live Demo</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
