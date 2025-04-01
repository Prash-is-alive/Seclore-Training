import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  naam: string = 'Prashant';
  age: number = 21;

  constructor() {}

  ngOnInit(): void {}

  check() {
    console.log(this.naam, this.age);
  }
  check2(myForm: NgForm) {
    if (myForm.valid) console.log(this.naam, this.age);
  }
}
