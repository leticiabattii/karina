const express = require('express');
const router = express.Router();
const {
    listarAlunos,
    criarAluno,
    atualizarAluno,
    removerAluno,
} = require('../controllers/alunoController');

// Rota para listar todos os alunos
router.get('/', listarAlunos);

// Rota para criar um aluno
router.post('/', criarAluno);

// Rota para atualizar aluno por ID
router.put('/:id', atualizarAluno);

// Rota para remover aluno por ID
router.delete('/:id', removerAluno);

module.exports = router;
