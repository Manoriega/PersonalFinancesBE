import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class AccountsController{
    public async createAccount(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.nombrecuenta, post.tipocuenta){
            let insertion = await db.insertInto('cuenta', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            })
        }
    }
    
    public async getAccount(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('cuenta', 'id', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }

    }
    
    public async getAllAccount(req: Request, res: Response){
        const db = dbManager.getManager();
        let selection = await db.selectAllTable('cuenta');
        res.json(selection);
    }
    
    public async updateAccount(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('cuenta', post, 'id', id);
            res.json(updated);
        } else{
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            }) 
        }

    }
    
    public async deleteAccount(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let removed = await db.deleteRow('cuenta', 'id', get.id);
            res.json(removed);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }

}

export const accountscontroller = new AccountsController();