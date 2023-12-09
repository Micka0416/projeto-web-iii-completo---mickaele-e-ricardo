const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");

const AtendenteController = require("../controllers/AtendenteController");

routes.post("/atendentes", auth, AtendenteController.cadastrar);
routes.get("/atendentes", auth, AtendenteController.listar);
routes.get("/atendentes/cadastrar", auth,  AtendenteController.cadastrarGet);
routes.get("/atendentes/:id", auth, AtendenteController.detalhar);
routes.get("/atendentes/deletar/:id", auth, AtendenteController.remover);
routes.get("/atendentes/atualizar/:id", auth, AtendenteController.atualizar);
module.exports = routes;
