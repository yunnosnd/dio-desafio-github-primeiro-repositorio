/*
Faça um programa para calcular o valor gasto em uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoLitroComb = 5.79;
const kmPorLitro = 11;
const distViagem = 116;

const valorgasto = distViagem / kmPorLitro * precoLitroComb;

console.log("O valor total gasto na viagem é de " + valorgasto.toFixed(2));