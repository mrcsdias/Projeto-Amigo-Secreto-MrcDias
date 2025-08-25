let amigosMcs = [];                     // Array [] que recebe o nome à ser sorteados na lista de amigos. 
function adicionarAmigo() {            // Função p/ adicionar nomes `não repetidos` a lista de amigos a serem sorteados
    const input = document.getElementById('amigo');
    const xnome = input.value.trim();
    if (xnome == '') {
        alert('Insira pelo menos um nome à lista');
        return;
    }
    if (amigosMcs.includes(xnome)) {
        alert("O nome digitado já existe na lista!")
        limparCampo();
    } else {
        amigosMcs.push(xnome);
        input.value = '';
        atualizarLista();
    }
}
function atualizarLista() {      // função p/ Atualizar exibir a lista de amigos na tela             
    const listaA = document.getElementById('listaAmigos');
    listaA.innerHTML = '';
    for (let y = 0; y < amigosMcs.length; y++) {
        const x = document.createElement('li');
        x.textContent = amigosMcs[y];
        listaA.appendChild(x);
    }
}
function sortearAmigo() {            // função de Sorteo de um amigo da lista
    const resultado = document.getElementById('resultado');
    if (amigosMcs.length == 0) {
        resultado.innerHTML = '<li>Adicione pelo menos um amigo para realizar o sorteio.</li>';
        return;
    }
    const i_Sorteado = Math.floor(Math.random() * amigosMcs.length);
    const a_Sorteado = amigosMcs[i_Sorteado];
    resultado.innerHTML = `<li> O amigo secreto é: <strong>${a_Sorteado}</strong>.</li>`;
}