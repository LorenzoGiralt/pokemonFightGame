//Template Pokémon//
class Pokemon {

    //Stats//
    nom = undefined;
    type = undefined;
    level = null;
    exp = 1;
    pv = null;
    mana = null;
    atk = null;
    sprite = '';
    posH = '120';
    def = 0;
    none = null;
    anim = 1;
    dps = null;
    time = 0;
    dieP = false;
    pvBar = 100;
    ennemy = '';
    rest = 3;
    r3 = 2;
    fight = false;
    savPv = 100;
    potion = 60;
    savXp = 0;
    sac = true;
    param = true;
    winxp = 1;

    save(nom, lvl, pv, atk, savXp, potion) {
        nom = Pikachu.nom;
        lvl = Pikachu.level;
        pv = Pikachu.savPv;
        atk = Pikachu.atk;
        savXp = Pikachu.savXp;
        potion = Pikachu.potion;
     $.ajax({
        url: "save.php",
        method: "post",
        data: { //Initilisation des data à passer//
        nom: JSON.stringify(nom),
        lvl: JSON.stringify(lvl),
        pv: JSON.stringify(pv),
        atk: JSON.stringify(atk),
        savXp: JSON.stringify(savXp),
        potion: JSON.stringify(potion)
        },
        success: function (res) {
            console.log("salut a tous " + res);
        }
       
    })
    return 'save effectué !';

    }

    //INTERFACE DOM PLAYER
    getSac = document.getElementById('sac');
    getParam = document.getElementById('sac1');
    getSignIn = document.getElementById('signIn');
    getSignUp = document.getElementById('signUp');
    getAtk1 = document.getElementById('atk1');
    getAtk2 = document.getElementById('atk2');
    getAtk3 = document.getElementById('atk3');
    getAtk4 = document.getElementById('atk4');
    getAtk5 = document.getElementById('atk5');
    full = document.getElementById('full');
    getExp = document.getElementById('expPlayer');
    showBtnMap = document.getElementById('showBtnMap');
    getAnim = document.getElementById('anim');
    getAnm = document.getElementById('animE');
    getNamePlayer = document.getElementById('namePlay');
    getLevelPlayer = document.getElementById('levelPlayer');
    getPvPlayer = document.getElementById('healtPlayer');
    getManaPlayer = document.getElementById('staminaPlayer');
    getDomIdPlayer = document.getElementById('playerPokemon');
    getShow = document.getElementById('showTxt');
    getShow2 = document.getElementById('showTxt2');
    getShow3 = document.getElementById('showTxt3');
    fuir = document.getElementById('fuir');
    next = document.getElementById('next');
    reprendre = document.getElementById('reprendre');
    potionC = document.getElementById('potion');
    blLeft = document.getElementById('gaucherBlock');
    blRight = document.getElementById('droitierBlock');
    fullIste = document.getElementById('fullIste');


    //INTERFACE DOM ENNEMY
    getNameEnnemy = document.getElementById('nameEnnemy');
    getLevelEnnemy = document.getElementById('levelEnnemy');
    getPvEnnemy = document.getElementById('healtEnnemy');
    getPvBarEnnemy = document.getElementById('healtBar');
    getManaEnnemy = document.getElementById('staminaEnnemy');
    getDomIdEnnemy = document.getElementById('ennemyPokemon');
    getPvBarPlayer = document.getElementById('healtBarPlayer');

    //Constructor//
    constructor(nom, type, level, exp, pv, mana, atk, sprite, posH, def, pvBar) {
        this.nom = nom;
        this.type = type;
        this.level = level;
        this.exp = exp;
        this.pv = pv;
        this.mana = mana;
        this.atk = atk;
        this.sprite = sprite;
        this.posH = posH;
        this.def = def;
        this.pvBar = pvBar;
    }

    //Variante Type/attack Pokémon//
    eau = {
        bulle: () => this.atk + Math.floor(Math.random() * Math.floor(8)),
        rayon: () => this.atk + Math.floor(Math.random() * Math.floor(14)),
        lanceBulle: () => this.atk + Math.floor(Math.random() * Math.floor(13)),
        canonEau: () => this.atk + Math.floor(Math.random() * Math.floor(20)),
    }

    elec = {
        tonnerre: (random, atk, zz) => {
            random = Math.floor(Math.random() * Math.floor(18));
            atk = Pikachu.atk += random;
            zz = Pikachu.atk -= random;
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) > Reptincel.pv) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<center><font color='white'>MORT</font></center>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk1.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                Pikachu.next.style.display = "block";
                Pikachu.next.style.display = "flex";
                Pikachu.next.style.alignItems = "center";
                Pikachu.next.style.justifyContent = "center";
                Pikachu.reprendre.style.display = "block";
                Pikachu.reprendre.style.visibility= "hidden";

