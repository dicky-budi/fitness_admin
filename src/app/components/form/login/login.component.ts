import { Component,OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from "axios";
import { AxiosInstance } from "axios";

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

    private _loginUrl = 'http://192.168.192.10:8888/ronaldSengkey/fitClub/api/v1/login';
    // private _loginUrl = 'http://localhost:8888/ronaldSengkey/fitClub/api/v1/login';

    public parseHeader = {
        headers: new HttpHeaders({
            // 'Content-Type'  : 'application/json',
            // 'crossdomain' : 'true'
            // 'Access-Control-Allow-Origin':'http://localhost:4200/'
        })
    };

    private FormData;

    showSpinner = false;

    formOnLoad(){
        (document.querySelector('.loginForm') as HTMLElement).style.zIndex = '-1';
        (document.querySelector('.loginForm') as HTMLElement).style.opacity = '0.3';
        (document.querySelector('.loginForm') as HTMLElement).style.pointerEvents = 'none';
    }

    onSubmit(){
        var username = $('#unLogin').val();
        var password = $('#pwLogin').val();
        this.FormData = {"email" : username, "password":password};
        console.log('fd',this.parseHeader);
        this.showSpinner = true;
        // setTimeout(() => {
        //     this.showSpinner = false;
        //     this.router.navigateByUrl('/dashboard');
        //     showNotification('top','center','Login Success')
        // }, 1000);

        // this._http.post(this._loginUrl,JSON.stringify(this.FormData),{...this.parseHeader,responseType: 'json'}).subscribe((res) => {
        //     console.log('ini jwbn',res);
        //     // this.showSpinner = false;
        //     // this.router.navigateByUrl('/dashboard');
        //     // showNotification('top','center','Login Success')
        // });

        // axios.post(this._loginUrl, JSON.stringify(this.FormData),{
        //     "headers" : {
        //         // 'Content-Type': 'application/json',
        //     },
        // })
        //   .then(function (response) {
        //     console.log('success',response);
        //   })
        //   .catch(function (error) {
        //     console.log('error',error);
        //   });

        // fetch(this._loginUrl, {
        //     method: 'POST',
        //     body: JSON.stringify(this.FormData),
        //     mode: 'no-cors',
        //     headers: {
        //         // 'Content-Type': 'application/json',
        //         // "Accept": 'application/json',
        //     }
        // })
        // .then((data) => data.json())
        // .then((resp) => console.log('success',resp.json()))
        // .catch((err) => console.log('error',err))

        $.ajax({
            url: this._loginUrl,
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
            },
            async : true,
            processData : false,
            data: JSON.stringify(this.FormData)
        }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log('success',response)
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('error',response.status)
        });

    }

/* ------------------------- ANCHOR end http request, spinner loading and redirect ------------------------ */

    
}