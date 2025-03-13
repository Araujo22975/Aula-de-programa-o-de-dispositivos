// Código para exportar o meu projeto

// Importar um módulo
import {calcularIMC, tabelaIMC}from "./CalculadoraIMC.js"

console.log(">>> Calculadora IMC <<<")
console.table(tabelaIMC)


const peso = 89
const altura = 1.83

const resultado = calcularIMC(peso, altura)

console.log ("Resultado IMC:")
console.log(resultado.toFixed(2))

//Importar um módulo externo, uma biblioteca
import moment from "moment";

const hoje = moment().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))

console.log(hoje)