                Pikachu.potionC.style.display = "block";
                Pikachu.potionC.style.display = "flex";
                Pikachu.potionC.style.alignItems = "center";
                Pikachu.potionC.style.justifyContent = "center";
                Pikachu.fuir.style.display = "block";
                Pikachu.fuir.style.display = "flex";
                Pikachu.fuir.style.alignItems = "center";
                Pikachu.fuir.style.justifyContent = "center";
                Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                console.log('L\'adversaire est déjà mort ! ');
            } else {
                if (this.fight == true) {
                    // throw new Error('Vous attaquer déjà');

                } else if (this.fight == false) {
                    Reptincel.pv = Reptincel.pvBar -= atk;
                    this.getShow.innerHTML = this.nom + ' attaque Tonnerre !';
                    this.getShow2.innerHTML = 'l\'attaque inflige ' + atk + ' points de dégâts';
                    this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                    this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
                }
                //IA REPONSE DANS LE COMBAT//
                setTimeout(function (random, atk, zz, tab, tob) {

                    if (Reptincel.atk + Math.floor(Math.random() * Math.floor(10)) > Pikachu.pv) {
                        Pikachu.getPvBarPlayer.style.width = "0%";
                        Pikachu.getPvBarPlayer.innerHTML = "MORT";
                        Reptincel.progress.Xp();
                        Pikachu.getPvBarPlayer.innerHTML = "<font color='white'>MORT</font>";
                        Pikachu.getShow.innerHTML = Reptincel.nom + ' vous as battu !';
                        Pikachu.getAtk1.style.display = "none";
                        Pikachu.getAtk2.style.display = "none";
                    
                        Pikachu.getAtk3.style.display = "none";
                        Pikachu.getAtk4.style.display = "none";
                        Pikachu.next.style.display = "block";
                        Pikachu.next.style.visibility = "hidden";
                        Pikachu.next.style.display = "flex";
                        Pikachu.next.style.alignItems = "center";
                        Pikachu.next.style.justifyContent = "center";
                        Pikachu.reprendre.style.display = "block";
                        Pikachu.reprendre.style.visibility = "visible";
                        Pikachu.reprendre.style.display = "flex";
                        Pikachu.reprendre.style.alignItems = "center";
                        Pikachu.reprendre.style.justifyContent = "center";
                        Pikachu.potionC.style.display = "block";
                        Pikachu.potionC.style.display = "flex";
                        Pikachu.potionC.style.alignItems = "center";
                        Pikachu.potionC.style.justifyContent = "center";
                        Pikachu.fuir.style.display = "block";
                        Pikachu.fuir.style.display = "flex";
                        Pikachu.fuir.style.alignItems = "center";
                        Pikachu.fuir.style.justifyContent = "center";
                        Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                        // throw new new Error('Vous êtes déjà mort !');
                    } else {

                        random = Math.floor(Math.random() * Math.floor(10));
                        atk = Reptincel.atk += random;
                        zz = Reptincel.atk -= random;
                        tab = ['Charge', 'Couper', 'Flash', 'Combot-Griffe', 'Force-nature'];
                        tob = tab[Math.floor(Math.random() * tab.length)];
                        Reptincel.getShow.innerHTML = Reptincel.nom + ' attaque ' + tob;
                        Reptincel.getShow2.innerHTML = 'l\'attaque de ' + Reptincel.nom + ' inflige ' + atk + ' points de dégâts';
                        Pikachu.pv = Pikachu.pvBar -= atk;
                        Pikachu.getPvBarPlayer.style.width = Pikachu.pv + "%";
                        Pikachu.getPvBarPlayer.innerHTML = Pikachu.pv + ' pv';

                        if (tob == "Charge" || tob == "Flash") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }

                        if (tob == "Combot-Griffe" || tob == "Force-nature" || tob == "Couper") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT02.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT03.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }
                    }
                }, 1080);
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 230);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 750);

                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 700);
                    this.time++;
                    console.log(this.anim);

                    break;
                }
                return this.nom + ' attaque TONNERRE !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 230);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 750);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 800);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque TONNERRE !';
            }
        },

        charge: (random, atk, zz) => {
            random = Math.floor(Math.random() * Math.floor(12));
            atk = Pikachu.atk += random;
            zz = Pikachu.atk -= random;
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) > Reptincel.pv) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<center><font color='white'>MORT</font></center>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk1.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                Pikachu.next.style.display = "block";
                Pikachu.next.style.display = "flex";
                Pikachu.next.style.alignItems = "center";
                Pikachu.next.style.justifyContent = "center";
                Pikachu.reprendre.style.display = "block";
                Pikachu.reprendre.style.visibility= "hidden";

                Pikachu.potionC.style.display = "block";
                Pikachu.potionC.style.display = "flex";
                Pikachu.potionC.style.alignItems = "center";
                Pikachu.potionC.style.justifyContent = "center";
                Pikachu.fuir.style.display = "block";
                Pikachu.fuir.style.display = "flex";
                Pikachu.fuir.style.alignItems = "center";
                Pikachu.fuir.style.justifyContent = "center";
                Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                console.log('L\'adversaire est déjà mort ! ');
            } else {
                if (this.fight == true) {
                    // throw new Error('Vous attaquer déjà');

                } else if (this.fight == false) {
                    Reptincel.pv = Reptincel.pvBar -= atk;
                    this.getShow.innerHTML = this.nom + ' attaque Charge !';
                    this.getShow2.innerHTML = 'l\'attaque inflige ' + atk + ' points de dégâts';
                    this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                    this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
                }
                //IA REPONSE DANS LE COMBAT//
                setTimeout(function (random, atk, zz, tab, tob) {

                    if (Reptincel.atk + Math.floor(Math.random() * Math.floor(10)) > Pikachu.pv) {
                        Pikachu.getPvBarPlayer.style.width = "0%";
                        Pikachu.getPvBarPlayer.innerHTML = "MORT";
                        Reptincel.progress.Xp();
                        Pikachu.getPvBarPlayer.innerHTML = "<font color='white'>MORT</font>";
                        Pikachu.getShow.innerHTML = Reptincel.nom + ' vous as battu !';
                        Pikachu.getAtk1.style.display = "none";
                        Pikachu.getAtk2.style.display = "none";
                        Pikachu.getAtk3.style.display = "none";
                        Pikachu.getAtk4.style.display = "none";
                        Pikachu.next.style.display = "block";
                        Pikachu.next.style.visibility = "hidden";
                        Pikachu.next.style.visibility = "hidden";
                        Pikachu.next.style.display = "flex";
                        Pikachu.next.style.alignItems = "center";
                        Pikachu.next.style.justifyContent = "center";
                        Pikachu.reprendre.style.display = "block";
                        Pikachu.reprendre.style.visibility = "visible";
                        Pikachu.reprendre.style.display = "flex";
                        Pikachu.reprendre.style.alignItems = "center";
                        Pikachu.reprendre.style.justifyContent = "center";
                        Pikachu.potionC.style.display = "block";
                        Pikachu.potionC.style.display = "flex";
                        Pikachu.potionC.style.alignItems = "center";
                        Pikachu.potionC.style.justifyContent = "center";
                        Pikachu.fuir.style.display = "block";
                        Pikachu.fuir.style.display = "flex";
                        Pikachu.fuir.style.alignItems = "center";
                        Pikachu.fuir.style.justifyContent = "center";
                        Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                        // throw new new Error('Vous êtes déjà mort !');
                    } else {


                        random = Math.floor(Math.random() * Math.floor(10));
                        atk = Reptincel.atk += random;
                        zz = Reptincel.atk -= random;
                        tab = ['Charge', 'Couper', 'Flash', 'Combot-Griffe', 'Force-nature'];
                        tob = tab[Math.floor(Math.random() * tab.length)];
                        Reptincel.getShow.innerHTML = Reptincel.nom + ' attaque ' + tob;
                        Reptincel.getShow2.innerHTML = 'l\'attaque de ' + Reptincel.nom + ' inflige ' + atk + ' points de dégâts';
                        Pikachu.pv = Pikachu.pvBar -= atk;
                        Pikachu.getPvBarPlayer.style.width = Pikachu.pv + "%";
                        Pikachu.getPvBarPlayer.innerHTML = Pikachu.pv + ' pv';

                        if (tob == "Charge" || tob == "Flash") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }

                        if (tob == "Combot-Griffe" || tob == "Force-nature" || tob == "Couper") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT02.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT03.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }
                    }
                }, 1080);
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 220);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 520);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 620);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 720);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 780);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 820);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + 'Pikachu attaque CHARGE !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 220);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 520);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 620);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 720);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 780);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 850);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque charge!';
            }
        },

        electrocution: (random, atk, zz) => {
            random = Math.floor(Math.random() * Math.floor(15));
            atk = Pikachu.atk += random;
            zz = Pikachu.atk -= random;
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) > Reptincel.pv) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<center><font color='white'>MORT</font></center>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk1.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                Pikachu.next.style.display = "block";
                Pikachu.next.style.display = "flex";
                Pikachu.next.style.alignItems = "center";
                Pikachu.next.style.justifyContent = "center";
                Pikachu.reprendre.style.display = "block";
                Pikachu.reprendre.style.visibility= "hidden";

                Pikachu.potionC.style.display = "block";
                Pikachu.potionC.style.display = "flex";
                Pikachu.potionC.style.alignItems = "center";
                Pikachu.potionC.style.justifyContent = "center";
                Pikachu.fuir.style.display = "block";
                Pikachu.fuir.style.display = "flex";
                Pikachu.fuir.style.alignItems = "center";
                Pikachu.fuir.style.justifyContent = "center";
                Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                console.log('L\'adversaire est déjà mort ! ');
            } else {
                if (this.fight == true) {
                    // throw new Error('Vous attaquer déjà');

                } else if (this.fight == false) {
                    Reptincel.pv = Reptincel.pvBar -= atk;
                    this.getShow.innerHTML = this.nom + ' attaque Electrocution !';
                    this.getShow2.innerHTML = 'l\'attaque inflige ' + atk + ' points de dégâts';
                    this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                    this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
                }
                //IA REPONSE DANS LE COMBAT//
                setTimeout(function (random, atk, zz, tab, tob) {

                    if (Reptincel.atk + Math.floor(Math.random() * Math.floor(10)) > Pikachu.pv) {
                        Pikachu.getPvBarPlayer.style.width = "0%";
                        Pikachu.getPvBarPlayer.innerHTML = "MORT";
                        Reptincel.progress.Xp();
                        Pikachu.getPvBarPlayer.innerHTML = "<font color='white'>MORT</font>";
                        Pikachu.getShow.innerHTML = Reptincel.nom + ' vous as battu !';
                        Pikachu.getAtk1.style.display = "none";
                        Pikachu.getAtk2.style.display = "none";
                        Pikachu.getAtk3.style.display = "none";
                        Pikachu.getAtk4.style.display = "none";
                        Pikachu.next.style.display = "block";
                        Pikachu.next.style.visibility = "hidden";
                        Pikachu.next.style.display = "flex";
                        Pikachu.next.style.alignItems = "center";
                        Pikachu.next.style.justifyContent = "center";
                        Pikachu.reprendre.style.display = "block";
                        Pikachu.reprendre.style.visibility = "visible";
                        Pikachu.reprendre.style.display = "flex";
                        Pikachu.reprendre.style.alignItems = "center";
                        Pikachu.reprendre.style.justifyContent = "center";
                        Pikachu.potionC.style.display = "block";
                        Pikachu.potionC.style.display = "flex";
                        Pikachu.potionC.style.alignItems = "center";
                        Pikachu.potionC.style.justifyContent = "center";
                        Pikachu.fuir.style.display = "block";
                        Pikachu.fuir.style.display = "flex";
                        Pikachu.fuir.style.alignItems = "center";
                        Pikachu.fuir.style.justifyContent = "center";
                        Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                        // throw new new Error('Vous êtes déjà mort !');
                    } else {


                        random = Math.floor(Math.random() * Math.floor(10));
                        atk = Reptincel.atk += random;
                        zz = Reptincel.atk -= random;
                        tab = ['Charge', 'Couper', 'Flash', 'Combot-Griffe', 'Force-nature'];
                        tob = tab[Math.floor(Math.random() * tab.length)];
                        Reptincel.getShow.innerHTML = Reptincel.nom + ' attaque ' + tob;
                        Reptincel.getShow2.innerHTML = 'l\'attaque de ' + Reptincel.nom + ' inflige ' + atk + ' points de dégâts';
                        Pikachu.pv = Pikachu.pvBar -= atk;
                        Pikachu.getPvBarPlayer.style.width = Pikachu.pv + "%";
                        Pikachu.getPvBarPlayer.innerHTML = Pikachu.pv + ' pv';

                        if (tob == "Charge" || tob == "Flash") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }

                        if (tob == "Combot-Griffe" || tob == "Force-nature" || tob == "Couper") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT02.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT03.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }
                    }
                }, 1080);
            }



            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 700);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + ' attaque ELECTROCUTION !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 150);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 750);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 800);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque ELECTROCUTION !';
            }
        },

        viveAtk: (random, atk, zz) => {
            random = Math.floor(Math.random() * Math.floor(9));
            atk = Pikachu.atk += random;
            zz = Pikachu.atk -= random;
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) > Reptincel.pv) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<center><font color='white'>MORT</font></center>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk1.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                Pikachu.next.style.display = "block";
                Pikachu.next.style.display = "flex";
                Pikachu.next.style.alignItems = "center";
                Pikachu.next.style.justifyContent = "center";
                Pikachu.reprendre.style.display = "block";
                Pikachu.reprendre.style.visibility= "hidden";

                Pikachu.potionC.style.display = "block";
                Pikachu.potionC.style.display = "flex";
                Pikachu.potionC.style.alignItems = "center";
                Pikachu.potionC.style.justifyContent = "center";
                Pikachu.fuir.style.display = "block";
                Pikachu.fuir.style.display = "flex";
                Pikachu.fuir.style.alignItems = "center";
                Pikachu.fuir.style.justifyContent = "center";
                Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                console.log('L\'adversaire est déjà mort ! ');
            } else {
                if (this.fight == true) {
                    // throw new Error('Vous attaquer déjà');

                } else if (this.fight == false) {
                    Reptincel.pv = Reptincel.pvBar -= atk;
                    this.getShow.innerHTML = this.nom + ' attaque Vive attaque !';
                    this.getShow2.innerHTML = 'l\'attaque inflige ' + atk + ' points de dégâts';
                    this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                    this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
                }
                //IA REPONSE DANS LE COMBAT//
                setTimeout(function (random, atk, zz, tab, tob) {

                    if (Reptincel.atk + Math.floor(Math.random() * Math.floor(10)) > Pikachu.pv) {
                        Pikachu.getPvBarPlayer.style.width = "0%";
                        Pikachu.getPvBarPlayer.innerHTML = "MORT";
                        Reptincel.progress.Xp();
                        Pikachu.getPvBarPlayer.innerHTML = "<font color='white'>MORT</font>";
                        Pikachu.getShow.innerHTML = Reptincel.nom + ' vous as battu !';
                        Pikachu.getAtk1.style.display = "none";
                        Pikachu.getAtk2.style.display = "none";
                        Pikachu.getAtk3.style.display = "none";
                        Pikachu.getAtk4.style.display = "none";
                        Pikachu.next.style.display = "block";
                        Pikachu.next.style.visibility = "hidden";
                        Pikachu.next.style.display = "flex";
                        Pikachu.next.style.alignItems = "center";
                        Pikachu.next.style.justifyContent = "center";
                        Pikachu.reprendre.style.display = "block";
                        Pikachu.reprendre.style.visibility = "visible";
                        Pikachu.reprendre.style.display = "flex";
                        Pikachu.reprendre.style.alignItems = "center";
                        Pikachu.reprendre.style.justifyContent = "center";
                        Pikachu.potionC.style.display = "block";
                        Pikachu.potionC.style.display = "flex";
                        Pikachu.potionC.style.alignItems = "center";
                        Pikachu.potionC.style.justifyContent = "center";
                        Pikachu.fuir.style.display = "block";
                        Pikachu.fuir.style.display = "flex";
                        Pikachu.fuir.style.alignItems = "center";
                        Pikachu.fuir.style.justifyContent = "center";
                        Pikachu.potionC.innerHTML = 'Potion('+Pikachu.potion+')';
                        // throw new new Error('Vous êtes déjà mort !');
                    } else {


                        random = Math.floor(Math.random() * Math.floor(10));
                        atk = Reptincel.atk += random;
                        zz = Reptincel.atk -= random;
                        tab = ['Charge', 'Couper', 'Flash', 'Combot-Griffe', 'Force-nature'];
                        tob = tab[Math.floor(Math.random() * tab.length)];
                        Reptincel.getShow.innerHTML = Reptincel.nom + ' attaque ' + tob;
                        Reptincel.getShow2.innerHTML = 'l\'attaque de ' + Reptincel.nom + ' inflige ' + atk + ' points de dégâts';
                        Pikachu.pv = Pikachu.pvBar -= atk;
                        Pikachu.getPvBarPlayer.style.width = Pikachu.pv + "%";
                        Pikachu.getPvBarPlayer.innerHTML = Pikachu.pv + ' pv';

                        if (tob == "Charge" || tob == "Flash") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge01.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge02.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="elect/charge03.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }

                        if (tob == "Combot-Griffe" || tob == "Force-nature" || tob == "Couper") {

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'block';
                            }, 50);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 100);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT01.png">';
                            }, 120);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT02.png">';
                            }, 180);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT03.png">';
                            }, 210);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 250);
                            setTimeout(function () {
                                Pikachu.getAnm.innerHTML = '<img src="atk/couper/CUT04.png">';
                            }, 300);

                            setTimeout(function () {
                                Pikachu.getAnm.style.display = 'none';
                            }, 420);
                            return this.nom + ' attaque CHARGE !';
                        }
                    }
                }, 1080);
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 220);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 520);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 620);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 720);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 780);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 820);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + 'Pikachu attaque VIVE ATTACK !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 220);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 520);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 620);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 720);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 780);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 850);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque VIVE ATTACK !';
            }
        },

    }

    feu = {
        flamme: () => this.atk + Math.floor(Math.random() * Math.floor(15)),
        embrasement: () => this.atk + Math.floor(Math.random() * Math.floor(10)),
        brûler: () => this.atk + Math.floor(Math.random() * Math.floor(7)),
        lanceFlamme: () => this.atk + Math.floor(Math.random() * Math.floor(20)),
    }

    combat = {
        charge: () => this.atk + Math.floor(Math.random() * Math.floor(6)),
        couper: () => this.atk + Math.floor(Math.random() * Math.floor(10)),
        briser: () => this.atk + Math.floor(Math.random() * Math.floor(12)),
        poing: () => this.atk + Math.floor(Math.random() * Math.floor(5)),
    }

    cheat = {
        deblock: () => {
            if (this.level >= 100) {
                this.level++;
                this.progress.Stat();
                this.getLevelPlayer.innerHTML = this.level;
                this.getPvPlayer.innerHTML = this.pv;
                this.getManaPlayer.innerHTML = this.mana;
                this.getShow.innerHTML = 'Votre Pikachu passe au niveau ' + this.level;
                this.getShow2.innerHTML = 'Votre Pikachu monte à ' + this.pv + ' points de vie et ' + this.atk + ' points d attaques';
                return 'Mode triche activé, vous surpasser le niveau 100, merci loic xD';
            }

        }
    }

    help = {
        cmd: () => {
            console.log('Panel de commande Administrateur !');
            console.log('>Up level : NomDuPokemon.progress.Up();');
            console.log('>Gain d xp : NomDuPokemon.progress.Xp();');
            console.log('>Gain de stats : NomDuPokemon.progress.Stats();');
            console.log('>Debloquer le lv 100++(Vous devez déja etre niveau 100 pour l utiliser, commande à répéter en boucle): NomDuPokemon.cheat.deblock(); ');
            return 'Visuel des commandes admins';
        }
    }

    
    progress = {
        stats: () => this.none + Math.floor(Math.random() * Math.floor(5)),

        //FUNCTION POUR AUGMENTER SON LVL//
        Up: () => {
            //EVOLUTION TYPIQUE//
            if (Pikachu.level >= 18) {
                Pikachu.progress.Stat();
                Pikachu.progress.Stat();
                Pikachu.progress.Stat();
                Pikachu.getDomIdPlayer.innerHTML = "<img src='pokemon/Raichu.gif'></img>";
                Pikachu.nom = 'Raichu';
                Pikachu.getNamePlayer.innerHTML = Pikachu.nom;
                Pikachu.getShow.innerHTML = 'Votre Pikachu évolue en Raichu !';
                Pikachu.getShow2.innerHTML = 'Votre Raichu gagne des stats en masse !';

            }

            //LIMITE DE LEVEL//
            if (this.level >= 100) {
                this.level = 100;
                Pikachu.getShow.innerHTML = 'Vous avez atteint le niveau maximum !';
                return "Vous avez atteint le niveau maximum !";

            }

            //SI LA LIMITE N EST PAS ATTEINTE ALORS//
            else {
                Pikachu.save();
                this.getShow.innerHTML = 'Votre Pikachu gagne ' + this.level + ' niveau';
                this.pv = this.savPv;
                this.pvBar = this.savPv;
                console.log('Vous sauvegarder vos PV');
                this.progress.Stat();
                this.level++;
                this.pvBar = this.pv;
                Pikachu.r3++;
                Pikachu.r3++;
                this.getLevelPlayer.innerHTML = 'Niveau ' + this.level;
                this.getPvPlayer.innerHTML = this.pv + ' pv';
                this.getManaPlayer.innerHTML = this.mana + ' mana';
                console.log('Votre ' + this.nom + ' monte au lvl ' + this.level + '!');
                
            
                return ' Prise de niveau effectué !';
            }
        },

        //FONCTION PERMETTANT D AUGMENTER LES STATS VIA L AUGMENTATION DU NIVEAU//
        Stat: () => {
            this.savPv += this.progress.stats();
            this.savPv += this.progress.stats();

            this.pvBar = this.savPv;
            this.pv = this.savPv;
            console.log('Vous possez maintenant ' + this.pvBar + ' points de vie !');
            this.atk += this.progress.stats();
            console.log('Vous possez maintenant ' + this.atk + ' points d\'attaque !');
            this.mana += this.progress.stats();
            console.log('Vous possez maintenant ' + this.mana + ' points de mana !');
            console.log('SAV BAR PV => ' + this.savPv + ' !!!!!!');
            this.getPvBarPlayer.innerHTML = this.pv + ' pv';
            this.getManaPlayer.innerHTML = this.mana + ' mana';
            this.getShow2.innerHTML = 'Votre ' + this.nom + ' progresse jusqu\'a ' + this.pv + ' points de vie et ' + this.atk + ' points d attaques';
            Pikachu.getPvBarPlayer.style.width = Pikachu.pv + "%";
            console.log('Votre ' + this.nom + ' monte à ' + this.pv + ' pv !');
            console.log('Votre ' + this.nom + ' monte à ' + this.atk + ' d attaque !');
            return ' Prise de pv effectué !';
        },

        Xp: () => {
            this.winxp++;
            this.exp += this.winxp += Math.floor(Math.random() * Math.floor(5));
            this.savXp = this.exp;
            this.getShow2.innerHTML = 'Vous avez gagné ' + this.winxp + ' points d\'xp !';
            this.getExp.innerHTML = '<font color="#1abc9c">' + this.exp + ' / ' + Pikachu.r3 + ' xp</font>';
            console.log('Votre ' + this.nom + ' gagne ' + this.winxp + ' points d experiences');
            if (this.exp > this.level *3 ) {
                this.progress.Up();
                this.progress.Up();
                this.exp = 0;
                this.savXp = 0;
                this.winxp = 0;
                this.getExp.innerHTML = '<font color="#1abc9c">' + this.exp + ' / ' + Pikachu.r3 + ' xp</font>';
            }
            else if (this.exp >= this.level * 2) {
                this.progress.Up();
                this.exp = 0;
                this.savXp = 0;
                this.winxp = 0;
                this.getExp.innerHTML = '<font color="#1abc9c">' + this.exp + ' / ' + Pikachu.r3 + ' xp</font>';
            }


            return ' Prise d\'xp effectué ! ';
        }
    };


























}; //Fermeture de la class Pokemon//

