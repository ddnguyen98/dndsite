const router = require('express').Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.getAll);
router.post('/', skillsCtrl.createSkill);
router.delete('/:id', skillsCtrl.removeSkill);
router.put('/:id', skillsCtrl.updateSkill);


module.exports = router;
