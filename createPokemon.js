
// $.( "save.php", function( data_json ){
//             data_json.nom ; // retourne "olivier"
//             data_json.lvl ; // retourne "12354654656"
//             data_json.pv ; // retourne true
//             data_json.atk ; // retourne true
//             data_json.xp ; // retourne true
//             data_json.potion ; // retourne true
//             });




passLvll = document.getElementById('passvar').value;
// passAtkk = document.getElementById('passvarAtk').value;
passPvv = document.getElementById('passvarPv').value;



//Instance du template//
let Pikachu = new Pokemon("Pikachu", "elect", passLvll, 0, passPvv, 23, 18, "<img src='pokemon/Pikachu.gif' width='auto'></img>", 10, 5, 100);
Pikachu.getDomIdPlayer.innerHTML = Pikachu.sprite;
Pikachu.getNamePlayer.innerHTML = Pikachu.nom;
Pikachu.getLevelPlayer.innerHTML = 'Niveau ' + Pikachu.level;
Pikachu.getPvPlayer.innerHTML = Pikachu.pv + ' pv';
Pikachu.getManaPlayer.innerHTML = Pikachu.mana + ' mana';
Pikachu.getExp.innerHTML = '<font color="#1abc9c">' + Pikachu.exp + ' / ' + Pikachu.r3 + ' xp</font>';
//Instance des attaques//

