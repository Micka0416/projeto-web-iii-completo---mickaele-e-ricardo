const LivroModel = require("../models/LivroModel");
const livros = [];
const Livro = require("../Livro");

class LivroController {
  static async cadastrar(req, res) {
    if(req.body._id == ""){
      
    const novoLivro = new LivroModel({
      id: req.body.id,
      titulo: req.body.titulo,
      autor: req.body.autor,
      isbn: req.body.isbn,
    });
    await novoLivro.save();
      res.redirect("/livros?s=1");
    } else {
      await LivroModel.findOneAndUpdate({_id: req.body._id},
        {
          titulo: req.body.titulo,
          autor: req.body.autor,
          isbn: req.body.isbn,
        });
        res.redirect("/livros?s=3")
    }
  }

  static async listar(req, res) {
    const status = req.query.s;
    const livros = await LivroModel.find();

    res.render("livro/relatorio", { livros, status });

  }

  static async detalhar(req, res) {
    const id = req.params.id;
    const livro = await LivroModel.findOne({ id: id });
    res.render("livro/detalhar", { livro });
  }

  static async cadastrarGet(req, res) {
    const id = req.params.id;
    const livro = {};
    res.render("livro/cadastrar", { livro });
  }

  static async remover(req, res) {
    const id = req.params.id;
    await LivroModel.findOneAndDelete({ id: id });
    res.redirect("/livros?s=2");
  }

  static async atualizar(req, res) {
    let id = req.params.id;
    const livro = await LivroModel.findOne({ id: id });
    res.render("livro/cadastrar", { livro });
  }
}

module.exports = LivroController;
