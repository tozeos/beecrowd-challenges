<?php

# BEE 1022 | TDA RATIONAL

$N = (int) fgets(STDIN);

for ($i=0; $i < $N; $i++) { 
    $op = explode(" ", fgets(STDIN));
    $sym = $op[3];
    $N1 = (int) $op[0];
    $N2 = (int) $op[4];
    $D1 = (int) $op[2];
    $D2 = (int) $op[6]; 

    switch ($sym) {
        case '+':
            $Num1 = $N1*$D2 + $N2*$D1;
            $Den1 = $D1*$D2;
            break;

        case '-':
            $Num1 = $N1*$D2 - $N2*$D1;
            $Den1 = $D1*$D2;
            break;

        case '*':
            $Num1 = $N1*$N2;
            $Den1 = $D1*$D2;
            break;
            
        case '/':
            $Num1 = $N1*$D2;
            $Den1 = $N2*$D1;   
            break;
            
        default:
            break;
    }

    $Num2 = $Num1;
    $Den2 = $Den1;

    $a = 2;
    while($a <= abs($Num2) && $a <= abs($Den2)) {
        if($Num2%$a == 0 && $Den2%$a == 0) {
            $Num2 = $Num2/$a;
            $Den2 = $Den2/$a;
        } else {
            $a++;
        }
    }

    echo $Num1 . "/" . $Den1 . " = " . $Num2 . "/" . $Den2 . "\n";
}