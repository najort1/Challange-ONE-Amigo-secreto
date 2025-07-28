//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
const resultado = document.getElementById("resultado")

function exibeAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for(let amigo of amigos){
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', function(){
            removerAmigo(amigo);
        })
        botaoRemover.style.backgroundColor = 'red';
        botaoRemover.style.color = 'white';
        botaoRemover.style.borderRadius = '10px';
        botaoRemover.style.padding = '5px 10px';
        botaoRemover.style.border = 'none';
        botaoRemover.style.cursor = 'pointer';
        botaoRemover.style.marginLeft = '10px';
        li.appendChild(botaoRemover);

    }
}

function atualizarMensagem(mensagem, estilos){
    resultado.innerHTML = mensagem;
    resultado.style = estilos;
}



function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    amigo = amigo.trim();

    if(amigo === ''){
        console.log("Campo vazio")
        atualizarMensagem('Digite um nome!', 'color: red;');
        return;
    }else if(amigos.includes(amigo)){
        console.log("Amigo já adicionado")
        atualizarMensagem('Amigo já adicionado!', 'color: red;');
        return;
    }

    amigos.push(amigo);
    atualizarMensagem('Amigo adicionado com sucesso!', 'color: green;');
    document.getElementById('amigo').value = ''; //limpa o input após adicionar o amigo
    exibeAmigos();
}

function removerAmigo(amigo){
    let indiceAmigo = amigos.indexOf(amigo);
    if(indiceAmigo !== -1){
        amigos.splice(indiceAmigo, 1);
        exibeAmigos();
    }
}


function novoSorteio(){
    amigos = [];
    exibeAmigos();
    atualizarMensagem('Sorteio recomeçado!', 'color: #05DF05;');
}

function sortearAmigo(){

    if(amigos.length === 0){
        console.log("Nenhum amigo adicionado")
        atualizarMensagem('Adicione amigos antes de sortear!', 'color: red;');
        return;
    }

    totalAmigos = amigos.length;
    amigoAleatorio = Math.random() * totalAmigos

    ////console.log(amigoAleatorio) //debug utilizado para verificar o erro
    ////console.log(typeof(amigoAleatorio))//debug utilizado para verificar o erro

    amigoAleatorio = Math.floor(amigoAleatorio); // arrendondar para um numero inteiro pois o Math.random() retorna um numero flutuante
    const amigoSorteado = amigos[amigoAleatorio];
    
    atualizarMensagem(`Amigo sorteado: ${amigoSorteado}`, 'color: green;');
}


const inputNome = document.getElementById('amigo').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        adicionarAmigo();
    }
})