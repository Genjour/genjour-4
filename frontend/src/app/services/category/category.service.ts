import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(
    private http: Http,
  ) { }

  JournalsByCategory(category){
     return this.http.get('/journals/'+category)
         .map(response=>response.json())
  }
  quotationContent(category){
    return this.http.get('/quotations/'+category)
        .map(response=>response.json())
 }
}

