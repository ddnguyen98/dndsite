const router = require('express').Router();
const spellsCtrl = require('../controllers/spells');

router.get('/', spellsCtrl.getAll);
router.post('/', spellsCtrl.createSpell);
router.delete('/', spellsCtrl.removeSpell);
router.put('/', spellsCtrl.updateSpell);


module.exports = router;
