var input = require('fs').readFileSync('/dev/stdin', 'utf8');

// URI 1012 | ÁREA

var values = input.split(' ')

var A = parseFloat(values.shift())
var B = parseFloat(values.shift())
var C = parseFloat(values.shift())

// Triângulo retângulo

triangleArea = (A * C) / 2

// Circulo

var pi = 3.14159

circleArea = pi * Math.pow(C, 2)

// Trapézio

trapezoidArea = ((A + B) / 2) * C

// Quadrado

squareArea = Math.pow(B, 2)

// Retângulo

rectangleArea = A * B

// Saídas

console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`)
console.log(`CIRCULO: ${circleArea.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`)
console.log(`QUADRADO: ${squareArea.toFixed(3)}`)
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`)