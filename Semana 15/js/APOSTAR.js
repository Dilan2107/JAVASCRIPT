function apostar(){
    //Calcular el numero aleatorio del 1 al 10
    var a=Math.round(Math.random()*10);//Aleatorio del 1 al 10
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    //Validar si acerto el numero
    if (a==b){
        document.getElementById("salida").value="GANO APUESTA";
    }else{
        document.getElementById("salida").value="PERDIO APUESTA";
    }
}
//LIMPIAR
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
    }