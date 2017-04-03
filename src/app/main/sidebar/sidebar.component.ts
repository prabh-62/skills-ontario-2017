import {Component, OnInit} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public links = [
    {
      title: 'FAST Contact Info',
      link: 'https://www.sheridancollege.ca/academics/faculties/applied-science-and-technology.aspx'
    },
    {
      title: 'Upcoming Events',
      link: 'https://www.sheridancollege.ca/news-and-events/events.aspx',
      badge: 5
    }
  ];

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  register() {
    const MLHapi = new URL('https://my.mlh.io/oauth/authorize');
    const redirect_uri = new URL(`${location.hostname}oauth/callback`);
    const params = new URLSearchParams();
    params.append('client_id', '98c90e6fe51d6aa3465723c8f719a78499316c339e135a6a8b39a210b8bf8dc1');
    params.append('redirect_uri', redirect_uri.href);
    params.append('response_type', 'token');
    window.location.href = `${MLHapi.href}?${params}`;
  }
}
