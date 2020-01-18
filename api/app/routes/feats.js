const router = require('express').Router();
const featsCtrl = require('../controllers/feats');

router.get('/', featsCtrl.getAll);
router.post('/', featsCtrl.createFeat);
router.delete('/:id', featsCtrl.removeFeat);
router.put('/:id', featsCtrl.updateFeat);


module.exports = router;
