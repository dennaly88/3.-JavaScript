
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




/******************************************************************************************/
/********************** SWITCH CON  JAVASCRIPT *******************************************/
/****************************************************************************************/

document.write('<br>');
document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('|-----------------  SWITCH CON  JAVASCRIPT ----------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('|-----------------------------------------------------------------------------------------------------------------------------------------------|');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('================================================================================')



document.write('================================================================================')
document.write('<br>');
document.write('<br>');



let num1 , num2, signo, res; 

num1 = prompt("INGRESE EL 1 NUMERO");
num2 = prompt("INGRESE EL 2 NUMERO");
signo = prompt("INGRESE EL SIGNO DE LA OPERACIÓN ");



switch (signo) {
    
        case '+':
        res= suma(parseInt(num1), parseInt(num2));
        break;
        case '-':
        res= resta(parseInt(num1), parseInt(num2));
        break;
        case '*':
        res= multiplicacion(parseInt(num1), parseInt(num2));
        break;
        case '/':
        res= division(parseInt(num1), parseInt(num2));
        break;
        default:
        document.write('NO ES UN SIGNO VALIDO');
        break;
}

document.write('<br>');
document.write('<br>');

function suma(a,b) {
    return a+b;
    
}
function resta(a,b) {
    return a-b;
    
}function multiplicacion(a,b) {
    return a*b;
    
}function division(a,b) {
    return a/b;
}

document.write('EL RESULTADO ES ');
document.write('<br>');
document.write(res);






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
