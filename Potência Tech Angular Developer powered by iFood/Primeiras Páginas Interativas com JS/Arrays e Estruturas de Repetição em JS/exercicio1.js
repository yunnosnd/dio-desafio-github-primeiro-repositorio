/*
Crie um programa que dado um número imprima a sua tabuada.
*/

const numero = 2
const multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Tabuada do ' + numero + ':');

for (let i = 0; i < multiplicador.length; i++) {
    const resultado = numero * multiplicador[i];
    console.log(numero + ' X ' + multiplicador[i] + ' = ' + resultado);
}

