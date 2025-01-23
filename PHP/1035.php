<?php 

# BEE 1035 | SELECTION TEST 1

    $data = fscanf(STDIN, "%f %f %f %f");

    $A = (int) $data[0];
    $B = (int) $data[1];
    $C = (int) $data[2];
    $D = (int) $data[3];

    if ($B > $C && $D > $A && $D > $A && $C + $D > $A + $B && $C > 0 && $D > 0 && $A % 2 === 0) {
        print("Valores aceitos" . PHP_EOL);
    } else {
        print("Valores nao aceitos" . PHP_EOL);
    }

?>