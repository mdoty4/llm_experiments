"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../utils/jwt");
const profileController_1 = require("../controllers/profileController");
const router = (0, express_1.Router)();
// Protected route - requires authentication
router.get('/profile', jwt_1.authenticateToken, profileController_1.getProfile);
exports.default = router;
