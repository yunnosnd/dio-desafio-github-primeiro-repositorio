/*
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/
const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const mediaNota = (nota1 + nota2 + nota3) / 3;

if (mediaNota < 5) {
    console.log('Reprovado. Nota: ' + mediaNota);
} else if(mediaNota > 7){
    console.log('Aprovado. Nota: ' + mediaNota);
} 
else {
    console.log('Recuperação. Nota: ' + mediaNota);
}