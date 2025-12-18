import axios from 'axios';
import { config } from '../config.js';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${config.githubToken}`,
        Accept: 'application/vnd.github.v3+json',
    },
});

export const getCommits = async (req, res) => {
    try {
        const { repoOwner, repoName } = config;
        if (!repoOwner || !repoName) {
            return res.status(500).json({ message: 'GitHub repository checks not configured' });
        }

        // If no token, return mock data or error
        if (!config.githubToken) {
            console.log("No GitHub token found, returning mock data");
            return res.json([
                { sha: 'mock1', commit: { message: 'Initial commit (Mock)', author: { name: 'Dev', date: new Date().toISOString() } } },
                { sha: 'mock2', commit: { message: 'Added auth features (Mock)', author: { name: 'Dev', date: new Date().toISOString() } } }
            ]);
        }

        const response = await githubApi.get(`/repos/${repoOwner}/${repoName}/commits?per_page=10`);
        res.json(response.data);
    } catch (error) {
        console.error('GitHub API Error:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch commits' });
    }
};

export const getWorkflowRuns = async (req, res) => {
    try {
        const { repoOwner, repoName } = config;
        if (!repoOwner || !repoName) {
            return res.status(500).json({ message: 'GitHub repository checks not configured' });
        }

        if (!config.githubToken) {
            return res.json({ total_count: 0, workflow_runs: [] });
        }

        const response = await githubApi.get(`/repos/${repoOwner}/${repoName}/actions/runs?per_page=10`);
        res.json(response.data);
    } catch (error) {
        console.error('GitHub API Error:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch workflow runs' });
    }
};
