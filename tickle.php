<?php
require 'markov.php';

$order = isset($_GET["o"]) ? $_GET["o"] : 3;
$length = isset($_GET["l"]) ? $_GET["l"] : 128;
$file = "./tickle.txt";
  
echo generate_markov_text($length, generate_markov_table(file_get_contents($file), $order * 2), $order);
?>
