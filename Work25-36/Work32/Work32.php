<?php
$array1 = array(
    "String 1",
    "String 2",
    "String 3",
    "String 4",
    "String 5"
);
foreach ($array1 as $index => $value) {
    echo "[$index] => $value<br>";
	
$array2 = array(
    "Element A",
    "Element B",
    "Element C",
    "Element D",
    "Element E"
);
echo "<pre>";
print_r($array2);
echo "</pre>";

$users = array(
    "user1" => "password1",
    "user2" => "password2",
    "user3" => "password3",
    "user4" => "password4"
);
echo "<pre>";
print_r($users);
echo "</pre>";
}

$loginToCheck    = "user3";
$passwordToCheck = "password3";
if (isset($users[$loginToCheck]) && $users[$loginToCheck] === $passwordToCheck) {
    echo "A user with a username '$loginToCheck' and password '$passwordToCheck' found.<br>";
} else {
    echo "A user with a username '$loginToCheck' and passwordм '$passwordToCheck' not found.<br>";
}

$randomCount = rand(5, 15);
$randomNumbers = array();

for ($i = 0; $i < $randomCount; $i++) {
    $randomNumbers[] = rand(1, 100);
}
sort($randomNumbers);
echo "Sorted array:<br>";
echo implode(", ", $randomNumbers) . "<br>";
echo "Number of elements: " . count($randomNumbers) . "<br>";
echo "Sum of element: " . array_sum($randomNumbers) . "<br>";
?>
