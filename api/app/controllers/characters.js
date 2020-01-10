const { Characters, Sequelize } = require('../models');
const { SendError, throwError, throwIf } = require('../utils/errorHandling');

exports.getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Characters.findByPk(id).then(
      // success
      throwIf((row) => !row, 404, 'Project not found'),
      // fail
      throwError(500, 'Sequelize Error'),
    );
    res.json(character);
  } catch (e) {
    SendError(res, e);
  }
};