getAnim = document.getElementById('anim');
em = 0;
for (i = 0; i < 1; i++) {
    var myArray = ['Germignon', 'Germignon', 'Doduo', 'Tortank', 'Rattatac', 'Feurisson', 'Abra', 'Zigzaton', 'Zigzaton', 'Rattatac', 'Arbok', 'Zigzaton', 'Abra', 'Roucool', 'Mangriff', 'Zigzaton', 'Zigzaton', 'Mr. Mime', 'Roucool', 'Lucario', 'Germignon', 'Roucool', 'Mr. Mime', 'Roucool', 'Mimitoss', 'Mimitoss', 'Dracolosse', 'Arcanine', 'Mimitoss', 'Mimitoss', 'Métamorphe', 'Rattatac', 'Doduo', 'Hypocéan', 'Galopa', 'Rattatac', 'Doduo', 'Taupiqueur', 'Triopikeur', 'Soporifik', 'Rattatac', 'Dragonair', 'Minidraco', 'Métamorphe', 'Doduo', 'Chenipan', 'Chétiflor', 'Feurisson', 'Chenipan', 'Doduo', 'Chétiflor', 'Germignon', 'Doduo', 'Chétiflor', 'Mew', 'Chétiflor', 'Chenipan', 'Mewtwo', 'Chenipan', 'Mimitoss', 'Zigzaton', 'Florizzard', 'Mimitoss', 'Roucool', 'Vigoroth', 'Roucool', 'Roucool', 'Roucool', 'Mimitoss', 'Roucool', 'Empiflor', 'Crustabri', 'Doduo', 'Aéromite', 'Aéromite', 'Chétiflor', 'Doduo', 'Voltorbe', 'Voltorbe', 'Carapuce', 'Carapuce', 'Salameche', 'Mr. Mime', 'Salameche', 'Dracaufeu', 'Leuphorie', 'Tentacool', 'Togepi', 'Roucool', 'Roucool', 'Zigzaton', 'Roucool', 'Togetic', 'Typhlosion', 'Aquali', 'Zigzaton', 'Reptincel', 'Chenipan', 'Voltorbe', 'Zigzaton', 'Chenipan', 'Magikarp', 'Magikarp', 'Métamorphe', 'Kaiminus', 'Métamorphe', 'Nosferati', 'Excelangue', 'Nosferati', 'Métamorphe', 'Rattata_Shiney', 'Chenipan', 'Roucool', 'Nosferati', 'Voltorbe', 'Alakhazam', 'Voltorbe', 'Kaiminus', 'Chenipan', 'Chétiflor', 'Chenipan', 'Dardargnan', 'Zigzaton', 'Maraiste', 'Rattata', 'Rattata', 'Zigzaton', 'Rafflesia', 'Rafflesia', 'Doduo', 'Abra', 'Abra', 'Nosferati', 'Piafabec', 'Piafabec', 'Nosferati', 'Goupix', 'Mimitoss', 'Mimitoss', 'Goupix', 'Capumain', 'Chenipan', 'Nidoran', 'Mimitoss', 'Mimitoss', 'Sabelette', 'Bulbizzard', 'Chétiflor', 'Ossatueur', 'Chenipan', 'Zigzaton', 'Chétiflor', 'Tentacruel', 'Zigzaton', 'Chenipan', 'Charmillon', 'Chenipan', 'Chétiflor', 'Chétiflor', 'Doduo', 'Doduo', 'Raikou', 'Doduo', 'Doduo', 'Chenipan', 'Chétiflor', 'Chenipan', ];
    passLvl = document.getElementById('passvar').value;

    //Instance du template//

    var level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    var randLvl = level[Math.floor(Math.random() * Pikachu.level)];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];

    var Reptincel = new Ennemy(rand, "herbe", randLvl, 0, 103, 24, 2, "<img src='pokemon/" + rand + ".gif' width='auto' height='auto'></img>", 10, 17, 100);

    puissant = ['Reptincel', 'Dracolosse', 'Lucario', 'Tortank', 'Triopikeur', 'Arcanine', 'Galopa', 'Tropikeur', 'Hypocéan', 'Arbok', 'Florizzard', 'Dracaufeu', 'Typhlosion', 'Alakhazam', 'Aquali', 'Tentacruel'];

    for (var i = 0; i <= puissant.length; i++) {
        if (Reptincel.nom == puissant[i]) {
            console.log('Pokémon puissant ! ');
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.pv += 10;

        }
    }

    legendaire = ['Raikou', 'Mew', 'Mewtwo', 'Électhor'];

    for (var i = 0; i <= legendaire.length; i++) {
        if (Reptincel.nom == legendaire[i]) {
            console.log('Pokémon légendaire ! ');
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();

        }
    }


    sacApv = ['Leuphorie', 'Excelangue', 'Florizzard', 'Empiflor', 'Crustabri', 'Maraiste', 'Mangriff', 'Rattatac'];

    for (var i = 0; i <= sacApv.length; i++) {
        if (Reptincel.nom == sacApv[i]) {
            console.log('Pokémon sac à pv ! ');
            Reptincel.pv += 40;
        }
    }

    Reptincel.pvBar = Reptincel.pv;
    Reptincel.getDomIdEnnemy.style.transition = '1s';
    Reptincel.getDomIdEnnemy.innerHTML = Reptincel.sprite;
    Reptincel.getNameEnnemy.innerHTML = Reptincel.nom;
    Reptincel.getLevelEnnemy.innerHTML = 'Niveau ' + Reptincel.level;
    Reptincel.getPvBarEnnemy.style.width = Reptincel.pv + '%';
    Reptincel.getPvEnnemy.innerHTML = Reptincel.pv + ' pv';
    Reptincel.getManaEnnemy.innerHTML = Reptincel.mana + ' mana';
    Reptincel.getShow.style.position = "relative";
    Reptincel.getShow.style.left = "10px";
    Reptincel.getShow.style.top = "10px";
    Reptincel.getShow.innerHTML = 'Un ' + Reptincel.nom + ' sauvage apparaît !';





    //EQUILIBRAGE STAT RDM//
    if (randLvl <= 1) {
        Reptincel.progress.Up();
    }
    if (randLvl == 2) {
        Reptincel.progress.Up();
    }
    if (randLvl == 4) {
        Reptincel.progress.Up();
    }
    if (randLvl == 5) {
        Reptincel.progress.Stat();
        Reptincel.progress.Up();
    }
    if (randLvl == 6) {
        Reptincel.progress.Up();
        Reptincel.progress.Up();
    }
    if (randLvl >= 10) {
        Reptincel.progress.Stat();
        Reptincel.progress.Up();

    }
    if (randLvl >= 20) {
        Reptincel.progress.Stat();
        Reptincel.progress.Up();
    }
    if (randLvl >= 30) {
        Reptincel.progress.Stat();
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 45) {
        Reptincel.progress.Stat();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 55) {
        Reptincel.progress.Stat();
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 65) {
        Reptincel.progress.Stat();
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 75) {
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 85) {
        Reptincel.progress.Stat();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 90) {
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 95) {
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 97) {
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }
    if (randLvl >= 99) {
        Reptincel.progress.Up();
        Reptincel.progress.Stat();
    }

    em++;
}

