const router = require('express').Router();
const authCtrl = require('../controllers/auth');

router.post('/', authCtrl.forgotPassword);

// router.get('/reset', authCtrl.resetPassword);

module.exports = router;
