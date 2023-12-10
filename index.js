const express = require("express");
const Atendente = require("./Atendente");
const Livro = require("./Livro");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mickaele:<password>@cluster0.bhwc5cl.mongodb.net/?retryWrites=true&w=majority");
const AtendenteModel = require ("./models/AtendenteModel");
const LivroModel = require ("./models/LivroModel");
 
 
 
app.get("/", function(req, res){
    res.render("index");
});

app.get("/atendentes", async function(req,res){
    const lista = await AtendenteModel.find();
    res.render("listar", {lista});
});

app.post("/atendentes", async function(req,res){
    const p = req.body;
    const novoAtendente = new AtendenteModel({
        cpf: p.cpf,
        nome: p.nome,
        email: p.email
    })
    await novoAtendente.save();
    res.redirect("/atendentes");
});

app.get("/atendentes/cadastrar", function(req,res){
    res.render("cadastrar");
});
 
app.get("/atendentes/:cpf", async function(req,res){
    const cpf = req.params.cpf;
    const atendente = await AtendenteModel.findOne({cpf: cpf});
    if(atendente==undefined){
        res.send("Atendente não encontrado!");
    }
    else{
    res.render("detalhar", atendente);
   
    }
});



app.get("/livros", async function(req,res){
    const listaLiv = await LivroModel.find();
    res.render("listarLivros", {listaLiv});
});


app.post("/livros", async function(req,res){
    const p = req.body;
    const novoLivro = new LivroModel({
        titulo: p.titulo,
        autor: p.autor,
        isbn: p.isbn
    })
    await novoLivro.save();
    res.redirect("/livros");
});

app.get("/livros/cadastrar", function(req,res){
    res.render("cadastrarLivros");
});

app.get("/livros/:titulo", async function(req,res){
    const titulo = req.params.titulo;
    const livro = await LivroModel.findOne({titulo: titulo});
    if(livro==undefined){
        res.send("Livro não encontrado");
    }
    else{
    res.render("detalharLivros", livro);
   
    }
});

app.use(function(req, res){
    res.status(500).render("500");
});

app.listen(999, function(){
    console.log("Servidor iniciado");
});
