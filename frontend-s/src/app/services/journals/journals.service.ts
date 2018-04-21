import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { EndPoint } from '../../shared/global';

@Injectable()
export class JournalsService {
Endpoint: EndPoint;
  constructor(
    private http: Http,
  ) { }

  getJournal() {
    return this.http.get(EndPoint.getJournal).map(res => res.json());
  }

  getJournalById(journalId) {
    return this.http.get(EndPoint.getJournalById + journalId).map(res => res.json());
  }

  getBookmarkCount(journalId) {
    return this.http.get(EndPoint.getBookmarkCount + journalId).map(res => res.json());
  }

  getJournalsByCategory(category){
    return this.http.get(EndPoint.getJournalsByCategory+category).map(res => res.json());
  }

}