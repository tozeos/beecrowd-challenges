<?php

# BEE 1173 | PREENCHIMENTO DE VETOR I

$N = (int) fgets(STDIN);

for ($I=0; $I < 10; $I++) { 
    echo "N[" . $I . "] = " . $N . PHP_EOL;
    $N += $N;
}