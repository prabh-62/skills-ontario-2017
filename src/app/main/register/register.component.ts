import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Registration} from '../../models/registration';
import {Http, URLSearchParams, Response} from '@angular/http';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

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

  constructor(private fb: FormBuilder, private http: Http, private apollo: Apollo) {
  }

  ngOnInit() {
    this.submitted = false;
    this.createForm();
    this.fetchUserDetails();
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

  private fetchUserDetails() {
    const UserDetailsAPI: URL = new URL('https://my.mlh.io/api/v2/user.json');

    const params: URLSearchParams = new URLSearchParams();
    params.set('access_token', localStorage.getItem('access_token') || '');

    this.http.get(`${UserDetailsAPI.href}?${params}`)
      .map((response: Response) => response.json())
      .subscribe(
        result => {
          localStorage.setItem('user', JSON.stringify(result.data));
          this.registrationForm.setValue({
            firstName: result.data.first_name,
            lastName: result.data.last_name,
            email: result.data.email,
            program: '',
            request: '',
            requestDate: '2017-09-17'
          });
        },
        error => console.error(error));
  }

  public onSubmit() {
    this.submitted = true;
    this.saveData(this.registrationForm.value);
    console.log(this.registrationForm.value);
  }

  public saveData({firstName, lastName, email, program, request, requestDate}) {
    console.log(firstName, lastName, email, program, request, requestDate);
    const submitInquiry = gql`
      mutation {
        createInquiry(inquiry: {
        firstName: ${firstName},
        lastName: ${lastName},
        email: ${email},
        program: ${program},
        request: ${request},
        requestDate: ${requestDate}
        }){
          firstName,
          program,
          request
        }
      }`;

    this.apollo.mutate({
      mutation: submitInquiry
    }).subscribe(({data}) => console.log(data));
  }
}
