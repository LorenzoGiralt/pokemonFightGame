<?php      
?>
<?php include 'save.php'; ?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
    <title>Beta by Lorenzo</title>
</head>
<?php if (isset($_SESSION['Player']) && isset($_SESSION['Password'])) { ?>

<body onload="onloadMenu()">

    <!-- Menu joueur de gauche -->
    <div class="nav_left" id="containerMenu">
        <div class="container_nav_left" id="containerIcones">
            <div class="espacement"></div>
            <div class="container_icones" onclick="rez2()"><img src="images/potion.png" width="60%"></div>
            <div class="container_icones"><img src="icônes/sac.png" width="60%"></div>
            <div class="container_icones"><img src="icônes/sac.png" width="60%"></div>
            <div class="container_icones"><img src="icônes/sac.png" width="60%"></div>
            <div class="container_icones"><img src="icônes/sac.png" width="60%"></div>
            <div class="container_icones"><img src="icônes/sac.png" width="60%"></div>

        </div>
    </div> <!-- Stop Menu joueur -->
    <div class="close_nav" id="openClose">
        <h3>FERMER</h3>
    </div>


<div class="Arcade">

        <div class="arene"> 
                <div class="ennemyBar">
            <div class="ennemy">
                <div class="barHero1">
                    <div class="nameBar">
                        <center id="nameEnnemy">?</center>
                    </div>
                    <div class="levelBar">
                        <center id="levelEnnemy">?</center>
                    </div>
                    <div class="healtBar" id="healtBar">
                        <center ><p id="healtEnnemy"></p></center>
                    </div>
                    <div class="staminaBar" id="staminaBar">
                        <center id="staminaEnnemy">?</center>
                    </div>
                </div>
            </div>
                <div class="pokemonEnnemyBar" id="pokemonEnnemyBar">
                    <div class="pokemonEnnemy" id="pokemonEnnemy">
                        <div id="anim"></div>
                        <div id="ennemyPokemon"></div>
                    </div>

                </div>
            </div>
        <div class="playerBar">
            <div class="player">
                <div class="barHero">
                    <div class="nameBar">
                            <center id="namePlay"></center>
                    </div>
                    <div class="levelBar">
                        <center id="levelPlayer">?</center>
                    </div>
                    <div class="healtBar" id="healtBarPlayer">
                        <center id="healtPlayer">?</center>
                    </div>
                    <div class="staminaBar" id="stamina">
                        <center id="staminaPlayer">?</center>
                    </div>
                    <div id="expBar">
                        <center id="expPlayer">0</center>
                    </div>
                </div>
                <div class="pokemonPlayerBar">

                    <div class="pokemonPlayer" id="pokemonPlayerBar">
                        <div id="playerPokemon"></div>
                        <div id="animE"></div>
                        <div class="positionBlocked"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="choiceAtk" id="attackPlayer">

        <div class="blockLeft">
            <div class="texte" ><p id="showTxt">Un Pokémon sauvage apparaît !</p></div>
            <div class="texte1" ><p id="showTxt2">Que voulez-vous faire ?!</p></div>


        </div>

        <div class="blockRight" id="fullIste">

            <div class="miniLeft" id="gaucherBlock">
                <a  class="miniTop" id="reprendre" onclick="reprendre()">Reprendre</a>
                <div class="miniTop" id="atk1" onclick="Pikachu.elec.viveAtk()">Vive Attaque</div>
                <div class="miniBop" id="atk2" onclick="Pikachu.elec.tonnerre()">Tonnerre</div>
                <a class="miniBop" id="next" onclick="rez()">Chercher</a>
            </div>

     
         

            <div class="miniRight" id="droitierBlock"> 
            <input type="hidden" id="passvar" name="passvar"  value= <?php $articleBd = $db->query('SELECT * FROM membre_save'); while($lignes = $articleBd->fetch()){ 
      echo $lignes['lvl'];
                } ?> />
                 <input type="hidden" id="passvarAtk" name="passvar"  value= <?php $articleBd = $db->query('SELECT * FROM membre_save'); while($lignes = $articleBd->fetch()){ 
      echo $lignes['atk'];
                } ?> />
                  <input type="hidden" id="passvarPv" name="passvar"  value= <?php $articleBd = $db->query('SELECT * FROM membre_save'); while($lignes = $articleBd->fetch()){ 
      echo $lignes['pv'];
                } ?> />
                

  
                    <a  class="miniTop" id="fuir" href="capitale.html">Fuir</a>
                <div class="miniTop" id="atk3" onclick="Pikachu.elec.charge()">Charge</div>
                <div class="miniBop" id="atk4" onclick="Pikachu.elec.electrocution()">Electrocution</div>
                <a   class="miniBop" id="potion" onclick="rez2()">Potion(60)</a>

            </div>
        </div>
    </div>











</div>
    </div>

    <!-- Menu joueur du bas -->
    <div class="nav_bottom" id="containerMenuBottom">    

                
                <audio controls autoplay preload="metadata" preload="true" autoplay='true' loop='true'>
                    <source src="sound.mp3" type="audio/mpeg">
                    <source src="sound.mp3" type="audio/wav">
                    <source src="sound.mp3" type="audio/mp3">
                </audio> </div>
   
   
    
  

    <!-- Menu joueur connecté de droite -->
    <div class="nav_right" id="containerMenuRight">
            <div class="container_nav_right" id="containerIconesRight">
             

                    <div class="espacementRight"></div>
                    <div class="container_icones"><img src="icônes/account.png" width="80%"></div>
                    <div class="container_icones"><?php echo "<h3 class='prez'>". $_SESSION['Player']."</h3>" ?></div>
                    <div class="container_icones"><?php $articleBd = $db->query('SELECT * FROM membre_save'); while($lignes = $articleBd->fetch()){ 
                    ?><h3 class='prez'><?php echo $lignes['pokemon'];}?></h3> </div>
                    <div class="container_icones"><?php 
                    $articleBd = $db->query('SELECT * FROM membre_save'); while($lignes = $articleBd->fetch()){ 
                    ?><h3 class='prez'><?php echo "Lvl(". $lignes['lvl'];}?>)</h3> </div>
                    
                    <div class="container_icones"><?php $articleBd = $db->query('SELECT * FROM membre_save'); while($lignes = $articleBd->fetch()){ 
                    ?><h3 class='prez'><?php echo "Atk(". $lignes['atk'];}?>)</h3> </div>
           

            </div>


    </div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="menu.js"></script>
<script src="pokemon.js"></script>
<script src="createPokemon.js"></script>
<?php 
} else {
    header("refresh:0;url=membres/inscription.php");
}
    ?>
</html>