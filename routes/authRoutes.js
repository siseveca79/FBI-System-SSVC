const express = require('express');
const { authenticateAgent, restrictedRoute } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/login', authenticateAgent);
router.get('/restricted', verifyToken, restrictedRoute);

module.exports = router;
