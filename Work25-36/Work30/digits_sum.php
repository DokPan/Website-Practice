<?php
$n = 12345; 
$original = $n; 

$count = 0;
$sum = 0;

while ($n > 0) {
    $digit = $n % 10; 
    $sum += $digit;
    $n = (int)($n / 10);
    $count++;
}

echo "In number $original quantity: $count<br>";
echo "Sum: $sum<br>";
?>
