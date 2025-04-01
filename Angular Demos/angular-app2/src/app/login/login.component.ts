import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    uname: new FormControl('', Validators.required),
    pwd: new FormControl(null, Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  get uname() {
    return this.loginForm.controls['uname'];
  }
  get pwd() {
    return this.loginForm.controls['pwd'];
  }

  login() {
    console.log(this.loginForm.value);
  }
}
