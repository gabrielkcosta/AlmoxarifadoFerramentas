export class Ferramenta {
  static ESTADOS = {
    DISPONIVEL: 'disponível',
    EM_MANUTENCAO: 'em manutenção'
  };

  constructor(codigo, descricao, estado = Ferramenta.ESTADOS.DISPONIVEL) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.estado = estado;
  }
}