//FONCTION POTION//
function rez2() {
    if (Pikachu.potion >= 1) {
        Pikachu.potion--;
        Pikachu.getShow.innerHTML = ' Vous utiliser potion';
        Pikachu.getShow2.innerHTML = ' Potion restante disponible ' + Pikachu.potion;
        Pikachu.pv = Pikachu.savPv;
        Pikachu.pvBar = Pikachu.savPv;
        Pikachu.next.style.visibility = "visible";
        Pikachu.exp = Pikachu.savXp;
        Pikachu.getPvBarPlayer.style.width = Pikachu.pv + '%';
        Pikachu.getPvBarPlayer.innerHTML = Pikachu.pv + ' pv';
        Pikachu.potionC.innerHTML = 'Potion(' + Pikachu.potion + ')';
    } else {
        Pikachu.getShow.innerHTML = ' Vous n\'avez plus de potion ! ';
        Pikachu.getShow2.innerHTML = ' Passer au Centre Pokémon pour en acheter ! ';
    }

}



function reprendre() {
    if (Pikachu.pv >= 50) {
        Pikachu.next.style.display = "none";
        Pikachu.fuir.style.display = "none";
        Pikachu.reprendre.style.display = "none";
        Pikachu.potionC.style.display = "none";

        Pikachu.getAtk1.style.display = "block";
        Pikachu.getAtk1.style.display = "flex";
        Pikachu.getAtk2.style.display = "block";
        Pikachu.getAtk2.style.display = "flex";
        Pikachu.getAtk3.style.display = "block";
        Pikachu.getAtk3.style.display = "flex";
        Pikachu.getAtk4.style.display = "block";
        Pikachu.getAtk4.style.display = "flex";
        Pikachu.getShow.innerHTML = ' Vous reprenez le combat ! ';
        Pikachu.getShow2.innerHTML = ' Bonne chance mino ! ';
    } else {
        Pikachu.getShow.innerHTML = 'Votre pokémon ne vous permet pas le combat :/ ';
        Pikachu.getShow2.innerHTML = 'Conseil : Utiliser une potion pour combattre ! ';
    }
}


