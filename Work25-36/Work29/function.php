<?php
function calculateY($a, $x) {
	if ($x < 0) {
		return "<br>y = " . ($a / $x) . "<br>"; }
	elseif ($a - $x >= 0) {
		return "<br>y = " . (1 / sqrt($a - $x)) . "<br>"; }
	else {
		return "<br>Mistake: number < 0<br>"; }
}
?>
