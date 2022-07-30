import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class OperationControllers{
    public async createOperation(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.tipo, post.importe, post.fecha, post.categoria, post.idcuenta){
            let insertion = await db.insertInto('operacion', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0, 
                msg: 'Data body is not complete'
            })
        } 
    }
    
    public async getOperation(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('operacion', 'id', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }
    
    public async getAllOperations(req: Request, res: Response){
        const db = dbManager.getManager();
        let selection = await db.selectAllTable('operacion');
        res.json(selection);
    }

    public async getOperationByAccount(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('operacion', 'idcuenta', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }
    
    public async getOperationByType(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('operacion', 'tipo', get.id);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }    
    
    public async updateOperation(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('operacion', post, 'id', id);
            res.json(updated);
        } else{
            res.json({
                status: 0,
                msg: 'Data body is not complete'
            }) 
        }

    }
    
    public async deleteOperation(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let removed = await db.deleteRow('operacion', 'id', get.id);
            res.json(removed);
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }
}

export const operationcontrollers = new OperationControllers();