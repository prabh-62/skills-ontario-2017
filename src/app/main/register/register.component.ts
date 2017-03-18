import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.submitted = false;
    this.createForm();
  }

  public createForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      program: ['', Validators.required],
      request: ['', Validators.required],
      requestDate: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.registrationForm.value);
  }
}
