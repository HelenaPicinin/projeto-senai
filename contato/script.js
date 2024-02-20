var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

function formatarData(date) {
    var options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    return date.toLocaleString("pt-Br", options);
}

function conferirMensagenZapzap () {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    document.getElementById("congNome").textContent = nome;
    document.getElementById("congMsg").textContent = mensagem;
    document.getElementById("congData").textContent = formatarData(date);
}

function enviar(){
    var numeroTelefone = "5541984962006";

    var link = "https://wa.me/" + numeroTelefone + "?text=NOME DO RECEPTORA:" + nomeGlobal +  
    " - " + mensagemGlobal + " - " + formatarData(dateGlobal);

    window.open(link, "_blank")
}