import { Router } from "express";
import { operationtypecontrollers } from "../controllers/operation-type-controllers";

class OperationTypeRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/create', operationtypecontrollers.createOperationType);
        this.router.post('/update', operationtypecontrollers.updateOperationType);
        this.router.get('/select', operationtypecontrollers.getAllOperationType);
        this.router.get('/select/byId', operationtypecontrollers.getOperationType);
        this.router.delete('/delete', operationtypecontrollers.deleteOperationType);
    }
}

const operationtyperoutes = new OperationTypeRoutes();
export default operationtyperoutes.router;