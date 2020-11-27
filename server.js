const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});