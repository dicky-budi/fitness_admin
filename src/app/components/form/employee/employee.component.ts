import {Component,AfterViewInit,OnInit} from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';
declare var $:any;
export interface Gender {
  name: string;
}

export interface Speciality {
  name: string;
}

@Component({
  selector: 'form-employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['employee.component.css'],
})


export class FormEmployee implements AfterViewInit,OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder){}

  genders: Gender[] = [
    {name: 'Male'},
    {name: 'Female'},
  ];

  specialities : Speciality[] = [
    {name: 'Yoga'},
    {name: 'Zumba'},
    {name: 'Body Combat'},
  ];
  
  name = new FormControl('', [Validators.required]);
  gender = new FormControl('',[Validators.required]);
  birthdate = new FormControl('',[Validators.required]);
  address = new FormControl('',[Validators.required]);
  speciality = new FormControl('',[Validators.required]);

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Name must not be empty' : '';
  }

  getGenderErrorMessage() {
    return this.gender.hasError('required') ? 'Gender cannot be empty' : '';
  }

  getBirthDateErrorMessage() {
    return this.birthdate.hasError('required') ? 'Birthdate must not be empty' : '';
  }

  getAddressErrorMessage() {
    return this.address.hasError('required') ? 'Address must not be empty' : '';
  }

  getSpecialityErrorMessage() {
    return this.speciality.hasError('required') ? 'Speciality must not be empty' : '';
  }

  ngAfterViewInit(){
    $('.navbar-brand').text('Coach Form')
  }

  ngOnInit(){
      this.form = this.fb.group(
          {
              name: ['', [Validators.required]],
              gender: ['',[Validators.required]],
              birthdate: ['',[Validators.required]],
              address: ['',[Validators.required]],
              speciality: ['',[Validators.required]]
          }
      )
  }

  submitCoach(){
    console.log('ayo');
  }
}