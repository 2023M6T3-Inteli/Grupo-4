const { validationResult } = require("express-validator");
require("express-async-errors");

const service = require("../services/content");

const Content = new service.Content();

const Create = async (req, res) => {
  const { title, description, tags, media } = req.body;

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
    const result = await Content.Create(
      title,
      description,
      tags,
      media,
      req.id
    );
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetContentByID = async (req, res) => {
  const { id } = req.params;

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
    const result = await Content.getContent(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {
  Create,
  GetContentByID,
};
