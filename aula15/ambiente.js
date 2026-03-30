//vetor array
let num = [4, 8, 2, 9];
//acrescentar um elemento
num[4] = 1;
//outra forma de acrescentar um elemento
num.push(7);
//num.length; //tamanho do vetor
num.sort(); //coloca os elementos em ordem crescente

console.log(`Nosso vetor tem ${num.length} elementos`);
console.log(`Nosso vetor é o ${num}`);
//percorrer o vetor
/*for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}*/
//outra forma de percorrer o vetor
/*for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}*/
let pos = num.indexOf(6);
if (pos == -1) {
  console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
