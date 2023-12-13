import { Router } from 'express';
import supplierController from './controller/supplierController';

const routes = Router();

routes.get('/supplier', supplierController.listSupplier);
routes.post('/supplier', supplierController.createSupplier);
routes.put('/supplier/:id', supplierController.updateSupplier);
routes.delete('/supplier/:id', supplierController.deleteSupplier);

export default routes;
