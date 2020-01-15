const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const protectedRoute = require('../utils/protectedRoute');

router.get('/id', charactersCtrl.getOneById);
router.get('/', protectedRoute, charactersCtrl.getAll);
router.post('/', charactersCtrl.createCharacter);
router.delete('/', charactersCtrl.removeCharacter);
router.put('/', charactersCtrl.updateCharacter);


module.exports = router;
