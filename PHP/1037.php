<?php

# BEE 1037 | INTERVAL

$N = (float) fgets(STDIN);

if ($N >= 0 && $N <= 25) {
    echo "Intervalo [0,25]" . PHP_EOL;
} else if ($N > 25 && $N <= 50) {
    echo "Intervalo (25,50]" . PHP_EOL;
} else if ($N > 50 && 75) {
    echo "Intervalo (50,75]" . PHP_EOL;
} else if ($N > 75 && $N <= 100) {
    echo "Intervalo (75,100]" . PHP_EOL;
} else {
    "Fora de intervalo" . PHP_EOL;
}
