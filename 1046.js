var input = require("fs").readFileSync("stdin", "utf8");

// URI 1049 | TEMPO DE JOGO

let [start, end] = input.split(" ");
let time = 0

if (start == end) {
    console.log('O JOGO DUROU 24 HORA(S)')
} else {
    while (start != end) {
        time++;
        start++;
        if (start == 25)
            start = 1;
    }
    console.log(`O JOGO DUROU ${time} HORA(S)`)
}
