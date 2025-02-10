<?php
$users = array(
    "user1" => "password1",
    "admin" => "adminpass"
);

if(isset($_POST['login'])&& isset($_POST['password']))
{
	$login = $_POST['login'];
	$password = $_POST['password'];
	
	if (isset($users[$login]) && $users[$login] === $password) {
		echo "Welcome, $login!";
	}
	else {
		echo "User not found.";
	}
}
?>
