const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const protectedRoute = require('../utils/protectedRoute');

router.get('/:id', charactersCtrl.getOneById);
router.get('/', protectedRoute, charactersCtrl.getAll);
router.post('/', protectedRoute, charactersCtrl.createCharacter);
router.delete('/:id', charactersCtrl.removeCharacter);
router.put('/:id', charactersCtrl.updateCharacter);

module.exports = router;
