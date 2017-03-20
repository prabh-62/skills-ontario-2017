import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Registration} from "../../models/registration";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public programs = [
    {
      title: 'Computer Programmer',
      code: 'PCOMP'
    },
    {
      title: 'CST - Systems Analyst',
      code: 'PCSAC'
    },
    {
      title: 'Software Engineering',
      code: 'PCSSN'
    },
    {
      title: 'Software Development & Network Engineering',
      code: 'PCSSC'
    }
  ];

  public submitted: boolean;

  public registrationForm: FormGroup;

  public register = new Registration();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.submitted = false;
    this.createForm();
  }

  public createForm() {
    this.registrationForm = this.fb.group({
      firstName: [this.register.firstName, [Validators.required, Validators.minLength(5)]],
      lastName: [this.register.lastName, [Validators.required, Validators.minLength(5)]],
      email: [this.register.contactEmail, [Validators.required, Validators.minLength(5)]],
      program: [this.register.programOfInterest, [Validators.required, Validators.minLength(5)]],
      request: [this.register.request, [Validators.required, Validators.minLength(5)]],
      requestDate: [this.register.requestDate, [Validators.required, Validators.minLength(5)]],
    });
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.registrationForm.value);
  }
}
