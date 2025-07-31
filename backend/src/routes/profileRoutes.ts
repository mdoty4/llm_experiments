import { Router } from 'express';
import { authenticateToken } from '../utils/jwt';
import { getProfile } from '../controllers/profileController';

const router = Router();

// Protected route - requires authentication
router.get('/profile', authenticateToken, getProfile);

export default router;