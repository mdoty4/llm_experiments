import { Router } from 'express';

const router = Router();

// Placeholder route for future GLM integration
router.get('/playground', (req, res) => {
  res.json({
    message: 'Playground endpoint - ready for GLM integration',
    timestamp: new Date().toISOString(),
    status: 'active'
  });
});

export default router;