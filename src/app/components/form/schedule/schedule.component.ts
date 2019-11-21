import {Component,AfterViewInit,OnInit} from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';

export interface Coach {
  name: string;
  value: string;
}

@Component({
  selector: 'form-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
})


export class FormSchedule implements AfterViewInit,OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder){}

  coaches: Coach[] = [
    {name: 'Coach 1', value: '1'},
    {name: 'Coach 2', value: '2'},
    {name: 'Coach 3', value: '3'},
    {name: 'Coach 4', value: '4'},
  ];

  ngAfterViewInit(){
    $('.navbar-brand').text('Schedule Form');
  }

  name = new FormControl('', [Validators.required]);
  date = new FormControl('',[Validators.required]);
  startTime = new FormControl('',[Validators.required]);
  endTime = new FormControl('',[Validators.required]);
  coach = new FormControl('',[Validators.required]);

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Name must not be empty' : '';
  }

  getDateErrorMessage() {
    return this.date.hasError('required') ? 'Date cannot be empty' : '';
  }

  getStartTimeErrorMessage() {
    return this.startTime.hasError('required') ? 'Start Time must not be empty' : '';
  }

  getEndTimeErrorMessage() {
    return this.endTime.hasError('required') ? 'End Time must not be empty' : '';
  }

  getCoachErrorMessage() {
    return this.coach.hasError('required') ? 'Coach must not be empty' : '';
  }

  ngOnInit(){
    this.form = this.fb.group(
      {
          name: ['', [Validators.required]],
          date: ['',[Validators.required]],
          startTime: ['',[Validators.required]],
          endTime: ['',[Validators.required]],
          coach: ['',[Validators.required]]
      }
  )
  }

  submitClass(){
    console.log('ayo');
  }
}