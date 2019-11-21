import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { LoginLayout } from './layouts/login-layout/login-layout.component';
import { FormLogin } from './components/form/login/login.component';

import { ScheduleFormLayout } from './layouts/form-layout/schedule/formSchedule.component';
import { FormSchedule } from './components/form/schedule/schedule.component';

import { EmployeeFormLayout } from './layouts/form-layout/employee/formEmployee.component';
import { FormEmployee } from './components/form/employee/employee.component';

import { ScheduleLayout } from './layouts/schedule-layout/schedule.component';
import { TodayScheduleTable } from './components/table/schedule/today/schedule-today.component';

import { EmployeeLayout } from './layouts/employee-layout/employee.component';
import { TableEmployee } from './components/table/employee/employee.component';

import { CoachAttendLayout } from './layouts/attend-layout/coach/attend.component';

import { AttendanceLayout } from './layouts/attendance-layout/attendance-layout.component';
import { CoachAttendance } from './attendance/coachAttendance/coachAttendance.component';
import { MemberAttendance } from './attendance/memberAttendance/memberAttendance.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './trashSoon/table-list/table-list.component';
import { TypographyComponent } from './trashSoon/typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes =[
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginLayout
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
      component : ScheduleLayout,
      }
    ]
  },
  {
    path : 'coachAttend',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : CoachAttendLayout,
      }
    ]
  },
  {
    path : 'employee',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : EmployeeLayout,
      }
    ]
  },
  {
    path : 'form-schedule',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : ScheduleFormLayout,
      }
    ]
  },
  {
    path : 'form-employee',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : EmployeeFormLayout,
      }
    ]
  },
  {
    path : 'attendance',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : AttendanceLayout,
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
export const routingComponent = [LoginLayout,FormLogin,AdminLayoutComponent,DashboardComponent,EmployeeFormLayout,FormEmployee,UserProfileComponent,TableListComponent,TypographyComponent,NotificationsComponent,ScheduleLayout,EmployeeLayout,TableEmployee,ScheduleFormLayout,TodayScheduleTable,FormSchedule,CoachAttendLayout,AttendanceLayout,CoachAttendance,MemberAttendance]