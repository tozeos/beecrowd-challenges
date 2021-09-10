const { type } = require("os");

var input = require("fs").readFileSync("stdin", "utf8");
 
// URI 1049 | TEMPO DE JOGO -- ALGO ERRADO

let [start, end] = input.split(" ");
let time = 0;

if(end <= start) {
    time = parseInt(end) + 24
    console.log(`O JOGO DUROU ${time} HORA(S)`)
} else {
    time =  parseInt(start) - parseInt(end)
    console.log(`O JOGO DUROU ${time} HORA(S)`)
}
