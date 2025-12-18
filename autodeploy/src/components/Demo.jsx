import { useState } from 'react';
import axios from 'axios';
import { GitCommit, Clock, CheckCircle, ArrowRight, Github, Loader } from 'lucide-react';

const Demo = () => {
    const [isDeploying, setIsDeploying] = useState(false);
    const [commitDetails, setCommitDetails] = useState(null);

    const handleDemoClick = async () => {
        setIsDeploying(true);
        setCommitDetails(null);

        try {
            // Artificial delay for effect
            await new Promise(resolve => setTimeout(resolve, 2000));

            const { data } = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/demo/commit`);

            if (data && data.length > 0) {
                const latest = data[0];
                setCommitDetails({
                    hash: latest.sha.substring(0, 7),
                    message: latest.commit.message,
                    branch: 'main',
                    timestamp: new Date(latest.commit.author.date).toLocaleString(),
                    author: latest.commit.author.name
                });
            } else {
                // Fallback if API fails or returns empty
                throw new Error("No data");
            }
        } catch (error) {
            console.error("Demo fetch error:", error);
            // Fallback to simulation on error
            setCommitDetails({
                hash: Math.random().toString(16).substring(2, 9),
                message: 'feat: update landing page hero section (Simulated)',
                branch: 'main',
                timestamp: new Date().toLocaleString(),
                author: 'You'
            });
        } finally {
            setIsDeploying(false);
        }
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
                        <div className="flex-1 text-center group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Github className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1. Push Code</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Commit & push to GitHub</p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:block">
                            <ArrowRight className={`w-8 h-8 text-gray-400 ${isDeploying ? 'animate-pulse text-primary-500' : ''}`} />
                        </div>

                        {/* Step 2: GitHub Actions */}
                        <div className="flex-1 text-center group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <ActivityIcon isAnimating={isDeploying} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">2. CI/CD Runs</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">GitHub Actions builds</p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:block">
                            <ArrowRight className={`w-8 h-8 text-gray-400 ${isDeploying ? 'animate-pulse text-primary-500' : ''}`} />
                        </div>

                        {/* Step 3: Deployment */}
                        <div className="flex-1 text-center group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className={`w-10 h-10 text-white ${commitDetails ? 'scale-110' : ''}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">3. Live!</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Deployed automatically</p>
                        </div>
                    </div>
                </div>

                {/* Interactive Demo Button & Results */}
                <div className="text-center max-w-2xl mx-auto">
                    <button
                        onClick={handleDemoClick}
                        disabled={isDeploying}
                        className={`w-full md:w-auto px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 ${isDeploying
                            ? 'opacity-75 cursor-not-allowed'
                            : 'hover:scale-105 hover:shadow-3xl'
                            }`}
                    >
                        {isDeploying ? (
                            <span className="flex items-center justify-center gap-3">
                                <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Pushing Changes...
                            </span>
                        ) : (
                            '🚀 Push Change & Watch Auto-Deploy'
                        )}
                    </button>

                    {/* Commit Details Card */}
                    {commitDetails && (
                        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-500/20 animate-fade-in-up">
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                                <div className="flex items-center text-green-600 dark:text-green-400">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    <span className="font-bold">Successfully Deployed</span>
                                </div>
                                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                                    {commitDetails.hash}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Commit Message</p>
                                    <p className="font-medium text-gray-900 dark:text-white flex items-start">
                                        <GitCommit className="w-4 h-4 mr-2 mt-1 text-gray-400" />
                                        {commitDetails.message}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Time</p>
                                    <p className="font-medium text-gray-900 dark:text-white flex items-center">
                                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                        {commitDetails.timestamp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// Helper component for animation
const ActivityIcon = ({ isAnimating }) => (
    <svg className={`w-10 h-10 text-white ${isAnimating ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
);

export default Demo;
