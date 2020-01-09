const { Feats, Sequelize } = require('../models');
const { SendError, throwError, throwIf } = require('../utils/errorHandling');

exports.getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const feat = await Feats.findByPk(id).then(
      // success
      throwIf((row) => !row, 404, 'Project not found'),
      // fail
      throwError(500, 'Sequelize Error'),
    );
    res.json(feat);
  } catch (e) {
    SendError(res, e);
  }
};

exports.getAll = async (req, res) => {
  try {
    const feat = await Feats.findAll();
    res.json(feat || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createFeat = async (req, res) => {
  const { featName, featDescription } = req.body;
  try {
    const feat = await Feats.create({ featName, featDescription })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json(feat);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateFeat = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedQuiz]] = await Feats.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(updatedQuiz);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeFeat = async (req, res) => {
  const { id } = req.params;
  await Feats.destroy({ where: { id } });
  res.sendStatus(200);
};
