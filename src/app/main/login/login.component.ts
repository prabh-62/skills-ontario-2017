import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

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
    if (this.verifyCredentials(this.loginForm.value)) {
      localStorage.setItem('authenticated', 'admin');
      this.closeModal();
      this.router.navigateByUrl('/admin');
    }
  }

  private verifyCredentials({loginName, loginPassword}) {
    const username = environment.admin_username;
    const password = environment.admin_password;
    if ((loginName.toLowerCase() === username)
      &&
      (loginPassword.toLowerCase() === password)) {
      return true;
    }
    return false;
  }

  public closeModal() {
    this.active = false;
  }

}
