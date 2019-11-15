<?php
session_start ();
$_SESSION['Player'];
$_SESSION['Password'];

include 'membres/bd.php';
if (isset($_POST['nom']) && isset($_POST['lvl'])) {
    //Récupération des variables//
    $nom = json_decode($_POST['nom']);
    $level = json_decode($_POST['lvl']);
    $atk = json_decode($_POST['atk']);
    $pv = json_decode($_POST['pv']);
    $savXp = json_decode($_POST['savXp']);
    $potion = json_decode($_POST['potion']);

   

$_SESSION['pokename'] = $nom;
$_SESSION['pokepv'] =$pv;
$_SESSION['pokeatk'] =$atk;
$_SESSION['pokexp'] = $savXp;
$_SESSION['pokepotion'] = $potion;

// $data = array();
// $data["nom"]  = $nom;
// $data["lvl"]  = $level;
// $data["pv"] = $pv;
// $data["atk"] = $atk;
// $data["xp"] = $savXp;
// echo json_encode( $data );

    //Affichage du message lors du clic//
    print_r("Vous sauvegarder bien la partie !!!!!!!!!!!!!! ");
    print_r("Votre pokémon du nom de $nom est enregistré !");

    echo "Vous avez sauvegardé votre partie !";
    //Envoie dans la BD//
    // (:nom, :lvl, :atk, :pv, :savXp, :potion)");


    $send0 = $db->prepare("UPDATE membre_save SET nom = $nom where pseudonyme = ?");
    $send0->execute(array($_SESSION['Player']));

    $send1 = $db->prepare("UPDATE membre_save SET lvl = $level where pseudonyme = ?");
    $send1->execute(array($_SESSION['Player']));

    $send2 = $db->prepare("UPDATE membre_save SET atk = $atk where pseudonyme = ?");
    $send2->execute(array($_SESSION['Player']));

    $send3 = $db->prepare("UPDATE membre_save SET pv = $pv where pseudonyme = ?");
    $send3->execute(array($_SESSION['Player']));

    $send4 = $db->prepare("UPDATE membre_save SET xp = $savXp where pseudonyme = ?");
    $send4->execute(array($_SESSION['Player']));

    $send5 = $db->prepare("UPDATE membre_save SET potion = $potion where pseudonyme = ?");
    $send5->execute(array($_SESSION['Player']));

} 

?>    
