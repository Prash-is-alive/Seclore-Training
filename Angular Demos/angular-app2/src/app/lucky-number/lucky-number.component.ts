import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lucky-number',
  templateUrl: './lucky-number.component.html',
  styleUrls: ['./lucky-number.component.css'],
})
export class LuckyNumberComponent implements OnInit {
  luckyNumber!: number;

  show() {
    this.luckyNumber = Math.ceil(Math.random() * 10);
  }

  constructor() {}

  ngOnInit(): void {}
}
