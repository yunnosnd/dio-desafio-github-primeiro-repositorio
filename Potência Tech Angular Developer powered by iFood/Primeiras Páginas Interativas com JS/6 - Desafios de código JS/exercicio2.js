const {gets, print} = require('./funcoes-auxiliares-ex2');
/*
Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número ímpar.

        Exemplo:
            Entrada:
                5
                3
                4
                1
                10
                8
            Saída:
                Maior número par: 10
                Menor número ímpar: 1
*/

/* PRIMEIRA TENTATIVA
const n = gets();
let maiorPar = 0;
let menorImpar = 99999999;

for (let i = 0; i < n; i++) {
    const numeroTestado = gets();
    if ((numeroTestado % 2) === 0 && numeroTestado > maiorPar) {
        maiorPar = numeroTestado;
    }
    else if ((numeroTestado % 2) !== 0 && numeroTestado < menorImpar) {
        menorImpar = numeroTestado;
    }
}
print('Maior número par: ' + maiorPar);
print('Menor número ímpar: ' + menorImpar);
*/

const n = gets();
let maiorPar = null;
let menorImpar  = null;

for (let i = 0; i < n; i++) {
    const numeroTestado = gets();

    if (numeroTestado % 2 === 0) {
        if (maiorPar === null || maiorPar < numeroTestado) {
            maiorPar = numeroTestado;
        }
    } 
    else {
        if (menorImpar === null || menorImpar > numeroTestado) {
            menorImpar = numeroTestado;
        }
    }
}

print('Maior número par: ' + maiorPar);
print('Menor número ímpar: ' + menorImpar);