const salesData = fs.readFileSync('./data/sales.json', 'utf-8');
const salesJSON = JSON.parse(salesData);
const fs = require('fs');

const Sale = require("../models/product");

exports.getSales = (req, res) => {
    res.json(salesJSON);
};