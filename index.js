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

const avaliacao1 = 4
const avaliacao2 = 8
let avaliacaoOptativa = 0

if (avaliacaoOptativa == undefined) {
  avaliacaoOptativa = -1

  console.log(avaliacaoOptativa)
}
