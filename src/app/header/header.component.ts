import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public displayModal: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

  public activateModal() {
    this.displayModal = Observable.of(true);
  }
}
