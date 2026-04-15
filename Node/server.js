const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo from CodeSpaces!');
});

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhosto:${port}');
});