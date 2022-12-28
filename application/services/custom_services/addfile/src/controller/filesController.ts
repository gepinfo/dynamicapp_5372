import { Request, Response } from 'express';
import { filesService } from '../service/filesService';
import { CustomLogger } from '../config/Logger'
let files = new filesService();

export class filesController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    files.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into filesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from filesController.ts: GpCreate');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    files.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into filesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from filesController.ts: GpGetAllValues');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    files.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into filesController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from filesController.ts: GpGetNounCreatedBy');
    })}


}