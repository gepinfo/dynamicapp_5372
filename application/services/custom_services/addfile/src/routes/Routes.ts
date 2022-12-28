import { Request, Response, NextFunction } from "express";
import { filesController } from '../controller/filesController';


export class Routes {
    private files: filesController = new filesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/files').post(this.files.GpCreate);
app.route('/files').get(this.files.GpGetAllValues);
app.route('/files/userid/created_by').get(this.files.GpGetNounCreatedBy);
     }

}