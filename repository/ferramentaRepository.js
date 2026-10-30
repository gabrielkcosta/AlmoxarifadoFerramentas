const ferramentas = [];

export function cadastrar(ferramenta) {
  ferramentas.push(ferramenta);
}

export function listar() {
  return ferramentas;
}

export function buscarPorIndice(indice) {
  return ferramentas[indice];
}

export function atualizar(indice, ferramenta) {
  if (indice >= 0 && indice < ferramentas.length) {
    ferramentas[indice] = ferramenta;
    return true;
  }
  return false;
}

export function deletar(indice) {
  if (indice >= 0 && indice < ferramentas.length) {
    ferramentas.splice(indice, 1);
    return true;
  }
  return false;
}