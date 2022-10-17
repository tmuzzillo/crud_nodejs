//Invocamos libreria express
const express = require('express');
const app = express();

//Seteamos motor de plantillas
app.set('view engine', 'ejs');

//definimos como vamos a obtener los datos de las plantillas
app.use(express.urlencoded({extended:false}));
//los datos obtenidos viajan como json
app.use(express.json());

//definimos que utilice el enrutador
app.use('/', require('./router'));

//Definimos puerto donde se ejecuta la aplicacion
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

