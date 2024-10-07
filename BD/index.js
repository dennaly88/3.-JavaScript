const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

var mysql = require('mysql');
var connection = mysql.createConnection({

      host: 'localhost',
      user: 'danny',
      password: 'Danny16029567*',
      database:'servi-red'

});

connection.connect();

connection.query('insert into unidad values (18,"prueba", "pr") ', function (error, resultado) {
    
     if(error)throw error;
     console.log(resultado)

});


connection.query('select * from unidad', function(error,filas){
    if(error)throw error;
    console.log(filas)

});



connection.query('update unidad set nombre="prueba2" where id= 9 ', function (error, actualizar) {
    

    if(error)throw error;
    console.log(actualizar)


});





connection.query('delete from unidad where id = 3 ', function (error, eliminar){

    if(error)throw error;
    console.log(eliminar)


} );
connection.query('select * from unidad', function(error,filas){
    if(error)throw error;
    console.log(filas)

});




connection.end();


