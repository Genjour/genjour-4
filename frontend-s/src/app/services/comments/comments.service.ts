import { Http, Headers } from '@angular/http';
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

  getCommentsCount(journalId){
    //socket.on('commentCount',journalId)
    return this.http.get(EndPoint.getCommentsCount+journalId).map(res=>res.json());
  }

  commentAddEmit(flag:any,socket:any){
    socket.emit('commentAdded', flag);
    console.log(flag)
  }



}
