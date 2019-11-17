import {Component} from '@angular/core';

export interface Gender {
  name: string;
}

@Component({
  selector: 'formEmployee',
  templateUrl: 'formEmployee.component.html',
  styleUrls: ['formEmployee.component.css'],
})


export class FormEmployee {
  genders: Gender[] = [
    {name: 'Male'},
    {name: 'Female'},
  ];

  submitCoach(){
    console.log('ayo');
  }
}