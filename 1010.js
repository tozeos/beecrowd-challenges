var input = require('fs').readFileSync('/dev/stdin', 'utf8');

// URI 1010 | CÁLCULO SIMPLES

//Item 1

var linhas = input.split('\n')

var infoItem1 = linhas.shift().split(' ')
var infoItem2 = linhas.shift().split(' ')

var idItem1 = infoItem1.shift()
var qtdeItem1 = infoItem1.shift()
var valorUnitarioItem1 = infoItem1.shift()
var valorTotalItem1 = qtdeItem1 * valorUnitarioItem1

//Item 2

var idItem2 = infoItem2.shift()
var qtdeItem2 = infoItem2.shift()
var valorUnitarioItem2 = infoItem2.shift()
var valorTotalItem2 = qtdeItem2 * valorUnitarioItem2

//Total das compras

var valorTotalCompra = valorTotalItem1 + valorTotalItem2

console.log(`VALOR A PAGAR: R$ ${valorTotalCompra.toFixed(2)}`)