import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class OperationTypeControllers{
    public async createOperationType(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.operaciontipo){
            let insertion = await db.insertInto('operaciontipo', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            })
        }
    }
    
    public async getOperationType(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('operaciontipo', 'id', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }

    }
    
    public async getAllOperationType(req: Request, res: Response){
        const db = dbManager.getManager();
        let selection = await db.selectAllTable('operaciontipo');
        res.json(selection);
    }
    
    public async updateOperationType(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('operaciontipo', post, 'id', id);
            res.json(updated);
        } else{
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            }) 
        }

    }
    
    public async deleteOperationType(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let removed = await db.deleteRow('operaciontipo', 'id', get.id);
            res.json(removed);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }
}

export const operationtypecontrollers = new OperationTypeControllers();