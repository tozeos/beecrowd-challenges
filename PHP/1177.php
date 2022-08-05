<?php

# BEE 1177 | PREENCHIMENTO DE VETOR II

$T = (int) fgets(STDIN);
$i = 0;

while($i < 1000) {
    for($x = 0; $x < $T; $x++){
        if($i < 1000) {
            echo "N[" . $i++ . "] = " . $x . PHP_EOL;
        }
    }
}