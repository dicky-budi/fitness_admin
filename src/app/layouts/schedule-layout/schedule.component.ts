import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
})
export class ScheduleLayout {
  // constructor(private router:Router){}

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  // scheduleDetail(id){
  //   this.router.navigate(['/detailForm'], { queryParams: { id: id } });
  // }
}