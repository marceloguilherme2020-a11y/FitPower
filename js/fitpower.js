// Adicionando o Alerta para aparecer a mensagem de entrada.
let mensagem = "Seja bem-vindo";
let academia = " à FitPower!";
let resultado = mensagem + academia;
alert(resultado);

// Array de inscrições
let inscricoes = [];

// Carrega as inscrições salvas
let dadosSalvos = localStorage.getItem("inscricoes");

if (dadosSalvos) {
    inscricoes = JSON.parse(dadosSalvos);
}

// Função para atualizar a lista
function atualizarLista() {

    let lista = document.getElementById("listaInscricoes");

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    inscricoes.forEach(function(inscricao, indice){

        let item = document.createElement("li");
        item.innerText = `${inscricao.nome} escolheu o ${inscricao.plano} `;

        let botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "Excluir";

        botaoExcluir.addEventListener("click", function(){

            inscricoes.splice(indice, 1);

            localStorage.setItem(
                "inscricoes",
                JSON.stringify(inscricoes)
            );

            atualizarLista();

        });

        item.appendChild(botaoExcluir);

        lista.appendChild(item);

    });

}

// Mostra as inscrições ao abrir a página
atualizarLista();

// Adicionando evento aos botões Assinar
let botoes = document.querySelectorAll(".Assinar");

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        let titulo = this.parentElement.querySelector("h3");

        let nome = prompt("Digite seu nome completo.");

        if(nome === ""){
            alert("Por favor, digite seu nome!");
        }
        else if(nome === null){
            alert("Operação cancelada.");
        }
        else{
            alert(`Olá ${nome}, você escolheu o ${titulo.textContent}!`);
        }

    });

});

// Botão Enviar
let enviar = document.getElementById("Enviar");

enviar.addEventListener("click", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let plano = document.getElementById("plano").value;

    if(nome === ""){
        alert("Digite seu nome!");
    }
    else if(email === ""){
        alert("Digite seu email!");
    }
    else{

        inscricoes.push({
            nome: nome,
            email: email,
            plano: plano
        });

        localStorage.setItem(
            "inscricoes",
            JSON.stringify(inscricoes)
        );

        atualizarLista();

        let mensagem3 = document.getElementById("mensagem");

        mensagem3.innerText =
`Formulário enviado com sucesso!

Nome: ${nome}
Email: ${email}
Plano: ${plano}`;

        mensagem3.classList.add("sucesso");

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagemTexto").value = "";
        document.getElementById("plano").selectedIndex = 0;

    }

});

let comecar = document.getElementById("comecar");

comecar.addEventListener("click", function () {

    // Vai até a seção de contato
    document.getElementById("formulario").scrollIntoView({
        behavior: "smooth"
    });

    // Depois de um pequeno tempo, coloca o cursor no campo Nome
    setTimeout(function () {
        document.getElementById("nome").focus();
    }, 700);

});