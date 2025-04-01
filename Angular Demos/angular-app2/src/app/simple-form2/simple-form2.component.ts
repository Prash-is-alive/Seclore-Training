import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form2',
  templateUrl: './simple-form2.component.html',
  styleUrls: ['./simple-form2.component.css'],
})
export class SimpleForm2Component implements OnInit {
  no1!: number;
  no2!: number;

  constructor() {}

  ngOnInit(): void {}

  add() {
    console.log({ no1: this.no1, no2: this.no2 });
  }

  add2(x: any, y: any) {
    console.log({ x, y });
  }
}
