import {Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detailForm',
  templateUrl: 'detailForm.component.html',
  styleUrls: ['detailForm.component.css'],
})


export class DetailForm implements OnInit {
    coachId: string;
    constructor(private route: ActivatedRoute) {};

    ngOnInit(){
        this.route.queryParams.subscribe(values => {
            console.log('awo',values.id);//Which will print the properties you have passed
            this.coachId = values.id;
        });
    };
}