<?php

# BEE 1865 | MJONIR

$C = fgets(STDIN);

for ($I=0; $I < $C; $I++) { 
    $teste = explode(" ", fgets(STDIN));
    if ($teste[0] == "Thor") {
        echo "Y" . PHP_EOL;
    } else {
        echo "N" . PHP_EOL;
    }
}