const router = require('express').Router();
const featsCtrl = require('../controllers/feats');

router.get('/:id', featsCtrl.getOneById);
router.get('/', featsCtrl.getOneById);
router.post('/', featsCtrl.createFeat);

module.exports = router;
