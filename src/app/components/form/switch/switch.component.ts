import {Component,AfterViewInit,OnInit} from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';

export interface Coach {
  name: string;
  value: string;
}

export interface Class {
    name: string;
    value: string;
  }

@Component({
  selector: 'form-switch',
  templateUrl: 'switch.component.html',
  styleUrls: ['switch.component.css'],
})


export class SwitchForm {
  form: FormGroup;
  constructor(private fb: FormBuilder){}

  coaches: Coach[] = [
    {name: 'Coach 1', value: '1'},
    {name: 'Coach 2', value: '2'},
    {name: 'Coach 3', value: '3'},
    {name: 'Coach 4', value: '4'},
  ];

  coachesto: Coach[] = [
    {name: 'Coach 1', value: '1'},
    {name: 'Coach 2', value: '2'},
    {name: 'Coach 3', value: '3'},
    {name: 'Coach 4', value: '4'},
  ];

  classes: Class[] = [
    {name: 'Class 1', value: '1'},
    {name: 'Class 2', value: '2'},
    {name: 'Class 3', value: '3'},
    {name: 'Class 4', value: '4'},
  ];

  classesto: Class[] = [
    {name: 'Class 1', value: '1'},
    {name: 'Class 2', value: '2'},
    {name: 'Class 3', value: '3'},
    {name: 'Class 4', value: '4'},
  ];

  ngAfterViewInit(){
    $('.navbar-brand').text('Switch Coach Form');
  }
  date = new FormControl('',[Validators.required]);
  date2 = new FormControl('',[Validators.required]);
  coach = new FormControl('',[Validators.required]);
  coach2 = new FormControl('',[Validators.required]);
  class = new FormControl('',[Validators.required]);
  class2 = new FormControl('',[Validators.required]);

  getDateErrorMessage() {
    return this.date.hasError('required') ? 'From class date cannot be empty' : '';
  }
  getDateToErrorMessage() {
    return this.date2.hasError('required') ? 'To class date cannot be empty' : '';
  }

  getCoachErrorMessage() {
    return this.coach.hasError('required') ? 'Coach must not be empty' : '';
  }

  getCoachToErrorMessage() {
    return this.coach.hasError('required') ? 'Coach must not be empty' : '';
  }

  getClassErrorMessage() {
    return this.class.hasError('required') ? 'Class must not be empty' : '';
  }

  getClassToErrorMessage() {
    return this.class2.hasError('required') ? 'To class must not be empty' : '';
  }

  ngOnInit(){
    this.form = this.fb.group(
      {
          date: ['',[Validators.required]],
          date2: ['',[Validators.required]],
          coach: ['',[Validators.required]],
          coach2: ['',[Validators.required]],
          class: ['',[Validators.required]],
          class2: ['',[Validators.required]]
      }
  )
  }

  submitSwitch(){
    console.log('ayo');
  }
}