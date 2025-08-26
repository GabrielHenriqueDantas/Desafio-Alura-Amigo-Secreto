//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array que vai armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor do input
    let nome = document.getElementById("amigo").value;

    // Valida se o campo está vazio
    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de input
    document.getElementById("amigo").value = "";

    // Mostra o nome adicionado na lista HTML
    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);

    // Para teste no console
    console.log("Lista de amigos:", amigos);
}

function sortearAmigo() {
    // 1️⃣ Verifica se há amigos suficientes
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    // 2️⃣ Cria uma cópia do array de amigos para sortear
    let amigosDisponiveis = [...amigos];

    // 3️⃣ Cria um objeto para guardar quem tirou quem
    let resultadoSorteio = {};

    // 4️⃣ Loop para sortear cada amigo
    amigos.forEach(amigo => {
        // Filtra os amigos disponíveis que não sejam o próprio
        let possiveis = amigosDisponiveis.filter(a => a !== amigo);

        // Sorteia um índice aleatório
        let indice = Math.floor(Math.random() * possiveis.length);

        // Pega o amigo sorteado
        let amigoSorteado = possiveis[indice];

        // Salva no resultado
        resultadoSorteio[amigo] = amigoSorteado;

        // Remove o amigo sorteado da lista de disponíveis
        amigosDisponiveis = amigosDisponiveis.filter(a => a !== amigoSorteado);
    });

    // 5️⃣ Exibe o resultado na tela
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores

    for (let amigo in resultadoSorteio) {
        let li = document.createElement("li");
        li.textContent = `${amigo} tirou ${resultadoSorteio[amigo]}`;
        resultadoLista.appendChild(li);
    }

    console.log("Resultado do sorteio:", resultadoSorteio);
}




