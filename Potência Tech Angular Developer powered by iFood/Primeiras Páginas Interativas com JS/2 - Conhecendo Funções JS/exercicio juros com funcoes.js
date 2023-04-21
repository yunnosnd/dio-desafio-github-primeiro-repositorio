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

function calculaValorDesconto(precoEtiqueta, desconto){
    return (precoEtiqueta - (precoEtiqueta * (desconto / 100)));
}

function calculaValorJuros(precoEtiqueta, juros){
    return (precoEtiqueta + (precoEtiqueta * (juros / 100)));
}

(function (){
    const tipoPagamento = 7;
    const precoEtiqueta = 100;  
    
    if (tipoPagamento === 1) {
        console.log('Forma de pagamento é Débito. Valor total a ser pago: R$' + calculaValorDesconto(precoEtiqueta, 10) + ',00.');
    } 
    else if (tipoPagamento === 2) {
        console.log('Forma de pagamento é Dinheiro. Valor total a ser pago: R$ ' + calculaValorDesconto(precoEtiqueta, 15) + ',00.');
    } 
    else if (tipoPagamento === 3) {
        console.log('Forma de pagamento é em 2x. Valor total a ser pago: R$ ' + precoEtiqueta + ',00.');
    } 
    else if(tipoPagamento >= 4) {
        console.log('Forma de pagamento é em ' + (tipoPagamento - 1) + 'x. Valor total a ser pago: R$ ' + calculaValorJuros(precoEtiqueta, 10) + ',00.');
    }
    else {
        console.log('Forma de pagamento inválida.')
    }
})();
