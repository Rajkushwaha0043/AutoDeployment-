import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import {
    GitCommit,
    Activity,
    Clock,
    CheckCircle,
    XCircle,
    LogOut,
    Layout,
    GitBranch,
    PlayCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [commits, setCommits] = useState([]);
    const [actions, setActions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [commitsRes, actionsRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/dashboard/commits`),
                    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/dashboard/actions`)
                ]);
                setCommits(commitsRes.data);
                // Handle actions response structure (GitHub API returns { total_count, workflow_runs })
                setActions(actionsRes.data.workflow_runs || []);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-primary-500">
                <Activity className="w-10 h-10 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Header />

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Dashboard
                        </h1>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                            Welcome back, {user?.username}
                        </p>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Commits Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                                <GitCommit className="w-5 h-5 mr-2 text-primary-500" />
                                Recent Commits
                            </h2>
                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                {commits.length} updates
                            </span>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
                            {commits.map((commit) => (
                                <div key={commit.sha} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {commit.commit.message}
                                            </p>
                                            <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                <span className="flex items-center mr-4">
                                                    <img
                                                        src={commit.author?.avatar_url || `https://ui-avatars.com/api/?name=${commit.commit.author.name}`}
                                                        alt=""
                                                        className="w-4 h-4 rounded-full mr-1.5"
                                                    />
                                                    {commit.commit.author.name}
                                                </span>
                                                <span className="flex items-center">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {formatDate(commit.commit.author.date)}
                                                </span>
                                            </div>
                                        </div>
                                        <a
                                            href={commit.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                                        >
                                            <span className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                {commit.sha.substring(0, 7)}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                            {commits.length === 0 && (
                                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                    No commits found or API not configured.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Workflow Runs Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                                <PlayCircle className="w-5 h-5 mr-2 text-green-500" />
                                Workflow Runs
                            </h2>
                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                Live Status
                            </span>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
                            {actions.map((run) => (
                                <div key={run.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            {run.conclusion === 'success' ? (
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            ) : run.conclusion === 'failure' ? (
                                                <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                                            ) : (
                                                <Loader className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 animate-spin" />
                                            )}

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                    {run.name}
                                                    <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                                                        #{run.run_number}
                                                    </span>
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center">
                                                    <GitBranch className="w-3 h-3 mr-1" />
                                                    {run.head_branch}
                                                    <span className="mx-2">•</span>
                                                    {run.event}
                                                    <span className="mx-2">•</span>
                                                    {formatDate(run.created_at)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="ml-4 flex flex-col items-end">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full 
                        ${run.status === 'completed'
                                                    ? (run.conclusion === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400')
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                                }`}>
                                                {run.status === 'completed' ? run.conclusion : run.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {actions.length === 0 && (
                                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                    No workflow runs found or API not configured.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
