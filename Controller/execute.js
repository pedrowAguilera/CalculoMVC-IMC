const express = require('express');
const resultado = express.Router();
const conta = require('../model/calculoIMC');

resultado.post('/', (req,res) => {
    const { Peso, Altura } = req.body;

    const result = conta.calcularIMC(
        parseFloat(Peso), parseFloat(Altura)
    );
    res.redirect(`/resultado.html?result=${result}`)
    res.send(`O resultado do IMC é: ${result}`)    

})

module.exports = resultado;