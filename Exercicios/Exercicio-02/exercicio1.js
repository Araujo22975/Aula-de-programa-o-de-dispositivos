//Manipulação de Strings
let str = "Alex";
let tamanho = str.length;
let maiusculas = str.toUpperCase();
let minusculas = str.toLowerCase();
let primeiraletra = str[0];
let ultimaletra = str[str.length - 1];
let posicao = str.indexOf("t");
let substituir = str.replace("Alex", "Ariel");

console.log(str);
console.log(tamanho);
console.log(maiusculas);
console.log(minusculas);
console.log(primeiraletra);
console.log(ultimaletra);
console.log(posicao);
console.log(substituir);