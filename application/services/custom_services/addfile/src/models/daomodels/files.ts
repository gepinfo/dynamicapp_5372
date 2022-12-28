
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const filesSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const filesModel = mongoose.model('files', filesSchema, 'files');
export default filesModel;
