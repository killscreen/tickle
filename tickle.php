<?php
require 'markov.php';

$order = 4;
$length = 6;
$file = "./tickle.txt";
  
echo generate_markov_text($length, generate_markov_table(file_get_contents($file), $order), $order);
?>
