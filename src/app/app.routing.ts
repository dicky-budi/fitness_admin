import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormSchedule } from './form/schedule/formSchedule.component';

const routes: Routes =[
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'dashboard',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      // loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      component : DashboardComponent,
      }
    ]
  },
  {
    path : 'user-profile',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : UserProfileComponent,
      }
    ]
  },
  {
    path : 'table-list',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : TableListComponent,
      }
    ]
  },
  {
    path : 'typography',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : TypographyComponent,
      }
    ]
  },
  {
    path : 'notifications',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : NotificationsComponent,
      }
    ]
  },
  {
    path : 'schedule',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : ScheduleComponent,
      }
    ]
  },
  {
    path : 'employee',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : EmployeeComponent,
      }
    ]
  },
  {
    path : 'form-schedule',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : FormSchedule,
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes
      // {
      //  useHash: true
      // }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,AdminLayoutComponent,DashboardComponent,UserProfileComponent,TableListComponent,TypographyComponent,NotificationsComponent,ScheduleComponent,EmployeeComponent,FormSchedule]