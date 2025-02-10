<?php
if(isset($_POST['login']) && isset($_POST['password']) && isset($_POST['confirm']) && isset($_POST['terms']))
{
	$password = $_POST['password'];
	$login = $_POST['login'];
	$confirm = $_POST['confirm'];
	$terms = $_POST['terms'];
	
	if (!empty($login) && !empty($password) && $password === $confirm && isset($terms)) {
		echo "You are registered, $login!";
	}
	else {
		echo "The data is incorrect.";
	}
}
?>
