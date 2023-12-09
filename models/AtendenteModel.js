const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const atendenteSchema = Schema({
    id: Number, 
    cpf: String,
    nome: String,
    email: String
});
module.exports = mongoose.model("Atendente", atendenteSchema);
