<?php
require 'markov.php';

$order = min(max(isset($_GET["o"]) && is_numeric($_GET["o"]) ? $_GET["o"] : 3, 1), 10);
$length = min(max(isset($_GET["l"]) && is_numeric($_GET["l"]) ? $_GET["l"] : 128, 1), 256);
$file = "./tickle.txt";
  
echo trim(trim(generate_markov_text($length, generate_markov_table(file_get_contents($file), $order * 2), $order), 'a..z'));
?>
