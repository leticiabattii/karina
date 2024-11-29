const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    genero: { type: String },
    lancamento: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Filme', FilmeSchema);
