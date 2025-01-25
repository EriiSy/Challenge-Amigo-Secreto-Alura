// Armazenar os nomes em um Array, adicionar e listar os amigos com uma iteração de array.

let listaAmigos = [];
let listaSorteados = [];

let indice = Math.floor(Math.random() * listaAmigos.length)


function limparCampo(){
    adicionar = document.querySelector('input');
    adicionar.value = '';
}


function adicionarAmigo(){

    let adicionar = document.querySelector('input').value;
    if (adicionar.trim() !== '' ){  // Verificar se há ou não um nome inserido independente do tipo.  
        listaAmigos.push(adicionar);
        console.log(listaAmigos);
        limparCampo();
        exibirLista();
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


function resultado(mensagem){
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
}


function gerarSorteio(){
    if (listaAmigos.length === 0 ){
        alert('A lista de amigos está vazia');
        return;
    }
    // Verificando se todos foram sorteados.
    if (listaSorteados.length == listaAmigos.length){
        console.log('Todos já foram sorteados');
        resultado('Todos já foram sorteados');
        return;
    }

    let sorteado;
    // O loop abaixo irá garantir que não haja sorteios duplicados.
    do{
        let indice = Math.floor(Math.random() * listaAmigos.length);
        sorteado = listaAmigos[indice];
    }while (listaSorteados.includes(sorteado));

    //Adiciona o amigo sorteado na lista dos sorteados.
    listaSorteados.push(sorteado);

    resultado(`Amigo sorteado: ${sorteado}`);
    console.log(listaSorteados);
}


function sortearAmigo(){
    gerarSorteio();
}


