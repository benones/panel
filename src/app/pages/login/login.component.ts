import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public requiredValues: boolean;

  username = new FormControl('', [Validators.required]);

  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
  }

  removeAlert() {
    this.requiredValues = false;
  }

  onSubmit(values: any) {
    if (this.loginForm.valid){
      this.router.navigate(['/boards']);
    } else {
      this.requiredValues = true;
    }

  }

}
