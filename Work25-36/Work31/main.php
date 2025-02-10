<?php
include 'MathLibrary.php';

echo "<h2>Test math function</h2>";

$a = 2;
$b = 4;

echo "Sum: $a + $b = " . sum($a, $b) . "<br>";
echo "Subtract: $a - $b = " . subtract($a, $b) . "<br>";
echo "Multiply: $a * $b = " . multiply($a, $b) . "<br>";
echo "Divide: $a / $b = " . divide($a, $b) . "<br>";
echo "Power: $a ^ $b = " . power($a, $b) . "<br>";
echo "Factorial: $b = " . factorial($b) . "<br>";

echo "<h2>Background information about functions</h2>";
echo help("sum") . "<br>";
echo help("factorial") . "<br>";
echo help("unknown") . "<br>";

echo "<h2>Information about the library</h2>";
info();
?>
