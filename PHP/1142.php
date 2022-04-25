<?php

# BEE 1142 | PUM

$n = (int) fgets(STDIN);
$a = 1;

for ($i=0; $i < ($n * 4); $i++) { 
    if($a % 4 == 0) {
        echo "PUM\n";
        $a++;
    } else {
        echo $a . " ";
        $a++;
    }
}