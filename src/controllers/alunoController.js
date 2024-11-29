const Aluno = require('../models/Aluno');

// Listar alunos
exports.listarAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar alunos.', error: err });
    }
};

// Criar aluno
exports.criarAluno = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const novoAluno = new Aluno({ nome, email, senha });
        await novoAluno.save();
        res.status(201).json(novoAluno);
    } catch (err) {
        res.status(400).json({ message: 'Erro ao criar aluno.', error: err });
    }
};

// Atualizar aluno
exports.atualizarAluno = async (req, res) => {
    const { id } = req.params;
    try {
        const alunoAtualizado = await Aluno.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(alunoAtualizado);
    } catch (err) {
        res.status(400).json({ message: 'Erro ao atualizar aluno.', error: err });
    }
};

// Remover aluno
exports.removerAluno = async (req, res) => {
    const { id } = req.params;
    try {
        await Aluno.findByIdAndDelete(id);
        res.status(200).json({ message: 'Aluno removido com sucesso.' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao remover aluno.', error: err });
    }
};
