const express = require('express');
const router = express.Router();
//Importamos la conexcion a la base de datos
const connection = require('./database/db');

//invocamos el controlador crud que tiene los metodos necesarios para las acciones de ABMC
const crud = require('./controllers/crud');

//creamos un enrutador con dos parametros Request y Response
//Cuando entramos a la direccion base (/) nos trae todos los usuarios cargados en la tabla.
//MOSTRAR REGISTROS (GET)
router.get('/', (req, res) => {
    //Ejecutamos la consulta
    connection.query('SELECT * FROM users', (error, results)=>{
        if (error){
            throw error;
        }else{
            //Llamamos al archivo index dentro del directorio views
            //enviamos los resultados de la query a la variable resultados en el archivo index.ejs
            res.render('index', {resultados:results});
        }
    })
});

//CREAR REGISTROS (POST)
//trae el formulario para la creacion de entidades cuando apretamos en el boton +
router.get('/create', (req, res) => {
    //hacemos referencia al archivo create.ejs dentro del directorio views
    res.render('create');
});

router.post('/save', crud.save);

//ACTUALIZAR REGISTROS (PUT)
//Tomamos un parametro dentro de la ruta que es variable (id del registro que queremos modificar)
router.get('/edit/:id', (req,res)=>{
    //guardamos el parametro dentro de una constante
    const id = req.params.id;
    //realizamos la query pasandole el id que nos viene como parametro
    connection.query('SELECT * FROM users WHERE id=?', [id], (error, results)=>{
        if (error){
            throw error;
        }else{
            //el resultado de la query lo guardamos en la variable user que le pasamos al archivo edit.ejs
            res.render('edit', {user:results[0]});
        }
    })
});

router.post('/actualizar', crud.actualizar);

//ELIMINAR REGISTROS (DELETE)
router.get('/delete/:id', (req,res)=>{
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
        if (error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});

module.exports = router;
