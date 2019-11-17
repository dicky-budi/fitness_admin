import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['employee.component.css'],
})

// export class EmployeeComponent implements AfterViewInit {
//   @ViewChild('masonry', { static: false }) masonry: ElementRef;

//   constructor(private renderer: Renderer2) { }

//   ngAfterViewInit() {
//     const numCols = 3;
//     const colHeights = Array(numCols).fill(0);
//     Array.from(this.masonry.nativeElement.children).forEach((child: any, i) => {
//       const order = i % numCols;
//       this.renderer.setStyle(child, 'order', order);
//       colHeights[order] += parseFloat(child.clientHeight);
//     })
//     this.renderer.setStyle(this.masonry.nativeElement, 'height', `${Math.max(...colHeights)}px`)
//   }

// }

export class EmployeeComponent {}