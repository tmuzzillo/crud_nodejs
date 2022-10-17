const connection = require('../database/db');

//Definimos un metodo para guardar entidades (se tiene que llamar igual que el metodo definido en la vista)
exports.save = (req, res) => {
    //Tomamos los datos ingresados en el campo input con id=user del formulario en create.ejs
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error,results)=>{
        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}

//Metodo para actualizar un registro
exports.actualizar = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('UPDATE users SET ? WHERE id = ?',[{user:user, rol:rol}, id] ,(error,results)=>{
        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}

