import * as mongoose from 'mongoose';
import listdropModel from '../models/daomodels/listdrop';
import { CustomLogger } from '../config/Logger'


export class listdropDao {
    private listdrop = listdropModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into listdropDao.ts: GpGetAllValues');

    

    
    
    
    this.listdrop.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from listdropDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(listdropData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into listdropDao.ts: GpCreate');

    let temp = new listdropModel(listdropData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from listdropDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(listdropData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into listdropDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.listdrop.aggregate(([
                        { $match: { $and: [{ created_by: listdropData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from listdropDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}