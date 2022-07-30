import { Router } from "express";
import { accountstypecontroller } from "../controllers/accounts-type-controllers";

class AccountsTypeRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/create', accountstypecontroller.createAccountType);
        this.router.post('/update', accountstypecontroller.updateAccountType);
        this.router.get('/select', accountstypecontroller.getAllAccountType);
        this.router.get('/select/byId', accountstypecontroller.getAccountType);
        this.router.delete('/delete/byId', accountstypecontroller.deleteAccountType);
    }
}

const accountstyperoutes = new AccountsTypeRoutes();
export default accountstyperoutes.router;