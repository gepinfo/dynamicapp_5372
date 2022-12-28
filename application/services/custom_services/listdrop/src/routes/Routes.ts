import { Request, Response, NextFunction } from "express";
import { listdropController } from '../controller/listdropController';


export class Routes {
    private listdrop: listdropController = new listdropController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/listdrop').get(this.listdrop.GpGetAllValues);
app.route('/listdrop').post(this.listdrop.GpCreate);
app.route('/listdrop/userid/created_by').get(this.listdrop.GpGetNounCreatedBy);
     }

}