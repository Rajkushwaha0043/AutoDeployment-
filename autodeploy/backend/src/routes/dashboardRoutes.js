import express from 'express';
import { getCommits, getWorkflowRuns } from '../controllers/githubController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/commits', protect, getCommits);
router.get('/actions', protect, getWorkflowRuns);

export default router;
