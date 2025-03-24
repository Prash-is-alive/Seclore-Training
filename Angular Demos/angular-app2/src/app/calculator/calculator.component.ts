import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  number1!: number;
  number2!: number;
  result!: number;

  constructor() {}

  ngOnInit(): void {}
  add() {
    this.result = this.number1 + this.number2;
    console.log(this.result);
  }
  subtract() {
    this.result = this.number1 - this.number2;
    console.log(this.result);
  }
}
