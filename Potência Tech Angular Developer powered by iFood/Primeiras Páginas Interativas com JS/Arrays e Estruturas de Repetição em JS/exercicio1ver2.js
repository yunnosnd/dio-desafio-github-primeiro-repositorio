/*
Crie um programa que dado um número imprima a sua tabuada.

NESTE EXERCÍCIO UTILIZEI DE FUNÇÕES PARA DEIXAR O CÓDIGO MAIS LIMPO E FÁCIL DE VIZUALIZAR.
*/

function tabuada(numero) {
    const multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Tabuada do ' + numero + ':');

    for (let i = 0; i < multiplicador.length; i++) {
        const resultado = numero * multiplicador[i];
        console.log(numero + ' x ' + multiplicador[i] + ' = ' + resultado);
    }
}
const numero = 2;

tabuada(numero);
