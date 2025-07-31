"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Placeholder route for future GLM integration
router.get('/playground', (req, res) => {
    res.json({
        message: 'Playground endpoint - ready for GLM integration',
        timestamp: new Date().toISOString(),
        status: 'active'
    });
});
exports.default = router;
