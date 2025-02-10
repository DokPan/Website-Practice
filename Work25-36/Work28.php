<?php
$a = 10;
$b = 3;
$x = $a / $b;
echo "$a / $b = $x<br>";

$a = 10;
$b = 3;
$x = $a / $b;
print "$a / $b = $x<br>";

$a = 10;
$b = 3;
$x = $a / $b;
printf("%d / %d = %.3f<br>", $a, $b, $x);

printf("%02d:%02d:%04d<br>", date("d"), date("m"), date("Y"));

$str = "Hello";
printf("%-20s", $str);
?>
