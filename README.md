
# 🎁 CHALLENGE AMIGO SECRETO +ONE

![capa-git](https://github.com/user-attachments/assets/1744c382-0b1d-46f2-a3e5-f51289d58e4f)

## 🏅 Badges
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-green)
![Última versão](https://img.shields.io/badge/Última%20Vers%C3%A3o-Janeiro-lightgrey)

---

## 📌 Índice
1. [📖 Descrição do Projeto](#descricao-do-projeto)
2. [🚀 Status do Projeto](#status-do-projeto)
3. [⚡ Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstracao-da-aplicacao)
4. [🛠 Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [🤝 Pessoas Contribuidoras](#pessoas-contribuidoras)
6. [👨‍💻 Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)
7. [📜 Licença](#licença)

---

## 📖 Descrição do Projeto
O **Amigo Secreto** é um **Challenge** gerenciado pela +ONE com o prazo de entrega entre **15/01/25 a 18/03/25**  utilizando-se de **HTML, CSS e JavaScript**.
A ideia é fazer com que o participante teste a sua a lógica de programação - parte esta fundamental na área supracitada - aprendida durante a jornada +ONE 2025.

📌 O desafio entregava um **HTML** e **CSS** semi-prontos oferecendo ao participante o foco nas seguintes tarefas que deveriam ser implementadas com lógica de programação:

- 📌 Criar um array para armazenar os nomes
- ✅ Implementar uma função para adicionar amigos
- 🔀 Implementar uma função para sortear os amigos
- 📃 Implementar uma função para atualizar a lista de amigos

💡 *—Curioso, queria testar até onde poderia ir minhas habilidades — Me surpreendi! Passei alguns dias realizando esse challenge e no fim cheguei a adicionar implementações super interessantes que complementam o pedido da +ONE.* 

*Espero que gostem inclusive.*

---

## 🚀 Status do Projeto

**✅ Finalizado - Versão 1.0**  
🔜 Atualizações futuras podem vir com o avanço no aprendizado na linguagem.

---

## ⚡ Funcionalidades e Demonstração da Aplicação

### ➕ Adicionar Amigo
```javascript
function adicionarAmigo(){
    let adicionar = document.querySelector('input').value;
    if (listaAmigos.length > 1) {
        resultado('');
    }
    if (!/^[a-zA-Z\s]+$/.test(adicionar)) {
        alert('O nome deve conter apenas letras e espaços. Por favor, tente novamente.');
        return;
    }
    let tamanhoNome = (adicionar.length > 25 || adicionar.length < 2);
    if (tamanhoNome) {
        alert('O nome deve conter entre 2 e 25 caracteres. Por favor, tente novamente.');
        return;
    }
    if (adicionar.trim() !== '' && !listaAmigos.includes(adicionar) ){  
        listaAmigos.push(adicionar);
        listaNaoSorteados.push(adicionar);
        console.log('Adicionando...');
        alternarVisiblidade('listaSorteio', true);
        limparCampo();
        exibirLista();
        resultado('');
    }else if(listaAmigos.includes(adicionar)){
        alert('Por favor, diferencie os nomes para evitar maus entendidos.');
    }else{
        alert('É necessário digitar um nome. Por favor, tente novamente.');
    } 
}
```

### 📝 Exibir Lista de Amigos
 
```javascript
 function exibirLista(){
  // Irá pegar o array listaAmigos 
  let listar = document.getElementById('listaAmigos');
  listar.innerHTML = '';

  listaAmigos.forEach(function (amigo, index){ // Iteração para cada Amigo na lista.
      let elemento = document.createElement('li');
      elemento.textContent = `${index+1}. `+ amigo;
      listar.appendChild(elemento);
  });
```

### 🎲 Gerar Sorteio
Essa foi de longe um dos maiores desafios que tive pois queria aplicar um sorteio cujo o sorteado não pudesse sortear ele próprio e isso...custou uns dias, mas valeu a pena hehe.
```javascript
function gerarSorteio(){
    let sorteado = null;
    let indice = null;
    let tentativa = 0;

    if (listaNaoSorteados.length === 0) {
        console.error('Erro: Não há mais amigos para sortear!');
        return null;
    }
    do{
        indice = Math.floor(Math.random() * listaNaoSorteados.length);
        sorteado = listaNaoSorteados[indice];
        tentativa++;
        if (tentativa > 50){
            alert('Tentativas de Combinações Excedidas. Por favor, finalize o Sorteio');
            return null;
        } 
    } while (sorteado === listaAmigos[listaSorteados.length] || sorteado === undefined);
    
    listaNaoSorteados.splice(indice, 1);
    listaSorteados.push(sorteado);
    return sorteado;
}

```
## Funcionalidades Adicionais

### Funções

1. **Limpar Lista** 🧹
2. **Limpar Campo de Entrada** ✏️
3. **Apagar Lista de Amigos** 🗑️
4. **Remover Amigo** 👋
5. **Reiniciar Sorteio** 🔄
6. **Parar Sorteio** ⏹️
7. **Próximo Sorteio** ⏭️
8. **Revelar Amigo** 👀
9. **Embaralhar Lista** 🔀

### Verificações

1. **Nome Válido** ✅
2. **Comprimento do Nome** 🆎
3. **Nome Duplicado** 🔁
4. **Lista Vazia** 📭
5. **Lista com Apenas um Amigo** 👤
6. **Tentativas Excessivas no Sorteio** ❗
7. **Lista de Não Sorteados Vazia** 🚫
8. **Todos os Amigos Sorteados** 🎉


### 📽 Demonstração em Vídeo:
https://github.com/user-attachments/assets/b23a5f4f-b03b-4985-92c3-e482523907bb

---

## 🛠 Tecnologias Utilizadas
- 💬 **Discord** (Alura+ONE) - Dicas e inspirações para o challenge.
- 🤖 **Copilot Pro** (GitHub) - Retira dúvidas de trechos de códigos.
- 🏫 **Alura** - Assistente das aulas de lógica programação.
- 📋 **Trello** - Organizador de Cards e Tarefas.
- 🖥 **Visual Studio Code** - Editor de código.
- 🌍 **Microsoft Edge** - Navegador para testes.
- 🚀 **Live Server** - Extensão para rodar o projeto localmente.
- 🎨 **Icons8** - Ícones para o projeto.

---

## 🤝 Pessoas Contribuidoras
- **Alura**: Disponibilizou o HTML e CSS inicial para o desafio.

---

## 👨‍💻 Pessoas Desenvolvedoras do Projeto
- **Erick** (Eu). 👾

---

## 📜 Licença
Este projeto está licenciado sob a **licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
