import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { EndPoint } from '../../shared/global';

@Injectable()
export class BookmarkService {

  constructor(
    private http:Http
  ) { }

  checkBookmark(journalId,currentId){
    return this.http.get(EndPoint.checkBookmark+journalId+'/'+currentId).map(res=>res.json());
  }

  bookmark(flag){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(EndPoint.bookmark,flag,{headers:headers}).map(res=>res.json());
  }

  getBookmarkByGenjouristId(genjouristId){
    return this.http.get(EndPoint.getBookmarkByGenjouristId+genjouristId).map(res=>res.json());
  }

}
