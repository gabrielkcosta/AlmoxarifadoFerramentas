const colaboradores = [];

export function cadastrar(colaborador) {
  colaboradores.push(colaborador);
}

export function listar() {
  return colaboradores;
}

export function buscarPorIndice(indice) {
  return colaboradores[indice];
}

export function atualizar(indice, colaborador) {
  if (indice >= 0 && indice < colaboradores.length) {
    colaboradores[indice] = colaborador;
    return true;
  }
  return false;
}

export function deletar(indice) {
  if (indice >= 0 && indice < colaboradores.length) {
    colaboradores.splice(indice, 1);
    return true;
  }
  return false;
}