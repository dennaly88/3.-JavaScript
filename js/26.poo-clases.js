
/*<!---------------------------------------------------------------------------------------------------------|
|------------------------------------------------------------------------------------------------------------|
| NOMBRE    :  DANNY JOSE JIMENEZ GUTIERREZ                                                                  |
| CEDULA    :  16.029.567                                                                                    |
| TELEFONO  :  0424-281-44-55                                                                                |
| CORREO    :  DENNALY88@GMAIL.COM                                                                           |
|------------------------------------------------------------------------------------------------------------|
|  CURSO    : JAVASCRIPT                                                                                     |
|  DESARROLLADOR WEB                                                                                         |
|  MIRANDA , CUA  2024                                                                                       |
-------------------------------------------------------------------------------------------------------------|
------------------------------------------------------------------------------------------------------------>*/


document.write('<br>');
document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('|-----------------  PROGRAMACION ORIENTADA A OBJETO , CLASES EN JAVASCRIPT -------------------------------------------------------------------|');
document.write('<br>');
document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('<br>');



class Persona{

    nombre = "Danny";
    apellido= "Jimenez";
    edad= 40;
    sexo= "Masculino";
    direccion= "Cua Castillo";
    telefono= "04242814455";
    correo= "dennaly88@gmail.com";
    carrera="Desarrollador dev";
    posgrado= ['Backend',  'Frontend', 'FullStack'];


   especialidad(){


    return " Desarrollador web en Backend , Frontend y FullStack";

   }
  
trabajo(){

    return "Como Fullstack en Microsofts y  Google";



}
}



const programador1 = new Persona();
const programador2 = new Persona();




document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('INFORMACION DEL  PROGRAMADOR 1 ');
document.write('<br>');
document.write('<br>');

document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
    
document.write('Nombre:  ' + programador1.nombre+' '+programador1.apellido );
document.write('<br>');
document.write(programador1.especialidad());
document.write('<br>');
document.write('Trabaja en :  ' +programador1.trabajo());

document.write('<br>');
document.write('<br>');
document.write('***********************************************************************************');
document.write('<br>');
document.write('<br>');


document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('INFORMACION DEL  PROGRAMADOR 2 ');
document.write('<br>');
document.write('<br>');

document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
    
document.write(programador2.especialidad());
document.write('<br>');
document.write('Trabaja en :  ' +programador2.trabajo());

document.write('<br>');
document.write('<br>');
document.write('***********************************************************************************');
document.write('<br>');
document.write('<br>');





/*<!---------------------------------------------------------------------------------------------------------|
|------------------------------------------------------------------------------------------------------------|
| NOMBRE    :  DANNY JOSE JIMENEZ GUTIERREZ                                                                  |
| CEDULA    :  16.029.567                                                                                    |
| TELEFONO  :  0424-281-44-55                                                                                |
| CORREO    :  DENNALY88@GMAIL.COM                                                                           |
|------------------------------------------------------------------------------------------------------------|
|  CURSO    : JAVASCRIPT                                                                                     |
|  DESARROLLADOR WEB                                                                                         |
|  MIRANDA , CUA  2024                                                                                       |
-------------------------------------------------------------------------------------------------------------|
------------------------------------------------------------------------------------------------------------>*/



        

      
