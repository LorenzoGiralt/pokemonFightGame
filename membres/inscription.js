openClose = document.getElementById('openClose');
openCloseRight = document.getElementById('openCloseRight');
register = document.getElementById('register');
signIn = document.getElementById('signIn');
formAll = document.getElementById('form_all');
formA = document.getElementById('formA');
function onloadMenu() {
    //Initialisation des form au chargement//
    register.style.height ="0%";
    register.style.paddingTop ="0%";
    openClose.style.width="200px";

}
openClose.addEventListener('click', function () {
    if (openClose.style.width == "200px") {
        console.log('ok');
        openClose.style.width = "199px";
        register.style.height ="50vh";
        register.style.paddingTop ="25px";

    } else {
        onloadMenu();
    }
})

function onloadMenuRight() {
    //Initialisation des form au chargement//
    signIn.style.height ="0%";
    signIn.style.paddingTop ="0%";
    openCloseRight.style.width="200px";

}
openCloseRight.addEventListener('click', function () {
    if (openCloseRight.style.width == "200px") {
        console.log('ok');
        openCloseRight.style.width = "199px";
        signIn.style.height ="50vh";
        signIn.style.paddingTop ="25px";

    } else {
        onloadMenuRight();
    }
})