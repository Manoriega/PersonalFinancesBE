import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class CategoriesController{
    public async createCategory(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.categoria){
            let insertion = await db.insertInto('categorias', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            })
        }
    }
    
    public async getCategory(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('categorias', 'id', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }

    }
    
    public async getAllCategory(req: Request, res: Response){
        const db = dbManager.getManager();
        let selection = await db.selectAllTable('categorias');
        res.json(selection);
    }
    
    public async updateCategory(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('categorias', post, 'id', id);
            res.json(updated);
        } else{
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            }) 
        }

    }
    
    public async deleteCategory(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let removed = await db.deleteRow('categorias', 'id', get.id);
            res.json(removed);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }

}

export const categoriesController = new CategoriesController();