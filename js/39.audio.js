/*<!-----------------------------------------------------------------------------------------------------------
|------------------------------------------------------------------------------------------------------------
|  NOMBRE    :  DANNY JOSE JIMENEZ GUTIERREZ
|  CEDULA    :  16.029.567
|  TELEFONO  :  0424-281-44-55
|  CORREO    :  DENNALY88@GMAIL.COM
|------------------------------------------------------------------------------------------------------------
|  CURSO DE JAVASCRIPT
|  DESARROLLO WEB
|  TITULO INGENIERO EN SISTEMAS
|  CUA 2024
----------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------*/

let elementoSegundo = document.getElementById("tiempoelegido").value;
let elementotextoAlarma = document.getElementById("textoalarma");
let elementoSonidoAlarma = document.getElementById("audioAlarma");


function comenzarTiempo(){

   setTimeout(tiempocumplido, 3000*elementoSegundo);




}


function tiempocumplido() {

  elementotextoAlarma.textContent = "Encendido...!";
  elementotextoAlarma.style.color = "green";
  elementoSonidoAlarma.play();

  
}







/*<!-----------------------------------------------------------------------------------------------------------
|------------------------------------------------------------------------------------------------------------
|  NOMBRE    :  DANNY JOSE JIMENEZ GUTIERREZ
|  CEDULA    :  16.029.567
|  TELEFONO  :  0424-281-44-55
|  CORREO    :  DENNALY88@GMAIL.COM
|------------------------------------------------------------------------------------------------------------
|  CURSO DE JAVASCRIPT
|  DESARROLLO WEB
|  TITULO INGENIERO EN SISTEMAS
|  CUA 2024
----------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------*/