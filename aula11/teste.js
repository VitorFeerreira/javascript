const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o país: ", (pais) => {
  console.log(`Vivendo em ${pais}`);

  if (pais.toLowerCase() === "brasil") {
    console.log("Você é Brasileiro");
  } else {
    console.log("Você é Estrangeiro");
  }

  rl.close();
});