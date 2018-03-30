import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { url } from './url';


@Injectable()
export class SupportService {
Url:url;
  constructor(
    private http:Http,
  ) { }

 
    supportJournal(journalId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      return this.http.post(url.supportJournal+journalId+'/'+genjouristId,{headers:headers}).map(res=>res.json());

    }

    journalSupporters(journalId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      return this.http.get(url.journalSupporters+journalId,{headers:headers}).map(res=>res.json());
    }

    supportGenjourist(userId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      return this.http.post(url.supportGenjourist+userId+'/'+genjouristId,{headers:headers}).map(res=>res.json());

    }


    getJournalSupportersCount(journalId){
      return this.http.get(url.getJournalSupportersCount+journalId).map(res=>res.json());
    }



  }
