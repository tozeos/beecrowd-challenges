<?php

# BEE 1131 | GRENAIS

$goals = explode(" ", fgets(STDIN));
$int = (int) $goals[0];
$gre = (int) $goals[1];
$newGrenal = 1;
$intWin = 0;
$greWin = 0;
$draw = 0;

while ($newGrenal == 1) {
    if ($int > $gre) {
        $intWin++;
    } elseif ($int < $gre) {
        $greWin++;
    } else {
        $draw++;
    }

    echo "Novo grenal (1-sim 2-nao)" . PHP_EOL;
    $newGrenal = fgets(STDIN);
    if($newGrenal == 1) { 
    $goals = explode(" ", fgets(STDIN));
    $int = (int) $goals[0];
    $gre = (int) $goals[1];
    }
}

if($newGrenal == 2) {
    $totalGrenais = $intWin + $greWin + $draw;
    echo $totalGrenais . " grenais" . PHP_EOL;
    echo "Inter:" . $intWin . PHP_EOL;
    echo "Gremio:" . $greWin . PHP_EOL;
    echo "Empates:" . $draw . PHP_EOL;

    if($intWin > $greWin && $intWin > $draw) {
        echo "Inter venceu mais" . PHP_EOL;
    } elseif($greWin > $intWin && $greWin > $draw) {
        echo "Gremio venceu mais" . PHP_EOL;
    } else {
        echo "Nao houve vencedor" . PHP_EOL;
    }
}


