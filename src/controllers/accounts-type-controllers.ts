import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class AccountsTypeController{
    public async createAccountType(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.tipo){
            let insertion = await db.insertInto('cuentatipo', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            })
        }
    }
    
    public async getAccountType(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('cuentatipo', 'id', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }

    }
    
    public async getAllAccountType(req: Request, res: Response){
        const db = dbManager.getManager();
        let selection = await db.selectAllTable('cuentatipo');
        res.json(selection);
    }
    
    public async updateAccountType(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('cuentatipo', post, 'id', id);
            res.json(updated);
        } else{
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            }) 
        }

    }
    
    public async deleteAccountType(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let removed = await db.deleteRow('cuentatipo', 'id', get.id);
            res.json(removed);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }
}

export const accountstypecontroller = new AccountsTypeController();