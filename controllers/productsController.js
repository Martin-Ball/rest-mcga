const fs = require('fs');
const Product = require("../models/product");

const productData = fs.readFileSync('./data/products.json', 'utf-8');
const productJSON = JSON.parse(productData);

exports.getProduct = (req, res) => {
    const productId = req.params.id;
    const product = productJSON.find((p) => p.id === parseInt(productId));

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(productJSON);
};

exports.getProducts = (req, res) => {
    res.json(productJSON);
};
  
exports.createProduct = (req, res) => {
    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
        return res.status(400).json({ message: 'Debe proporcionar nombre y precio del producto' });
    }

    const newProduct = new Product(nombre, precio);

    newProduct.id = generateProductId();

    productJSON.push(newProduct);

    saveProductsToJSONFile();

    res.status(201).json(newProduct);
};
  
exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    const productIndex = productJSON.findIndex((p) => p.id === parseInt(productId));
  
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
  
    productJSON.splice(productIndex, 1);
  
    saveProductsToJSONFile();
  
    res.json({ message: 'Producto eliminado con éxito' });
};

const saveProductsToJSONFile = () => {
    fs.writeFileSync('./data/productos.json', JSON.stringify(products, null, 2), 'utf-8');
}

const generateProductId = () => {
    const ids = productJSON.map((p) => p.id);
    let newId = 1;

    while (ids.includes(newId)) {
        newId++;
    }

    return newId;
}