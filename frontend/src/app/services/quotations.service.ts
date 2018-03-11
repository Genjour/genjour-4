import { url } from './url';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotationsService {
Url:url;
  constructor(
    private http: Http,
  ) { }

  getQuotations(){
    return this.http.get(url.getQuotations)
    .map(res=>res.json());
  }


}
