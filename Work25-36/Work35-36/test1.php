<?php
$correct_answers =array ('q1' => '2');

$score = 0;
foreach ($correct_answers as $question => $correct) {
    if (isset($_GET[$question]) && $_GET[$question] === $correct) {
        $score++;
    }
}

echo "You give wrong answer at $score questions.";
?>
