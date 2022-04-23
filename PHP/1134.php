<?php

# BEE 1134 | TIPO DE COMBUSTÍVEL

$input = 0;
$A = 0;
$G = 0;
$D = 0;

while ($input != 4) {
    $input = (int) fgets(STDIN);
    if ($input == 1) {
        $A++;
    } elseif ($input == 2) {
        $G++;
    } elseif ($input == 3) {
        $D++;
    } elseif ($input == 4) {
        echo "MUITO OBRIGADO" . PHP_EOL;
        echo "Alcool: $A" . PHP_EOL;
        echo "Gasolina: $G" . PHP_EOL;
        echo "Diesel: $D" . PHP_EOL;
    }
}