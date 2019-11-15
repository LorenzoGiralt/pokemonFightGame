<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="inscription/inscription.css" type="text/css" />
    <link rel="stylesheet" href="arene.css">
    <title>DEMO STADIUM BY LORENZO</title>
</head>

<body>
    <header>
        <div class="menuLeft">
            <p id="sac" onclick="sac()"><img src="items/bag4.png" width="80px" height='95px'></p>
            <p id="sac1" onclick="param()"><img src="items/param.png" width="84px" height='85px'></p>
        </div>
        <div class="menuRm">
        <a href="?signIn"><p id="signIn" onclick="signIn()">
        <?php if (isset($_GET['signIn'])) { ?>  <img src="signInH.png" width="85px" height="85px"></p></a> 
        <?php } else { ?> <img src="signIn.png" width="85px" height="85px"></p></a> <?php } ?>
        
        <a href="?sign"><p id="signUp" onclick="signUp()">
        <?php if (isset($_GET['sign'])) { ?>  <img src="signUpH.png" width="85px" height="85px"></p></a> 
        <?php } else { ?> <p id="signUp" onclick="signUp()"><img src="signUp.png" width="85px" height="85px"></p></a> <?php } ?>
        <a href="?sign"></p></a>
        
        </div>

<?php if (isset($_GET['sign']) || isset($_GET['signIn'])) { ?> <div class="formArene"> <?php } else { ?> <div class="arene"> <?php } ?>
                <?php if (isset($_GET['sign'])) { 

                    include ('inscription/inscription.php');
                }
                else if (isset($_GET['signIn'])) {
                    include ('connexion/connexion.php');

                }
                    else {
                        
                         ?>
                    
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
                            <center id="healtEnnemy">?</center>
                        </div>
                        <div class="staminaBar" id="staminaBar">
                            <center id="staminaEnnemy">?</center>
                        </div>

                    </div>
                    <div class="pokemonEnnemyBar" id="pokemonEnnemyBar">

                        <div class="pokemonEnnemy" id="pokemonEnnemy">
                            <div id="anim"></div>
                            <div id="ennemyPokemon"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="playerBar">
                <div class="player">
                    <div class="barHero">
                        <div class="nameBar">
                            <center id="namePlay">?</center>
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
                            <div id="animE"></div>
                            <div id="playerPokemon"></div>
                        </div>


                    </div>

                </div>

            </div>

        </div>

        </div>


        <div class="showBtnMap" id="showBtnMap">
        </div>
        <div class="choiceAtk" id="attackPlayer">

            <div class="blockLeft">
                <div class="texte" id="showTxt">Un Pokémon sauvage apparaît !</div>
                <div class="texte1" id="showTxt2">Que voulez-vous faire ?!
                    <div id="showTxt3"></div>

                </div>


            </div>

            <div class="blockRight">
                <div class="full" id="full">
                    <ul>    
                        <a id="full1" onclick="rez()"><p>Continuer</p></a>
                        <a href="capitale.html"><p>Fuir</p></a>
                        <a id="full2" onclick="rez2()"><p>Potion(5)</p></a>
                    </ul>
         
            
                </div>


                <div class="miniLeft">
                    <div class="miniTop" id="atk1" onclick="Pikachu.elec.viveAtk()">Vive Attaque</div>
                    <div class="miniBop" id="atk2" onclick="Pikachu.elec.tonnerre()">Tonnerre</div>
                </div>

         
             

                <div class="miniRight">
                    <div class="miniTop" id="atk3" onclick="Pikachu.elec.charge()">Charge</div>
                    <div class="miniBop" id="atk4" onclick="Pikachu.elec.electrocution()">Electrocution</div>
                </div>
            </div>
        </div>

    </header>
    <center>
        <audio controls autoplay preload="metadata" preload="true" autoplay='true' loop='true'>
            <source src="soundarene.mp3" type="audio/mpeg">
            <source src="soundarene.mp3" type="audio/wav">
            <source src="soundarene.mp3" type="audio/mp3">
        </audio></center>
        <?php } ?>
</body>

<script src="pokemon.js"></script>
<script src="createPokemon.js"></script>

</html>