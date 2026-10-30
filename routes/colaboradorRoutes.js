import { Router } from 'express';
import {
  cadastrarColaborador,
  listarColaboradores,
  buscarColaboradorPorIndice,
  atualizarColaborador,
  deletarColaborador
} from '../controller/colaboradorController.js';

const router = Router();

router.post('/', cadastrarColaborador);
router.get('/', listarColaboradores);
router.get('/:indice', buscarColaboradorPorIndice);
router.patch('/:indice', atualizarColaborador);
router.delete('/:indice', deletarColaborador);

export default router;