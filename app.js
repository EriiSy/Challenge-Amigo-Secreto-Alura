// Armazenar os nomes em um Array, adicionar e listar os amigos com uma iteração de array.

let listaAmigos = [];
let listaNaoSorteados = [];;
let listaSorteados = [];
let revelado = false;
let ultimaMensagem = '';

let indice = Math.floor(Math.random() * listaAmigos.length)


function limparCampo(){
    adicionar = document.querySelector('input');
    adicionar.value = '';
    console.log('Limpando...');
}

function adicionarAmigo(){
    let adicionar = document.querySelector('input').value;

    if (listaAmigos.length > 1) {
        resultado('');
    }
    // Verificar se o nome contém caracteres inválidos 
    if (!/^[a-zA-Z\s]+$/.test(adicionar)) {
        alert('O nome deve conter apenas letras e espaços. Por favor, tente novamente.');
        return;
    }
    
    let tamanhoNome = (adicionar.length > 25 || adicionar.length < 2) ? true : false;
    // Verificar se o nome não é muito longo 
    if (tamanhoNome) {
        alert('O nome deve conter entre 2 e 25 caracteres. Por favor, tente novamente.');
        return;
    }
    
    if (adicionar.trim() !== '' && !listaAmigos.includes(adicionar) ){  // Verificar se há ou não um nome inserido independente do tipo.  
        listaAmigos.push(adicionar);
        listaNaoSorteados.push(adicionar);
        console.log('Adicionando...');
        alternarVisiblidade('listaSorteio', true);
        console.log(listaAmigos);
        limparCampo();
        exibirLista();
    }else if(listaAmigos.includes(adicionar)){
        alert('Por favor, diferencie os nomes para evitar maus entendidos.');
    }else{
        alert('É necessário digitar um nome. Por favor, tente novamente.');
    }
    
}

function exibirLista(){
    let listar = document.getElementById('listaAmigos');
    listar.innerHTML = '';

    listaAmigos.forEach(function (amigo, index){ // Iteração para cada Amigo na lista.
        let elemento = document.createElement('li');
        elemento.textContent = `${index+1}. `+ amigo;
        listar.appendChild(elemento);
    });

}

function apagarLista(){
    let apagar = document.getElementById('listaAmigos');
    apagar.innerHTML = '';
    listaAmigos = [];
}

function resultado(mensagem){
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
}

function alterarEstadoDoBotao(tag, valor){
    const botao = document.getElementById(tag);
     if(valor){
        botao.removeAttribute('disabled');
        botao.style.backgroundColor = '#007bff';
     }else{
        botao.setAttribute('disabled', 'disabled');
        botao.style.backgroundColor ='rgb(0, 69, 71)';
        botao.style.color = '#FFFFFF';
     }
}

function alternarVisiblidade(tag, valor){
    if (valor){
        document.getElementById(tag).style.display = 'block';
    }else{
        document.getElementById(tag).style.display = 'none';
    }
}

function verificarLista(){
    if (listaAmigos.length === 0 ){
        alert('A lista de amigos está vazia');
        return;
    }
    if (listaAmigos.length === 1){
        resultado('Por favor, adicione mais um amigo para continuar');
        return;
    }
    return true;
}

function verificarSorteio(){
     
     // Verificando se todos foram sorteados.
     if (listaSorteados.length == listaAmigos.length){
        ultimaMensagem = `Este é o último sorteio. O amigo sorteado 
        foi: ${listaSorteados[listaSorteados.length-1]}`;
        alternarVisiblidade('sortear', false)
        alternarVisiblidade('proximo', false);
        return;
    }
}

function gerarSorteio(){
    let sorteado = null;
    let indice = null;
    let tentativa = 0;

    if (listaNaoSorteados.length === 0) {
        console.error('Erro: Não há mais amigos para sortear!');
        return null; // Sai da função se a lista estiver vazia
    }

    // O loop abaixo irá garantir que não haja sorteios duplicados.
    do{
        indice = Math.floor(Math.random() * listaNaoSorteados.length);
        sorteado = listaNaoSorteados[indice];
        console.log(`indice:${indice}`);

        tentativa++;

        // Após alguns reinicios, de alguma maneira que ainda não sei o sorteio entra em loop infinito.
        // Para evitar isso, o código abaixo irá verificar se o número de tentativas
        // é maior que o número de amigos na lista. Se for, o código irá parar.
        if (tentativa > 50){
            alert('Tentativas de Combinações Excedidas. Por favor, finalize o Sorteio');
            console.error('Erro: Tentativas excessivas, não há opções válidas para o sorteio!');
            return null;
        } 
    
    }while (sorteado === listaAmigos[listaSorteados.length] 
        || sorteado === undefined);
        
    console.log('Tentivas: ' + tentativa);
    listaNaoSorteados.splice(indice, 1);
    listaSorteados.push(sorteado);

    alternarVisiblidade('revelar', revelado); 
    amigoSorteado = sorteado;
    return sorteado;
}   

