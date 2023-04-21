/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha 
da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const tipoPagamento = "asd";
const precoNormal = 100;

if (tipoPagamento === 1) {
    const precoFinal = precoNormal * 0.9;
    console.log('Forma de pagamento Débito. Valor a ser pago: R$' + precoFinal.toFixed(2));
} else if (tipoPagamento === 2) {
    const precoFinal = precoNormal * 0.85;
    console.log('Forma de pagamento Dinheiro. Valor a ser pago: R$' + precoFinal.toFixed(2));
} else if (tipoPagamento === 3) {
    console.log('Forma de pagamento em 2x. Valor total a ser pago: R$' + precoNormal.toFixed(2));
} else if (tipoPagamento >= 4) {
    const precoFinal = precoNormal * 1.1;
    console.log('Forma de pagamento em ' + (tipoPagamento - 1) + 'x. Valor total a ser pago: R$' + precoFinal.toFixed(2));
} else {
    console.log('Tipo de Pagamento inválido');
}