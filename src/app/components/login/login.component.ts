import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError = false;
  loginFormGroup: FormGroup;

  constructor(private route: Router, private appService: AppService, private formBuilder: FormBuilder) {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
    this.isLoginError = false;
  }

  validateUser() {
    this.route.navigateByUrl('home');
  }
}
