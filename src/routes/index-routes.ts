import { Request, Response, Router } from "express";

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.json({status: 1, msg: 'Server is okay'})
        });
    }
}

const indexroutes = new IndexRoutes();
export default indexroutes.router;