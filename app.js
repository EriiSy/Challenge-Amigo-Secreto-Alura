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
    if (adicionar.trim() !== '' ){  // Verificar se há ou não um nome inserido independente do tipo.  
        listaAmigos.push(adicionar);
        listaNaoSorteados.push(adicionar);
        console.log('Adicionando...');
        alternarVisiblidade('listaSorteio', true);
        console.log(listaAmigos);
        limparCampo();
        exibirLista();
    }else{
        alert('É necessário digitar um nome. Por favor, tente novamente.');
    }
    if (listaAmigos.length > 1) {
        resultado('');
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

function habilitarBotao(tag){
    let habilitar = document.getElementById(tag).removeAttribute('disabled');
    let corBotao = document.getElementById(tag).style.backgroundColor = '#007bff';
}

function desabilitarBotao(tag){
    let desabilitar = document.getElementById(tag).setAttribute('disabled', 'disabled');
    let corBotao = document.getElementById(tag).style.backgroundColor ='rgb(0, 69, 71)';
    let corDaFonte = document.getElementById(tag).style.color = '#FFFFFF';
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
    desabilitarBotao('reiniciar');
    habilitarBotao('sortear');
    alternarVisiblidade('sortear', true);
    alternarVisiblidade('revelar', false);
    alternarVisiblidade('reiniciar', false);
    alternarVisiblidade('parar', false);
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
    alternarVisiblidade('listaSorteio', false);
    alternarVisiblidade('parar', false);
    alternarVisiblidade('sortear', true);
    habilitarBotao('sortear');
    alternarVisiblidade('reiniciar', false);
    alternarVisiblidade('revelar', false);
    alternarVisiblidade('adicionar', true);
    alternarVisiblidade('amigo', true);
    alternarVisiblidade('subtitulo', true);
    limparCampo();
    resultado('');
}


function revelarAmigo() {
    if (revelado) {
        resultado('');
        if (listaSorteados.length != listaAmigos.length) {
            habilitarBotao('proximo');
            alternarVisiblidade('proximo', true);    
        }else{
            alternarVisiblidade('reiniciar', true);
            habilitarBotao('reiniciar');
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
        desabilitarBotao('proximo');
        revelado = true;
    }
}

alternarVisiblidade('proximo', false);
alternarVisiblidade('revelar', revelado);
alternarVisiblidade('reiniciar', false);
alternarVisiblidade('parar', false);
alternarVisiblidade('listaSorteio', false);


function proximoSorteio(){
    // avança para o próximo sorteio
    if(listaAmigos.length === listaSorteados.length){   
        alternarVisiblidade('proximo', false);
        console.log('desativando o botão de próximo sorteio');
        return;
    }

    console.log('A lista ainda não foi completada');
    alternarVisiblidade('proximo', false);
    habilitarBotao('sortear');
}

function sortearAmigo(){
    if (!verificarLista()){
        return;
    }
    alternarVisiblidade('adicionar', false);
    alternarVisiblidade('amigo', false);
    alternarVisiblidade('subtitulo', false);
    gerarSorteio();
    verificarSorteio();
    alternarVisiblidade('revelar', !revelado);
    desabilitarBotao('sortear');
}