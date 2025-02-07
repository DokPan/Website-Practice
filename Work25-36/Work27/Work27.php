<?php
function foo()
{
 global $color;
 include 'var.php';
 echo "Test: $color $fruit<br>";
}
foo();
echo "Test: $color $fruit"; 
?> 
