class Sale {
    constructor(id, date, idClient, products, quantity) {
        this.id = id;
        this.date = date;
        this.idClient = idClient;
        this.products = products;
        this.quantity = quantity
    }
}
  
module.exports = Sale;