openClose = document.getElementById('openClose');
containerMenu = document.getElementById('containerMenu');
containerIcone = document.getElementById('containerIcones');
containerIconeRight = document.getElementById('containerIconesRight');
containerMenuBottom = document.getElementById('containerMenuBottom');
containerMenuRight = document.getElementById('containerMenuRight');

function onloadMenu() {
    //Bouton de fermeture de la nav de gauche//
    openClose.style.width = "12.5%";
    openClose.style.color = "white";
    openClose.style.backgroundColor = "rgb(99, 191, 214)";
    openClose.style.textShadow = "0px 1px black";
    openClose.innerHTML = "FERMER";
    //Initialisation des menu au chargement//
    containerMenu.style.width = "12.5%";
    containerIcones.style.width = "90%";
    containerIconesRight.style.width = "90%";
    containerMenuBottom.style.height = "15vh";
    containerMenuRight.style.height = "84.7vh";
}
openClose.addEventListener('click', function () {
    if (openClose.style.width == "12.5%") {
        console.log('ok');
        openClose.innerHTML = "OUVRIR";
        openClose.style.backgroundColor = "rgba(160, 37, 37, 0.808)";
        openClose.style.width = "6.2%";
        containerMenu.style.width = "0%";
        containerIcones.style.width = "0%";
        containerIconesRight.style.width = "0%";
        containerMenuBottom.style.height = "0%";
        containerMenuRight.style.height = "0%";
    } else {
        onloadMenu();
    }
})