function reiniciarSorteio(){
    listaSorteados = [];
    listaNaoSorteados = [...listaAmigos];
    //Funções Desativadas
    alterarEstadoDoBotao('reiniciar', false);
    alternarVisiblidade('revelar', false);
    alternarVisiblidade('reiniciar', false);
    alternarVisiblidade('parar', false);
    
    //Funções Ativadas
    alterarEstadoDoBotao('sortear', true);
    alternarVisiblidade('sortear', true);
    alternarVisiblidade('embaralhar', true);

    resultado('');
    exibirLista();
    console.log('Reiniciando...');
    console.log(listaSorteados);
    console.log(listaNaoSorteados);
    console.log(listaAmigos);
}

function pararSorteio(){
    listaSorteados = [];
    listaNaoSorteados = [];
    revelado = false;
    ultimaMensagem = '';
    apagarLista();
    //Funções Desativadas
    alternarVisiblidade('listaSorteio', false);
    alternarVisiblidade('parar', false);
    alternarVisiblidade('reiniciar', false);
    alternarVisiblidade('revelar', false);
    
    //Funções Ativadas
    alternarVisiblidade('sortear', true);
    alterarEstadoDoBotao('sortear', true);
    alternarVisiblidade('adicionar', true);
    alternarVisiblidade('amigo', true);
    alternarVisiblidade('subtitulo', true);
    alternarVisiblidade('limpar', true);
    alternarVisiblidade('embaralhar', true);
    alternarVisiblidade('remover', true);
    limparCampo();
    resultado('');
}

function revelarAmigo() {
    if (revelado) {
        resultado('');
        if (listaSorteados.length != listaAmigos.length) {
            alterarEstadoDoBotao('proximo', true);
            alternarVisiblidade('parar', true);
            alternarVisiblidade('proximo', true);    
        }else{
            alternarVisiblidade('reiniciar', true);
            alterarEstadoDoBotao('reiniciar', true);
            alternarVisiblidade('parar', true);
            console.log('Ativando botão parar');
        }
        document.getElementById('revelar').textContent = 'Revelar amigo';
        revelado = false;
        alternarVisiblidade('revelar', false);
    } else {
        if (listaSorteados.length == listaAmigos.length) {
            resultado(ultimaMensagem);
        } else {
            resultado(`Amigo sorteado: ${amigoSorteado}`);
        }
        document.getElementById('revelar').textContent = 'Ocultar amigo';
        alterarEstadoDoBotao('proximo', false);
        revelado = true;
    }
}

// Inicialização - ainda pretendo melhorar isso... 
alternarVisiblidade('proximo', false);
alternarVisiblidade('revelar', revelado);
alternarVisiblidade('reiniciar', false);
alternarVisiblidade('parar', false);
alternarVisiblidade('listaSorteio', false);


function proximoSorteio(){
    // avança para o próximo sorteio
    alternarVisiblidade('proximo', false);
    alternarVisiblidade('sortear', true);
    alternarVisiblidade('parar', true);

}

function sortearAmigo(){
    if (!verificarLista()){
        return;
    }
    alternarVisiblidade('limpar', false);
    alternarVisiblidade('embaralhar', false);
    alternarVisiblidade('remover', false);

    alternarVisiblidade('adicionar', false);
    alternarVisiblidade('amigo', false);
    alternarVisiblidade('subtitulo', false);
    gerarSorteio();
    verificarSorteio();
    alternarVisiblidade('revelar', !revelado);
    alternarVisiblidade('sortear', false);
}

function removerAmigo(){
    if (listaAmigos.length === 0){
        alert('A lista de amigos está vazia');
        return;
    }
    listaAmigos.pop();
    listaNaoSorteados.pop();
    exibirLista();
    console.log('Removendo...');
}

function embaralharLista(){
    if (listaAmigos.length === 0){
        alert('A lista de amigos está vazia');
        return;
    }else if (listaAmigos.length === 1){
        alert('Adicione mais amigos para embaralhar a lista');
        return;
    }

    listaAmigos.sort(() => Math.random() - 1);
    exibirLista();
    console.log('Embaralhando...');
    alert('A lista de amigos foi embaralhada com sucesso!');
}

function limparLista(){
    if (listaAmigos.length === 0){
        alert('A lista de amigos está vazia');
        return;
    }
    listaAmigos = [];
    listaNaoSorteados = [];
    listaSorteados = [];
    apagarLista();
    alternarVisiblidade('listaSorteio', false);
    console.log('Limpando...');
    alert('A lista de amigos foi limpa com sucesso!');
}