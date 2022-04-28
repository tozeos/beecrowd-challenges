<?php

# BEE 1172 | SUBSTITUIÇÃO EM VETOR I

for ($I=0; $I < 10; $I++) { 
    $X = (int) fgets(STDIN);
    if($X <= 0) {
        echo "X[" . $I . "] = " . 1 . PHP_EOL;
    }  else {
        echo "X[" . $I . "] = " . $X . PHP_EOL;
    }
}