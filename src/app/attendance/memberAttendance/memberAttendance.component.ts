import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface MemberAttendanceList {
  name: string;
  position: number;
  class: string;
  classSchedule: string;
}

const ELEMENT_DATA: MemberAttendanceList[] = [
  {position: 1, name: 'Hydrogen', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 2, name: 'Helium', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 3, name: 'Lithium', class: 'Yoga',classSchedule: '25 November 2019, 16:25'},
  {position: 4, name: 'Beryllium', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 5, name: 'Boron', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 6, name: 'Carbon', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 7, name: 'Nitrogen', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 8, name: 'Oxygen', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 9, name: 'Fluorine', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 10, name: 'Neon', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 11, name: 'Sodium', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 12, name: 'Magnesium', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 13, name: 'Aluminum', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 14, name: 'Silicon', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 15, name: 'Phosphorus', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 16, name: 'Sulfur', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 17, name: 'Chlorine', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 18, name: 'Argon', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 19, name: 'Potassium', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
  {position: 20, name: 'Calcium', class: 'Yoga', classSchedule: '25 November 2019, 16:25'},
];

@Component({
  selector: 'member-attendance',
  templateUrl: 'memberAttendance.component.html',
  styleUrls: ['memberAttendance.component.css'],
})




export class MemberAttendance implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'class', 'classSchedule'];
  dataSource = new MatTableDataSource<MemberAttendanceList>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}