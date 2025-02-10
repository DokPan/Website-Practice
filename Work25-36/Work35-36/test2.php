<?php
$correct_answers = array(
    'q1' => '1',
    'q2' => '1',
    'q3' => '2',
    'q4' => array('1', '3')
);

$score = 0;

if (isset($_GET['q1']) && $_GET['q1'] === $correct_answers['q1']) {
    $score++;
}

if (isset($_GET['q2']) && $_GET['q2'] === $correct_answers['q2']) {
    $score++;
}

if (isset($_GET['q3']) && $_GET['q3'] === $correct_answers['q3']) {
    $score++;
}

if (isset($_GET['q4'])) {
    $selected = $_GET['q4'];
    sort($selected);
    if ($selected === $correct_answers['q4']) {
        $score++;
    }
}

echo "You answered the $score questions correctly..";
?>
