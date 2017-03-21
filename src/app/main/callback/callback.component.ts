import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.fetchParams();
  }

  fetchParams() {
    const url = this.router.url;
    const auth_params: URLSearchParams = new URLSearchParams(url.split('#')[1]);
    this.saveToLocalStorage(auth_params);
    this.router.navigateByUrl('/register');
  }

  saveToLocalStorage(auth_params: URLSearchParams): void {
    const {paramsMap} = auth_params;
    paramsMap.forEach((value, index) =>
      localStorage.setItem(index, value[0]));
  }
}
