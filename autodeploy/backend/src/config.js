import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/autodeploy',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    jwtSecret: process.env.JWT_SECRET || 'secret123',
    githubToken: process.env.GITHUB_TOKEN,
    repoOwner: process.env.REPO_OWNER,
    repoName: process.env.REPO_NAME
};
