import express from 'express';
import { getCommits } from '../controllers/githubController.js';

const router = express.Router();

// Random quotes for the demo feature
const quotes = [
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    }
];

// Get random quote
router.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

// Demo: Get latest commit (public)
router.get('/demo/commit', async (req, res) => {
    // Re-use the controller logic but simplify response if needed
    // For now, directly use the controller or wrap it
    // We'll wrap it to safely handle the array response
    await getCommits(req, res);
});

// Deployment stats endpoint (demo data)
router.get('/deployments', (req, res) => {
    res.json({
        total: 127,
        successful: 124,
        failed: 3,
        lastDeployment: {
            timestamp: new Date().toISOString(),
            status: 'success',
            duration: '2m 34s',
            commit: 'feat: add new feature'
        },
        stats: {
            averageTime: '2m 15s',
            successRate: '97.6%'
        }
    });
});

// Get deployment history (demo data)
router.get('/deployments/history', (req, res) => {
    const history = [];
    for (let i = 0; i < 10; i++) {
        history.push({
            id: i + 1,
            timestamp: new Date(Date.now() - i * 3600000).toISOString(),
            status: i === 2 || i === 7 ? 'failed' : 'success',
            commit: `commit ${i + 1}`,
            branch: 'main',
            duration: `${Math.floor(Math.random() * 3) + 1}m ${Math.floor(Math.random() * 60)}s`
        });
    }
    res.json(history);
});

// Info endpoint
router.get('/info', (req, res) => {
    res.json({
        name: 'AutoDeploy API',
        version: '1.0.0',
        description: 'Backend API demonstrating CI/CD integration',
        endpoints: {
            quote: '/api/quote',
            deployments: '/api/deployments',
            history: '/api/deployments/history',
            info: '/api/info'
        }
    });
});

export default router;
