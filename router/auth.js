const express = require('express');
const router = express.Router();

router.post('/login', (request, response) => {
    response.json({
        success: true,
        token: 'success-token'
    });
});

module.exports = router;