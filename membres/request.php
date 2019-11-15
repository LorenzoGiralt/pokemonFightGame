<?php include 'bd.php';



if (isset($_POST['player']) && isset($_POST['mdp'])) {
    if (empty($_POST['player']) || empty($_POST['mdp'])) {
        $echec="<div class='show_error'>Vous devez remplir le formulaire, merci.</div>";
    }

    //Creation du pokémon//
    $pokename="Pikachu";
    $pokelevel=1;
    $pokeatk=18;
    $pokepv=100;
    $pokexp=0;
    $pokepotion=60;
    $motdepasse=htmlspecialchars($_POST['mdp']);
    $player=htmlspecialchars($_POST['player']);

    // Verif utilisateur existant
    $existUsers=$db->query("SELECT * FROM membre_save WHERE (pseudonyme) = '$player'");
    $verifUsers=$existUsers->fetch();
    $existPwds=$db->query("SELECT * FROM membre_save WHERE (pwd) = '$motdepasse'");
    $verifPwds=$existPwds->fetch();

    //
    if ($verifUsers==""|| $verifPwds=="") {
        $alzhaimer="<div class='show_error'>Ce compte n'existe pas, n'essaie pas d'menculer bro ;)</div>";
    }

    else {

        $connect=$db->prepare("SELECT membre_save (pseudonyme, pwd,pokemon, lvl, atk, pv, xp, potion) VALUES (:player, :mdp, :pokemon, :lvl, :atk, :pv, :xp, :potion)");
        $connect->execute(array(":player"=> $player, ":mdp"=> $motdepasse, ":pokemon"=> $pokename, ":lvl"=> $pokelevel, ":atk"=> $pokeatk, ":pv"=> $pokepv, ":xp"=> $pokexp, ":potion"=> $pokepotion));
        $success="<div class='show_error'>Vous êtes connectés, vous aller être redirigé sur Pokémon Stadium !</div>";
        header("refresh:3;url=../index.php");
        session_start ();
        $_SESSION['Player']=$_POST['player'];
        $_SESSION['Password']=$_POST['mdp'];
        $_SESSION['pokename']=$pokename;
        $_SESSION['pokeatk']=$pokeatk;
        $_SESSION['pokelvl']=$pokelevel;
        $_SESSION['pokepv']=$pokepv;
    }

    // on enregistre les paramètres de notre membre dans les variables de session//


}

/////////////Inscription

if (isset($_POST['pseudonyme']) && isset($_POST['motdp'])) {

    if (empty($_POST['pseudonyme']) || empty($_POST['motdp'])) {
        $echec="<div class='show_error'>Vous devez remplir le formulaire, merci.</div>";
    }

    else {

        $password=htmlspecialchars($_POST['motdp']);
        $pseudonyme=htmlspecialchars($_POST['pseudonyme']);

        //Creation du pokémon//
        $pokename="Pikachu";
        $pokelevel=1;
        $pokeatk=18;
        $pokepv=100;
        $pokexp=0;
        $pokepotion=60;

        // Verif utilisateur existant
        $existUsers=$db->query("SELECT * FROM membre_pokemon WHERE (pseudonyme) = '$pseudonyme'");
        $verifUsers=$existUsers->fetch();

        $existPwds=$db->query("SELECT * FROM membre_pokemon WHERE (pwd) = '$password'");
        $verifPwds=$existPwds->fetch();

        //
        if ($verifUsers==""|| $verifPwds=="") {

            $send1=$db->prepare("INSERT INTO membre_save (pseudonyme, pwd, pokemon, lvl, atk, pv, xp, potion) VALUES (:pseudonyme, :pwd,:pokemon, :lvl, :atk, :pv, :xp, :potion)");
            $send1->execute(array(":pseudonyme"=> $pseudonyme, ":pwd"=> $password, ":pokemon"=> $pokename, ":lvl"=> $pokelevel, ":atk"=> $pokeatk, ":pv"=> $pokepv, ":xp"=> $pokexp, ":potion"=> $pokepotion));


            $send=$db->prepare("INSERT INTO membre_pokemon (pseudonyme, pwd) VALUES (:pseudonyme, :pwd)");
            $send->execute(array(":pseudonyme"=> $pseudonyme, ":pwd"=> $password));

            $success="<div class='show_error'>Merci pour votre inscriptions, à présent connecter-vous !</div>";




            // Méthode last_insert_id 2

            // Méthode du max

        }

        else {
            $alzhaimer="<div class='show_error'>T'es déjà inscris guignol...</div>";
        }
    }
}

?>