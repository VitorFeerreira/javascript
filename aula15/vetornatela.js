let valores = [8, 1, 7, 4, 2, 9];
//console.log(`Nosso vetor é o ${valores}`);
//console.log(`O vetor tem ${valores.length} elementos`);
valores.sort();
// percorrer o vetor
/*for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
*/
// outra forma de percorrer o vetor
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
// buscar um valor dentro do vetor
let pos = valores.indexOf(4);
console.log(`O valor 4 está na posição ${pos}`);
