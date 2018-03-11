import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JournalsService {

  constructor(
    private http: Http,
  ) { }

  getJournal(){
    return this.http.get(`/journal`).map(res=>res.json());
  }

  getJournalById(journalId){
    return this.http.get(`/journal/${journalId}`).map(res=>res.json());
  }

}

