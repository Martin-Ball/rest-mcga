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
    res.json(clientJSON);
};
  
exports.createClient = (req, res) => {
    const { name, surname, mail} = req.body;

    if (!name || !surname || !mail) {
        return res.status(400).json({ message: 'Debe proporcionar nombre, apellido y mail del cliente' });
    }

    const newClient = new Client(generateClientId(), name, surname, mail);

    clientJSON.push(newClient);

    saveClientToJSONFile();

    res.status(201).json(newClient);
};
  
exports.deleteClient = (req, res) => {
    const clientId = req.params.id;
    const clientIndex = clientJSON.findIndex((p) => p.id === parseInt(clientId));
  
    if (clientIndex === -1) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
  
    clientJSON.splice(clientIndex, 1);
  
    saveClientToJSONFile();
  
    res.json({ message: 'Cliente eliminado con éxito' });
};

const saveClientToJSONFile = () => {
    fs.writeFileSync('./data/clients.json', JSON.stringify(clientJSON, null, 2), 'utf-8');
}

const generateClientId = () => {
    const ids = clientJSON.map((p) => p.id);
    let newId = 1;

    while (ids.includes(newId)) {
        newId++;
    }

    return newId;
}