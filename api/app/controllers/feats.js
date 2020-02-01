const { Feats, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

// Gets all based on params of form
exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const feats = await Feats.findAll({ where: { characterId } });
    res.status(200).json(feats || []);
  } catch (e) {
    SendError(res, e);
  }
};

// Creates feat with empty data
exports.createFeat = async (req, res) => {
  const { id, characterId } = req.body;
  try {
    const feat = await Feats.create({
      id, featName: '', featDescription: '', characterId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(201).json(feat);
  } catch (e) {
    SendError(res, e);
  }
};

// Updates feat based on content
exports.updateFeat = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedFeat]] = await Feats.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(200).json(updatedFeat);
  } catch (e) {
    SendError(res, e);
  }
};

// Removes feat from database
exports.removeFeat = async (req, res) => {
  try {
    const { id } = req.params;
    await Feats.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    SendError(res, e);
  }
};
