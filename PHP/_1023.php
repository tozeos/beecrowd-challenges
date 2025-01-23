<?php 

# BEE 1023 | DROUGHT /// NÃO TERMINADO AINDA

$N = (int) fgets(STDIN);
$city = 0;
$totalHab = 0;
$totalCons = 0;
$c[] = 0;
$h[] = 0;


while($N!= 0) {
    $j = $N;
    $city++;

    for ($i=0; $i < $N; $i++) { 
        $data = fscanf(STDIN, "%f %f");
        $hab = (int) $data[0];
        $cons = (int) $data[1];

        $totalHab+=$hab;
        $totalCons+=$cons;

    }

    echo "Cidade# " . $city . ":\n" ;
    echo "Consumo medio: " . number_format(($totalCons/$totalHab), 2, ".", '') . " m3.\n";
    echo "\r";

    $totalHab = 0;
    $totalCons = 0;
    $N = (int) fgets(STDIN);
}