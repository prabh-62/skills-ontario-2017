import { Component, OnInit } from '@angular/core';
import {Registration} from '../../models/registration';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public followUps = 2;
  constructor() { }

  ngOnInit() {
  }

}
