import * as mongoose from 'mongoose';
import filesModel from '../models/daomodels/files';
import { CustomLogger } from '../config/Logger'


export class filesDao {
    private files = filesModel;
    constructor() { }
    
    public async GpCreate(filesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into filesDao.ts: GpCreate');

    let temp = new filesModel(filesData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from filesDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into filesDao.ts: GpGetAllValues');

    

    
    
    
    this.files.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from filesDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(filesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into filesDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.files.aggregate(([
                        { $match: { $and: [{ created_by: filesData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from filesDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}