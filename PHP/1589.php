<?php

# BEE 1589 | BOB CONDUÍTE

$T = (int) fgets(STDIN);
    for ($i=0; $i < $T; $i++) { 
        $R = explode(" ", fgets(STDIN));
        $sum = $R[0] + $R[1];
        echo $sum . PHP_EOL;
    }
?>