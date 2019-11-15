<?php include 'request.php'; ?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="inscription.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <title>Stadium PvP</title>
</head>

<body onload='onloadMenuRight(), onloadMenu()'>

<?php if (isset($success)) { echo $success; } ?>
    <?php if (isset($alzhaimer)) { echo $alzhaimer; } ?>
    <?php if (isset($echec)) { echo $echec; } ?>
     <div class="nav_register"> 
    <div class="nav_bandeau">
            <img src="../images/logo.png">
        </div>
</div>

<!-- contenue responsive -->
    <div class="container_responsive">
        <div class="nav_bandeauResponse">
            <img src="../images/logo.png" width="300px">
        </div>

        <div class="container_register_responsive">
            <div class="register_responsive">
                <div class="bandeau_responsive">
                    <h2>Inscription</h2>
                </div>
                <form method="post" action="" id="formA">
                    <input type="text" placeholder="Pseudonyme" alt="pseudonyme" name="pseudonyme">
                    <input type="password" placeholder="Mot de passe" alt="mot de passe" name="motdp">
                    <button type="submit"><img src="pokeResponsive.gif" width="70px"></button>
                    </form>
             
            </div>
        </div>
<!-- contenue responsive -->

        <div class="register_responsive">
                <div class="bandeau_responsive">
                    <h2>Connexion</h2>
                </div>
                <form method="post" action="" id="formA">
                    <input type="text" placeholder="Pseudonyme" alt="pseudonyme" name="player">
                    <input type="password" placeholder="Mot de passe" alt="mot de passe" name="mdp">
                    <button type="submit"><img src="pokeResponsive.gif" width="70px"></button>
                    </form>
            
            </div>

            

        </div>
    </div>
     </div> 
    
        <div class="container">

            <div class="container_register_nav">
                <div class="container_button">
                    <div class="button_register_nav">
                        <a class="BUTTON_DGA" id="openClose">S'inscrire</a>
                    </div>
                </div>
            </div>



            <div class="container_register_nav_right">
                <div class="button_register_nav">
                    <a class="BUTTON_DGA2" id="openCloseRight">Connexion</a>
                </div>
                <div class="form_connection">

                </div>

            </div>
        </div>

        <div class="container_form_ez" id="form_all">
            <div class="register_contain" id="register">

                <form method="post" action="" id="formA">
                    <input type="text" placeholder="Pseudonyme" alt="pseudonyme" name="pseudonyme">
                    <input type="password" placeholder="Mot de passe" alt="mot de passe" name="motdp">
                    <button type="submit">
                  

                        <div class="pokeball">
                            <div class="top">
                                <div class="middle_circle">
                                    <div class="white_in"></div>
                                </div>
                            </div>
                            <div class="bottom"></div>
                        </div>
                    </button>
                </form>

            </div>

            <div class="connexion_contain" id="signIn">
                <form method="post" action="">
                    <input type="text" placeholder="Pseudonyme" name="player">
                    <input type="password" placeholder="Mot de passe" name="mdp">
                    <button type="submit">

                        <div class="pokeball">
                            <div class="top">
                                <div class="middle_circle">
                                    <div class="white_in"></div>
                              
                                </div>
                            </div>
                            <div class="bottom"></div>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    </div>


    </div> 

    <footer>
        <marquee direction="right"><img src="pikachugif.gif" width="80px"></marquee>
    </footer>

</body>
<script src="inscription.js"></script>

</html>