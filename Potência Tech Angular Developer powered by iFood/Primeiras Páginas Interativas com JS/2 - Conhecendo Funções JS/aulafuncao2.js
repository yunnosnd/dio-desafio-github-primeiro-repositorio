function escrevaNome(nome){
    console.log('Meu nome é ' + nome);
}

function verificaIdade(idade){
    if (idade >= 18){
        console.log('Maior');
    }
    else {
        console.log('Menor');
    }
}

escrevaNome('Fabrício');
escrevaNome('André');
verificaIdade(21);
verificaIdade(5);