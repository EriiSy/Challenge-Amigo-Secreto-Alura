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
}

function adicionarAmigo(){

    let adicionar = document.querySelector('input').value;
    if (adicionar.trim() !== '' ){  // Verificar se há ou não um nome inserido independente do tipo.  
        listaAmigos.push(adicionar);
        listaNaoSorteados.push(adicionar);
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


function resultado(mensagem){
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
}

function desabilitarBotao(tag){
    let desabilitar = document.getElementById(tag).setAttribute('disabled', 'disabled');
    let corBotao = document.getElementById(tag).style.backgroundColor = '#d3d3d3';

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
        desabilitarBotao('sortear');
        return;
    }
}


function gerarSorteio(){
    if (!verificarLista(listaAmigos.length)){
        return;
    }

    let sorteado = null;
    let indice = null;
    // O loop abaixo irá garantir que não haja sorteios duplicados.
    do{
        indice = Math.floor(Math.random() * listaAmigos.length);
        sorteado = listaNaoSorteados[indice];
        console.log(`indice:${indice}`);

    }while (sorteado === listaAmigos[listaSorteados.length] 
        || sorteado === undefined);
    
    listaNaoSorteados.splice(indice, 1);
    listaSorteados.push(sorteado);

    document.getElementById('revelar').style.display = 'block';
    amigoSorteado = sorteado;
    return sorteado;
}

function revelarAmigo() {
    if (!revelado) {
        if (listaSorteados.length == listaAmigos.length) {
            resultado(ultimaMensagem);
        } else {
            resultado(`Amigo sorteado: ${amigoSorteado}`);
        }
        document.getElementById('revelar').textContent = 'Ocultar amigo';
        revelado = true;
    } else {
        resultado('');
        document.getElementById('revelar').textContent = 'Revelar amigo';
        revelado = false;
    }
}

document.getElementById('revelar').style.display = 'none';

function sortearAmigo(){
    if (!verificarLista(listaAmigos.length)){
        return;
    }
    gerarSorteio();
    verificarSorteio();
    document.getElementById('revelar').style.display = 'block';
}


