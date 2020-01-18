const router = require('express').Router();
const weaponsCtrl = require('../controllers/weapons');

router.get('/', weaponsCtrl.getAll);
router.post('/', weaponsCtrl.createWeapon);
router.delete('/:id', weaponsCtrl.removeWeapon);
router.put('/:id', weaponsCtrl.updateWeapon);


module.exports = router;
