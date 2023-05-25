function poneMenu(){
    document.getElementById("mainMenu").style.width="480px"; //VISTA CELULAR
    document.getElementById("mainMenu").style.display="flex"; //VISTA CELULAR
    document.getElementById("mainMenu").style.height="1000px"; //VISTA CELULAR
    document.getElementById("openmenu").style.display="none"; //VISTA CELULAR
}
function poneMenu(){
    document.getElementById("mainMenu").style.width="0px"; //CERRAR VISTA CELULAR
    document.getElementById("mainMenu").style.transition="0.9s all"; //CERRAR VISTA CELULAR
    window.location.reload(); //ASEMEJA AL VLVER A CARAGAR LA PAGINA WEB -F5-
}
