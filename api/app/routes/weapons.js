const router = require('express').Router();
const weaponsCtrl = require('../controllers/weapons');

router.get('/', weaponsCtrl.getAll);
router.post('/', weaponsCtrl.createWeapon);
router.delete('/', weaponsCtrl.removeWeapon);
router.put('/', weaponsCtrl.updateWeapon);


module.exports = router;
