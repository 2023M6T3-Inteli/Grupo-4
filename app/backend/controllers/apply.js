const { validationResult } = require("express-validator");
require("express-async-errors");

const service = require("../services/apply");

const Apply = new service.Apply();

const Create = async (req, res) => {
  const { projectId, offerId, why } = req.body;

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
    const result = await Apply.Create(projectId, offerId, req.id, why);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetApplyByProjectId = async (req, res) => {
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
        const result = await Apply.GetByProjectId(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const GetApplyByUserId = async (req, res) => {
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
        const result = await Apply.GetByUserId(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const GetApplyByOfferId = async (req, res) => {
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
        const result = await Apply.GetByOfferId(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const GetByOfferIdAndUserId = async (req, res) => {
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
        const result = await Apply.GetByOfferIdAndUserId(id, req.id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const UpdateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

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
        const result = await Apply.updateStatus(id, status);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteApply = async (req, res) => {
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
        const result = await Apply.deleteApply(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    Create,
    GetApplyByProjectId,
    GetApplyByUserId,
    GetApplyByOfferId,
    GetByOfferIdAndUserId,
    UpdateStatus,
    deleteApply
};
