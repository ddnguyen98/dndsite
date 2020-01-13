const router = require('express').Router();
const itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.getAll);
router.post('/', itemsCtrl.createItem);
router.delete('/', itemsCtrl.removeItem);
router.put('/', itemsCtrl.updateItem);


module.exports = router;
