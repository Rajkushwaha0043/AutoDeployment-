import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

const Header = () => {
    const { user } = useAuth();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">AD</span>
                        </div>
                        <span className="text-2xl font-bold text-gradient">AutoDeploy</span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#home" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Home
                        </a>
                        <a href="/#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Features
                        </a>
                        <a href="/#demo" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium">
                            Demo
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <Link
                                to="/dashboard"
                                className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors shadow-lg shadow-primary-500/30"
                            >
                                <LayoutDashboard className="w-4 h-4 mr-2" />
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-500 font-medium transition-colors"
                                >
                                    <LogIn className="w-4 h-4 mr-2" />
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="flex items-center px-4 py-2 bg-gradient-animated text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-primary-500/30"
                                >
                                    <UserPlus className="w-4 h-4 mr-2" />
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button (Placeholder for functionality) */}
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
