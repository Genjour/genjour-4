import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { url } from './url';


@Injectable()
export class ArticleService {
Url:url;
  constructor(
    private http: Http,
  ) { }

  getArticles(){
    return this.http.get(url.getArticles).map(response=>response.json())
  
    } 
  article(articleId){
    return this.http.get(url.article+articleId).map(res=>res.json());
  }

}
