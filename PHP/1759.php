<?php

# BEE 1759 | HO HO HO

$N = (int) fgets(STDIN);

for ($I=0; $I < $N ; $I++) { 
    if($I+1 == $N) {
        echo "Ho!" . PHP_EOL;
    } else {
        echo "Ho ";
    }
}