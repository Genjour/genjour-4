import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { EndPoint } from '../../shared/global';

@Injectable()
export class CommentsService {

  constructor(
    private http:Http
  ) { }

  getCommentsByJournalId(journalId){
    return this.http.get(EndPoint.getCommentByJournalId+journalId).map(res=>res.json())
  }

}
