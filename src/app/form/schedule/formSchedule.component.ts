import {Component} from '@angular/core';

export interface Coach {
  name: string;
  value: string;
}

@Component({
  selector: 'formSchedule',
  templateUrl: 'formSchedule.component.html',
  styleUrls: ['formSchedule.component.css'],
})


export class FormSchedule {
  coaches: Coach[] = [
    {name: 'Coach 1', value: '1'},
    {name: 'Coach 2', value: '2'},
    {name: 'Coach 3', value: '3'},
    {name: 'Coach 4', value: '4'},
  ];

  submitClass(){
    console.log('ayo');
  }
}