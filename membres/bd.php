<?php 
// Paramètre de connexion à la base de donnée //
include 'contentDb.php';
try
{

    $db = new PDO("mysql:host=$ip;dbname=$name;charset=$utf8", $user, $password);

 }

  catch (Exception $e)
 {

 die ("Erreur:".$e->getmessage());

 }
?>
