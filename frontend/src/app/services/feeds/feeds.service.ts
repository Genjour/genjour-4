import { url } from './../url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedsService {
Url:url;
  constructor(
    private http:Http,
  ) { }

  journalFeeds(userId){
    return this.http.get(url.journalFeeds+userId)
         .map(response=>response.json())
  }

  

}
