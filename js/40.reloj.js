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

let elementotextoReloj = document.getElementById("textoreloj");





function comenzarReloj(){

     setInterval(tictac, 1000);


}


function tictac(){

    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = String(tiempoActual.getSeconds()).padStart(2, "0");
    let textoHora = hora + ':' + minutos + ':' + segundos;
    elementotextoReloj.textContent=textoHora;
    
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