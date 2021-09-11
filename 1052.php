<?php

# URI 1049 | MONTH
$month = fgets(STDIN) - 1;
$monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

echo $monthNames[$month] . PHP_EOL;
