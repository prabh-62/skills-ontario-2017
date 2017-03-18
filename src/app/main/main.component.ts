import {Component, OnInit} from '@angular/core';
import {PouchdbService} from "../services/pouchdb.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public courses = [
    {
      img: 'assets/programmer.jpg',
      name: 'Computer Programmer',
      tagLine: 'Get on the fast track to a computer programming career.',
      description: 'Sheridan\'s Computer Programmer diploma program offers highly marketable skills in the field of information technology.'
    },
    {
      img: 'assets/analyst.jpg',
      name: 'Systems Analyst',
      tagLine: 'Put technology to work for business — and for your career.',
      description: 'Computer Systems Analysts are always in demand with the increasing role of technology in business.'
    },
    {
      img: 'assets/engineer.jpg',
      name: 'Software Engineering',
      tagLine: 'Learn to build computer applications — and build a great career.',
      description: 'A Computer Systems Technician – Software Engineering diploma is exceptionally marketable in our rapidly ' +
      'changing computer-driven world.'
    },
    {
      img: 'assets/development.jpg',
      name: 'Software Dev & Network Eng',
      tagLine: 'Learn to build computer applications — and build a great career.',
      description: 'Enter the job market with practical, marketable software development and network engineering skills.'
    }
  ];

  constructor(private db: PouchdbService) {
  }

  ngOnInit() {
    this.db.createDB();
  }

}
