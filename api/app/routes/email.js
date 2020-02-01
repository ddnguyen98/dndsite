const router = require('express').Router();
const authCtrl = require('../controllers/auth');

router.post('/', authCtrl.emailMe);

module.exports = router;
