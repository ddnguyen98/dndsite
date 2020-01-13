const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');

router.get('/id', charactersCtrl.getOneById);
router.get('/', charactersCtrl.getAll);
router.post('/', charactersCtrl.createCharacter);
router.delete('/', charactersCtrl.removeCharacter);
router.put('/', charactersCtrl.updateCharacter);


module.exports = router;
