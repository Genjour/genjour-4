import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { EndPoint } from '../../shared/global';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SupportJournalService {

  constructor(
    private http:Http, 
  ) { }

  SupportEmit(id:any,socket:any){
    socket.emit('supportJournal', id);
  }

  getSupportersCount(journalId){
    //console.log(journalId)
    return this.http.get(EndPoint.getSupportersCount+journalId).map(res=>res.json());
  }
  
  checkJournalSupportstatus(flag){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(EndPoint.checkJournalSupportstatus,flag,{headers: headers}).map(res=>res.json());
  }

}
