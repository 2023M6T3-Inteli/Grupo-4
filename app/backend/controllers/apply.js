const { validationResult } = require("express-validator");
require("express-async-errors");

const service = require("../services/content");

const Apply = new service.Apply();

const Create = async (req, res) => {
  const { contentId, offerId, why } = req.body;

  //Valida se algum paremetro é inválido
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.errors[0].msg,
    });
  }

  //Chamada para o service
  try {
    //Tratamento das respostas do método da classe
    const result = await Apply.Create(contentId, offerId, req.id, why);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
    Create,
};
