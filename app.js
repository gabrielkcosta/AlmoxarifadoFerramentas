import express from 'express';
import ferramentaRoutes from './routes/ferramentaRoutes.js';
import colaboradorRoutes from './routes/colaboradorRoutes.js';

const app = express();

app.use(express.json());

app.use('/ferramenta', ferramentaRoutes);
app.use('/colaborador', colaboradorRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando http://localhost:3002`);
});