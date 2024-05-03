const vitorias = prompt()
const derrotas = prompt()

function calcularSaldo(vitorias, derrotas){
  return vitorias - derrotas
}
function definirElo(saldo){
  if (saldo <= 10){
    return"ferro"
  }else if(saldo <= 20){
    return"Bronze"
  }else if(saldo <= 50){
    return"Prata"
  }else if(saldo <= 80){
    return"Ouro"
  }else if(saldo <= 90){
    return"Diamante"
  }else if(saldo <= 100){
    return"Lendário"
  }else {
    return"Imortal"
  }
}

const saldo = calcularSaldo(vitorias, derrotas)
const elo = definirElo(saldo)

console.log("O Herói tem o saldo de vitórias: "+ saldo + " e está no rank:"+elo)