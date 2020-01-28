const { Items, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const items = await Items.findAll({ where: { characterId } });
    res.status(200).json(items || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createItem = async (req, res) => {
  const { id, characterId } = req.body;
  try {
    const item = await Items.create({
      id, itemName: '', itemDescription: '', itemWeight: '', characterId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(201).json(item);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedItem]] = await Items.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(200).json(updatedItem);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Items.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    SendError(res, e);
  }
};
