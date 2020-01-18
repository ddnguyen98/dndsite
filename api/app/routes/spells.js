const router = require('express').Router();
const spellsCtrl = require('../controllers/spells');

router.get('/', spellsCtrl.getAll);
router.post('/', spellsCtrl.createSpell);
router.delete('/:id', spellsCtrl.removeSpell);
router.put('/:id', spellsCtrl.updateSpell);


module.exports = router;
