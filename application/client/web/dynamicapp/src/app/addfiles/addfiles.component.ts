import { Component, OnInit } from '@angular/core';
import { AddfilesService } from './addfiles.service';

@Component({
  selector: 'app-addfiles',
  templateUrl: './addfiles.component.html',
  styleUrls: ['./addfiles.component.scss'],
})

export class AddfilesComponent implements OnInit {
    public files:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private addfilesService: AddfilesService,
    ) { }

    ngOnInit() {
        this.files.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.addfilesService.GpCreate(this.files).subscribe((data:any) => {
            this.files.name = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}