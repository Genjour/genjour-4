import { url } from './url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JournalsService {
Url:url;
  constructor(
    private http: Http,
  ) { }

  getJournal(){
    return this.http.get(url.getJournal).map(res=>res.json());
  }

  getJournalById(journalId){
    return this.http.get(url.getJournalById+journalId).map(res=>res.json());
  }

}

