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


let div1 = document.getElementById("accion1");

let enlace= document.getElementById('enlace');


function mostrarMensaje(event) {

    alert(event.currentTarget);
    
}



function bloqueo(event) {

    event.preventDefault();

    alert('ENLACE NO ESTA ACTUALIZADO');
    
}
enlace.addEventListener('click', bloqueo);



div1.addEventListener('click',mostrarMensaje);









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