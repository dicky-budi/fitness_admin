import { Component,OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { showNotification } from '../../../notifications/notifications.component';

@Component({
  selector: 'form-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})  

// @Injectable()
export class FormLogin implements OnInit {

/* ---------------------- ANCHOR login form validation ---------------------- */

    form: FormGroup;
    constructor(private router:Router,private fb: FormBuilder,private _http: HttpClient){}

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

    /* -------------------- ANCHOR end login form validation -------------------- */


/* ---------------------- ANCHOR starting http request, spinner loading and redirect ---------------------- */

    private _loginUrl = 'http://dummy.restapiexample.com/api/v1/create';

    private parseHeader = {
        headers: new HttpHeaders({
            'Content-Type'  : 'application/x-www-form-urlencoded'
        })
    };

    private FormData = {"name":"benerlah","salary":"211","age":"23"};

    showSpinner = false;

    formOnLoad(){
        (document.querySelector('.loginForm') as HTMLElement).style.zIndex = '-1';
        (document.querySelector('.loginForm') as HTMLElement).style.opacity = '0.3';
        (document.querySelector('.loginForm') as HTMLElement).style.pointerEvents = 'none';
    }

    onSubmit(){
        // var username = document.getElementById('unLogin');
        // var password = document.getElementById('pwLogin');
        this.showSpinner = true;
        // setTimeout(() => {
        //     this.showSpinner = false;
        //     this.router.navigateByUrl('/dashboard');
        //     showNotification('top','center','Login Success')
        // }, 1000);

        this._http.post(this._loginUrl,JSON.stringify(this.FormData),{...this.parseHeader,responseType: 'text'}).subscribe((res) => {
            console.log('ini jwbn',res);
            this.showSpinner = false;
            this.router.navigateByUrl('/dashboard');
            showNotification('top','center','Login Success')
        });
    }

/* ------------------------- ANCHOR end http request, spinner loading and redirect ------------------------ */

    
}