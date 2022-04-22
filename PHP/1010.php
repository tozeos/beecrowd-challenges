<?php

# BEE 1010 | CALCULO SIMPLES

$l1 = explode(" ", fgets(STDIN));
$l2 = explode(" ", fgets(STDIN));

$cp1 = (int) $l1[0];
$cp2 = (int) $l2[0];

$np1 = (int) $l1[1];
$np2 = (int) $l2[1];

$vup1 = floatval($l1[2]);
$vup2 = floatval($l2[2]);

$tp1 = $np1 * $vup1;
$tp2 = $np2 * $vup2;

echo "VALOR A PAGAR: R$ " . number_format(($tp1 + $tp2), 2, ".", '') . "\n";