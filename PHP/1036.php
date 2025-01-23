<?php 

# BEE 1036 | FÓRMULA DE BHASKARA

    $data = fscanf(STDIN, "%f %f %f");

    $A = (float) $data[0];
    $B = (float) $data[1];
    $C = (float) $data[2];

    $delta = pow($B, 2) - 4 * $A * $C;

    if($A != 0 && $delta > -1) {
        $R1 = (-$B + sqrt($delta)) / (2 * $A);
        $R2 = (-$B - sqrt($delta)) / (2 * $A);

        echo("R1 = " . number_format($R1, 5, '.', '')) . PHP_EOL;
        echo("R2 = " . number_format($R2, 5, '.', '') . PHP_EOL);
    } else {
        echo("Impossivel calcular" . PHP_EOL);
    }