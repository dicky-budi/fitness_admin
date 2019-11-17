import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { showNotification } from '../notifications/notifications.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  


export class LoginComponent  {
    constructor(private router:Router){}
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