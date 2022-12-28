import { Request, Response } from 'express';
import {filesDao} from '../dao/filesDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let files = new filesDao();

export class filesService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into filesService.ts: GpCreate')
     let  filesData = req.body;
     files.GpCreate(filesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from filesService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into filesService.ts: GpGetAllValues')
     
     files.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from filesService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into filesService.ts: GpGetNounCreatedBy')
     let  filesData = { created_by: req.query.createdby };
     files.GpGetNounCreatedBy(filesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from filesService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}