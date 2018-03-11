import { url } from './../url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
Url:url;
  constructor(
    private http: Http,
  ) { }

  JournalsByCategory(category){
     return this.http.get(url.JournalsByCategory+category)
         .map(response=>response.json())
  }
  quotationContent(category){
    return this.http.get(url.quotationContent+category)
        .map(response=>response.json())
 }
}

