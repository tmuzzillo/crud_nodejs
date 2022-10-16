//Invocamos libreria express
const express = require('express');
const app = express();

//Seteamos motor de plantillas
app.set('view engine', 'ejs');

app.use('/', require('./router'));

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

