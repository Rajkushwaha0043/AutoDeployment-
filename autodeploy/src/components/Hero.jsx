import { useState, useEffect } from 'react';

const Hero = () => {
    const [greeting, setGreeting] = useState('');
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getGreeting = () => {
            const hour = new Date().getHours();
            if (hour < 12) return 'Good Morning';
            if (hour < 17) return 'Good Afternoon';
            return 'Good Evening';
        };
        setGreeting(getGreeting());

        // Fetch random quote from backend
        const fetchQuote = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/quote');
                if (response.ok) {
                    const data = await response.json();
                    setQuote(data);
                }
            } catch (error) {
                console.log('Could not fetch quote:', error);
                // Set a fallback quote
                setQuote({
                    text: "Automate everything you can!",
                    author: "DevOps Wisdom"
                });
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, []);

    const scrollToDemo = () => {
        document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-animated opacity-10 dark:opacity-5"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-bounce-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto text-center relative z-10">
                {/* Greeting */}
                <div className="mb-6 animate-fade-in">
                    <span className="inline-block px-6 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                        {greeting}! 👋
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                    Welcome to <span className="text-gradient">AutoDeploy</span> 🚀
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    A <span className="font-semibold text-primary-600 dark:text-primary-400">CI/CD enabled</span> full-stack web application demonstrating automatic deployment with every code push
                </p>

                {/* Quote Section */}
                {!loading && quote && (
                    <div className="mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="glass rounded-2xl p-6 border-l-4 border-primary-500">
                            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                                "{quote.text}"
                            </p>
                            <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                                — {quote.author}
                            </p>
                        </div>
                    </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={scrollToDemo}
                        className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        See Live Demo
                    </button>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 glass rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
                    >
                        View on GitHub
                    </a>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-16 flex flex-wrap justify-center gap-3">
                    {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'GitHub Actions', 'Vercel', 'Render'].map((tech, index) => (
                        <span
                            key={tech}
                            className="px-4 py-2 glass rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200"
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
