import {Component} from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'table-today-schedule',
  templateUrl: 'schedule-today.component.html',
  styleUrls: ['schedule-today.component.css'],
})
export class TodayScheduleTable {
  constructor(private router:Router){}

  scheduleDetail(id){
    this.router.navigate(['/coachAttend'], { queryParams: { id: id } });
  }
}