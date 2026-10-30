import { Colaborador } from '../model/Colaborador.js';
import * as colaboradorRepository from '../repository/colaboradorRepository.js';

export function cadastrarColaborador(req, res) {
  const { nome, matricula, setor } = req.body;
  
  const novoColaborador = new Colaborador(nome, matricula, setor);
  colaboradorRepository.cadastrar(novoColaborador);
  
  return res.status(201).json({
    mensagem: 'Colaborador cadastrado com sucesso!',
    colaborador: novoColaborador
  });
}

export function listarColaboradores(req, res) {
  const colaboradores = colaboradorRepository.listar();
  return res.status(200).json(colaboradores);
}

export function buscarColaboradorPorIndice(req, res) {
  const { indice } = req.params;
  const colaborador = colaboradorRepository.buscarPorIndice(Number(indice));

  if (!colaborador) {
    return res.status(404).json({ erro: 'Colaborador não encontrado no índice informado.' });
  }

  return res.status(200).json(colaborador);
}

export function atualizarColaborador(req, res) {
  const { indice } = req.params;
  const { nome, matricula, setor } = req.body;

  const indiceNum = Number(indice);
  const colaboradorExistente = colaboradorRepository.buscarPorIndice(indiceNum);

  if (!colaboradorExistente) {
    return res.status(404).json({ erro: 'Colaborador não encontrado para atualização.' });
  }

  const colaboradorAtualizado = new Colaborador(nome, matricula, setor);
  colaboradorRepository.atualizar(indiceNum, colaboradorAtualizado);

  return res.status(200).json({
    mensagem: 'Colaborador atualizado com sucesso!',
    colaborador: colaboradorAtualizado
  });
}

export function deletarColaborador(req, res) {
  const { indice } = req.params;
  const indiceNum = Number(indice);

  const colaboradorExistente = colaboradorRepository.buscarPorIndice(indiceNum);

  if (!colaboradorExistente) {
    return res.status(404).json({ erro: 'Colaborador não encontrado para exclusão.' });
  }

  colaboradorRepository.deletar(indiceNum);

  return res.status(204).send();
}