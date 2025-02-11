<?php
include 'root.php';
$x = 4; $n = 2;
echo calculateRoot($x, $n);

include 'function.php';
$a = 4;
$x = -2;
echo calculateY($a, $x);

include 'leap_year.php';
$month = 2; $year = 2024;
echo "Year $year " . (isLeapYear($year) ? "leap year" : "not leap year") . "<br>";
echo "Days in month: " . daysInMonth($month, $year) . "<br>";
?>
