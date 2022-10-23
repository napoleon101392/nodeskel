const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');

router.post('/login', auth, (request, response) => {
    response.json({
        success: true,
        token: 'success-token'
    });
});

module.exports = router;