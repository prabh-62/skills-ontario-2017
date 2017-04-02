import {Component, OnInit} from '@angular/core';
import {Registration} from '../../models/registration';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public followUps = 2;
  public inquiries;

  constructor(private apollo: Apollo) {
  }


  ngOnInit() {
    this.queryFollowups();
  }

  private queryFollowups() {
    const followups = gql`
        query{
          inquiries{
            firstName,
            lastName,
            email,
            program,
            request,
            requestDate
            }
          }`
    ;
    this.apollo.watchQuery({
      query: followups
    }).subscribe((res: ApolloQueryResult<any>) => {
      console.log(res);
      this.inquiries = res.data.inquiries;
      this.followUps = this.inquiries.length;
    });
  }

}
