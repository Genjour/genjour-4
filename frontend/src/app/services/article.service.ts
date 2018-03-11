import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService {

  constructor(
    private http: Http,
  ) { }

  getArticles(){
    return this.http.get('/articles').map(response=>response.json())
  
    } 
  article(articleId){
    return this.http.get(`/journal/${articleId}`).map(res=>res.json());
  }

}
