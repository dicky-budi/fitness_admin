import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  

export class LoginComponent  {
    constructor(private router:Router){}
    onSubmit(){
        var username = document.getElementById('unLogin');
        var password = document.getElementById('pwLogin');
        setTimeout(() => {
            this.router.navigateByUrl('/dashboard');
        }, 1000);
    }
}