/*
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calculaGasto(distanciaViagem, precoCombustivel){
        return (this.kmPorLitro * distanciaViagem) * precoCombustivel;
        }
    }


const distanciaViagem = 100;
const precoCombustivel = 5;

const hb20 = new Carro('Hyundai', 'preto', 1/10);
const hb20Consumo = hb20.calculaGasto(distanciaViagem, precoCombustivel);

const uno = new Carro('Fiat', 'Prata', 1/12);
const unoConsumo = uno.calculaGasto(distanciaViagem, precoCombustivel);

console.log('O carro ' + hb20.marca + ', de cor ' + hb20.cor + ' , gastou R$' + hb20Consumo.toFixed(2) + ' nesta viagem.');
console.log('O carro ' + uno.marca + ', de cor ' + uno.cor + ' , gastou R$' + unoConsumo.toFixed(2) + ' nesta viagem.');