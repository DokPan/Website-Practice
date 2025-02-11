<?php
function calculateRoot($x, $n) {
	if ($n % 2 == 0 && $x < 0) 
	{ return "Mistake: number < 0 <br>";
	}
	else {
	return "Result: ".pow($x, 1 / $n);
	}
}
?>
