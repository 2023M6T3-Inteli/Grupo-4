const { validationResult } = require("express-validator");
require("express-async-errors");

const service = require("../services/content");

const Content = new service.Content();

const Create = async (req, res) => {
  const { title, description, tags, links } = req.body;

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
      links,
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

const GetAllContent = async (req, res) => {
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
    const result = await Content.getAllContent();
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const Update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

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
    const result = await Content.update(id, data);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const Delete = async (req, res) => {
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
    const result = await Content.delete(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const Report = async (req, res) => {
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
    const result = await Content.reportContent(id, req.id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const rateContent = async (req, res) => {
  const { contentId, rate } = req.body;

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
    const result = await Content.rateContent(req.id, contentId, rate);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getRecommendation = async (req, res) => {
  const { tag } = req.params;
  
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
    const result = await Content.getRecommendation(tag);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getRating = async (req, res) => {
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
    const result = await Content.getRating(id, req.id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllReportedContent = async (req, res) => {
  //Chamada para o service
  try {
    //Tratamento das respostas do método da classe
    const result = await Content.getAllReportedContent();
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const closeReport = async (req, res) => {
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
    const result = await Content.closeReport(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};



module.exports = {
  Create,
  GetContentByID,
  GetAllContent,
  Update,
  Delete,
  Report,
  rateContent,
  getRating,
  getAllReportedContent,
  closeReport,
  getRecommendation
};
