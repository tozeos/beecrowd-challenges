<?php

// BEE 1180 | MENOR E POSIÇÃO

$vectorSize = (int) fgets(STDIN);
$vectorX = explode(" ", fgets(STDIN));
$lowestNumber = $vectorX[0];
     

for ($i=0; $i < $vectorSize; $i++) {
    if($vectorX[$i] < $lowestNumber) {
        $lowestNumber = $vectorX[$i];
    }
}

$position = array_search($lowestNumber, $vectorX);


echo "Menor valor: " . $lowestNumber . PHP_EOL;
echo "Posicao: " . $position . PHP_EOL;