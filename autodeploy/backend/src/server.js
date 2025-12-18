import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import connectDB from './db.js';
import apiRoutes from './routes/api.js';

import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();

// Middleware
app.use(cors({
    origin: config.corsOrigin,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'AutoDeploy Backend API',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Start server
// Start server
connectDB().then(() => {
    app.listen(config.port, () => {
        console.log(`🚀 AutoDeploy Backend running on port ${config.port}`);
        console.log(`📍 Environment: ${config.nodeEnv}`);
    });
});

export default app;
