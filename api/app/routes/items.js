const router = require('express').Router();
const itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.getAll);
router.post('/', itemsCtrl.createItem);
router.delete('/:id', itemsCtrl.removeItem);
router.put('/:id', itemsCtrl.updateItem);


module.exports = router;
