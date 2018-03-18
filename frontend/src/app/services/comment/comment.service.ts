import { url } from './../url';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService {

  constructor(
    private http:Http
  ) { }

addComment(commentData){
  return this.http.post(url.addComment,commentData).map(res=>res.json());
}

getComments(journalId){
  return this.http.get(url.getComments+journalId).map(res=>res.json());
}

}
