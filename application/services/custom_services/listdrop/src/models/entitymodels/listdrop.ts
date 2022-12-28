
export interface listdrop 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: String,
   files: { type: String, ref: 'files' }
}
