const { Router } = require('express');
const supplierController = require('./controller/supplierController');

const routes = new Router();

routes.get('/supplier', supplierController.listSupplier);
routes.post('/supplier', supplierController.createSupplier);
routes.put('/supplier/:id', supplierController.updateSupplier);
routes.delete('/supplier/:id', supplierController.deleteSupplier);

module.exports = routes;
