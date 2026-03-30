let numero = [];
function limpar() {
  let seltab = document.querySelector("#seltab");
  numero = [];
  seltab.innerHTML = "";
}
function valor() {
  let txtnumero = document.getElementById("txtnumero");
  let seltab = document.querySelector("#seltab");
  if (txtnumero.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(txtnumero.value);
    //Limpar o campo de seleção antes de adicionar um novo valor
    if (numero.length === 0) {
      seltab.innerHTML = "";
    }
    numero.push(n);

    let option = document.createElement("option");
    option.text = `Valor ${n} adicionado.`;
    option.value = `tab${numero.length}`;
    seltab.appendChild(option);

    txtnumero.value = "";
    txtnumero.focus();
  }
}

function finalizar(valor) {}
