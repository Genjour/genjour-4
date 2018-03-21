import { url } from './url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService {
Url:url;
  constructor(
        private http: Http,
  ) { }

  profileArticles(genjouristId){
    //console.log(genjouristId);
      return this.http.get(url.profileArticles+genjouristId)
      .map(response=>response.json())
  }
  
  profileQuotation(genjouristId){
    return this.http.get(url.profileQuotation+genjouristId)
    .map(response=>response.json())
}

profileJournals(genjouristId){
  return this.http.get(url.profileJournals+genjouristId).map(res=>res.json());
}

}
