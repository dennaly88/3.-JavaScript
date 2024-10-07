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


let audio =document.getElementById('audio');
let listacanciones = document.getElementById('listaCanciones');


listacanciones.addEventListener('change', cambiarCancion);


function cambiarCancion() {
    let cancionElegida = listacanciones.value;
    audio.src = cancionElegida;
    audio.play();
    let evento = new CustomEvent('CambioDeCancion');
    audio.dispatchEvent(evento);

}

audio.addEventListener('CambioDeCancion' , mostrarCancion);

function mostrarCancion() {

    console.log('Cancion actual: '+ listacanciones.value);


    
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