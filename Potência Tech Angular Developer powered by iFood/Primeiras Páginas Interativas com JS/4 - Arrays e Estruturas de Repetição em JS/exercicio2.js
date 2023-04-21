/*
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
*/

const listaDeNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 18];

for (let i = 0; i < listaDeNumeros.length; i++) {
    const numeroTestado = listaDeNumeros[i] % 2;
    if (numeroTestado === 0) {
        console.log(listaDeNumeros[i]);
    }
}