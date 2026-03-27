function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.toLocaleTimeString();
  msg.innerHTML = `Agora são ${hora} horas`;
  //var hora = "23:59:00";
  if (hora >= "00:00:00" && hora < "12:00:00") {
    // BOM DIA!
    img.src = "manha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= "12:00:00" && hora < "18:00:00") {
    // BOA TARDE!
    img.src = "tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    // BOA NOITE!
    img.src = "noite.png";
    document.body.style.background = "#515154";
  }
}
