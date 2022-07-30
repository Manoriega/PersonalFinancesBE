import { Router } from "express";
import { accountscontroller } from "../controllers/accounts-controllers";

class AccountsRouter{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/create', accountscontroller.createAccount);
        this.router.post('/update', accountscontroller.updateAccount);
        this.router.get('/select', accountscontroller.getAllAccount);
        this.router.get('/select/byId', accountscontroller.getAccount);
        this.router.delete('/delete/byId', accountscontroller.deleteAccount);
    }
}

const accountsrouter = new AccountsRouter();
export default accountsrouter.router;