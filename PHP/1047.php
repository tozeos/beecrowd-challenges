<?php

// BEE 1047 | TEMPO DE JOGO COM MINUTOS

$val = explode(" ", fgets(STDIN));
$hi = (int) $val[0];
$mi = (int) $val[1];
$hf = (int) $val[2];
$mf = (int) $val[3];

$hora = $hf - $hi;
$min = $mf - $mi;

if ($min < 0) {
	$min += 60;
	$hora -= 1;	   
}

if ($hora < 0) $hora += 24;

if ($min == 0 && $hora == 0) {
    echo "O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)\n";
} else {
    echo "O JOGO DUROU " . $hora . " HORA(S) E " . $min. " MINUTO(S)\n";
}

