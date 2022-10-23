const express = require('express');
const router = express.Router();
const Authentication = require('../controllers/authentication.controller'); 

router.post('/login', Authentication.login);
router.post('/logout', Authentication.logout);

module.exports = router;