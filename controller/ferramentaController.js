import { Ferramenta } from '../model/Ferramenta.js';
import * as ferramentaRepository from '../repository/ferramentaRepository.js';

export function cadastrarFerramenta(req, res) {
  const { codigo, descricao, estado } = req.body;
  
  const novaFerramenta = new Ferramenta(codigo, descricao, estado);
  ferramentaRepository.cadastrar(novaFerramenta);
  
  return res.status(201).json({
    mensagem: 'Ferramenta cadastrada com sucesso!',
    ferramenta: novaFerramenta
  });
}

export function listarFerramentas(req, res) {
  const ferramentas = ferramentaRepository.listar();
  return res.status(200).json(ferramentas);
}

export function buscarFerramentaPorIndice(req, res) {
  const { indice } = req.params;
  const ferramenta = ferramentaRepository.buscarPorIndice(Number(indice));

  if (!ferramenta) {
    return res.status(404).json({ erro: 'Ferramenta não encontrada no índice informado.' });
  }

  return res.status(200).json(ferramenta);
}

export function atualizarFerramenta(req, res) {
  const { indice } = req.params;
  const { codigo, descricao, estado } = req.body;

  const indiceNum = Number(indice);
  const ferramentaExistente = ferramentaRepository.buscarPorIndice(indiceNum);

  if (!ferramentaExistente) {
    return res.status(404).json({ erro: 'Ferramenta não encontrada para atualização.' });
  }

  const ferramentaAtualizada = new Ferramenta(codigo, descricao, estado);
  ferramentaRepository.atualizar(indiceNum, ferramentaAtualizada);

  return res.status(200).json({
    mensagem: 'Ferramenta atualizada com sucesso!',
    ferramenta: ferramentaAtualizada
  });
}

export function deletarFerramenta(req, res) {
  const { indice } = req.params;
  const indiceNum = Number(indice);

  const ferramentaExistente = ferramentaRepository.buscarPorIndice(indiceNum);

  if (!ferramentaExistente) {
    return res.status(404).json({ erro: 'Ferramenta não encontrada para exclusão.' });
  }

  ferramentaRepository.deletar(indiceNum);

  return res.status(204).send();
}