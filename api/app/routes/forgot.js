const router = require('express').Router();
const authCtrl = require('../controllers/auth');

router.get('/', authCtrl.forgotPassword);

module.exports = router;
