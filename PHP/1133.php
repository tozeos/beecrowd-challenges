<?php

# BEE 1133 | RESTO DA DIVISAO

$X = (int) fgets(STDIN);
$Y = (int) fgets(STDIN);

if ($X > $Y) {
    for ($i = $Y + 1; $i < $X; $i++) {
        if($i % 5 == 2 || $i % 5 == 3) {
            echo $i . PHP_EOL;
        }
    }
} elseif ($X < $Y) {
    for ($i = $X + 1; $i < $Y; $i++) {
        if($i % 5 == 2 || $i % 5 == 3) {
            echo $i . PHP_EOL;
        }
    }
}


