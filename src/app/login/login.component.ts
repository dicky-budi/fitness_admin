import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';

import { showNotification } from '../notifications/notifications.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  


export class LoginComponent implements OnInit {
    form: FormGroup;
    constructor(private router:Router,private fb: FormBuilder){}

    username = new FormControl('', [Validators.required]);
    password = new FormControl('',[Validators.required]);

    getUsernameErrorMessage() {
        return this.username.hasError('required') ? 'Username must not be empty' : '';
    }

    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'Password must not be empty' : '';
    }

    ngOnInit(){
        this.form = this.fb.group(
            {
                username: ['', [Validators.required]],
                password: ['',[Validators.required]]
            }
        )
    }

    showSpinner = false;
    onSubmit(){
        var username = document.getElementById('unLogin');
        var password = document.getElementById('pwLogin');
        this.showSpinner = true;
        setTimeout(() => {
            this.showSpinner = false;
            this.router.navigateByUrl('/dashboard');
            showNotification('top','center','Login Success')
        }, 1000);
    }

    formOnLoad(){
        (document.querySelector('.loginPlace') as HTMLElement).style.zIndex = '-1';
        (document.querySelector('.loginPlace') as HTMLElement).style.opacity = '0.3';
        (document.querySelector('.loginPlace') as HTMLElement).style.pointerEvents = 'none';
    }
    
}