import { Router } from "express";
import { operationcontrollers } from "../controllers/operation-controllers";

class OperationsRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/create', operationcontrollers.createOperation);
        this.router.post('/update', operationcontrollers.updateOperation);
        this.router.get('/select', operationcontrollers.getAllOperations);
        this.router.get('/select/byId', operationcontrollers.getOperation);
        this.router.get('/select/byAccount', operationcontrollers.getOperationByAccount);
        this.router.get('/select/byType', operationcontrollers.getOperationByType);        
        this.router.delete('/delete/byId', operationcontrollers.deleteOperation);
    }
}

const operationsroutes = new OperationsRoutes();
export default operationsroutes.router;