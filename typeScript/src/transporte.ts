interface Transporte {
  tipo: string;
  descricao: string;
  tamanho: number;
}

interface Aereo extends Transporte {
  servicoDeBordo: string;
}

interface Rodoviario extends Transporte {
    paradas: number;
    numeroDoLugar: number;
}

function cadastroTransporte(transporte: Transporte) {
  console.log("Transporte " + JSON.stringify(transporte));
}

const aviao: Aereo = {
    tipo: 'aereo',
    descricao: 'Transporte para longas viagens',
    tamanho: 50,
    servicoDeBordo: "Possui serviço de bordo"
}

const rodoviario: Rodoviario = {
    tipo: 'rodoviario',
    descricao: 'Serviço rodoviario',
    tamanho: 5,
    numeroDoLugar: 3,
    paradas: 4,
}

cadastroTransporte(aviao);
console.log('============')
cadastroTransporte(rodoviario);