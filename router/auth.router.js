const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const Authentication = require('../controllers/authenticate.controller'); 

router.post('/login', auth, Authentication.login);
router.post('/logout', auth, Authentication.logout);

module.exports = router;