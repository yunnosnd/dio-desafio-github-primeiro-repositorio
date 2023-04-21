/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoLitroGasolina = 5.79;
const precoLitroEtanol = 3;
const tipoComb = 'Etanol';
const kmPorLitro = 10;
const distViagem = 100;

if(tipoComb === 'Etanol'){
    const valorgasto = (distViagem / kmPorLitro) * precoLitroEtanol;
    console.log('O valor total gasto na viagem é de ' + valorgasto.toFixed(2));
} else if(tipoComb === "Gasolina"){
    const valorgasto = (distViagem / kmPorLitro) * precoLitroGasolina;
    console.log('O valor total gasto na viagem é de ' + valorgasto.toFixed(2));
} 
else {
    console.log('Tipo de combustível inválido');
}