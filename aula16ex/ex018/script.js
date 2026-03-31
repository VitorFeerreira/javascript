let txtnumero = document.getElementById("txtnumero");
let seltab = document.querySelector("#seltab");
let res = document.querySelector("#res");
let numero = [];

function valor() {
  if (txtnumero.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(txtnumero.value);
    //Limpar o campo de seleção antes de adicionar um novo valor
    if (numero.length === 0) {
      seltab.innerHTML = "";
    }
    if (numero.includes(n)) {
      window.alert(
        "Valor já adicionado. Por favor, digite um número diferente!",
      );
      return;
    } else if (n < 1 || n > 100) {
      window.alert(
        "Valor inválido. Por favor, digite um número entre 1 e 100!",
      );
      return;
    }
    numero.push(n);
    //Adicionar o valor ao campo de seleção
    let option = document.createElement("option");
    option.text = `Valor ${n} adicionado.`;
    seltab.appendChild(option);
    //Limpar o campo de entrada e focar para o próximo valor
    txtnumero.value = "";
    //Focar o campo de entrada para o próximo valor
    txtnumero.focus();
  }
}

function finalizar() {
  if (numero.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let total = numero.length;
    let maior = numero[0];
    let menor = numero[0];
    let soma = 0;
    for (let pos in numero) {
      soma += numero[pos];
      if (numero[pos] > maior) {
        maior = numero[pos];
      }
      if (numero[pos] < menor) {
        menor = numero[pos];
      }
    }
    let media = soma / total;
    res.innerHTML = "";
    res.innerHTML = `Ao todo, temos: ${total} números cadastrados<br>`;
    res.innerHTML += `O maior valor informado foi: ${maior}<br>`;
    res.innerHTML += `O menor valor informado foi: ${menor}<br>`;
    res.innerHTML += `A soma dos valores é: ${soma}<br>`;
    res.innerHTML += `A média dos valores é: ${media.toFixed(2)}`;
  }
}
