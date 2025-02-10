<?php
$str = "   Hello World! Welcome to PHP string functions. Hello World!   ";

echo "The original line: '$str'<br>";
echo "Line length: " . strlen($str) . "<br>";

$substring = substr($str, 3, 11);
echo "Substring (starting from the 3rd position, 11 characters long): '$substring'<br>";

$modifiedString = strtolower(trim($str));
echo "Modified string: '$modifiedString'<br>";

$needle = "world";
$pos = strpos($modifiedString, $needle);
if ($pos !== false) {
    echo "Substring '$needle' found in the row at the position $pos.<br>";
} else {
    echo "Substring '$needle' not found in the line.<br>";
}

$count = 0;
$offset = 0;
while (($pos = strpos($modifiedString, $needle, $offset)) !== false) {
    $count++;
    $offset = $pos + 1;
}
echo "Substring '$needle' occurs in the line $count time(s).<br>";
?>
