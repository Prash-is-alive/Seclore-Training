import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  name!: string;
  age!: number;

  constructor() {}

  ngOnInit(): void {}

  check() {
    console.log(this.name, this.age);
  }
}
