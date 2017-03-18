import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() active: boolean;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.loginForm = this.fb.group({
      loginName: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
  }

  public onSubmit() {
    console.log(this.loginForm.value);
    this.closeModal();
    this.router.navigateByUrl('/admin');
  }

  public closeModal() {
    this.active = false;
  }

}