//Template Pokémon//
class Ennemy {

    //Stats//
    nom = null;
    type = null;
    level = 3;
    exp = 1;
    pv = 100;
    mana = 27;
    atk = 2;
    sprite = "<img src='pokemon/SalamecheBack.gif' width='280px'></img>";
    posH = '120';
    def = 0;
    none = null;
    anim = 1;
    dps = null;
    time = 0;
    dieP = false;
    pvBar = 100;
    rest = this.level + 2 + this.exp;

    //INTERFACE DOM PLAYER
    getAtk = document.getElementById('atk1');
    getAtk2 = document.getElementById('atk2');
    getAtk3 = document.getElementById('atk3');
    getAtk4 = document.getElementById('atk4');
    getAtk5 = document.getElementById('atk5');
    full = document.getElementById('full');
    getExp = document.getElementById('expPlayer');
    showBtnMap = document.getElementById('showBtnMap');
    getAnim = document.getElementById('anim');
    getNamePlayer = document.getElementById('namePlay');
    getLevelPlayer = document.getElementById('levelPlayer');
    getPvPlayer = document.getElementById('healtPlayer');
    getManaPlayer = document.getElementById('staminaPlayer');
    getDomIdPlayer = document.getElementById('playerPokemon');
    getShow = document.getElementById('showTxt');
    getShow2 = document.getElementById('showTxt2');
    //INTERFACE DOM ENNEMY
    getNameEnnemy = document.getElementById('nameEnnemy');
    getLevelEnnemy = document.getElementById('levelEnnemy');
    getPvEnnemy = document.getElementById('healtEnnemy');
    getPvBarEnnemy = document.getElementById('healtBar');
    getManaEnnemy = document.getElementById('staminaEnnemy');
    getDomIdEnnemy = document.getElementById('ennemyPokemon');

