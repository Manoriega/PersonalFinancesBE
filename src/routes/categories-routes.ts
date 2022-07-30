import { Router } from "express";
import { categoriesController } from "../controllers/categories-controllers";

class CategoriesRouter{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/create', categoriesController.createCategory);
        this.router.post('/update', categoriesController.updateCategory);
        this.router.get('/select', categoriesController.getAllCategory);
        this.router.get('/select/byId', categoriesController.getCategory);
        this.router.delete('/delete/byId', categoriesController.deleteCategory);
    }
}

const categoriesrouter = new CategoriesRouter();
export default categoriesrouter.router;