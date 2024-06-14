const express = require('express');
const IMCcontroller = require('./Controller/execute');
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(__dirname + '/view'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/view/index.html');
});

app.use('/calcular', IMCcontroller);

const porta = 3000;

app.listen(porta,() => {
    console.log(`διακομιστής λειτουργεί στη θύρα: ${porta}`)
});