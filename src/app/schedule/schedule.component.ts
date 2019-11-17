import {Component,ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
// import { MatTable, MatTableDataSource } from '@angular/material';
declare var $: any;
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
})
export class ScheduleComponent {
  constructor(private router:Router){}

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  scheduleDetail(id){
    this.router.navigate(['/detailForm'], { queryParams: { id: id } });
  }

//   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   ELEMENT_DATA: PeriodicElement[] = [
//     {position: 6, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//     {position: 7, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//     {position: 8, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//     {position: 9, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   ];

// ELEMENT_DATA2: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},

// ];
//   dataSource = new MatTableDataSource(this.ELEMENT_DATA);
//   dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);

//     drop(event: CdkDragDrop<string[]>) {
//       console.log('all event',event);
//       console.log("event.previousContainer =>", event.previousContainer);
//       console.log("event.container =>", event.container)
//       console.log("event.container.data =>", event.container.data)
//       console.log("event.previousIndex =>", event.previousIndex);
//       console.log("event.currentIndex =>", event.currentIndex);
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       transferArrayItem(event.previousContainer.data,
//                         event.container.data,
//                         event.previousIndex,
//                         event.currentIndex);
//     }
//     this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
//     this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);
//   }

//   var $tabs = $('#t_draggable2');
//   $("tbody.t_sortable").sortable({
//     connectWith: ".t_sortable",
//     items: "> tr:not(:first)",
//     appendTo: $tabs,
//     helper:"clone",
//     zIndex: 999990
//   }).disableSelection();
  
//   var $tab_items = $(".nav-tabs > li", $tabs).droppable({
//     accept: ".t_sortable tr",
//     hoverClass: "ui-state-hover",
//     drop: function( event, ui ) { return false; }
//   });
}