const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    favoritos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Filme' }],
}, { timestamps: true });

module.exports = mongoose.model('Aluno', AlunoSchema);
