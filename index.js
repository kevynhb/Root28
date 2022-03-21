/*
  Escreva um programa que leia as notas das duas avaliações normais e a nota da avaliação optativa.

  Caso o aluno não tenha feito a optativa deve ser fornecido o valor -1.

  Calcular a média do semestre considerando que a prova optativa substitui a nota mais baixa entre as duas primeiras avaliações.

  Escrever a média e mensagens que indiquem se o aluno foi aprovado, reprovado ou está em exame, de acordo com as informações abaixo:

  Se a média for maior igual a 6
    Aprovado
  Se a média for menor que 3
    Reprovado 
  Se média for maior igual a 3 e menor que 6
    Exame
*/

console.log('Inicio Aplicação')

// Aluno 1
const avaliacao1 = 1
const avaliacao2 = 6
let avaliacaoOptativa

function calcularMedia(n1, n2, nOp) {
  if (nOp == undefined) {
    nOp = -1
    console.log(nOp)
  }

  if (n1 < n2) {
    n1 = n1 < nOp ? nOp : n1
  } else if (n2 < n1) {
    n2 = n2 < nOp ? nOp : n2
  }

  const media = (n1 + n2) / 2
  return media
}

function escreverMensagemMedia(media) {
  // Se a média for maior igual a 6
  //   Aprovado
  // Se a média for menor que 3
  //   Reprovado
  // Se média for maior igual a 3 e menor que 6
  //   Exame
  if (media >= 6) {
    console.log(`Aprovado: ${media}`)
  } else if (media < 3) {
    console.log(`Reprovado: ${media}`)
  } else {
    console.log(`Exame: ${media}`)
  }
}

const mediaAluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa)
//Aluno 2
const mediaAluno2 = calcularMedia(1, 2, 3)

escreverMensagemMedia(mediaAluno1)
escreverMensagemMedia(mediaAluno2)
