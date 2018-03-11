import { url } from './url';
import { draftArticles } from './../components/models/draftArticles';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GenjouristService {

  constructor(
    private http:Http,
  ) { }

  genjouristProfile(genjouristId){
    return this.http.get(url.genjouristProfile+genjouristId).map(res=>res.json());
  }

  articles(genjouristId){
      return this.http.get(url.articles+genjouristId).map(response=>response.json());
  }

  quotation(genjouristId){
      return this.http.get(url.quotation+genjouristId).map(response=>response.json());
  }


  getSupportingList(userId){
    return this.http.get(url.getSupportingList+userId).map(res=>res.json());
  }

  getSupportersList(userId){
    return this.http.get(url.getSupportersList+userId).map(res=>res.json());
  }

  getDraftArticles(articleId){
    return this.http.get(url.getDraftArticles+articleId).map(res=>res.json());
  }

  getDraftQuotation(quotationId){
    return this.http.get(url.getDraftQuotation+quotationId).map(res=>res.json());
  }

  deleteArticle(articleId){
    return this.http.delete(url.deleteArticle+articleId).map(res=>res.json());
  }

  draftArticles(articleId,article){
    return this.http.put(url.draftArticles+articleId,article).map(res=>res.json());
  }

  updateArticle(articleId,article){
    return this.http.put(url.updateArticle+articleId,article).map(res=>res.json());
  }

  recommendedUser(userId){
    return this.http.get(url.recommendedUser+userId).map(res=>res.json());
  }

  changeProfileImage(genjouristId,imgAddress){
    return this.http.put(url.changeProfileImage+genjouristId,imgAddress).map(res=>res.json());
  }

}
