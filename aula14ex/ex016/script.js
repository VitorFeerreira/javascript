function contar() {
  let txtinicio = document.getElementById("txtinicio");
  let txtfim = document.getElementById("txtfim");
  let txtpasso = document.getElementById("txtpasso");
  let res = document.querySelector("#res");

  // Validação
  if (
    txtinicio.value.length == 0 ||
    txtfim.value.length == 0 ||
    txtpasso.value.length == 0
  ) {
    res.innerHTML = "⚠️ Preencha todos os campos!";
    return;
  }

  let i = (inicio = Number(txtinicio.value));
  let f = (fim = Number(txtfim.value));
  let p = (passo = Number(txtpasso.value));

  if (p <= 0) {
    res.innerHTML = "⚠️ Passo inválido! Considerando passo = 1 <br>";
    passo = 1;
  } else {
    res.innerHTML = "Contando: <br>";
  }

  if (i < f) {
    // Contagem crescente
    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c} 👉 `;
    }
  } else {
    // Contagem regressiva
    for (let c = i; c >= f; c -= p) {
      res.innerHTML += `${c} 👈 `;
    }
  }

  res.innerHTML += "🏁";
}
