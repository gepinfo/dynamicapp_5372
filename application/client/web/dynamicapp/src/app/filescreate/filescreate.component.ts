import { Component, OnInit } from '@angular/core';
import { FilescreateService } from './filescreate.service';

@Component({
  selector: 'app-filescreate',
  templateUrl: './filescreate.component.html',
  styleUrls: ['./filescreate.component.scss'],
})

export class FilescreateComponent implements OnInit {
    filesitemArray: any = [];
    public listdrop:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        files: '',
    }

    constructor (
        private filescreateService: FilescreateService,
    ) { }

    ngOnInit() {
        this.listdrop.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.filescreateService.GpCreate(this.listdrop).subscribe((data:any) => {
            this.listdrop.name = ''
 	 	this.listdrop.files = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    filesGpGetAllValues() {
        this.filescreateService.filesGpGetAllValues().subscribe((data:any) => {
            this.filesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}