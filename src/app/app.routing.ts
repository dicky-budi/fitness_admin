/* ----------------------- ANCHOR basic module import ----------------------- */
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

/* ---------------------------- end module import --------------------------- */

/* --------------------- ANCHOR dashboard layout routing -------------------- */

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

/* ---------------------- end dashboard layout routing ---------------------- */

/* -------------------- ANCHOR login routing & component -------------------- */

import { LoginLayout } from './layouts/login-layout/login-layout.component';
import { FormLogin } from './components/form/login/login.component';

/* ---------------------- end login routing & component --------------------- */

/* ---------------- ANCHOR schedule form layout and component --------------- */

import { ScheduleFormLayout } from './layouts/form-layout/schedule/formSchedule.component';
import { FormSchedule } from './components/form/schedule/schedule.component';

/* ---------------------- end form layout and component --------------------- */

/* ---------------- ANCHOR  employee form layout & component ---------------- */

import { EmployeeFormLayout } from './layouts/form-layout/employee/formEmployee.component';
import { FormEmployee } from './components/form/employee/employee.component';

/* ------------------ end employee form layout & component ------------------ */

/* ------------------ ANCHOR switch form layout & component ----------------- */

import { SwitchFormLayout } from './layouts/form-layout/switch/switch.component';
import { SwitchForm } from './components/form/switch/switch.component';

/* ------------------- end switch form layout & component ------------------- */

/* ----------- ANCHOR  schedule layout and today's schedule table ----------- */

import { ScheduleLayout } from './layouts/schedule-layout/schedule.component';
import { TodayScheduleTable } from './components/table/schedule/today/schedule-today.component';

/* ------------- end schedule layout and today's schedule table ------------- */

/* ------------- ANCHOR employee form layout and employee table ------------- */

import { EmployeeLayout } from './layouts/employee-layout/employee.component';
import { TableEmployee } from './components/table/employee/employee.component';

/* ------------------- end employee form layout and table ------------------- */

/* ------------------------ ANCHOR  coach attend page ----------------------- */

import { CoachAttendLayout } from './layouts/attend-layout/coach/attend.component';

/* ------------------------- end coach attend layout ------------------------ */

/* ---- ANCHOR attendance layout and coach & member attendance component ---- */

import { AttendanceLayout } from './layouts/attendance-layout/attendance-layout.component';
import { CoachAttendance } from './attendance/coachAttendance/coachAttendance.component';
import { MemberAttendance } from './attendance/memberAttendance/memberAttendance.component';

/* ------ end attendance layout and coach & member attendance component ----- */


/* ------------------ ANCHOR Dashboard layout and component ----------------- */

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './trashSoon/table-list/table-list.component';
import { TypographyComponent } from './trashSoon/typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';

/* --------------- end dashboard layout and component --------------- */


/* -------------------------- ANCHOR routing routes ------------------------- */

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
    path : 'form-switch',
    component : AdminLayoutComponent,
    children: [{
      path: '',
      component : SwitchFormLayout,
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

/* --------------------------- end routing routes --------------------------- */

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

/* ------------------------ ANCHOR  routing component ----------------------- */

export const routingComponent = [
  LoginLayout,FormLogin,
  AdminLayoutComponent,
  DashboardComponent,UserProfileComponent,TableListComponent,TypographyComponent,NotificationsComponent,
  EmployeeFormLayout,FormEmployee,
  ScheduleLayout,ScheduleFormLayout,TodayScheduleTable,FormSchedule,
  CoachAttendLayout,AttendanceLayout,
  EmployeeLayout,TableEmployee,
  SwitchFormLayout,SwitchForm,
  CoachAttendance,MemberAttendance]

/* -------------------------- end routing component ------------------------- */