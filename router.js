const express = require('express');
const router = express.Router();

//creamos un enrutador con dos parametros Request y Response
router.get('/contacto', (req, res) => {
    res.send('CONTACTO');
});

module.exports = router;
