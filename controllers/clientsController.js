const clientData = fs.readFileSync('./data/clients.json', 'utf-8');
const clientJSON = JSON.parse(clientData);
const fs = require('fs');

const Client = require("../models/product");

exports.getClient = (req, res) => {
    const clientId = req.params.id;
    const client = clientJSON.find((p) => p.id === parseInt(clientId));

    if (!client) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.json(cliente);
};

exports.getClients = (req, res) => {

};
  
exports.createClient = (req, res) => {

};
  
exports.deleteClient = (req, res) => {
  
};