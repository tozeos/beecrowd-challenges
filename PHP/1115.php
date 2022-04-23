<?php

# BEE 1115 | QUADRANTE

$X = 1;
$Y = 1;

while ($X != 0 && $Y != 0) {
    $coord = explode(" ", fgets(STDIN));
    $X = (int) $coord[0];
    $Y = (int) $coord[1];

    if ($X > 0 && $Y > 0) {
        echo "primeiro" . PHP_EOL;
    } elseif ($X < 0 && $Y > 0) {
        echo "segundo" . PHP_EOL;
    } elseif ($X < 0 && $Y < 0) {
        echo "terceiro" . PHP_EOL;
    } elseif ($X > 0 && $Y < 0) {
        echo "quarto" . PHP_EOL;
    }
}