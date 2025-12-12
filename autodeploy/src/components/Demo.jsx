import { useState } from 'react';

const Demo = () => {
    const [isDeploying, setIsDeploying] = useState(false);

    const handleDemoClick = () => {
        setIsDeploying(true);
        setTimeout(() => setIsDeploying(false), 3000);
    };

    return (
        <section id="demo" className="py-24 px-6 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">See It In Action</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Watch how a simple code change triggers automatic deployment
                    </p>
                </div>

                {/* Demo Visualization */}
                <div className="glass rounded-3xl p-8 md:p-12 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Step 1: Code Push */}
                        <div className="flex-1 text-center">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">1. Push Code</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Commit & push to GitHub</p>
                        </div>

                        {/* Arrow */}
                        <div className="transform rotate-90 md:rotate-0">
                            <svg className={`w-12 h-12 text-primary-500 ${isDeploying ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>

                        {/* Step 2: GitHub Actions */}
                        <div className="flex-1 text-center">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">2. CI/CD Runs</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">GitHub Actions builds</p>
                        </div>

                        {/* Arrow */}
                        <div className="transform rotate-90 md:rotate-0">
                            <svg className={`w-12 h-12 text-primary-500 ${isDeploying ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>

                        {/* Step 3: Deployment */}
                        <div className="flex-1 text-center">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">3. Live!</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Deployed automatically</p>
                        </div>
                    </div>
                </div>

                {/* Interactive Demo Button */}
                <div className="text-center">
                    <button
                        onClick={handleDemoClick}
                        disabled={isDeploying}
                        className={`px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 ${isDeploying
                                ? 'opacity-75 cursor-not-allowed'
                                : 'hover:scale-105 hover:shadow-3xl'
                            }`}
                    >
                        {isDeploying ? (
                            <span className="flex items-center gap-3">
                                <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Deploying...
                            </span>
                        ) : (
                            '🚀 Push Change & Watch Auto-Deploy'
                        )}
                    </button>

                    {isDeploying && (
                        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold animate-pulse">
                            ✅ Deployment successful! Your changes are live.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Demo;
