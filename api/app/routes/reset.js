const router = require('express').Router();
const authCtrl = require('../controllers/auth');

router.post('/', authCtrl.resetPassword);

module.exports = router;
