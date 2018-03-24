import { url } from './url';
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

  getGenjouristJournals(genjouristId){
    return this.http.get(url.getGenjouristJournals+genjouristId).map(response=>response.json());
  }


  getSupportingList(userId){
    return this.http.get(url.getSupportingList+userId).map(res=>res.json());
  }

  getSupportersList(userId){
    return this.http.get(url.getSupportersList+userId).map(res=>res.json());
  }

  getDraftJournal(journalId){
    return this.http.get(url.getDraftJournal+journalId).map(res=>res.json());
  }

  getDraftQuotation(quotationId){
    return this.http.get(url.getDraftQuotation+quotationId).map(res=>res.json());
  }

  deleteJournal(articleId){
    return this.http.delete(url.deleteJournal+articleId).map(res=>res.json());
  }


  updateJournal(journalId,data){
    return this.http.put(url.updateJournal+journalId,data).map(res=>res.json());
  }

  recommendedUser(userId){
    return this.http.get(url.recommendedUser+userId).map(res=>res.json());
  }



  checkSupportStatus(userId,genjouristId){
    return this.http.get(url.checkSupportStatus+userId+'/'+genjouristId).map(res=>res.json());
  }


}
