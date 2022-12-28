import { Request, Response } from 'express';
import {listdropDao} from '../dao/listdropDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let listdrop = new listdropDao();

export class listdropService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into listdropService.ts: GpGetAllValues')
     
     listdrop.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from listdropService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into listdropService.ts: GpCreate')
     let  listdropData = req.body;
     listdrop.GpCreate(listdropData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from listdropService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into listdropService.ts: GpGetNounCreatedBy')
     let  listdropData = { created_by: req.query.createdby };
     listdrop.GpGetNounCreatedBy(listdropData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from listdropService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}