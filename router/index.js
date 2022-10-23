const express = require('express');
const router = express.Router();
const auth = require('./auth.router');

router.use('/auth', require('../middleware/auth.middleware'), auth);

module.exports = router;