    //Constructor//
    constructor(nom, type, level, exp, pv, mana, atk, sprite, posH, def, pvBar) {
        this.nom = nom;
        this.type = type;
        this.level = level;
        this.exp = exp;
        this.pv = pv;
        this.mana = mana;
        this.atk = atk;
        this.sprite = sprite;
        this.posH = posH;
        this.def = def;
        this.pvBar = pvBar;
    }

    healt = {
        potion: () => {
            this.pv = 100;
            this.mana = 100;
            this.pvBar = 100;
            this.getPvBarEnnemy.style.width = this.pvBar + "%";
            this.getPvBarEnnemy.innerHTML = this.pv;
            console.log('okokok');
            return "Régénération effectué";
        }
    }

    //Variante Type/attack Pokémon//
    eau = {
        bulle: () => this.atk + Math.floor(Math.random() * Math.floor(8)),
        rayon: () => this.atk + Math.floor(Math.random() * Math.floor(14)),
        lanceBulle: () => this.atk + Math.floor(Math.random() * Math.floor(13)),
        canonEau: () => this.atk + Math.floor(Math.random() * Math.floor(20)),
    }

    elec = {
        tonnerre: (atk) => {
            atk = this.atk = +Math.floor(Math.random() * Math.floor(17))

            if (this.atk + Math.floor(Math.random() * Math.floor(10)) >= 5 && Reptincel.pv <= 25) {
                this.getPvBarEnnemy.style.width = "0%";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<font color='white'>MORT</font>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                Pikachu.full.style.display = "block";
                Pikachu.full1.style.display = "none";
                Pikachu.full2.style.display = "block";
                Pikachu.full2.innerHTML = ' <img src="items/potion.png">Potion(' + Pikachu.potion + ')';

                throw new Error('L adversaire est déjà mort');

            } else {
                Reptincel.pv = Reptincel.pvBar -= atk;
                this.getShow.innerHTML = this.nom + ' attaque Tonnerre !';
                this.getShow2.innerHTML = 'l\'attaque inflige ' + this.atk + ' points de dégâts';
                this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 230);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 750);

                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 700);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + ' attaque TONNERRE !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder02.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 230);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder03.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder04.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/thunder05.png">';
                    }, 750);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 800);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque TONNERRE !';
            }
        },

        charge: (atk) => {
            atk = this.atk = +Math.floor(Math.random() * Math.floor(17))
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) >= 5 && Reptincel.pv <= 25) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<font color='white'>MORT</font>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                this.full.style.display = "block";
                this.full1.style.display = "block";
                Pikachu.full2.innerHTML = ' <img src="items/potion.png">Potion(' + Pikachu.potion + ')';
                throw new Error('L adversaire est déjà mort');

            } else {
                Reptincel.pv = Reptincel.pvBar -= atk;
                this.getShow.innerHTML = this.nom + ' attaque Charge !';
                this.getShow2.innerHTML = 'l\'attaque inflige ' + this.atk + ' points de dégâts';
                this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 300);

                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 420);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + ' attaque CHARGE !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge01.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge02.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/charge03.png">';
                    }, 300);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 420);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque CHARGE !';
            }
        },
        electrocution: (atk) => {
            atk = this.atk + Math.floor(Math.random() * Math.floor(16))
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) >= 5 && Reptincel.pv <= 25) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<font color='white'>MORT</font>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                Pikachu.full.style.display = "block";
                Pikachu.full1.style.display = "none";
                Pikachu.full2.style.display = "block";
                Pikachu.full2.innerHTML = ' <img src="items/potion.png">Potion(' + Pikachu.potion + ')';

                throw new Error('L adversaire est déjà mort');
            } else {
                Reptincel.pv = Reptincel.pvBar -= atk;
                this.getShow.innerHTML = this.nom + ' attaque Electrocution !';
                this.getShow2.innerHTML = 'l\'attaque inflige ' + this.atk + ' points de dégâts';
                this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 120);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 180);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 210);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 700);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + ' attaque ELECTROCUTION !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 150);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/1.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/2.png">';
                    }, 550);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/3.png">';
                    }, 650);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/4.png">';
                    }, 750);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 800);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque ELECTROCUTION !';
            }
        },

        viveAtk: (atk) => {
            atk = this.atk + Math.floor(Math.random() * Math.floor(10))
            if (this.atk + Math.floor(Math.random() * Math.floor(10)) >= 5 && Reptincel.pv <= 25) {
                this.getPvBarEnnemy.style.width = "0%";
                this.getPvBarEnnemy.innerHTML = "MORT";
                this.progress.Xp();
                this.getPvBarEnnemy.innerHTML = "<font color='white'>MORT</font>";
                this.getShow.innerHTML = 'Vous avez battu ' + Reptincel.nom + ' !';
                this.getAtk.style.display = "none";
                this.getAtk2.style.display = "none";
                this.getAtk3.style.display = "none";
                this.getAtk4.style.display = "none";
                this.full.style.display = "block";
                Pikachu.full1.style.display = "none";
                Pikachu.full2.innerHTML = ' <img src="items/potion.png">Potion(' + Pikachu.potion + ')';

                throw new Error('L adversaire est déjà mort');

            } else {
                Reptincel.pv = Reptincel.pvBar -= atk;
                this.getShow.innerHTML = this.nom + ' lance Vive Attaque !';
                this.getShow2.innerHTML = 'l\'attaque inflige ' + this.atk + ' points de dégâts';
                this.getPvBarEnnemy.style.width = Reptincel.pvBar + "%";
                this.getPvBarEnnemy.innerHTML = Reptincel.pv + ' pv';
            }

            if (this.time === 0) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 220);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 520);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 620);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 720);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 780);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 820);
                    this.time++;
                    console.log(this.anim);
                    break;
                }
                return this.nom + 'Pikachu attaque VIVE ATTACK !';
            } else if (this.time = 1) {
                for (this.anim; this.anim <= 10; this.anim++) {
                    setTimeout(function () {
                        this.getAnim.style.display = 'block';
                    }, 50);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 100);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 220);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 250);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 350);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 450);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 520);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive01.png">';
                    }, 620);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive02.png">';
                    }, 720);
                    setTimeout(function () {
                        this.getAnim.innerHTML = '<img src="elect/vive03.png">';
                    }, 780);
                    setTimeout(function () {
                        this.getAnim.style.display = 'none';
                    }, 850);
                    this.time = 0;
                    console.log(this.time);
                    break;
                }
                return this.nom + ' attaque VIVE ATTACK !';
            }
        },

    }

    feu = {
        flamme: () => this.atk + Math.floor(Math.random() * Math.floor(15)),
        embrasement: () => this.atk + Math.floor(Math.random() * Math.floor(10)),
        brûler: () => this.atk + Math.floor(Math.random() * Math.floor(7)),
        lanceFlamme: () => this.atk + Math.floor(Math.random() * Math.floor(20)),
    }

    combat = {
        charge: () => this.atk + Math.floor(Math.random() * Math.floor(6)),
        couper: () => this.atk + Math.floor(Math.random() * Math.floor(10)),
        briser: () => this.atk + Math.floor(Math.random() * Math.floor(12)),
        poing: () => this.atk + Math.floor(Math.random() * Math.floor(5)),
    }

    cheat = {
        deblock: () => {
            if (this.level >= 100) {
                this.level++;
                this.progress.Stat();
                this.getLevelPlayer.innerHTML = this.level;
                this.getPvPlayer.innerHTML = this.pv;
                this.getManaPlayer.innerHTML = this.mana;
                this.getShow.innerHTML = 'Votre Pikachu passe au niveau ' + this.level;
                this.getShow2.innerHTML = 'Votre Pikachu gagne ' + this.pv + ' points de vie et ' + this.atk + ' points d attaques';
                return 'Mode triche activé, vous surpasser le niveau 100, merci loic xD';
            }

        }
    }

    help = {
        cmd: () => {
            console.log('Panel de commande Administrateur !');
            console.log('>Up level : NomDuPokemon.progress.Up();');
            console.log('>Gain d xp : NomDuPokemon.progress.Xp();');
            console.log('>Gain de stats : NomDuPokemon.progress.Stats();');
            console.log('>Debloquer le lv 100++(Vous devez déja etre niveau 100 pour l utiliser, commande à répéter en boucle): NomDuPokemon.cheat.deblock(); ');
            return 'Visuel des commandes admins';
        }
    }

    progress = {
        stats: () => Reptincel.none + Math.floor(Math.random() * Math.floor(6)),
        statsAtk: () => Reptincel.none + Math.floor(Math.random() * Math.floor(8)),

        //Augmentation de Level//
        Up: () => {
            if (Reptincel.level >= 100) {
                Reptincel.level = 100;
                return Reptincel.nom + " à atteint le level max !";

            } else {
                Reptincel.progress.Stat();
                Reptincel.level++;
                this.getLevelEnnemy.innerHTML = 'Niveau ' + Reptincel.level;
                console.log('Votre ' + Reptincel.nom + ' monte au lvl ' + Reptincel.level + '!');
                 //Bouton de sauvegarde contenant l'Ajax
                return ' Prise de niveau effectué !';
                
            }
        },

        Stat: () => {
            Reptincel.pv += Reptincel.progress.stats();
            Reptincel.pv += Reptincel.progress.statsAtk();
            Reptincel.pvBar = Reptincel.pv;
            Reptincel.atk += Reptincel.progress.statsAtk();



            Reptincel.mana += Reptincel.progress.stats();
            this.getPvBarEnnemy.innerHTML = Reptincel.pv + 'pv';
            this.getManaEnnemy.innerHTML = Reptincel.mana + ' mana';
            console.log('Votre ' + this.nom + ' monte à ' + this.pv + ' pv !');
            console.log('Votre ' + this.nom + ' monte à ' + this.atk + ' d attaque !');
            return ' Prise de pv effectué !';
        },

        Xp: () => {
            this.exp++;
            this.getShow2.innerHTML = 'Vous avez ' + this.exp + ' points d\'xp !';
            console.log('Votre ' + this.nom + ' gagne ' + this.exp + ' points d experiences');
            if (this.exp >= this.level * 3) {
                this.progress.Stat();
                this.progress.Up();
                this.exp = 0;
            }
            return ' Prise d\'xp effectué ! ';
        }
    };

}; //Fermeture de la class Pokemon//