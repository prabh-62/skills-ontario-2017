/**
 * Created by prabh on 20/03/17.
 */
import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptions} from '@angular/http';
@Injectable()

export class DefaultRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    if (window.localStorage && localStorage.getItem('access_token') != null) {
      this.headers.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
    }
  }
}
export const requestOptionsProvider =  { provide: RequestOptions, useClass: DefaultRequestOptions};
