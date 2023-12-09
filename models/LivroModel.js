const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const livroSchema = Schema({
    id: Number, 
    titulo: String,
    autor: String,
    isbn: Number
});
module.exports = mongoose.model("Livro", livroSchema);
