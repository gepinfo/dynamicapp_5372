import { Request, Response } from 'express';
import { listdropService } from '../service/listdropService';
import { CustomLogger } from '../config/Logger'
let listdrop = new listdropService();

export class listdropController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    listdrop.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    listdrop.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    listdrop.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpGetNounCreatedBy');
    })}


}