import { Component, OnInit } from '@angular/core';

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
    },
    {
      title: 'Register for Follow Up',
      link: '/register'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
