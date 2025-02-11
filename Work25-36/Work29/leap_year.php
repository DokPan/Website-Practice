<?php
function isLeapYear($year) 
{ 
	return ($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0); 
} 
function daysInMonth($month, $year) 
{ 
	$days = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
	return $days[$month - 1]; 
}
?>
