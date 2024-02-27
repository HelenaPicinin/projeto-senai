function adicionarItem() {
    //obter valores doa campo dogitados
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;
    var descricao = document.getElementById("descricao").value;
    console.log(nome, valor, quantidade, descricao);

    //validar se todas existem
    if(!nome || !valor || !quantidade || !descricao){
        alert("Preencha os campos!!!");
        return;
    }

    //criar a tabela, mas precisamente uma linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var CelulaNome = novaLinha.insertCell(0);
    var CelulaValor = novaLinha.insertCell(1);
    var CelulaQuantidade = novaLinha.insertCell(2);
    var CelulaDescricao = novaLinha.insertCell(3);

    //Colocar valor nas celulas
    CelulaNome.innerHTML = nome;
    CelulaValor.innerHTML = "R$ " + valor;
    CelulaQuantidade.innerHTML = quantidade;
    CelulaDescricao.innerHTML = descricao;

    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("descricao").value = "";
}

function exportarParaExcel() {
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);
  }