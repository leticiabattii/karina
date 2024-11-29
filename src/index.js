const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conecta ao banco de dados
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/alunos', require('./routes/alunoRoutes'));
app.use('/api/professores', require('./routes/professorRoutes'));
// Adicione outras rotas aqui

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
