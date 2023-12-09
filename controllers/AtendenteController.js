const AtendenteModel = require("../models/AtendenteModel");
const Atendentes = [];
const Atendente = require("../Atendente");

class AtendenteController {
  static async cadastrar(req, res) {
    if(req.body._id == ""){
      
    const novoAtendente = new AtendenteModel({
      id: req.body.id,
      cpf: req.body.cpf,
      nome: req.body.nome,
      email: req.body.email,
      

    });
    await novoAtendente.save();
      res.redirect("/atendentes?s=1");
    } else {
      await AtendenteModel.findOneAndUpdate({_id: req.body._id},
        {
          id: req.body.id,
          cpf: req.body.cpf,
          nome: req.body.nome,
          email: req.body.email,

        });
        res.redirect("/atendentes?s=3")
    }
  }

  static async listar(req, res) {
    const status = req.query.s;
    const atendentes = await AtendenteModel.find();

    res.render("atendente/relatorio", { atendentes, status });
  }

  static async detalhar(req, res) {
    const id = req.params.id;
    const atendente = await AtendenteModel.findOne({ id: id });
    res.render("atendente/detalhar", { atendente });
  }

  static async cadastrarGet(req, res) {
    const id = req.params.id;
    const atendente = {};
    res.render("atendente/cadastrar", { atendente });
  }

  static async remover(req, res) {
    const id = req.params.id;
    await AtendenteModel.findOneAndDelete({ id: id });
    res.redirect("/atendentes?s=2");
  }

  static async atualizar(req, res) {
    let id = req.params.id;
    const atendente = await AtendenteModel.findOne({ id: id });
    res.render("atendente/cadastrar", { atendente });
  }

}

module.exports = AtendenteController;
