<?php
function sum($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    if ($b == 0) {
        return "Error: number < 0";
    }
    return $a / $b;
}

function power($a, $b) {
    return pow($a, $b);
}

function factorial($n) {
    if ($n < 0) {
        return "Error: number < 0";
    }
    if ($n === 0) {
        return 1;
    }
    $result = 1;
    for ($i = 1; $i <= $n; $i++) {
        $result *= $i;
    }
    return $result;
}

function help($functionName) {
    $descriptions = array(
        "sum"       => "sum(\$a, \$b): returns the sum of the numbers \$a and \$b.",
        "subtract"  => "subtract(\$a, \$b): returns the difference of numbers \$a and \$b.",
        "multiply"  => "multiply(\$a, \$b): returns the product of numbers \$a and \$b.",
        "divide"    => "divide(\$a, \$b): returns a private \$a, divided by \$b. Division by zero is not allowed.",
        "power"     => "power(\$a, \$b): returns the result of the construction \$a to the extent of \$b.",
        "factorial" => "factorial(\$n): returns the factorial of a natural number \$n."
    );
    
    if (array_key_exists($functionName, $descriptions)) {
        return $descriptions[$functionName];
    } else {
        return "Information about the function '$functionName' not found.";
    }
}

function info() {
    echo "<h3>MathLibrary.php</h3>";
    echo "<p>Library of mathematical functions: addition, subtraction, multiplication, division, exponentiation, factorial.p>";
    echo "<p>Developers: ISPP-34 / Ilina Diana, Roschina Alina.</p>";
}
?>
