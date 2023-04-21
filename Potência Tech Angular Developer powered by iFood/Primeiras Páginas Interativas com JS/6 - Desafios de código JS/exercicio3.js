const {gets, print} = require('./funcoes-auxiliares-ex3');
/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realziar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

    Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as alíquotas:

    De R$ 0,00 a R$ 1100,00 = 5%
    De R$ 1100,00 a R$ 2500,00 = 10%
    Maior que R$ 2500,00 = 15%

        Exemplo:
            Entrada:
                2000
                250
            Saída:
                2050.00
*/
const salarioBruto = gets();
const adicional = gets();
let salarioLiquido = 0;

function calcularDesconto(salario, porcentagem) {
    return salario * (porcentagem / 100);
}

if (salarioBruto >= 0 && salarioBruto <= 1100) {
    salarioLiquido = salarioBruto - calcularDesconto(salarioBruto, 5) + adicional;
}
else if (salarioBruto >= 1100.01 && salarioBruto <= 2500) {
    salarioLiquido = salarioBruto - calcularDesconto(salarioBruto, 10) + adicional;
}
else if (salarioBruto > 2500) {
    salarioLiquido = salarioBruto - calcularDesconto(salarioBruto, 15) + adicional;
}
print(salarioLiquido.toFixed(2));