const router = require('express').Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.getAll);
router.post('/', skillsCtrl.createSkill);
router.delete('/', skillsCtrl.removeSkill);
router.put('/', skillsCtrl.updateSkill);


module.exports = router;