//FONCTION FIGHT RANDOM//
function rez() {
    if (Pikachu.pv >= 20) {
        Pikachu.next.style.display = "none";
        Pikachu.fuir.style.display = "none";
        Pikachu.reprendre.style.display = "none";
        Pikachu.potionC.style.display = "none";
        Pikachu.getAtk1.style.display = "block";
        Pikachu.getAtk1.style.display = "flex";
        Pikachu.getAtk2.style.display = "block";
        Pikachu.getAtk2.style.display = "flex";
        Pikachu.getAtk3.style.display = "block";
        Pikachu.getAtk3.style.display = "flex";
        Pikachu.getAtk4.style.display = "block";
        Pikachu.getAtk4.style.display = "flex";

        //Instance du template//
        var level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        var randLvl = level[Math.floor(Math.random() * Pikachu.level)];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];

        var Reptincelus = new Ennemy(rand, "herbe", randLvl, 0, 100, 69, 2, "<img src='pokemon/" + rand + ".gif' width='auto' height='auto'></img>", 10, 17, 100);
        Reptincel = Reptincelus;
        Reptincel.pvBar = Reptincelus.pvBar;
        Reptincel.pv = Reptincelus.pv;

        puissant = ['Reptincel', 'Lucario', 'Tortank', 'Électhor', 'Dracolosse', 'Triopikeur', 'Hypocéan', 'Arbok', 'Florizzard', 'Dracaufeu', 'Typhlosion', 'Alakhazam', 'Aquali', 'Tentacruel'];

        for (var i = 0; i <= puissant.length; i++) {
            if (Reptincel.nom == puissant[i]) {
                console.log('Ennemie puissant ! ');
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.pv += 10;

            }
        }

        legendaire = ['Raikou', 'Mew', 'Mewtwo', 'Électhor'];

        for (var i = 0; i <= legendaire.length; i++) {
            if (Reptincel.nom == legendaire[i]) {
                console.log('Ennemie légendaire ! ');
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();
                Reptincel.progress.Stat();

            }
        }

        sacApv = ['Leuphorie', 'Excelangue', 'Florizzard', 'Arcanine', 'Galopa', 'Mangriff', 'Empiflor', 'Crustabri', 'Maraiste', 'Dracaufeu'];

        for (var i = 0; i <= sacApv.length; i++) {
            if (Reptincel.nom == sacApv[i]) {
                console.log('Ennemie sac à pv ! ');
                Reptincel.pv += 30;
            }
        }


        if (randLvl >= 1) {
            Reptincel.progress.Up();
        }
        if (randLvl >= 2) {}
        if (randLvl == 3) {}
        if (randLvl == 4) {
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl == 5) {
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
        }
        if (randLvl == 6) {
            Reptincel.progress.Stat();
        }
        if (randLvl >= 20) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl >= 30) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 45) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 55) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 65) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 75) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 85) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 90) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 95) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 97) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
        }


        Reptincel.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
        Reptincel.getPvBarEnnemy.style.width = Reptincel.pv + '%';
        Reptincel.getShow.innerHTML = 'Un ' + Reptincel.nom + ' sauvage apparaît !';

        Reptincel.pvBar = Reptincel.pv;
        Reptincel.getDomIdEnnemy.style.transition = '1s';
        Reptincel.getDomIdEnnemy.innerHTML = Reptincel.sprite;
        Reptincel.getNameEnnemy.innerHTML = Reptincel.nom;
        Reptincel.getLevelEnnemy.innerHTML = 'Niveau ' + Reptincel.level;
        Reptincel.getPvBarEnnemy.style.width = Reptincel.pv + '%';
        Reptincel.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
        Reptincel.getManaEnnemy.innerHTML = Reptincel.mana + ' mana';
        Reptincel.getShow.innerHTML = 'Un ' + Reptincel.nom + ' sauvage apparaît !';


        if (randLvl == 1) {
            Reptincel.progress.Up();
        }
        if (randLvl == 2) {
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl == 3) {
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl == 4) {
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl == 5) {
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl == 6) {
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl >= 10) {
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl >= 20) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
            Reptincel.progress.Up();
        }
        if (randLvl >= 30) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 45) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 55) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 65) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 75) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 85) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 90) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 95) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 97) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }
        if (randLvl >= 99) {
            Reptincel.progress.Stat();
            Reptincel.progress.Stat();
            Reptincel.progress.Up();
            Reptincel.progress.Stat();
        }

        em++;
    } 
    else if (Pikachu.pv == "mort") {
        Pikachu.getShow.innerHTML = 'Votre pokémon ne vous permet pas le combat :/ ';
        Pikachu.getShow2.innerHTML = 'Conseil : Utiliser une potion pour combattre ! ';
    }
    else {
        Pikachu.getShow.innerHTML = 'Votre pokémon ne vous permet pas le combat :/ ';
        Pikachu.getShow2.innerHTML = 'Conseil : Utiliser une potion pour combattre ! ';
    }
    
}

function save(nom, lvl, pv, atk, xp, potion) {
    Pikachu.nom = nom;
    Pikachu.level = lvl;
    Pikachu.pv = pv;
    Pikachu.atk = atk;
    Pikachu.xp = xp;
    Pikachu.potion = potion;

 $.ajax({
    url: "save.php",
    method: "post",
    data: { //Initilisation des data à passer//
    nom: JSON.stringify(nom),
    lvl: JSON.stringify(level),
    pv: JSON.stringify(pv),
    atk: JSON.stringify(atk),
    xp: JSON.stringify(xp),
    potion: JSON.stringify(potion),
    }

})
}