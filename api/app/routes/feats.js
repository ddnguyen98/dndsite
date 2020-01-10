const router = require('express').Router();
const featsCtrl = require('../controllers/feats');

router.get('/', featsCtrl.getAll);
router.post('/', featsCtrl.createFeat);
router.delete('/', featsCtrl.removeFeat);
router.put('/', featsCtrl.updateFeat);


module.exports = router;
