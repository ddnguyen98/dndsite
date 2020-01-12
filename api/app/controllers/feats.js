const { Feats, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  try {
    const feats = await Feats.findAll();
    res.json(feats || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createFeat = async (req, res) => {
  const { featName, featDescription } = '';
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
    const [, [updatedFeat]] = await Feats.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(updatedFeat);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeFeat = async (req, res) => {
  try {
    const { id } = req.params;
    await Feats.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    SendError(res, e);
  }
};
