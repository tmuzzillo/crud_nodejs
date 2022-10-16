const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tomi1234',
    database: 'crud_nodejs_mysql'
});