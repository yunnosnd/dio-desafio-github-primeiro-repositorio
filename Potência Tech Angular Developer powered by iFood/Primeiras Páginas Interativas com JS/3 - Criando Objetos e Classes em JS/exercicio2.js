/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    }

    calculaIMC(){
        const imc = (this.peso / Math.pow(this.altura, 2)).toFixed(1);
        if (imc < 18.5) {
            return 'O IMC de ' + this.nome + 'é: Abaixo do peso. Valor: ' + imc;
        } 
        else if (imc >= 18.5 && imc < 25) {
            return 'O IMC de ' + this.nome + ' é: Peso normal. Valor: ' + imc;
        } 
        else if (imc >=25 && imc < 30) {
            return 'O IMC de ' + this.nome + ' é: Acima do Peso. Valor: ' + imc;
        }
        else if (imc >= 30 && imc < 40) {
            return 'O IMC de ' + this.nome + ' é: Obeso. Valor: ' + imc;
        }
        else {
            return 'O IMC de ' + this.nome + ' é: Obesidade Grave. Valor: ' + imc;
        }
    }
}

const p1 = new Pessoa('Fabrício', 120, 1.85);
console.log(p1.calculaIMC());
