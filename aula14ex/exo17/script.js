function gerarTabuada() {
  let input = document.getElementById("txtnumero");
  let seltab = document.getElementById("seltab");
  // Verificar se o campo está vazio
  if (input.value.length == 0) {
    window.alert("Por favor, digite um número para gerar a tabuada.");
  } else {
    // Converter o valor do input para número
    let numero = Number(input.value);
    seltab.innerHTML = ""; // limpa antes de gerar
    // Gerar a tabuada
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement("option");
      item.text = `${numero} x ${i} = ${numero * i}`;
      item.value = `tab${i}`;
      seltab.appendChild(item);
    }
  }
}
