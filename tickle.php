<?php
require 'markov.php';

$order = 6;
$length = isset($_GET["l"]) ? $_GET["l"] : 128;
$file = "./tickle.txt";
  
echo generate_markov_text($length, generate_markov_table(file_get_contents($file), $order), $order / 2);
?>
