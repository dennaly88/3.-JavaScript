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

let socket  = new WebSocket('https://localhost:8080');

let mensajeingresado = document.getElementById('mensajeIngresado');
let enviar = document.getElementById('botonenviar');

function mostrarMensajes(contenido) {


    let contenedorMensajes = document.getElementById('contenedorMensajesRecibidos');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);
    
}

botonenviar.onclick = function() {

    let mensaje =mensajeingresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
    
}

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarMensajes(mensaje);

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