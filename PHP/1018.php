<?php

# BEE 1018 | CÉDULAS

$notas = [100, 50, 20, 10, 5, 2, 1];

$N = fgets(STDIN);
echo $N;

for ($i=0; $i < sizeof($notas); $i++) { 
    $nota = $notas[$i];
    $qtdNotas = ($N /$nota);
    echo  (int) $qtdNotas . " nota(s) de R$ " . $nota . ",00" . "\n";
    $N = $N % $nota;
}