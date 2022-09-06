import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button style="color: white; background-color: #0DBF93" *ngIf="value == 'X'">{{ value }}</button>
    <button style="color: white; background-color: #0493FF" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em; background-color: #8164C9}']
})
export class SquareComponent  {
  @Input() value: string;

}
