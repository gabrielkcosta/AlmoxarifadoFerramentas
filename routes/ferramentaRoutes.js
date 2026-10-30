import { Router } from 'express';
import {
  cadastrarFerramenta,
  listarFerramentas,
  buscarFerramentaPorIndice,
  atualizarFerramenta,
  deletarFerramenta
} from '../controller/ferramentaController.js';

const router = Router();

router.post('/', cadastrarFerramenta);
router.get('/', listarFerramentas);
router.get('/:indice', buscarFerramentaPorIndice);
router.patch('/:indice', atualizarFerramenta);
router.delete('/:indice', deletarFerramenta);

export default router;