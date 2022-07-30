import express, { Application } from "express";
import morgan from "morgan";
import cors from 'cors';
import indexRoutes from "./routes/index-routes";
import categoriesRoutes from "./routes/categories-routes";
import accountsRoutes from "./routes/accounts-routes";
import accountsTypeRoutes from "./routes/accounts-type-routes";
import operationRoutes from "./routes/operation-routes";
import operationTypeRoutes from "./routes/operation-type-routes";
import swaggerUi  from "swagger-ui-express"; 
import * as swaggerDocument from './swagger.json';

class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();        
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false})) 
    }

    routes(): void { 
        this.app.use('/', indexRoutes);
        this.app.use('/categories', categoriesRoutes); 
        this.app.use('/accounts', accountsRoutes);
        this.app.use('/accountstype', accountsTypeRoutes);
        this.app.use('/operations', operationRoutes);
        this.app.use('/operationstype', operationTypeRoutes);
    } 

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();