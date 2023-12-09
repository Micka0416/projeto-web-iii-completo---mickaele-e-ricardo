const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");

const LivroController = require("../controllers/LivroController");

routes.post("/livros", auth, LivroController.cadastrar);
routes.get("/livros", auth, LivroController.listar);
routes.get("/livros/cadastrar", auth, LivroController.cadastrarGet);
routes.get("/livros/:id", auth, LivroController.detalhar);
routes.get("/livros/deletar/:id", auth,  LivroController.remover);
routes.get("/livros/atualizar/:id", auth, LivroController.atualizar);
module.exports = routes;
